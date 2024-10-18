
import { Given,When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

When('user starts using cypress intercept functionality',  () => {
   cy.intercept()
  });