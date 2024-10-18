import { Given,When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

//import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


Given('user visits {string} website', (url) => {
    cy.log("User navigates to "+Cypress.env(url)+" Website ")
    cy.visit(Cypress.env(url));
});

When('clicks on {string} link on Home page', (linkText) => {
    cy.contains(linkText).click();
});

When('Enters required details to Register on Parabank',  {
//Write method in command.js
//Write pages in Pages tab and import 
        
});




