describe("Bienvenidos a Mundo Jurásico", () =>{

    it("Primera prueba", () =>{
        cy.log("Hola Mundo Jurásico")
        cy.wait (2000)
    })

     it("Segunda prueba", () =>{
        cy.visit("http://demoqa.com/text-box")

        cy.get("#userName").type("Velocirraptor") // numeral (#) para indicar id, punto(.) para indicar clase.
        cy.wait(3000)
})

})//cierre del describe

