const { describe } = require('mocha');
const assert = require('assert');
const { add, substract, multiply, divide } = require('../calculator');

describe('adding functionality:', function () {
    it('should return 5', function () {
        assert.equal(add(2, 3), 5);
    });
});