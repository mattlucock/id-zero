# id-zero

[![npm version](https://img.shields.io/npm/v/id-zero?style=flat-square)](https://npm.im/id-zero)
[![License](https://img.shields.io/github/license/mattlucock/id-zero?style=flat-square)](https://github.com/mattlucock/id-zero/blob/main/LICENSE.md)
[![Build status](https://img.shields.io/github/actions/workflow/status/mattlucock/id-zero/test.yaml?style=flat-square)](https://github.com/mattlucock/id-zero/actions/workflows/test.yaml)

Basically the simplest, tiniest ID generator imaginable. It produces pseudorandom lowercase alphanumeric strings of any length in just ~75 bytes of code (minified and Brotli compressed).

```js
export default (length) => {
  let id = ''

  while (id.length < length) {
    id += Math.random().toString(36).slice(2)
  }

  return id.slice(0, length)
}
```

If you need IDs that are guaranteeably unique or secure, this obviously isn't what you need. I recommend [nanoid](https://npm.im/nanoid).

## Example usage

```js
import idZero from 'id-zero'

idZero(6) // 'x37m3q'
idZero(12) // '0hw4tpx7i2qj'
idZero(24) // 'j1x927x4b5792h5paov6otfi'
```
