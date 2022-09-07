/// <reference types="Cypress" />

const homePO = require("../../../pageObjects/AyudaMovistar/home")
const helper = require("../../../pageValidator/AyudaMovistar/helper")
const datosBuilder = require("../../../builder/AyudaMovistar/Builder")

describe("Cuadro de búsqueda", () =>{

    const paginaInicial = new homePO()
    const datosBusqueda = new datosBuilder()

    beforeEach(()=>{
        cy.visit(Cypress.env("urlAyudaMovistar"))
        helper.validarTitulo()
    })

    it("Buscar texto vacío", () =>{
        paginaInicial.getCuadroDeBusqueda().clear()
        paginaInicial.getBuscar().click()
        helper.validarTituloHome()
    })

    it("Buscar texto inválido", () => {
        paginaInicial.getCuadroDeBusqueda().type(datosBusqueda.busquedaInvalida().textoBusqueda)
        paginaInicial.getBuscar().click()
        helper.validarResultadoNoEncontrado()
    })

    it("Buscar texto Válido", () => {
        paginaInicial.getCuadroDeBusqueda().type(datosBusqueda.busquedaValida().textoBusqueda)
        paginaInicial.getBuscar().click()
        helper.validarResultadoEncontrado()
    })
})