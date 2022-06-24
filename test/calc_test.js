// const { assert } = require("chai");
// const assert = require('assert');
// const calcs = require('../calc.js');
// const Calc = calcs.Calc;
import { assert } from "chai";
import Calc from "../calc.js";


describe('Calc', () => {
    describe('.add', () => {
      it('returns the sum of two values', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.add(1,2);
        assert.strictEqual(answer, 3);
      });
      // it('logs an error with only one input and undefined memory, returns undefined', () => {
      //   // Your test goes here
      //   let answer;
      //   try{
      //   const calc = new Calc();
      //   answer = calc.add(1);
      //   } catch(e) {console.log(`Error caught: ${e}`)}
      //   assert.ok(answer===undefined);
      // });
    });
    describe(".subtract", () => {
      it('Subtracts two number', ()=>{
        const calc = new Calc();
        const answer = calc.subtract(1,3);
        assert.strictEqual(2,answer)
      })
    })
  });