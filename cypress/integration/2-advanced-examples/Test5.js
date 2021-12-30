/// <reference types="Cypress" />



describe('My fifth test suite', function(){

    it('My First Test Case', () => {
        
        cy.visit(Cypress.env('url2'))

             cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
            const text = $el.text();
            if(text.includes('Python')){
                const sibling = $el.next().text();
                expect(sibling).to.be.equal('25')
            } 
        }) 

  });
    

})

