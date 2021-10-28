/// <reference types="Cypress" />
 
describe('My Third Test Suite', function(){
 
    it('My First Test case',function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').first().check().should('be.checked').and('have.value', 'option1')

 
    })

})