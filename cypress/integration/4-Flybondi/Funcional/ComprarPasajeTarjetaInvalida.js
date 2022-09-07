/// <reference types='Cypress' />

const homePO = require("../../../pageObjects/Flybondi/home")
const helper = require("../../../pageValidator/Flybondi/helper")
const DatosBuilder = require("../../../builder/Flybondi/Builder")

require('cypress-xpath')

describe('Comprar Pasaje con Tarjeta Inválida', () =>{

    const paginaInicial = new homePO()
    const datosViaje = new DatosBuilder().viaje()//.build()
    
    let tiempo = 100

    before(()=>{
        cy.visit(Cypress.env("urlFlybondi"))
        helper.validarTitulo()
    })

    it('Seleccionar Origen y Destino', () =>{
        //helper.seleccionarOrigenDestino()
        paginaInicial.getOrigen().first().type(datosViaje.ida + "{enter}" + datosViaje.vuelta + "{enter}")
        paginaInicial.getBotonBuscar().click()
        cy.wait(tiempo)
    })

    it('Seleccionar fechas y precios', () => {
        helper.seleccionarFechas()
        cy.wait(tiempo)
    })

    it('Seleccionar horarios y continuar', () => {
        helper.validarIdaYVuelta()
        helper.validarIdaYVuelta2()
        //helper.seleccionarHoraYContinuar()
        //cy.wait(tiempo)
    })
/*
    it('Seleccionar equipaje y continuar', () => {
        helper.seleccionarEquipajeYContinuar()
    })

    it('Seleccionar Asiento y Continuar', () => {
        helper.seleccionarAsientoYContinuar()
    })
*/
})