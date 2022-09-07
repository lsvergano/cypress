/// <reference types="Cypress" />

describe(" ", () =>{

    it("Alias", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should('eq', 'Input Validation')
        cy.wait(100)

        cy.get("#firstname").as("nombre") //Guardamos el elemento en el alias "nombre" para poder utilizarlo más adelante.
        cy.get("#surname").as("apellido")
        cy.get("#age").as("edad")
        cy.get("#country").as("pais")
        cy.get("#notes").as("notas")
        cy.get("[type='submit']").as("enviar")

        cy.get("@nombre").should("be.visible").type("Lucho") //En el get llamamos por el alias en lugar del ID o lo que fuera.
        cy.get("@apellido").should("be.enabled").type("Pincharrata") //Los should podrían estar acá o previamente al definir los alias.
        cy.get("@edad").should("be.visible").type("38")
        cy.get("@pais").should("be.enabled").select("Argentina").should("have.value", "Argentina")
        cy.get("@notas").should("be.visible").type("Datos de prueba")
        cy.get("@enviar").should("be.enabled").click()

    })

})
