describe("Introducción a los Asserts", () =>{

    it("Should", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'ToolsQA')
        cy.get('#firstName').should("be.visible").type('Homero')
        cy.get('#lastName').should("be.visible").should('be.enabled').type('Simpson')
        //También existe not.be.visible, útil para realizar alguna acción cuando no existe un elemento.
    })

})