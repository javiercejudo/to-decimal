# to-decimal

[![Build Status](https://travis-ci.org/javiercejudo/to-decimal.svg)](https://travis-ci.org/javiercejudo/to-decimal)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/to-decimal/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/to-decimal?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/to-decimal/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/to-decimal)

Ensures a number is represented as a decimal

## Install

    npm i to-decimal-arbitrary-precision

## Usage

```js
var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var toDecimal = require('to-decimal-arbitrary-precision')(Decimal);

toDecimal(32); // => new Decimal('32')
```

## Related projects

- [linear-presets](https://github.com/javiercejudo/linear-presets): linear presets for common units.
- [linear-converter](https://github.com/javiercejudo/linear-converter): flexible linear converter.
