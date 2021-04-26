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
    describe('divide 5 / 2', () => {
        it('should return 2', () => {
            assert.equal(divide(5, 2), 2.5);
        })
    })
    describe('square of 2', () => {
        it('should return 4', () => {
            assert.equal(square(2), 4);
        })
    })
})
