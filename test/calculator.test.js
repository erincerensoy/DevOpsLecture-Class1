const { describe } = require('mocha');
const assert = require('assert');
const { add, substract, multiply, divide } = require('../src/calculator');

describe("calculator", () => {
    describe("adding 2 and 3", () => {
        it("should return 5", () => {
            assert.equal(add(2, 3), 5);
        })
    });
})
