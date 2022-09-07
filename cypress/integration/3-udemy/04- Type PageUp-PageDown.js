/*Para que tome las funciones cy.*/
// /// <reference types="Cypress" />

describe("PageUp y PageDown", () =>{

    it("PageUp", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')
        cy.wait(700)

        cy.get("#userName").type('{pageup}')
        cy.wait(2500)
    })

    it("PageDown", () =>{
        //cy.visit("https://demoqa.com/text-box")
        //cy.title().should('eq', 'ToolsQA')
        //cy.wait(700)

        cy.get("#userName").type('{pagedown}')
        cy.wait(2500)
    })

})//cierre del describe