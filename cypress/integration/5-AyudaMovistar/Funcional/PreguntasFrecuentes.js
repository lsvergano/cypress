/// <reference types="Cypress" />

const homePO = require("../../../pageObjects/AyudaMovistar/home")
const preguntasFrecuentesPO = require("../../../pageObjects/AyudaMovistar/FAQs")
const helper = require("../../../pageValidator/AyudaMovistar/helper")

describe("Preguntas frecuentes y gestiones", () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    const paginaInicial = new homePO()
    const preguntasFrecuentes = new preguntasFrecuentesPO()

    let tiempo = 100

    beforeEach(()=>{
        cy.visit(Cypress.env("urlAyudaMovistar"))
        helper.validarTitulo()
    })

    it("FAQs Celulares - Mis Facturas", () => {
        paginaInicial.getCelulares().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloCelulares())
        preguntasFrecuentes.getCelularesMisFacturas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloCelularesMisFacturas())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("FAQs Celulares - Equipos Móviles", () => {
        paginaInicial.getCelulares().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloCelulares())
        preguntasFrecuentes.getCelularesEquiposMoviles().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloCelularesEquiposMoviles())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("FAQs Celulares - Robo de Equipos", () => {
        paginaInicial.getCelulares().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloCelulares())
        preguntasFrecuentes.getCelularesRoboDeEquipos().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloCelularesRoboDeEquipos())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("FAQs Celulares - Medios de Contacto", () => {
        paginaInicial.getCelulares().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloCelulares())
        preguntasFrecuentes.getCelularesMediosDeContacto().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloCelularesMediosDeContacto())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("FAQs Celulares - Soporte Línea Móvil", () => {
        paginaInicial.getCelulares().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloCelulares())
        preguntasFrecuentes.getCelularesSoporteLineaMovil().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloCelularesSoporteLineaMovil())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("FAQs Celulares - Servicios Línea Móvil", () => {
        paginaInicial.getCelulares().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloCelulares())
        preguntasFrecuentes.getCelularesServiciosLineaMovil().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloCelularesServiciosLineaMovil())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("FAQs Pagos y Facturación - Pagos", () => {
        paginaInicial.getPagosYFacturacion().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloPagosYFacturacion())
        preguntasFrecuentes.getPagosYFacturacionPagos().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloPagosYFacturacionPagos())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("FAQs Pagos y Facturación - Mis Facturas", () => {
        paginaInicial.getPagosYFacturacion().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloPagosYFacturacion())
        preguntasFrecuentes.getPagosYFacturacionMisFacturas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloPagosYFacturacionMisFacturas())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("FAQs Pagos y Facturación - Factura Digital", () => {
        paginaInicial.getPagosYFacturacion().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloPagosYFacturacion())
        preguntasFrecuentes.getPagosYFacturacionFacturaDigital().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloPagosYFacturacionFacturaDigital())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("FAQs Pagos y Facturación - Tarifas", () => {
        paginaInicial.getPagosYFacturacion().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloPagosYFacturacion())
        preguntasFrecuentes.getPagosYFacturacionTarifas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloPagosYFacturacionTarifas())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("FAQs Soporte Técnico - Guías y Tutoriales", () => {
        paginaInicial.getSoporteTecnico().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSoporteTecnico())
        preguntasFrecuentes.getSoporteTecnicoGuiasYTutoriales().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSoporteTecnicoGuiasYTutoriales())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("FAQs Soporte Técnico - Ciberseguridad", () => {
        paginaInicial.getSoporteTecnico().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSoporteTecnico())
        preguntasFrecuentes.getSoporteTecnicoCiberseguridad().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSoporteTecnicoCiberseguridad())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("FAQs Soporte Técnico - Soporte Banda Ancha", () => {
        paginaInicial.getSoporteTecnico().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSoporteTecnico())
        preguntasFrecuentes.getSoporteTecnicoSoporteBandaAncha().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSoporteTecnicoSoporteBandaAncha())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("FAQs Soporte Técnico - Soporte Línea Hogar", () => {
        paginaInicial.getSoporteTecnico().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSoporteTecnico())
        preguntasFrecuentes.getSoporteTecnicoSoporteLineaHogar().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSoporteTecnicoSoporteLineaHogar())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("FAQs Soporte Técnico - Soporte Línea Móvil", () => {
        paginaInicial.getSoporteTecnico().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSoporteTecnico())
        preguntasFrecuentes.getSoporteTecnicoSoporteLineaMovil().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSoporteTecnicoSoporteLineaMovil())
        preguntasFrecuentes.getVerMas().first().click()
        
    })

    it("Trámites y consultas - Banda Ancha", () => {
        paginaInicial.getTramitesYConsultas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloTramitesYConsultas())
        preguntasFrecuentes.getTramitesYConsultasBandaAncha().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloTramitesYConsultasBandaAncha())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Trámites y consultas - Línea Hogar y Línea Móvil", () => {
        paginaInicial.getTramitesYConsultas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloTramitesYConsultas())
        preguntasFrecuentes.getTramitesYConsultasLineaHogarYLineaMovil().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloTramitesYConsultasLineaHogarYLineaMovil())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Trámites y consultas - Línea Hogar", () => {
        paginaInicial.getTramitesYConsultas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloTramitesYConsultas())
        preguntasFrecuentes.getTramitesYConsultasLineaHogar().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloTramitesYConsultasLineaHogar())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Trámites y consultas - Línea Móvil", () => {
        paginaInicial.getTramitesYConsultas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloTramitesYConsultas())
        preguntasFrecuentes.getTramitesYConsultasLineaMovil().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloTramitesYConsultasLineaMovil())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Trámites y consultas - Reclamos", () => {
        paginaInicial.getTramitesYConsultas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloTramitesYConsultas())
        preguntasFrecuentes.getTramitesYConsultasReclamos().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloTramitesYConsultasReclamos())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Trámites y consultas - Medios De Contacto", () => {
        paginaInicial.getTramitesYConsultas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloTramitesYConsultas())
        preguntasFrecuentes.getTramitesYConsultasMediosDeContacto().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloTramitesYConsultasMediosDeContacto())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Productos y Servicios - Servicios Línea Móvil", () => {
        paginaInicial.getProductosYServicios().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServicios())
        preguntasFrecuentes.getProductosYServiciosServiciosLineaMovil().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServiciosServiciosLineaMovil())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Productos y Servicios - Servicios Línea Hogar", () => {
        paginaInicial.getProductosYServicios().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServicios())
        preguntasFrecuentes.getProductosYServiciosServiciosLineaHogar().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServiciosServiciosLineaHogar())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Productos y Servicios - Servicios Banda Ancha", () => {
        paginaInicial.getProductosYServicios().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServicios())
        preguntasFrecuentes.getProductosYServiciosServiciosBandaAncha().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServiciosServiciosBandaAncha())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Productos y Servicios - Movistar TV", () => {
        paginaInicial.getProductosYServicios().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServicios())
        preguntasFrecuentes.getProductosYServiciosMovistarTv().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServiciosMovistarTv())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Productos y Servicios - Movistar Fibra", () => {
        paginaInicial.getProductosYServicios().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServicios())
        preguntasFrecuentes.getProductosYServiciosMovistarFibra().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServiciosMovistarFibra())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Productos y Servicios - Movistar TV Sin Decos", () => {
        paginaInicial.getProductosYServicios().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServicios())
        preguntasFrecuentes.getProductosYServiciosMovistarTvSinDecos().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServiciosMovistarTvSinDecos())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Productos y Servicios - Movistar Play Box", () => {
        paginaInicial.getProductosYServicios().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServicios())
        preguntasFrecuentes.getProductosYServiciosMovistarPlayBox().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServiciosMovistarPlayBox())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Productos y Servicios - Amazon Prime", () => {
        paginaInicial.getProductosYServicios().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServicios())
        preguntasFrecuentes.getProductosYServiciosAmazonPrime().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServiciosAmazonPrime())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Productos y Servicios - Promociones Y Beneficios", () => {
        paginaInicial.getProductosYServicios().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServicios())
        preguntasFrecuentes.getProductosYServiciosPromocionesYBeneficios().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloProductosYServiciosPromocionesYBeneficios())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Saldo y Recargas - Consulta de Saldo", () => {
        paginaInicial.getSaldoYRecargas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSaldoYRecargas())
        preguntasFrecuentes.getSaldoYRecargasConsultaDeSaldo().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSaldoYRecargasConsultaDeSaldo())
        preguntasFrecuentes.getVerMas().first().click()
    })
    
    it("Saldo y Recargas - Recargas", () => {
        paginaInicial.getSaldoYRecargas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSaldoYRecargas())
        preguntasFrecuentes.getSaldoYRecargasRecargas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSaldoYRecargasRecargas())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Saldo y Recargas - Packs", () => {
        paginaInicial.getSaldoYRecargas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSaldoYRecargas())
        preguntasFrecuentes.getSaldoYRecargasPacks().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSaldoYRecargasPacks())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Saldo y Recargas - Multiplicate", () => {
        paginaInicial.getSaldoYRecargas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSaldoYRecargas())
        preguntasFrecuentes.getSaldoYRecargasMultiplicate().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSaldoYRecargasMultiplicate())
        preguntasFrecuentes.getVerMas().first().click()
    })

    it("Saldo y Recargas - Internet por día", () => {
        paginaInicial.getSaldoYRecargas().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSaldoYRecargas())
        preguntasFrecuentes.getSaldoYRecargasInternetPorDia().click()
        helper.validarTituloPreguntasFrecuentes(preguntasFrecuentes.getTituloSaldoYRecargasInternetPorDia())
        preguntasFrecuentes.getVerMas().first().click()
    })
})