"use strict";
let actions = function () {
  this.clickButton = function (element, index) {
    if (!index) {
      index = 0;
    }
    cy.get(element).eq(index).click({ force: true });
    
  };

  this.clickButtonNoForce = function (element, index) {
    if (!index) {
      index = 0;
    }
    cy.get(element).eq(index).click();
    
  };


  this.inputText = function (element, input, index) {
    if (input === undefined) {
      return;
    }
    if (!input) {
      return;
    }
    if (!index) {
      index = 0;
    }
    
    cy.get(element).eq(index).clear();
    cy.get(element).eq(index).type(input).click();
  };
};

module.exports = new actions ();
