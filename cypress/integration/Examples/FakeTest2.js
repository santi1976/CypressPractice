describe('My First Test Suite', function() {
        it('Forbidden status 403',function() {
        
                cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
            
                cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>{//Intercepts the reqs

                            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"//we pass another value in AuthorName
                    
                            req.continue((res)=>{//continue permits the req goes to the server and collects the res in res
                              //expect(res.statusCode).to.equal(403)
                            })

                    }).as("dummyUrl")
                    
            cy.get("button[class='btn btn-primary']").click()

            cy.wait('@dummyUrl')
        
        })
 
})
 