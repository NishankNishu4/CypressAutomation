// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

Cypress.Commands.add('fillForm', (data) => {
    // Form Filling code begins
    cy.get('.form-group input[name="name"]').type(data.name);
    cy.get('.form-group input[name="email"]').type(data.email);
    cy.get('#exampleCheck1').check();
    cy.get('select').select(data.gender);

    // Input radiobutton value and click button
    const radioValue = data.status;
    cy.get('[class*="inline"]').each(($e1, index, $list) => {
        const veg = $e1.find('label').text();
        if (veg.includes(radioValue)) {
            $e1.find('input').trigger('click');
        }
    });

    cy.get('input[name="bday"]').type(data.dob);
    cy.get('.btn').click();

    cy.get('strong').then((pricenew) => {
        const price = pricenew.text();
        cy.log(price);
        expect(price).to.include('Success');
    });
    // Form filling code ends
});

Cypress.Commands.add('loadFixture', (fileName) => {
     cy.fixture(fileName).then((data) => {
        return data;
    });
});

Cypress.Commands.add('clickProductButton', (productName) => {
    cy.get('app-card').each(($e1, index, $list) => {
        const veg = $e1.find('h4 a').text();
        if (veg.includes(productName)) {
            $e1.find('button').click();
        }
    });
});

Cypress.Commands.add('compareCheckoutValue', (finalValue) => {
    var sum = 0;
    cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) => {
      const price = $e1.text();
      var finalPrice = price.split(' ');
      sum = sum + Number(finalPrice[1]);
    }).then(() => {

      cy.log('Comparing checkout value:', sum);
      cy.get('tr td:nth-child(5) strong').then(function(element){
        finalValue=element.text().split(' ')[1];
        expect(sum).to.equal(Number(finalValue));
      })
      
    });
  });


  Cypress.Commands.add('FillAccountDetails', (data) => {
  

  });
  