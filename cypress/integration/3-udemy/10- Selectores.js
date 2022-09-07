
// /// <reference types="Cypress" />

require('cypress-xpath')
//requiere instalar con: npm install -D cypress-xpath

describe("Selectores", () =>{

    it("Ingresar a la página", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')
    })

    it("Selector por ID", () => {
        cy.get("#userName").type("Seleccionado por ID") //El numeral # indica que es un ID.
        cy.wait(1000)
    })

    it("Selector por atributo", () => {
        cy.get("[placeholder='Full Name']").clear().type("Seleccionado por atributo")
        cy.wait(1000)
    })

    
    it("Selector por xpath", () => {
        cy.xpath("//*[@id='userName']").clear().type("Seleccionado por Xpath")
        cy.wait(1000)
    })
    //Notas sobre XPATH al final del archivo.
    

    it("Selector reforzado", () => {
        cy.get("input#userName[type='text']").clear().type("Selección reforzada")
        cy.wait(1000)
        /*
        Se pueden poner más de un selector para reforzarlo:
        input + #id + [atributo]
        input = primera palabra en la línea de código al inspeccionar, indica el tipo de elemento (input, button, etc).
        */
    })
    

    it("Selector por Contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.wait(1000)
        cy.get('.custom-control-label').contains('Female').click()
        cy.wait(1000)
        cy.get('.custom-control-label').contains('Sports').click()
    })

    it("Selector por copy_selector", () => {
        cy.get('#currentAddress').should('be.enabled').type('Click derecho > inspeccionar / click derecho > copy selector')
    })

})//cierre del describe



/* Sintaxis de XPATH

    Siempre comienza con //, sigue con el tipo de elemento (input, button, div, *, etc),
    Sigue con corchetes, y en su interior comienza con @, y luego el o los atributos, con AND u OR.
    Ej:
    //input[@id='userName' and @type='text']

    Si no tiene buenos atributos y se quiere tomar por el texto:
    Ej:
    //div[text()='Texto del elemento']
      *div, button, etc.

    Si se quiere tomar por "contiene" una parte del texto.
    Ej:
    //span[contains(text(),'Parte del texto')]
      *span, div, etc.

*/