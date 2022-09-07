/// <reference types="Cypress" />
require('cypress-plugin-tab')

describe("Fechas", () =>{

    it("Seleccionar día actual en calendario", () =>{
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title().should('eq', 'Selenium Easy - Best Demo website for Bootstrap Date picker')
        cy.wait(100)

        cy.get("#sandbox-container1 > .input-group > .form-control").should('be.visible').click()
        cy.wait(300)
        cy.get('.today').first().click()
    })

    it("Seleccionar rango de fechas", () => {
        cy.get('[placeholder="Start date"]').should('be.visible').type('07/10/2021').tab()
        cy.get('[placeholder="End date"]').should('be.visible').type('27/10/2021').tab()
        //También podría funcionar:
        //cy.get('[placeholder="End date"]').should('be.visible').type('27/10/2021 {esc}')
    })
})