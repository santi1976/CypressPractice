class CheckOut{

    checkTermsConditions(){
        cy.get('.checkbox').click()
    }

    inputCountry(){
        cy.get('#country').type('Indi')
    }

    purchaseButton(){
        cy.get("input[type='submit']").click()
    }

    showSuggestionChooseCountry(){
        cy.get('.suggestions > ul > li > a').should('have.text', 'India').click()
    }

    showAlertSuccess(){
        cy.get('.alert').contains('Success! Thank you! Your order will be delivered in next few weeks :-).')
    }


}

export default CheckOut

