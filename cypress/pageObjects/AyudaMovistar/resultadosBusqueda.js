class resultadosBusquedaPO{

    //Textos para validar:
    textoTituloResultado = 'Resultados de Búsqueda'
    textoResultadoEncontrado = "Mostrando resultados para: "
    textoResultadoNoEncontrado = 'No se encontraron resultados para tu consulta. Te recomendamos usar frases cortas y palabras claves. Ej.: "lugares de pago"'

    //Locators:
    tituloResultado = '.page-title'
    resultadoEncontrado = '.search-results'
    resultadoNoEncontrado = '.alert-warning'
    
    
    getTextoTituloResultado() {
        return this.textoTituloResultado
    }

    getTextoResultadoEncontrado() {
        return this.textoResultadoEncontrado
    }

    getTextoResultadoNoEncontrado() {
        return this.textoResultadoNoEncontrado
    }

    getTituloResultado() {
        return cy.get(this.tituloResultado)
    }

    getResultadoEncontrado() {
        return cy.get(this.resultadoEncontrado)
    }

    getResultadoNoEncontrado() {
        return cy.get(this.resultadoNoEncontrado)
    }

}
export default resultadosBusquedaPO;