/// <reference types="Cypress" />

require('cypress-xpath')

describe("Checkboxs y Radio Buttons", () =>{

    it("Ingresar al sitio y validar título", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title().should('eq', 'Selenium Easy Demo - Automate All Scenarios')
    })

    it("Seleccionar un elemento del combo box", () => {
        cy.get('#select-demo').should('be.visible').select('Friday').should('have.value', 'Friday') //Selecciona un valor y luego se valida
        cy.wait(1500)
        cy.get('#select-demo').should('be.visible').select('Saturday').should('have.value', 'Saturday')
    })

    //Selección múltiple
    it("Seleccionar varios elementos de una lista", () => {
        cy.get('#multi-select').should('be.visible').select(["California", "Florida", "New York"]).then(()=>{
            cy.get("#printMe").should('be.visible').click()
        //El then (promesa) funciona similar a un IF. Cuando se hayan seleccionado los 3 elementos, ENTONCES se ejecuta la función.
        })
    })

})