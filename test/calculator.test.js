const { describe } = require('mocha');
const assert = require('assert');
const { add, substract, multiply, divide } = require('../src/calculator');

describe("calculator", () => {
    describe("substract", () => {
        describe("substracting 5 from 15", () => {
            it("should return 10", () => {
                assert.equal(substract(15, 5), 10);
            })
        })
    })
    describe("divide", () => {
        describe("dividing 50 to 10", () => {
            it("should return 5", () => {
                assert.equal(divide(50, 10), 5);
            })
        })
    })
})
