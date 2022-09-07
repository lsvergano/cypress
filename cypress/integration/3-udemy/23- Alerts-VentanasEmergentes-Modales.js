/// <reference types="Cypress" />

require('cypress-xpath')

describe("Cerrar ventanas emergentes", () =>{

    it("Modo 1, según la documentación", () =>{ //No funciona.
        cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html")
        cy.title().should('eq', 'Selenium Easy Demo - Bootstrap Modal Demo to Automate')

        cy.get('[href="#myModal"]').click()

        cy.on("window:alert", (str) => {
            expect(str).to.equal("First Modal")
            return true;
        })

    })

    it("Modo 2, simplemente seleccionando el botón", () =>{ //No funciona.
        cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html")
        cy.title().should('eq', 'Selenium Easy Demo - Bootstrap Modal Demo to Automate')

        cy.get('[href="#myModal"]').click()
        cy.wait(1000)

        cy.get("#myModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary").click()

    })

})