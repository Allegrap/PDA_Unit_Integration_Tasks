var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('can add starting from number below zero', function(){
      calculator.previousTotal = -11
      calculator.add(20)
      assert.equal(9, calculator.runningTotal)
    });

  it('can add starting from number above zero', function(){
      calculator.previousTotal = 11
      calculator.add(20)
      assert.equal(31, calculator.runningTotal)
    });

  it('can subtract starting from number below zero', function(){
      calculator.previousTotal = -11
      calculator.subtract(10)
      assert.equal(-21, calculator.runningTotal)
    });

  it('can subtract starting from number above zero', function(){
      calculator.previousTotal = 11
      calculator.subtract(3)
      assert.equal(8, calculator.runningTotal)
    });

  it('can multiply starting from number below zero', function(){
      calculator.previousTotal = -11
      calculator.multiply(2)
      assert.equal(-22, calculator.runningTotal)
    });

  it('can multiply starting from number above zero', function(){
      calculator.previousTotal = 23
      calculator.multiply(4)
      assert.equal(92, calculator.runningTotal)
    });

  it('can divide starting from number below zero', function(){
      calculator.previousTotal = -10
      calculator.divide(2)
      assert.equal(-5, calculator.runningTotal)
    });

  it('can divide starting from number above zero', function(){
      calculator.previousTotal = 20
      calculator.divide(5)
      assert.equal(4, calculator.runningTotal)
    });

  it('can divide whole number to float', function(){
      calculator.previousTotal = 7
      calculator.divide(2)
      assert.equal(3.5, calculator.runningTotal)
    });

  it('can use operatorClick to add two numbers', function(){
      calculator.numberClick(7)
      calculator.operatorClick('+')
      calculator.numberClick(3)
      calculator.operatorClick('=')
      assert.equal(calculator.runningTotal, 10)
    })

  it('can use operatorClick and numberClick to add several numbers', function(){
      calculator.numberClick(11)
      calculator.operatorClick('+')
      calculator.numberClick(3)
      calculator.operatorClick('+')
      calculator.numberClick(7)
      calculator.operatorClick('=')
      assert.equal(calculator.runningTotal, 21)
    })

  it('it can use operatorClick and numberClick to subtract two numbers', function(){
      calculator.numberClick(13)
      calculator.operatorClick('-')
      calculator.numberClick(6)
      calculator.operatorClick('=')
      assert.equal(7, calculator.runningTotal)
    });

  it('it can use operatorClick and numberClick to subtract more than two numbers', function(){
      calculator.numberClick(30)
      calculator.operatorClick('-')
      calculator.numberClick(10)
      calculator.operatorClick('-')
      calculator.numberClick(7)
      calculator.operatorClick('=')
      assert.equal(13, calculator.runningTotal)
    });

  it('can concatenate multiple number button clicks', function(){
      calculator.numberClick(5);
      calculator.numberClick(7);
      calculator.numberClick(8);
      calculator.numberClick(9);
      calculator.operatorClick('*');
      calculator.numberClick(2);
      calculator.operatorClick('=');
      assert.equal(11578, calculator.runningTotal);
    });

  it('can chain different operations together', function(){
      calculator.numberClick(3);
      calculator.numberClick(1);
      calculator.operatorClick('-');
      calculator.numberClick(10);
      calculator.operatorClick('*');
      calculator.numberClick(3);
      calculator.operatorClick('=');
      assert.equal(63, calculator.runningTotal);
    });

  it('can clear the running total', function(){
      calculator.numberClick(7);
      calculator.numberClick(1);
      calculator.operatorClick('+');
      calculator.numberClick(3);
      calculator.clearClick();
      assert.equal(0, calculator.runningTotal);
    })


});


















