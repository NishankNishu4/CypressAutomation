//First Cypress Javascript coding
/// <reference types="cypress" />
describe('My First Cyprees test suite',function(){

it('My first cypress test case',function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
    cy.get('.search-button').click;
    cy.wait(2000);
    //Assertions
    cy.get('.product:visible').should('have.length',4);

    //add to cart button second 
    // Find contains eq
    cy.get('.products').find('.product').eq(2)
    .contains('ADD TO CART').click() ;

 //add Cashews
     // each method
     cy.get('.products').find('.product').each(($e1,index,$list)=>{
        const veg=$e1.find('.product-name').text()
        if(veg.includes('Carrot ')){
            $e1.find('button').click;
        }

//as css selector
//Terminal Commands
//node_modules/.bin/cypress open  ?? Opens cypress website runner
// npx cypress run --spec cypress\integration\examples\ShopMobile.js  ?? code to run in headless mode
//npx cypress run --spec cypress\integration\examples\ShopMobile.js 
//--headed --browser chrome --env urlNew='https://rahulshettyacademy.com/angularpractice/shop'
//npx cypress run --record --key 719a3870-1e3c-4d7c-9abf-d522247114b5

 })

})

    


})