

import { Given,When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

Given('user navigates to Shopping website',  () => {
    cy.visit(  Cypress.env( 'urlNew'  ) );
  });

  When('add items to cart and proceed to checkout page',  function(dataTable) {
     
    //var name = dataTable.rawTable[1][1];
    cy.visit(  Cypress.env( 'urlNew'  ) );
    //Code to click mobile add cart button
    cy.loadFixture('FormTwo.json').then((data) => {
        data.product.forEach((product) => {
            cy.clickProductButton(product);
        });
    });
    cy.get('[id*="navbarResponsive"] a').click(); 


  });


  When('validate total amount value equals individual amount addition',  () => {
   //Code to perform Value check
const finalValue = 100; // Replace with your expected value
cy.compareCheckoutValue(finalValue);

//Code to perform final purchase and assert 

cy.contains('Checkout').click();
  });


  
  Then('enters country and validate success message',  () => {
    cy.get('#country').type('India');
//How to introduce waits in cypress
Cypress.config('defaultCommandTimeout',10000);

//Run this code using terminal passing website name as env variable
cy.get('.suggestions ul li a').click();
cy.get('#checkbox2').check({force: true});
cy.get('input[value="Purchase"]').click();

//Cypress assertion
//cy.get('.alert').should('include','Success! Thank you! Your order will be delivered in next few weeks');

//Cpress chai assertion

cy.get('.alert').then(function(element){
var text = element.text();
expect(text).to.include('Success! Thank you! Your order will be delivered in next few weeks');
 
})
  });



