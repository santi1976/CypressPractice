

beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data = data // copies the global variable to a local 
    }) 
})