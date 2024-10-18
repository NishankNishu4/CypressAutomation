//First Cypress Javascript coding
/// <reference types="cypress" />
describe('My Second Cyprees test suite for locators',function(){

    it('My Second Cyprees test suite for locators',function(){
     //CTR
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Check box code
        cy.get('#checkBoxOption1').check().should('be.checked').
        and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option2','option3'])

        // Drop down with select using value=option2
        cy.get('select').select('option2')

       
        //Autosearch dropdown
        cy.get('#autocomplete').type('ind')
 
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
         
            if($e1.text()==="India")
            {
                cy.wrap($e1).click()
            }
         
         
        })
        
        cy.get('#autocomplete').should('have.value','India')

        //Exercise to check if elemnt is visible or not
        cy.get('#displayed-text').should('be.visible');

        cy.get('#hide-textbox').click()

        cy.get('#displayed-text').should('not.be.visible');

        //Radio button
        cy.get('input[value="radio3"]').click().should('be.checked');

        //Alerts and print text
        cy.get("#alertbtn").click();
        cy.on('window:alert', (text) => {
            console.log('Alert text:', text);
          });
        cy.get("#confirmbtn").click();
        cy.on("window:confirm", () => false); // Return false to simulate pressing "Cancel"
    

        //Code to handle mouseaction hover
        cy.get('.mouse-hover-content').invoke('show');
       cy.contains('Reload').click();
       cy.url().should('include','AutomationPractice');


       //Fetch price value from table
       cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
        const text=$e1.text()
        if(text.includes("Python"))
        {
     
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
            {
             const priceText=   price.text()
             expect(priceText).to.equal('26')
            })
        }
    })
        
    })
    
    })