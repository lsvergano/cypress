/// <reference types="Cypress" />

const homePO = require("../../../pageObjects/AyudaMovistar/home")
const tiposDeServicioPO = require("../../../pageObjects/AyudaMovistar/tiposDeServicio")
const helper = require("../../../pageValidator/AyudaMovistar/helper")
const datosBuilder = require("../../../builder/AyudaMovistar/Builder")

describe("Inicios de sesión", () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    let tiempo = 100

    const paginaInicial = new homePO()
    const tiposDeServicio = new tiposDeServicioPO()
    const datosCliente = new datosBuilder()

    beforeEach(()=>{
        cy.visit(Cypress.env("urlAyudaMovistar"))
        helper.validarTitulo()
    })


    it("Iniciar sesión línea móvil No Movistar", () =>{
        paginaInicial.getMiMovistar().click()
        tiposDeServicio.getLineaMovil().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getSoloUnaLinea().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getNumeroDeLinea().type(datosCliente.clienteLineaNoMovistar().ANI)
        tiposDeServicio.getEnviarSms().click()
        helper.validarLineaIngresadaNoMovistar()
    })

    it("Iniciar sesión línea móvil formato inválido", () => {
        paginaInicial.getMiMovistar().click()
        tiposDeServicio.getLineaMovil().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getSoloUnaLinea().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getNumeroDeLinea().type(datosCliente.clienteLineaFormatoInvalido().ANI)
        tiposDeServicio.getEnviarSms().click()
        helper.validarFormatoAniInvalido()
    })

    it("Iniciar sesión dos o más líneas móviles con email incorrecto", () => {
        paginaInicial.getMiMovistar().click()
        tiposDeServicio.getLineaMovil().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getDosOMasConDni().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getEmail().type(datosCliente.clienteEmailIncorrecto().email)
        tiposDeServicio.getContraseña().type(datosCliente.clienteEmailIncorrecto().contraseña)
        cy.wait(tiempo)
        helper.validarEmailIncorrecto()
    })

    it("Iniciar sesión dos o más líneas móviles con contraseña incorrecta", () => {
        paginaInicial.getMiMovistar().click()
        tiposDeServicio.getLineaMovil().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getDosOMasConDni().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getEmail().type(datosCliente.clienteContraseñaIncorrecta().email)
        tiposDeServicio.getContraseña().type(datosCliente.clienteContraseñaIncorrecta().contraseña)
        cy.wait(tiempo)
        helper.validarContraseñaIncorrecta()
    })

    it("Iniciar sesión dos o más líneas móviles con Cuit", () => {
        paginaInicial.getMiMovistar().click()
        tiposDeServicio.getLineaMovil().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getDosOMasConCuit().click()
        tiposDeServicio.getSiguiente().click()
        cy.wait(tiempo)
        tiposDeServicio.getAgregarLineaMovil().click()
        //Se usan datos de línea no Movistar.
        tiposDeServicio.getNumeroDeLinea().type(datosCliente.clienteLineaNoMovistar().ANI)
        tiposDeServicio.getEnviarSms().click()
        helper.validarLineaIngresadaNoMovistar()
    })

    it("Iniciar sesión línea Fija + Internet email incorrecto", () =>{
        //Se accede a través del botón con DNI
        paginaInicial.getMiMovistar().click()
        tiposDeServicio.getLineaFijaInternetFibra().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getConDni().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getEmail().type(datosCliente.clienteEmailIncorrecto().email)
        tiposDeServicio.getContraseña().type(datosCliente.clienteEmailIncorrecto().contraseña)
        cy.wait(tiempo)
        helper.validarEmailIncorrecto()
    })

    it("Iniciar sesión línea Fija + Internet contraseña incorrecta", () =>{
        //Se accede a través del botón con DNI
        paginaInicial.getMiMovistar().click()
        tiposDeServicio.getLineaFijaInternetFibra().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getConDni().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getEmail().type(datosCliente.clienteContraseñaIncorrecta().email)
        tiposDeServicio.getContraseña().type(datosCliente.clienteContraseñaIncorrecta().contraseña)
        cy.wait(tiempo)
        helper.validarEmailIncorrecto()
    })

    it("Iniciar sesión línea Fija + Internet línea formato inválido", () => {
        //Se accede a través del botón con Cuit
        paginaInicial.getMiMovistar().click()
        tiposDeServicio.getLineaFijaInternetFibra().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getConCuit().click()
        tiposDeServicio.getSiguiente().click()
        cy.wait(tiempo)
        tiposDeServicio.getAgregarLineaMovil().click()
        tiposDeServicio.getNumeroDeLinea().type(datosCliente.clienteLineaFormatoInvalido().ANI)
        tiposDeServicio.getEnviarSms().click()
        helper.validarFormatoAniInvalido()
    })

    it("Iniciar sesión línea Fija + Internet línea no Movistar", () => {
        //Se accede a través del botón con Cuit
        paginaInicial.getMiMovistar().click()
        tiposDeServicio.getLineaFijaInternetFibra().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getConCuit().click()
        tiposDeServicio.getSiguiente().click()
        cy.wait(tiempo) //poner más waits entre líneas para evitar los errores de servicio.
        tiposDeServicio.getAgregarLineaMovil().click()
        tiposDeServicio.getNumeroDeLinea().type(datosCliente.clienteLineaNoMovistar().ANI)
        tiposDeServicio.getEnviarSms().click()
        helper.validarLineaIngresadaNoMovistar()
    })
//
    it("Iniciar sesión línea Móvil y Fija email incorrecto", () =>{
        //Se accede a través del botón con DNI
        paginaInicial.getMiMovistar().click()
        tiposDeServicio.getLineaMovilYFijaInternet().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getConDni().click()
        tiposDeServicio.getSiguiente().click()
        cy.wait(tiempo)
        tiposDeServicio.getEmail().type(datosCliente.clienteEmailIncorrecto().email)
        cy.wait(tiempo)
        tiposDeServicio.getContraseña().type(datosCliente.clienteEmailIncorrecto().contraseña)
        cy.wait(tiempo)
        helper.validarEmailIncorrecto()
    })

    it("Iniciar sesión línea Móvil y Fija contraseña incorrecta", () =>{
        //Se accede a través del botón con DNI
        paginaInicial.getMiMovistar().click()
        tiposDeServicio.getLineaMovilYFijaInternet().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getConDni().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getEmail().type(datosCliente.clienteContraseñaIncorrecta().email)
        tiposDeServicio.getContraseña().type(datosCliente.clienteContraseñaIncorrecta().contraseña)
        cy.wait(tiempo)
        helper.validarEmailIncorrecto()
    })

    it("Iniciar sesión línea Móvil y Fija línea formato inválido", () => {
        //Se accede a través del botón con Cuit
        paginaInicial.getMiMovistar().click()
        tiposDeServicio.getLineaMovilYFijaInternet().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getConCuit().click()
        tiposDeServicio.getSiguiente().click()
        cy.wait(tiempo)
        tiposDeServicio.getAgregarLineaMovil().click()
        tiposDeServicio.getNumeroDeLinea().type(datosCliente.clienteLineaFormatoInvalido().ANI)
        tiposDeServicio.getEnviarSms().click()
        helper.validarFormatoAniInvalido()
    })

    it("Iniciar sesión línea Móvil y Fija línea no Movistar", () => {
        //Se accede a través del botón con Cuit
        paginaInicial.getMiMovistar().click()
        tiposDeServicio.getLineaMovilYFijaInternet().click()
        tiposDeServicio.getSiguiente().click()
        tiposDeServicio.getConCuit().click()
        tiposDeServicio.getSiguiente().click()
        cy.wait(tiempo)
        tiposDeServicio.getAgregarLineaMovil().click()
        tiposDeServicio.getNumeroDeLinea().type(datosCliente.clienteLineaNoMovistar().ANI)
        tiposDeServicio.getEnviarSms().click()
        helper.validarLineaIngresadaNoMovistar()
    })

})