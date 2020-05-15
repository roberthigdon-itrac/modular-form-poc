import { LitElement, html, css } from 'lit-element';
import Analytics from 'analytics';
import googleTagManager from '@analytics/google-tag-manager';
import { axios } from '@bundled-es-modules/axios';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ModularFormPoc extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      * {
        box-sizing: border-box;
      }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
      }
      form > div {
        position: relative;
        margin-bottom: 10px;
      }
      label {
        cursor: text;
        display: inline-block;
        font-size: 10px;
        left: 10px;
        margin-bottom: 5px;
        max-width: 100%;
        position: absolute;
        text-transform: uppercase;
        top: 6px;
        transition: all .25s ease;
      }
      .form-control {
        background-color: #fff;
        background-image: none;
        border-radius: 5px;
        border: 1px solid #555;
        color: #555;
        font-size: 14px;
        line-height: 1.42857143;
        padding: 26px 16px 6px;
        width: 100%;
      }
      button {
        border-radius: 5px;
        border: solid 1px #555;
        font-size: 13px;
        font-weight: 700;
        line-height: 1.6;
        padding: 10px 20px;
      }
      .errorMessage {
        background-color: rgba(0, 0, 0, .075);
        border-bottom: 1px solid #f04c4c;
        border-top: 1px solid #f04c4c;
        height: 0;
        opacity: 0;
        padding: 10px;
        transition: all 300ms ease-in-out;
      }
      .errorMessage.visible {
        height: auto;
        opacity: 1;
      }
      .error {
        color: #f04c4c
      }
      .error input {
        border-color: #f04c4c;
      }
    `;
  }

  static get properties() {
    return {
      apikey: { type: String },
      gtm: { type: String },
      errorMessage: { type: String },
      site: { type: String },
      submitted: { type: Boolean },
      submitting: { type: Boolean },
    };
  }

  constructor() {
    super();
    // Test Web API Key
    this.apikey = '7fb35345-752d-4792-9480-cd3db6674a62';
    this.gtm = '';
    this.site = '';
    this.submitted = false;
    this.submitting = false;
    this.formData = {
      name: '',
      email: '',
      confirmed_email: '',
      phone: '',
    };
    this.analytics = Analytics({
      app: this.site,
      plugins: [
        googleTagManager({
          containerId: this.gtm
        })
      ]
    })
  }

  render() {
    const renderMessage = typeof this.errorMessage  === 'object'
      ? html`
        <ul>
          ${Object.values(this.errorMessage).map(msg => html`<li>${msg}</li>`)}
        </ul>
      `
      : this.errorMessage;

    const requestForm = html`
      <form
        id="mail-form"
        action="https://web-api.tysonsteele.com/v1/webprops/${this.apikey}/schedule"
        method="POST"
        name="mail-form"
      >
        <div class="${this.errorMessage && this.errorMessage['name'] && 'error'}">
          <label for="name">Name:</label>
          <input
            class="form-control appointment_form"
            id="name"
            name="name"
            type="text"
            @change=${this._updateValue}
          >
        </div>
        <div class="sr-only">
          <label for="email" tabindex="-1">Email:</label>
          <input
            class="form-control"
            id="email"
            name="email"
            type="text"
            tabindex="-1"
          >
        </div>
        <div class="${this.errorMessage && this.errorMessage['confirmed_email'] && 'error'}">
          <label for="confirmed_email">Email:</label>
          <input
            class="form-control"
            id="confirmed_email"
            name="confirmed_email"
            type="text"
            @change=${this._updateValue}
          >
        </div>
        <div class="${this.errorMessage && this.errorMessage['phone'] && 'error'}">
          <label for="phone">Phone:</label>
          <input
            class="form-control"
            id="phone"
            name="phone"
            type="text"
            @change=${this._updateValue}
          >
        </div>
        <button
          part="button"
          type="submit"
          class="btn btn-block mt-3"
          ?disabled=${this.submitting}
          @click=${this._submit}
        >
          Request an Appointment
        </button>
        <p class="errorMessage ${this.errorMessage && 'visible'}">
          ${renderMessage}
        </p>
      </form>
    `;

    const successMessage = html`
      <p>Congratulations! Dentistry is a big part of a healthy life, and we're excited to be a part of yours. We will contact you in the next 2 business days to schedule your appointment. Thank&nbsp;you!</p>
    `;
    return this.submitted ? successMessage : requestForm;
  }

  _updateValue(e) {
    this.formData[e.target.name] = e.target.value;
  }

  _submit(e) {
    e.preventDefault();

    this.submitting = true;

    const data = Object.keys(this.formData).reduce((accData, key) => {
      return accData += `${key}=${encodeURIComponent(this.formData[key])}&`;
    }, '')

    axios.post(`https://web-api.tysonsteele.com/v1/webprops/${this.apikey}/schedule`, data)
      .then(() => {
        this.submitted = true;
        this.analytics.track('Request Appointment Submit Success');
      })
      .catch(error => {
        console.log(error.response)
        if (!error.response || !error.response.data) {
          this.errorMessage = 'There was a problem with your submission. Please ensure all fields are correctly entered.';
        } else {
          this.errorMessage = error.response.data;
        }
        this.analytics.track('Request Appointment Submit Failure');
      })
      .then(() => {
        this.submitting = false;
      }); 
  }
}

window.customElements.define('modular-form-poc', ModularFormPoc);
