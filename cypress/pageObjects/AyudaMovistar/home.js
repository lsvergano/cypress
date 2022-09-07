class homePO{

    //Textos para validar:
    titulo = 'Atención al cliente: Consultas y Soporte Técnico | Movistar Argentina'
    textoTituloHome = "¿En qué te podemos ayudar hoy?"

    //Locators:
    cuadroDeBusqueda = "[placeholder='Escribí tu consulta acá…']"
    buscar = '.mdi'
    tituloHome = 'h2'
    miMovistar = ".py-0.bg-white [alt='icono de usuario']"
    celulares = '#link-cajas-topicos-home-celulares'
    pagosYFacturacion = '#link-cajas-topicos-home-pagos-y-facturacion'
    soporteTecnico = '#link-cajas-topicos-home-soporte-tecnico'
    tramitesYConsultas = '#link-cajas-topicos-home-tramites-y-consultas'
    productosYServicios = '#link-cajas-topicos-home-productos-y-servicios'
    saldoYRecargas = '#link-cajas-topicos-home-saldo-y-recargas'
    consejosParaOptimizar = '#link-cajas-acciones-home-consejos-para-optimizar-tus-servicios-hogar'
    verificacionTecnicaBandaAncha = '#link-cajas-acciones-home-verificacion-tecnica-banda-ancha'
    verificacionTecnicaLineaFija = '#link-cajas-acciones-home-verificacion-tecnica-linea-fija'
    seguimientoReclamosTecnicos = '#link-cajas-acciones-home-seguimiento-de-reclamos-tecnicos'
    nominacionLineasMoviles = '#link-cajas-acciones-home-nominacion-de-lineas-moviles'
    cuponDePago = '#link-cajas-acciones-home-cupon-de-pago'
    guiaTelefonica = '#link-cajas-acciones-home-guia-telefonica'
    notificacionesDigitales = '#link-cajas-acciones-home-notificaciones-digitales'
    
    getTitulo() {
        return this.titulo
    }

    getTextoTituloHome() {
        return this.textoTituloHome
    }

    getCuadroDeBusqueda() {
        return cy.get(this.cuadroDeBusqueda)
    }

    getBuscar() {
        return cy.get(this.buscar)
    }

    getTituloHome() {
        return cy.get(this.tituloHome)
    }

    getMiMovistar() {
        return cy.get(this.miMovistar)
    }

    getCelulares() {
        return cy.get(this.celulares)
    }

    getPagosYFacturacion() {
        return cy.get(this.pagosYFacturacion)
    }

    getSoporteTecnico() {
        return cy.get(this.soporteTecnico)
    }

    getTramitesYConsultas() {
        return cy.get(this.tramitesYConsultas)
    }

    getProductosYServicios() {
        return cy.get(this.productosYServicios)
    }

    getSaldoYRecargas() {
        return cy.get(this.saldoYRecargas)
    }

    getConsejosParaOptimizar() {
        return cy.get(this.consejosParaOptimizar)
    }

    getVerificacionTecnicaBandaAncha() {
        return cy.get(this.verificacionTecnicaBandaAncha)
    }

    getVerificacionTecnicaLineaFija() {
        return cy.get(this.verificacionTecnicaLineaFija)
    }

    getSeguimientoRelamosTecnicos() {
        return cy.get(this.seguimientoReclamosTecnicos)
    }

    getNominacionLineasMoviles() {
        return cy.get(this.nominacionLineasMoviles)
    }

    getCuponDePago() {
        return cy.get(this.cuponDePago)
    }

    getGuiaTelefonica() {
        return cy.get(this.guiaTelefonica)
    }

    getNotificacionesDigitales() {
        return cy.get(this.notificacionesDigitales)
    }

}
export default homePO;