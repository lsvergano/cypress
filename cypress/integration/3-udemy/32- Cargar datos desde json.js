/// <reference types="Cypress" />

describe("Cargar datos desde un archivo json", () =>{

    //Opción 1:
    before(function(){
        cy.fixture("datos1").then(function(informacion){ //no hace falta poner la extensión del archivo json (se encuentra dentro de la carpeta fixtures)
            globalThis.informacion=informacion
        })
    })

    /*Opción 2:
    before(function(){
        cy.fixture("datos1").as("personas") //alias
    })*/
    

    it("Cargar datos desde archivo json", () =>{
        cy.visit("https://demo.seleniumeasy.com/input-form-demo.html")
        cy.title().should('eq', 'Selenium Easy - Input Form Demo with Validations')
        cy.wait(500)
        
        //Opción 1:
        cy.get("[name='first_name']").type(informacion.nombre)
        cy.get("[name='last_name']").type(informacion.apellido)

        /*Opción 2:
        cy.get("@personas").then((informacion)=>{
            cy.get("[name='first_name']").type(informacion.nombre)
            cy.get("[name='last_name']").type(informacion.apellido)
        })*/
        
    })

    it("Cargar varios registros desde json", () => {
        cy.fixture("datos2").then(personas => {
            personas.forEach(reg => {
                const nomb = reg.nombre
                const apell = reg.apellido

                cy.visit("https://demo.seleniumeasy.com/input-form-demo.html")
                cy.wait(500)

                cy.get("[name='first_name']").type(nomb)
            cy.get("[name='last_name']").type(apell)


            })
        })
    })
})