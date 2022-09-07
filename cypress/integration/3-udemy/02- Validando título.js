
describe("   ", () =>{

    it("Primera prueba", () =>{
        cy.visit("http://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')

        cy.log("Titulo validado OK.")
    })

})//cierre del describe