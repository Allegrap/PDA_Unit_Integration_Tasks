var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should update display for multiple number buttons clicked', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number2')).click();
      element(by.css('#number9')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('29')
    });

  it('should update display when subtracted', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number6')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number3')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('3')
    });

  it('should update display when added', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number4')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number6')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('10')
    });

  it('should update display when multiplied', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number2')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number8')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('16')
    });

  it('should update display when divided', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number6')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('3')
    });

  it('should be able to chain operations', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number7')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number3')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number5')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number1')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('6')
    });

  it('should handle big numbers', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number7')).click();
      element(by.css('#number3')).click();
      element(by.css('#number2')).click();
      element(by.css('#number9')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number9')).click();
      element(by.css('#number1')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('666939')
    });

  it('should divide into a float', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number9')).click();
     element(by.css('#operator_divide')).click();
     element(by.css('#number2')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('4.5')
   });

  it('should subtract below zero', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number7')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number9')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('-2')
    });

  it('should handle dividing by zero', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  })

});









