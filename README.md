# Nuxt dynamic styles module

[![MIT license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/SparingSoftware/nuxt-dynamic-styles-module/blob/master/LICENSE)
[![Downloads number](https://img.shields.io/npm/dt/@sparing-software/nuxt-dynamic-styles-module.svg)](https://www.npmjs.com/package/@sparing-software/nuxt-dynamic-styles-module)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Nuxt module for on-build dynamic styles import :dizzy:

## Installation
Install package in your project 
```bash
npm i @sparing-software/nuxt-dynamic-styles-module
```

Install [`@nuxtjs/style-resources`](https://github.com/nuxt-community/style-resources-module) if you don't already have
```bash
npm i @nuxtjs/style-resources
```

## Configuration
Add module in `nuxt.config.js`
```js
modules: [
  ['@sparing-software/nuxt-dynamic-styles-module', {
    // ... options
  }]
]
```
Caveat: `@nuxtjs/nuxt-dynamic-styles-module` must be set before `@nuxtjs/style-resources` module.

## Options

| Option                 | Description     | Default |
|------------------------|-----------------|---------|
| `content`              | Content of the styles that will be imported. Could be `string` or `function`  | `''` |
| `addTo`                | Where to add styles in styleResources list. Available options: `'start'`, `'end'` | `'start'` |

## Example
```js
['@sparing-software/nuxt-dynamic-styles-module', {
  content: function () {
    return axios.get('https://example.com/current-styles').then(res => res.data)
    // '$primary-color: #bebebe; .main { background: $primary-color; }'
  },
  addTo: 'end'
}]
```

And then in code

```html
<main class="main"> <!-- background: #bebebe; -->
  ...
</main>
```

```scss
button {
  color: $primary-color; // color: #bebebe;
}
```

## Contributing
Want to help improve this plugin? Great!  
Project is open-source so fork repo and join us!

## License
MIT License © [Sparing Interactive](https://github.com/SparingSoftware)
