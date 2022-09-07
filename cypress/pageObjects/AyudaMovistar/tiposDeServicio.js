class tiposDeServicioPO{

    //Locators:
    lineaMovil = ".f1hf9xt2 > div:nth-of-type(1) .fodlaap"
    lineaFijaInternetFibra = ".f1hf9xt2 > div:nth-of-type(2) .fodlaap"
    lineaMovilYFijaInternet = ".f1hf9xt2 > div:nth-of-type(3) .fodlaap"
    siguiente = ".f1mibvjw"
    volver = "[aria-label='Opcion volver']"
    soloUnaLinea = ".f1hf9xt2 > div:nth-of-type(1) > .fcaipju"
    dosOMasConDni = ".f1hf9xt2 > div:nth-of-type(3) > .fcaipju"
    dosOMasConCuit = ".f1hf9xt2 > div:nth-of-type(5) > .fcaipju"
    conDni = '.f1hf9xt2 > div:nth-of-type(1) > .fcaipju'
    conCuit = '.f1hf9xt2 > div:nth-of-type(3) > .fcaipju'
    numeroDeLinea = '#nrolinea'
    enviarSms = '#btn-enviar'
    lineaIngresadaNoMovistar = 'h2'
    mensajeAniFormatoIncorrecto = '.digit-advert'
    email = '#nemail'
    constraseña = '#npass'
    ingresar = '#btn-enviar'
    mensajeEmailIncorrecto = '.nemail-invalid'
    mensajeContraseñaIncorrecta = '.npass-invalid'
    agregarLineaMovil = '.f13dbscq'

    //Textos para validar:
    textoLineaIngresadaNoMovistar = 'La línea que ingresaste no es Movistar'
    textoMensajeAniFormatoIncorrecto = 'Ingresá el número con código de área sin el 0, y sin el 15.'
    textoMensajeEmailIncorrecto = 'Ingresá el email con el que se creo la cuenta.'
    textoMensajeContraseñaIncorrecta = 'Revisá que tus datos sean los correctos.'
    
    
    getLineaMovil() {
        return cy.get(this.lineaMovil)
    }

    getLineaFijaInternetFibra() {
        return cy.get(this.lineaFijaInternetFibra)
    }

    getLineaMovilYFijaInternet() {
        return cy.get(this.lineaMovilYFijaInternet)
    }

    getSiguiente() {
        return cy.get(this.siguiente)
    }

    getVolver() {
        return cy.get(this.volver)
    }

    getSoloUnaLinea() {
        return cy.get(this.soloUnaLinea)
    }

    getDosOMasConDni() {
        return cy.get(this.dosOMasConDni)
    }

    getDosOMasConCuit() {
        return cy.get(this.dosOMasConCuit)
    }

    getConDni() {
        return cy.get(this.conDni)
    }

    getConCuit() {
        return cy.get(this.conCuit)
    }

    getNumeroDeLinea() {
        return cy.get(this.numeroDeLinea)
    }

    getEnviarSms() {
        return cy.get(this.enviarSms)
    }

    getLineaIngresadaNoMovistar() {
        return cy.get(this.lineaIngresadaNoMovistar)
    }

    getTextoLineaIngresadaNoMovistar() {
        return this.textoLineaIngresadaNoMovistar
    }

    getMensajeAniFormatoIncorrecto() {
        return cy.get(this.mensajeAniFormatoIncorrecto)
    }

    getTextoMensajeAniFormatoIncorrecto() {
        return this.textoMensajeAniFormatoIncorrecto
    }

    getEmail(){
        return cy.get(this.email)
    }
    
    getContraseña(){
        return cy.get(this.constraseña)
    }

    getIngresar(){
        return cy.get(this.ingresar)
    }

    getMensajeEmailIncorrecto(){
        return cy.get(this.mensajeEmailIncorrecto)
    }

    getTextoMensajeEmailIncorrecto(){
        return this.textoMensajeEmailIncorrecto
    }

    getMensajeContraseñaIncorrecta(){
        return cy.get(this.mensajeContraseñaIncorrecta)
    }

    getTextoMensajeContraseñaIncorrecta(){
        return this.textoMensajeContraseñaIncorrecta
    }

    getAgregarLineaMovil(){
        return cy.get(this.agregarLineaMovil)
    }
}
export default tiposDeServicioPO;