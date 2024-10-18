/// <reference types="cypress" />

describe('Cypress code to Shop mobile on cart', function () {
    it('Code to fill form', function () {
        //cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
        
        cy.visit(  Cypress.env( 'urlNew'  ) );
        //Code to click mobile add cart button
        cy.loadFixture('FormTwo.json').then((data) => {
            data.product.forEach((product) => {
                cy.clickProductButton(product);
            });
        });
        cy.get('[id*="navbarResponsive"] a').click(); //Lof

//Code to perform Value check
const finalValue = 100; // Replace with your expected value
cy.compareCheckoutValue(finalValue);

//Code to perform final purchase and assert 

cy.contains('Checkout').click();

//Code to validate values are same on addition
// var sum=0;
// cy.get('tr td:nth-child(4)').find('strong').each(($e1,index,$list)=>{
//     var veg=$e1.text().split(" ")
//     cy.log(veg[1]);
//      sum = sum + parseInt(veg[1],10);
// })

// cy.get('tr h3 strong').then(function(element){
// var finalValue = element.text().split(" ")[1];
// expect(parseInt(finalValue,10)).equal(sum);
// })

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

});
