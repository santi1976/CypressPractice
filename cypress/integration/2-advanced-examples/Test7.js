/// <reference types="Cypress" />
import 'cypress-iframe'


describe('My Seventh Test Suite', function(){
 
   it('Frame Test', () => {
       cy.visit(Cypress.env('url2'))   

       //dealing with iframes
       cy.frameLoaded('#courses-iframe')

       cy.iframe().find("a[href*='mentorship']").eq(0).click()

       cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2)
   });

})
  