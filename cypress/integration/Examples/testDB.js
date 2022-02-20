
 context('Window', function(){


    it('check table Copas', function(){

        cy.sqlServer('select * from dbo.Copas').then(function(result){
            cy.log(result[1][3])
        })
         
        
        
    })


})