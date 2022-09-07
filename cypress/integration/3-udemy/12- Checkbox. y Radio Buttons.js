/// <reference types="Cypress" />

require('cypress-xpath')

describe("Checkboxs y Radio Buttons", () =>{

    it("Activar, desactivar y validar estado de todos los check", () =>{
        cy.visit("https://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should('eq', 'Selenium Easy - Checkbox demo for automation using selenium')
        
        //Al obtener type=checkbox se seleccionan todos sin especificar cuál.
        //Valida que no esté chequeado. Lo chequea. Valida que quede chequeado.
        cy.get('[type="checkbox"]').should('be.visible').should('not.be.checked').check().should('be.checked')
        
        //Lo inverso:
        cy.get('[type="checkbox"]').should('be.visible').should('be.checked').uncheck().should('not.be.checked')
    })

    it("Activar dos checks en particular", () => {
        cy.xpath('//*[@id="isAgeSelected"]').should('be.visible').should('not.be.checked').check().should('be.checked')
        //También se puede hacer con click:
        cy.get(':nth-child(4) > label > .cb1-element').should('be.visible').should('not.be.checked').click().should('be.checked') //Seleccionado con el seleccionador de Cypress
        cy.wait(2500)
    })

    it("Radio Buttons", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-radiobutton-demo.html")
        cy.title().should('eq', 'Selenium Easy Demo - Radio buttons demo for Automation')

        //Se pueden activar con check o con click.
        cy.get('.panel-body > :nth-child(2) > input').should('be.visible').should('not.be.checked').check().should('be.checked')
        cy.get('.panel-body > :nth-child(2) > :nth-child(3) > input').should('be.visible').should('not.be.checked').click().should('be.checked')
        
    })


})