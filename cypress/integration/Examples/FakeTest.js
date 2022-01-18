/// <reference types="Cypress" />



describe('My First Test Suite -', function(){
    it('Shows only one result', function(){
        
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')


        cy.intercept({
            
            method: 'GET', 
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'},
        
        {
            statusCode: 200,
            body: [{
                book_name: "Los Hermanos Mancuso",
                isbn: "RSU",
                aisle: "2301"
            }]
        
        }).as('bookretrievals')

        cy.get("button[class='btn btn-primary']").click()

        cy.wait('@bookretrievals') //waits for promise 'bookretrievals

        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})