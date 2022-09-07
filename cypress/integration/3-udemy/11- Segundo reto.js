/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Segunda prueba", () =>{

    it("Ingreso al sitio", () =>{
        cy.visit("http://computer-database.gatling.io/computers")
        cy.title().should('eq', 'Computers database')
    })

    it("Buscar un elemento", () => {
        cy.xpath('//*[@id="searchbox"]').should('be.visible').type('ACE')
        cy.get("#searchsubmit").should('be.visible').click()
    })

    it("Agregar una computadora", () => {
        cy.get("#add").should('be.visible').click()
        cy.get("#name").should('be.visible').type("Compusaurio")
        cy.get("#introduced").should('be.visible').type("1998-01-01").tab().type('2010-12-31')
        cy.xpath('//*[@id="company"]').should('be.visible').select('Nokia').should('have.value', '16')
        //have.value valida que el item Nokia en el combo tenga el valor 16
        cy.get("[value='Create this computer']").should('be.visible').click()
    })

})