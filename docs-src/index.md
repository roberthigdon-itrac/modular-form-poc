---
layout: page.11ty.cjs
title: <modular-form-poc> ⌲ Home
---

# &lt;modular-form-poc>

`<modular-form-poc>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<modular-form-poc>` is just an HTML element. You can it anywhere you can use HTML!

```html
<modular-form-poc></modular-form-poc>
```

  </div>
  <div>

<modular-form-poc></modular-form-poc>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<modular-form-poc>` can be configured with attributed in plain HTML.

```html
<modular-form-poc name="HTML"></modular-form-poc>
```

  </div>
  <div>

<modular-form-poc name="HTML"></modular-form-poc>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<modular-form-poc>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;modular-form-poc&gt;</h2>
  <modular-form-poc .name=${name}></modular-form-poc>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;modular-form-poc&gt;</h2>
<modular-form-poc name="lit-html"></modular-form-poc>

  </div>
</section>
