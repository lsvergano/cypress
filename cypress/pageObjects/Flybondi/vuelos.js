class vuelosPO {

    textoIda = ':nth-child(1) > .ph3.ph2-l > .pb3 > .ml3-ns > :nth-child(2) > .f5'
    textoVuelta = ':nth-child(1) > .ph3.ph2-l > .pb3 > .ml3-ns > :nth-child(4) > .f5'
    botonContinuarHora = '[type="Button"]'
    botonContinuarEquipaje = '.flex-row-reverse-l > :nth-child(1) > .jsx-3530300578'
    botonNoQuieroAgregarEquipaje = '/html/body/div[4]/div/div/article/section[2]/button[2]'
    //botonSinAsiento = '[type="Button"]'
    botonSinAsiento = '.fr > .jsx-3530300578'

    getTextoIda() {
        return cy.get(this.textoIda)
    }

    getTextoVuelta() {
        return cy.get(this.textoVuelta)
    }
    
    getBotonContinuarHora() {
        return cy.get(this.botonContinuarHora).contains("Continuar")
    }

    getBotonContinuarEquipaje() {
        return cy.get(this.botonContinuarEquipaje)
    }

    getBotonNoQuieroAgregarEquipaje() {
        return cy.xpath(this.botonNoQuieroAgregarEquipaje)
    }

    getBotonSinAsiento() {
        //return cy.get(this.botonSinAsiento).contains("Sin Asiento")
        return cy.get(this.botonSinAsiento)
    }

}
export default vuelosPO;