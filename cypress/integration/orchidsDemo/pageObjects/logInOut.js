"use strict";
let logInOut = function () {
    let actions = require("../helperFiles/actions.js");
  this.positiveLogin = function (loginData) {
    let elUsernameField = 'input[id="email"]';
    let elPasswordField = 'input[id="password"]';
    let elLoginBTN =
      "button.btn.btn-success.button-embodee.button-full-width.ng-binding";
    actions.inputText(elUsernameField, loginData.username);
    actions.inputText(elPasswordField, loginData.password);
    actions.clickButton(elLoginBTN);
  };


this.logOut = function(){
  let elProfileIcon = "div.profile-image-wrap"
  let elLogOutBtn = "Logout"
  actions.clickButton (elProfileIcon);
  cy.get('div').contains('Logout').click()
}




};
module.exports = new logInOut();
