/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var Decimal = require('linear-arbitrary-precision')(adapter);
var toDecimal = require('../src/')(Decimal);

describe('scale to decimal', function() {
  it('should return a scale with decimals', function() {
    toDecimal(32).equals(new Decimal('32')).should.be.exactly(true);
  });
});
