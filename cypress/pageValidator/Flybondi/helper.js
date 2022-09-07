const { softAssert, softExpect } = chai;

const homePO = require("../../pageObjects/Flybondi/home")
const vuelosPO = require ("../../pageObjects/Flybondi/vuelos")
const DatosBuilder = require("../../builder/Flybondi/Builder")

const paginaInicial = new homePO()
const configurarVuelo = new vuelosPO()
const datosViaje = new DatosBuilder().viaje()

module.exports = {
    validarTitulo: function() {
        cy.title().should('eq', 'Home | Flybondi')
    },

    /*seleccionarOrigenDestino: function () {
        paginaInicial.getOrigen().first().type("Buenos Aires {enter} Bariloche {enter}")
        paginaInicial.getBotonBuscar().click()
    },*/

    seleccionarFechas: function() {
        paginaInicial.getFechaIda().click()
        paginaInicial.getFechaVuelta().click()
        paginaInicial.getBotonBuscarPasajes().should("be.visible").click()
    },

    validarIdaYVuelta: function() {
        configurarVuelo.getTextoIda().then((e)=>{
            let ida = e.text()
            if (ida == datosViaje.ida){
                cy.log('Texto de ida: Correcto')
            }else{
                cy.log('ERROR: TEXTO DE IDA INCORRECTO')
            }
        })
        configurarVuelo.getTextoVuelta().then((e)=>{
            let vuelta = e.text()
            if (vuelta == datosViaje.vuelta){
                cy.log('Texto de vuelta: Correcto')
            }else{
                cy.log('ERROR: TEXTO DE VUELTA INCORRECTO')
            }
        })
    },

    validarIdaYVuelta2: function() {
        //configurarVuelo.getTextoIda().to.eq(datosViaje.ida)
        
        //configurarVuelo.getTextoIda().should('eq', datosViaje.ida)

        configurarVuelo.getTextoIda().invoke('text').as('ida')
        cy.get('@ida').then((ida)=>{
            softExpect(ida).to.eq(datosViaje.ida)
        })
        //Soft Asserts permiten continuar la ejecución si un assert falla.

        configurarVuelo.getTextoIda().invoke('text').as('ida')
        cy.get('@ida').should('eq', datosViaje.ida)

        configurarVuelo.getTextoVuelta().invoke('text').as('vuelta')
        cy.get('@vuelta').should('eq', datosViaje.vuelta)
    },

    seleccionarHoraYContinuar: function() {
        configurarVuelo.getBotonContinuarHora().should("be.enabled").click()
    },

    seleccionarEquipajeYContinuar: function() {
        configurarVuelo.getBotonContinuarEquipaje().should("be.enabled").click()
        cy.wait(500)
        configurarVuelo.getBotonNoQuieroAgregarEquipaje().should("be.enabled").click()
        
    },

    seleccionarAsientoYContinuar: function() {
        cy.wait(500)
        configurarVuelo.getBotonSinAsiento().click()
    }

}