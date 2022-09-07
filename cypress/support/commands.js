// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('CompletarTexto', (selector, texto, tiempo) => { //Parámetros necesarios.
    cy.get(selector).should("be.visible").type(texto) //Código de la función y dónde se insertan los parámetros.
    cy.wait(tiempo)
})

Cypress.Commands.add('ClickLupa',(selector)=>{
    cy.get(selector).should('be.visible').click()
})