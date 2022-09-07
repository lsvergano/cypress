/// <reference types="Cypress" />

require('cypress-xpath')

describe("Elementos de las tablas", () => {

    let tiempo = 1270

    it("Children",() => {
        cy.visit("https://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should("eq", "Selenium Easy - Table Data Filter Demo")
        cy.wait(tiempo)

        cy.get(".btn-group").children(".btn-danger").should("contain", "Red").click()
        //Cuando un elemento tiene subelementos, se puede tomar la clase padre y usar children para seleccionar una clase hija.
    })

    it("Seleccionar por EQ", () => {

        cy.wait(tiempo)
        cy.get('[type="button"]').eq(1).should("contain", "Green").click()
        //Si varios elementos comparten el parámetro (en este caso type="button"), con EQ se elige cuál tomar (el 1, 2, 3..)

    })

    it("Seleccionar por filter", function () {
        cy.wait(tiempo)
        cy.get('[type="button"]').filter(".btn-warning").should("contain", "Orange").click()
        //Funciona similar al children, pero no hay que tomar por la clase padre sino por algún parámetro y luego se filtra cuál elegir.
    })

    it("Seleccionar por Find", function() {
        cy.wait(tiempo)
        cy.get(".btn-group").find(".btn-danger").should("contain", "Red").click()
        //Busca una clase hijo dentro de una clase padre.
    })

    it("First y Last", () => {
        cy.wait(tiempo)
        cy.get(".btn-group").find("button").first().click()
        cy.wait(tiempo)
        cy.get(".btn-group").find("button").last().click()
        //Si el find devuelve varios resultados se puede seleccionar uno con first y last.
    })

    it("Seleccionar por contains", () => {
        cy.wait(tiempo)
        cy.get('[type="button"]').contains("Green").click()
        //Busca un elemento que contenga cierto string dentro de todos los elementos que obtiene en el get.
    })

    it("NextAll", function() {
        cy.wait(tiempo)
        cy.get('[type="button"]').contains("Green").nextAll().should("have.length", 3)
        //Valida cuántos elementos iguales hay a continuación.
    })

    it("Seleccionar clase padre", function() {
        cy.wait(tiempo)
        cy.get('[type="button"]').parent().should("have.class", "btn-group")
        //Al seleccionar un elemento hijo con el get, se puede obtener el padre con parent.
    })


    //Ir botón por botón, validar los nombres y activar todos los checks.
    it("Validar botones y activar checks", function() {
        cy.wait(tiempo)

        for (let i=1;i<=4;i++){   //Ciclo For para recorrer los 4 botones.

            let nombreBoton = ""  //Variable para validar el nombre de los botones en el should.
            
            if (i==1){              //Por cada botón le asigna el nombre que va a buscar en el should.
                nombreBoton = "Green"
            }
            else if (i==2){
                nombreBoton = "Orange"
            }
            else if (i==3){
                nombreBoton = "Red"
            }
            else if (i==4){
                nombreBoton = "All"
            }

            cy.get('[type="button"]').eq(i).should("contain", nombreBoton).click({force:true}) //eq(i) hace que recorra todos los botones.
            cy.wait(tiempo)
            cy.get('[type="checkbox"]').check({force:true}) //Todos los type checkbox los activa.
            cy.wait(tiempo)
        }
    })

})