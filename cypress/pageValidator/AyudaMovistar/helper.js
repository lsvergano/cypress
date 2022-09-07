const { softAssert, softExpect } = chai;

const homePO = require("../../pageObjects/AyudaMovistar/home")
const resultadosBusquedaPO = require("../../pageObjects/AyudaMovistar/resultadosBusqueda")
const tiposDeServicioPO = require("../../pageObjects/AyudaMovistar/tiposDeServicio")
const preguntasFrecuentesPO = require("../../pageObjects/AyudaMovistar/FAQs")
const datosBuilder = require("../../builder/AyudaMovistar/Builder")

const paginaInicial = new homePO()
const resultadosBusqueda = new resultadosBusquedaPO()
const tiposDeServicio = new tiposDeServicioPO()
const preguntasFrecuentes = new preguntasFrecuentesPO()
const datosBusqueda = new datosBuilder()

module.exports = {
    validarTitulo: function() {
        cy.title().should('eq', paginaInicial.getTitulo())
    },

    validarTituloHome: function() {
        paginaInicial.getTituloHome().invoke('text').as('textoTitulo')
        cy.get('@textoTitulo').then((textoTitulo)=>{
            softExpect(textoTitulo).to.eq(paginaInicial.getTextoTituloHome())
        })
    },

    validarResultadoEncontrado: function() {
        resultadosBusqueda.getTituloResultado().invoke('text').as('textoTituloResultado')
        cy.get('@textoTituloResultado').then((textoTituloResultado)=>{
            softExpect(textoTituloResultado).to.eq(resultadosBusqueda.getTextoTituloResultado())
        })

        resultadosBusqueda.getResultadoEncontrado().invoke('text').as('textoEncontrado')
        cy.get('@textoEncontrado').then((textoEncontrado)=>{
            softExpect(textoEncontrado.trim()).to.eq(resultadosBusqueda.getTextoResultadoEncontrado() + datosBusqueda.busquedaValida().textoBusqueda)
            //softExpect(textoEncontrado.slice(6, textoEncontrado.length - 5)).to.eq(resultadosBusqueda.getTextoResultadoEncontrado() + datosBusqueda.busquedaValida().textoBusqueda)
            //softExpect(textoEncontrado.slice(textoEncontrado.indexOf('M'), textoEncontrado.indexOf(':') + 2) + datosBusqueda.busquedaValida().textoBusqueda).to.eq(resultadosBusqueda.getTextoResultadoEncontrado() + datosBusqueda.busquedaValida().textoBusqueda)
            //softExpect(textoEncontrado).to.contain(resultadosBusqueda.getTextoResultadoEncontrado() + datosBusqueda.textoBusqueda)
        })
    },

    validarResultadoNoEncontrado: function() {
        resultadosBusqueda.getTituloResultado().invoke('text').as('textoTituloResultado')
        cy.get('@textoTituloResultado').then((textoTituloResultado)=>{
            softExpect(textoTituloResultado).to.eq(resultadosBusqueda.getTextoTituloResultado())
        })

        resultadosBusqueda.getResultadoNoEncontrado().invoke('text').as('textoNoEncontrado')
        cy.get('@textoNoEncontrado').then((textoNoEncontrado)=>{
            softExpect(textoNoEncontrado.trim()).to.eq(resultadosBusqueda.getTextoResultadoNoEncontrado())
        })
    },

    validarLineaIngresadaNoMovistar: function() {
        tiposDeServicio.getLineaIngresadaNoMovistar().invoke('text').as('textoLineaIngresadaNoMovistar')
        cy.get('@textoLineaIngresadaNoMovistar').then((textoLineaIngresadaNoMovistar)=>{
            softExpect(textoLineaIngresadaNoMovistar).to.eq(tiposDeServicio.getTextoLineaIngresadaNoMovistar())
        })
    },

    validarFormatoAniInvalido: function() {
        tiposDeServicio.getMensajeAniFormatoIncorrecto().invoke('text').as('textoMensajeAniFormatoIncorrecto')
        cy.get('@textoMensajeAniFormatoIncorrecto').then((textoMensajeAniFormatoIncorrecto)=>{
            softExpect(textoMensajeAniFormatoIncorrecto).to.eq(tiposDeServicio.getTextoMensajeAniFormatoIncorrecto())
        })
    },

    validarEmailIncorrecto: function() {
        tiposDeServicio.getMensajeEmailIncorrecto().invoke('text').as('textoMensajeEmailIncorrecto')
        cy.get('@textoMensajeEmailIncorrecto').then((textoMensajeEmailIncorrecto)=>{
            softExpect(textoMensajeEmailIncorrecto.trim()).to.eq(tiposDeServicio.getTextoMensajeEmailIncorrecto())
        })
    },

    validarContraseñaIncorrecta: function() {
        tiposDeServicio.getMensajeContraseñaIncorrecta().invoke('text').as('textoMensajeContraseñaIncorrecta')
        cy.get('@textoMensajeContraseñaIncorrecta').then((textoMensajeContraseñaIncorrecta)=>{
            softExpect(textoMensajeContraseñaIncorrecta.trim()).to.eq(tiposDeServicio.getTextoMensajeContraseñaIncorrecta())
        })
    },

    validarTituloPreguntasFrecuentes: function(paramTitulo) {
        preguntasFrecuentes.getTituloPagina().invoke('text').as('textoTituloPagina')
        cy.get('@textoTituloPagina').then((textoTituloPagina)=> {
            softExpect(textoTituloPagina.trim()).to.eq(paramTitulo)
        })
    }
}