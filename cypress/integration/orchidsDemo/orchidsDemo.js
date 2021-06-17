"use strict";
let data = require("../orchidsDemo/testData/data.js");
let LogInOut = require("./pageObjects/logInOut.js");
let productManipulation = require("../orchidsDemo/pageObjects/productManipulation.js");
const logInOut = require("./pageObjects/logInOut.js");

describe("Test Orchids ", function () {
  before(() => {
    cy.visit("https://gcloud-web.embodee.com/authentication/sign-in");
  });

  afterEach(() => {
    cy.wait(3000)
  });

  after(() => {
    logInOut.logOut();
  });

  it("Shall log in Orchids site", function () {
    LogInOut.positiveLogin(data.login);
  });

  it("Shall create new products", function () {
    productManipulation.createNew(data.newProducts[0]);
  });

  it("Shall find the created products", function () {
    productManipulation.productSearch(data.newProducts[0].prCode);
  });

  it("Shall delete the created ptoduct", function () {
    productManipulation.deleteSelectedProduct();
  });

});
