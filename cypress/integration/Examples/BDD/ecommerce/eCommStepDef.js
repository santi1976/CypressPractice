import CheckOut from "../../../../support/pageObjects/CheckOut";
import HomePage from "../../../../support/pageObjects/HomePage";
import Products from "../../../../support/pageObjects/Products";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


const homePage = new HomePage()
const products = new Products()
const checkOut = new CheckOut()    
let name 

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




    // When I fill the form details

    When('I fill the form details', function(dataTable){
        name = dataTable.rawTable[1][0]
        homePage.getEditBox().type(dataTable.rawTable[1][0])// we type that selector with 'input name' since in Angular classes tend to be dynamic and changes constantly
        homePage.getGender().select(dataTable.rawTable[1][1])
      

    })
    //Then Validate the form behaviour
    Then('Validate the form behaviour', function(){
        homePage.getEditBox().should('have.value', name)
        homePage.getEditBox().should('have.attr', 'minlength', '2') // *
        homePage.getOptionDisabled().should('be.disabled')
        Cypress.config('defaultCommandTimeout', 10000);

    })

    //And Select the Shop Page
    And('Select the Shop Page', function(){
        homePage.getShopTab().click()
    })

