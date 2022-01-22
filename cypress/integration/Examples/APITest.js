

describe('My First Api Test Suite', function() {
    it('API POST',function() {
    
        cy.request('POST', 'https://216.10.245.166/Library/Addbook.php', 
        
        {
            "name":"Aprendiendo Jazz con Santiso", 
            "isbn":"bcdsss", 
            "aisle": "22s7",
            "author":"Santiso Riviera" 
        }).then(function(response){

             const resBody = response.body
             expect(resBody).to.have.property("Msg", "successfully added")
             expect(response.status).to.eq(200)
           
        })

    })
        
                        

})


