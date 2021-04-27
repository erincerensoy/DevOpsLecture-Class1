const { describe } = require('mocha');
const assert = require('assert');
const { add, substract, multiply, divide } = require('../src/calculator');

describe("calculator", () => {
    describe("substraction", () => {
        describe("substracting 5 from 40", () => {
            it("should return 35", () => {
                assert.equal(substract(40, 5), 35);
            })
        })
    })
    describe("division", () => {
        describe("dividing 100 to 20", () => {
            it("should return 5", () => {
                assert.equal(divide(100, 20), 5);
            })
        })
    })
})
