//const assert = require('assert');

const { describe } = require('mocha');
const { add, substract, multiply, divide, square } = require('../src/calculator');
var chai = require('chai')
, assert = chai.assert
, expect = chai.expect
, should = chai.should();

describe("calculator", () => {
  describe("testing add function", () => {
    describe("when adding 2 to 5", () => {
        it("should return 7", () => {
            add(2,5).should.equal(7);
        });
    })
  });
  describe("testing square function", () => {
      describe("when getting square of 5", () => {
          it("should return 25", () =>{
            square(5).should.equal(25);
          });
      })
  })
});
