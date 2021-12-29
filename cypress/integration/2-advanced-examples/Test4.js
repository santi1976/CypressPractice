/// <reference types="Cypress" />

describe('My fourth test suite', function(){

    it('My First Test Case', () => {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value=Confirm]').click()
        
        //window:alert 
        cy.on('window:alert', function(str){
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', function(str){
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        // We can remove the offending attribute - target='_blank'
        // that would normally open content in a new tab.
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        // after clicking the <a> we are now navigated to the
        // new page and we can assert that the url is correct
        cy.url().should('include', 'rahulshettyacademy.com')

        cy.go('back')

        
    });

    

})


 