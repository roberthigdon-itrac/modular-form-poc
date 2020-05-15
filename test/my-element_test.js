import {ModularFormPoc} from '../modular-form-poc.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('modular-form-poc', () => {
  test('is defined', () => {
    const el = document.createElement('modular-form-poc');
    assert.instanceOf(el, ModularFormPoc);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<modular-form-poc></modular-form-poc>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<modular-form-poc name="Test"></modular-form-poc>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = await fixture(html`<modular-form-poc></modular-form-poc>`);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
