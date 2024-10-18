/// <reference types="cypress" />

describe('Cypress code to fill form', function () {
    it('Code to fill form', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');

    
        cy.loadFixture('FormOne.json').then((data) => {
            cy.fillForm(data);
        });

        cy.loadFixture('FormOne.json').then(function(data){
            cy.fillForm(data);
        });
        
        
    });
});
