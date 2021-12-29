/// <reference types="Cypress" />

describe('Visit webpage', function(){
    it('check url', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    })

    it('search bar and find product', function(){
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        //parent child
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        console.log('sf')
        //iterate over an array
        cy.get('.products').find('.product').each(($element, index, $list) => {

            const textVeg = $element.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                $element.find('button').click()
            }

         })
         //assert if logo text is correctly displayed

         cy.get('.brand').should('have.text', 'GREENKART')
     
         //to print logs
        cy.get('.brand').then(function(logoEl){
            cy.log(logoEl.text())

        })
        


    })
})



