const { describe } = require('mocha');
const assert = require('assert');
const { add, substract, multiply, divide } = require('../src/calculator');

describe("calculator", () => {
    describe("add", () => {
        describe("add 4 to 20", () => {
            it("should return 24", () => {
                assert.equal(add(4, 20), 23);
            })
        })
    })
    describe("substract", () => {
        describe("substracting 5 from 15", () => {
            it("should return 10", () => {
                let a = substract(15, 5);
                assert.equal(a, 10);
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
    describe("multiply", () => {
        describe("multiplying 5 to 8", () => {
            it("should return 40", () => {
                assert.equal(multiply(5, 8), 40);
            })
        })
    })
})
