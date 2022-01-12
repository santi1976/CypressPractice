/// <reference types="Cypress" />



describe('My sixth test suite', function(){

    it('My First Test Case', () => {
        cy.visit(Cypress.env('url2'))
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include', 'top')




      })

      it('My second Test Case', function(){
      /* 
      cy.get('#opentab').should('have.attr', 'href').and('include', 'rahulshettyacademy')
        .then(href =>{
          
         cy.visit(href)

        })*/
        //or
         cy.get('#opentab').then(function(element){
          const url = element.prop('href')
         
          cy.visit(url) 
        })

      
    
  });
    

})

