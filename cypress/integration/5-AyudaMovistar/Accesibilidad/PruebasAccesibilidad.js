/// <reference types="Cypress" />

const homePO = require("../../../pageObjects/AyudaMovistar/home")
const tiposDeServicioPO = require("../../../pageObjects/AyudaMovistar/tiposDeServicio")

beforeEach(()=>{
    cy.visit(Cypress.env("urlAyudaMovistar"))
})

describe('Pruebas de accesibilidad', () => {

    const paginaInicial = new homePO()
    const tiposDeServicio = new tiposDeServicioPO()
    let tiempo = 300
    
    it('El Home es accesible', () => {
        cy.injectAxe();
        cy.checkA11y(); //chequea toda la página.
        //cy.checkA11y(null, null, null, true); //Parámetros para que no falle el test (e igualmente muestra los errores de accesibilidad)
        //cy.wrap({ exclude: [paginaInicial.getMiMovistar()] }).checkA11y() //Exluye el elemento Mi Movistar.
    })

    it('El login es accesible', () => {
        paginaInicial.getMiMovistar().click()
        cy.wait(tiempo)
        cy.injectAxe();
        cy.checkA11y();
        tiposDeServicio.getSiguiente().checkA11y() //Prueba sólo el botón Siguiente.
    })

    it('Las FAQs son accesibles', () => {
        paginaInicial.getCelulares().click()
        //cy.wait(tiempo)
        cy.injectAxe();
        cy.checkA11y();
    })
})