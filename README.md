# PostCSS Consistent Space [![Build Status](https://travis-ci.org/DimitrisNL/postcss-consistent-space.svg?branch=master)](https://travis-ci.org/DimitrisNL/postcss-consistent-space) ![npm](https://img.shields.io/npm/dt/postcss-consistent-space.svg)

Maintain consistent margin and padding spaces thorough your project

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/dimitrisnl/postcss-consistent-space.svg
[ci]:      https://travis-ci.org/dimitrisnl/postcss-consistent-space

```css
.foo {
  @space margin 2 3;
}
```

```css
.foo {
  margin: 16px 24px;
}
```

## Usage

No options - fallback **8 pixel** grid
```js
postcss([ require('postcss-consistent-space') ])
```

or with props
```js
postcss([ require('postcss-consistent-space') ])
    ({
        base: 4,
        unit: 'em',
    }),
```

See [PostCSS] docs for examples for your environment.
