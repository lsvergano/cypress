/*Para que tome las funciones cy.*/
// /// <reference types="Cypress" />

describe("Presionar Enter luego de escribir texto", () =>{

    it("Búsqueda en Google", () =>{
        cy.visit("https://www.google.com/")
        cy.title().should('eq', 'Google')
        cy.wait(700)

        cy.get("[name='q']").type("cypress io {enter}")
        cy.wait(2500)
        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3").click()
    })

})//cierre del describe