/// <reference types="Cypress" />

describe("Atrás, adelante, refrescar", () =>{

    it("Back, Forward, Refresh", function() {
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title().should('eq', 'Selenium Easy Demo - Automate All Scenarios')
        cy.wait(5000)
        
        cy.get(".logo > a > img").should("be.visible").click()
        cy.wait(5000)

        
        cy.go("back")
        cy.wait(5000)

        cy.go("forward")
        cy.wait(5000)

        cy.reload()
        
    })

})