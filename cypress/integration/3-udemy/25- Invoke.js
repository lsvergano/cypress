/// <reference types="Cypress" />

require('cypress-xpath')

//Más ejemplos de invoke en archivo 15- Asserts.js.
describe("Funcion Invoke", () =>{

    it("Invoke text", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should('eq', 'Input Validation')

        cy.get('[for="firstname"]').invoke("text").as("etiqueta") //Guardamos el título del campo en un alias.

        //then(function(){}) es lo mismo que then(()=>{})
        cy.get("@etiqueta").should("contain", "First name:").then(function(){ //Si se cumple el assert entonces se ejecuta la función.
            cy.get("#firstname").type("Lucho")
        })
        
    })

    it("Invoke estilo", function(){

        cy.get('[for="surname"]').invoke("attr", "style", "color:Red; font-size: 27px")
        //Puede servir para querer resaltar algo.
    })

    it("Invoke ocultar o mostrar", function(){
        let tiempo = 1000

        cy.wait(tiempo)
        cy.get('[for="age"]').invoke("hide")
        cy.get("#age").invoke("hide")

        
        cy.wait(tiempo)
        cy.get('[for="age"]').invoke("show", "2s") //2s es opcional, indica el tiempo.
        cy.get("#age").invoke("show")

    })

    it("Invoke src", function(){
        cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html")
        cy.title().should('eq', 'Selenium Easy Demo - Bootstrap Modal Demo to Automate')
        cy.wait(1000)

        cy.get(".cbt").invoke("attr", "src").should("include", "sponsored-by-CBT.png")
        //Por ejemplo para saber si existe la imagen.

    })

    it("Invoke removeAttr", function(){
        cy.visit("https://dvwa.co.uk")
        cy.title().should('eq', 'DVWA - Damn Vulnerable Web Application')
        cy.wait(1000)

        cy.xpath('//*[@id="pagewidth"]/div/div[5]/a[2]').invoke("removeAttr", "target").click()
        //Para que no se abra en otra pestaña, remover el atributo target.
    })
})