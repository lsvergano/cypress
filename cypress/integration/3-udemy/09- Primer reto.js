
/// <reference types="Cypress" />

describe("Primer reto", () =>{

    it("Ingresar al sitio", () =>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq', 'ToolsQA')
    })

    it("Dar de alta un elemento", () =>{
        cy.get("#addNewRecordButton").click()
        
        //Se podría utilizar tab pero no me funciona :)
        cy.get("#firstName").should("be.visible").type('Don')
        cy.get("#lastName").should('be.visible').type('Homerone')
        cy.get("#userEmail").should('be.visible').type('donhomerone@gmail.com')
        cy.get("#age").should('be.visible').type('27')
        cy.get("#salary").should('be.visible').type('1000000')
        cy.get("#department").should('be.visible').type('Mafia neoyorkina')

        cy.get("#submit").should('be.visible').click()
    })

    it("Buscar elemento", () => {
        cy.get("#searchBox").type('Homerone')
        cy.get("#basic-addon2").click()
    })

    it("Editar elemento", () => {
        cy.get("#edit-record-4").should('be.visible').click()
        cy.get("#salary").should('be.visible').clear().type('1200000') //Primero lo borro con clear y después escribo
        cy.get("#submit").should('be.visible').click()
    })

    it("Borrar elemento", () => {
        cy.get("#delete-record-4").should('be.visible').click()
    })

    it("Limpiar el buscador", () => {
        cy.get("#searchBox").clear()
    })

})//cierre del describe