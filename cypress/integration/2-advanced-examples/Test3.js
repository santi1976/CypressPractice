/// <reference types="Cypress" />
 
describe('My Third Test Suite', function(){
 
    it('My First Test case',function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').first().check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

    
    //Static Dropdown
    cy.get('select').select('option2').should('have.value', 'option2')
    //Dynamic Dropdown
    cy.get('#autocomplete').type('Arg')
    cy.get('.ui-menu-item div' ).each(($element, index, $list) => {  
            if($element.text() === 'Argentina'){
                cy.wrap($element).click()
            }
        })
    cy.get('#autocomplete').should('have.value', 'Argentina')

    //Hidden elements
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    //radio buttons
    cy.get('[value="radio2"]').check().should('be.checked')



    
    })

})
  