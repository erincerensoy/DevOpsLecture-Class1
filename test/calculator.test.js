const { describe } = require('mocha');
const assert = require('assert');
const { add, substract, multiply, divide } = require('../src/calculator');

describe("calculator", () => {
    describe('adding 2 positive numbers', () => {
        it('should return 5', () => {
            assert.equal(add(2, 3), 5);
        });
    });
    describe('substracting 2 positive numbers', () => {
        it('should return 5', () => {
            assert.equal(substract(2, 3), -1);
        });
    });
})
