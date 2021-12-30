/// <reference types="Cypress" />
import 'cypress-iframe'

import CheckOut from "../pageObjects/CheckOut"
import HomePage from "../pageObjects/HomePage"
import Products from "../pageObjects/Products"

describe('My 8th Test Suite', function(){
        before(function(){
            cy.fixture('example').then(function(data){
                this.data = data // copies the global variable to a local 
        }) 
    })

    it('First Test Case', function(){
    
    const homePage = new HomePage()
    const products = new Products()
    const checkOut = new CheckOut()
        cy.visit(Cypress.env('url3'))

        homePage.getEditBox().type(this.data.name) // we type that selector with 'input name' since in Angular classes tend to be dynamic and changes constantly
        homePage.getGender().select(this.data.gender)
        homePage.getEditBox().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2') // *
        homePage.getOptionDisabled().should('be.disabled')
        Cypress.config('defaultCommandTimeout', 10000);
        homePage.getShopTab().click()
        

        this.data.productName.forEach(function(element){
            
            cy.selectProduct(element)
        });  
        products.getCheckOut()
        let totalSum = 0
        cy.get("tr td:nth-child(4) strong").each(($el,index,$list) =>{
             
             const price = $el.text()
             let totalAmount = price.split(' ')
             totalAmount = totalAmount[1].trim()
             totalSum = Number(totalSum) + Number(totalAmount)
            
            
        }).then(function(){
            cy.log('El total es ' + totalSum)
        })
        let total = 0
        cy.get('h3 strong').then(function($el){
            const amount = $el.text()
            let result = amount.split(' ')
            total = result[1].trim()
            expect(Number(total)).to.equal(totalSum)

        })
        
        products.getCheckOutLast()

        checkOut.inputCountry()
        checkOut.showSuggestionChooseCountry()
        checkOut.checkTermsConditions()
        checkOut.purchaseButton() 
        checkOut.showAlertSuccess() 
        
        



    })


  })







    
