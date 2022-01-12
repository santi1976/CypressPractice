import CheckOut from "../../../../support/pageObjects/CheckOut";
import HomePage from "../../../../support/pageObjects/HomePage";
import Products from "../../../../support/pageObjects/Products";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


const homePage = new HomePage()
const products = new Products()
const checkOut = new CheckOut()    

    Given('I open ecommerce page', () =>{

        cy.visit(Cypress.env('url3'))

    })

    //When I add items to cart

    When('I add items to cart',function(){

        
        homePage.getShopTab().click()
        

        this.data.productName.forEach(function(element){
            
            cy.selectProduct(element)
        });  
        products.getCheckOut()

    })

    And('Validate Total Prices', ()=>{

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
    })

    Then('Select the country submit and verify Thank you phrase',()=>{
        products.getCheckOutLast()

        checkOut.inputCountry()
        checkOut.showSuggestionChooseCountry()
        checkOut.checkTermsConditions()
        checkOut.purchaseButton() 
        checkOut.showAlertSuccess() 
    })