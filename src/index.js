/*jshint node:true */

'use strict';

module.exports = function factory(Decimal) {
  return function toDecimal(n) {
    return new Decimal(n.toString());
  };
};
