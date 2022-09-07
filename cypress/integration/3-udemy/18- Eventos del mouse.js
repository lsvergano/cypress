/// <reference types="Cypress" />

//primero instalar paquete con npm install --save-dev @4tw/cypress-drag-drop

require('@4tw/cypress-drag-drop')

describe("Eventos del mouse", () => {

    it("Drag and drop", () => {
        cy.visit("http://the-internet.herokuapp.com/drag_and_drop")
        cy.title().should('eq', 'The Internet')

        cy.wait(1500)

        cy.get("#column-a").drag("#column-b", {force:true}) //Por alguna razón no funciona..
    })

    it("Drag and drop ejemplo 2", () => {
        cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html")
        cy.title().should('eq', 'Selenium Easy Demo - Drag and Drop Demo')

        cy.wait(1500)

        cy.get("#todrag > :nth-child(2)").drag("#mydropzone")
        cy.wait(1000)
        cy.get("#todrag > :nth-child(3)").drag("#mydropzone", {force:true})
        cy.wait(1000)
        
    })

    it("Mouse over", () => {   //Para menúes que se despliegan al pasar el mouse.
        cy.visit("http://way2automation.com/")
        cy.title().should('eq', "Get Online Selenium Certification Course | Way2Automation")
        cy.wait(500)

        cy.contains("All Courses").trigger('mouseover') //contains para seleccionar el elemento. Trigger ejecuta el evento.
        /*cy.wait(500)
        cy.contains("Appium").trigger('mouseover')
        cy.wait(500)
        cy.contains('Appium with Java').click()*/
    })

})