//Sólo las pruebas que tengan la función Only se van a ejecutar.

describe("PageUp y PageDown", () =>{

    it.only("Escribir nombre", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')
        cy.wait(700)

        cy.get("#userName").type('Pepito')
        //cy.wait(2500)
    })

    it("Correo", () =>{
        cy.get("#userEmail").type('correo@gmail.com')
        //cy.wait(2500)
    })

    it.only("Dirección actual", () =>{
        cy.get("#currentAddress").type('Calle falsa 123')
        //cy.wait(2500)
    })

    it("Dirección Permanente", () =>{
        cy.get("#permanentAddress").type('Calle no falsa 123')
        //cy.wait(2500)
    })

    it.only("PageDown", () =>{

        cy.get("#userName").type('{pagedown}')
        cy.wait(2500)
    })

})