describe("Opciones de click", () =>{

    it("Click normal", () =>{
        cy.visit("https://www.flybondi.com")
        cy.title().should('eq', "Home | Flybondi")

        cy.get("#origin").should("be.visible").click()
        
    })

    it("Click forzado", () =>{
        cy.get("#destination").should("be.visible").click()
        //cy.get("#destination").should("be.visible").click({force:true})
        //{force:true} para forzar el click cuando el elemento no está accesible por estar tapado o algo así. Usar sólo si es necesario.
        
    })

    it("Click Por coordenada", () =>{
        cy.get(".flex-l > .bg-yellow-100").should("be.visible").click(10,5) //Píxeles dentro del elemento.

    })
    

})