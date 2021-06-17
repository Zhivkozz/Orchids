"use strict";

const actions = require("../helperFiles/actions.js");

let productManipulation = function () {
  this.createNew = function (productData) {
    let elCreateProductBTN = "button.btn.button-embodee.ng-scope";
    let actions = require("../helperFiles/actions.js");
    let elProductNameField = 'input[data-ng-model="modalProduct.name.value"]';
    let elProductCodeField = 'input[data-ng-model="modalProduct.code.value"]';
    let elProductDescription =
      'textarea[data-ng-model="modalProduct.description.value"]';
    let elAddBTN = "div.col-6 button"; 
    let elLogo = "div.left-menu.ng-scope img"

    actions.clickButton(elCreateProductBTN);
    cy.wait(500);
    actions.inputText(elProductNameField, productData.prName);
    cy.wait(500);
    actions.inputText(elProductCodeField, productData.prCode);
    cy.wait(500);
    actions.inputText(elProductDescription, productData.prDescription);
    cy.wait(500);
   

    actions.clickButton(elAddBTN);
    cy.wait(2500);
    actions.clickButton(elLogo) // to exit from the created product

  };
  this.productSearch = function(searchParam){
   let  elSearchField = 'input[data-ng-model="searchObject.value"]'; 
   let elResultToShow = 'div.' +searchParam + '-holder div'
   actions.inputText(elSearchField ,searchParam)
    cy.wait(500);
   actions.clickButton(elResultToShow)

  } 

this.deleteSelectedProduct = function(){
  let elDots = 'div.dropdown.context-menu.float-right.dropleft'
  let elConfirmDeleteBTN = "button.btn.btn-red.status-confirm"
  actions.clickButtonNoF(elDots)
  cy.wait(1000)
  cy.get ('a.dropdown-item').contains('Delete').click();
  actions.clickButton(elConfirmDeleteBTN)

}

};
module.exports = new productManipulation();
