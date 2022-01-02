class Products{

    getProducts(){
        cy.selectProduct()
    }

    getCheckOut(){
        cy.contains("Checkout").click()
        //cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
    }

    getCheckOutLast(){
        cy.get(':nth-child(5) > :nth-child(5) > .btn').click()
    }

    getProductPrices(){
        cy.get('tr td:nth-child(4) strong')
    }


} 

export default Products