/// <reference types='Cypress' />

require('cypress-xpath')

Cypress.config("pageLoadTimeout", 20000) //Tiempo máximo permitido para esperar que cargue la página
Cypress.config("defaultCommandTimeout", 20000) //Tiempo máximo permitido para esperar que cargue un campo.
//Si se pone en este archivo tiene alcance para estos casos/este proyecto. Si se pone en el archivo cypress.json alcanza todos.

describe('Opciones de tiempo', () =>{

    it('Opciones de tiempo', () =>{
        cy.visit('https://www.google.com/')
        cy.title().should('eq', 'Google')

        cy.get('.FPdoLc > center > .gNO89b').should("be.visible", {timeout: 2000})
        //Definir hasta cuánto puede esperar para validar el assert.
    })
})