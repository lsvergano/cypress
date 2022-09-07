class homePO{

    origen = '.css-1iislav-control'
    botonBuscar = '//*[@id="root"]/main/div[2]/article/section/div[1]/div[2]/div[2]/button'
    fechaIda = '//*[@id="root"]/main/div[2]/article/section/div/div/div/div/div[1]/div[2]/div[4]/div[2]/section/div[1]'
    fechaVuelta = '//*[@id="root"]/main/div[2]/article/section/div/div/div/div/div[1]/div[2]/div[5]/div[2]/section/div[1]'
    botonBuscarPasajes = '//*[@id="root"]/main/div[2]/article/section/div/button'

    getOrigen() {
        return cy.get(this.origen)
    }

    getBotonBuscar() {
        return cy.xpath(this.botonBuscar)
    }

    getFechaIda() {
        return cy.xpath(this.fechaIda)
    }

    getFechaVuelta() {
        return cy.xpath(this.fechaVuelta)
    }

    getBotonBuscarPasajes () {
        return cy.xpath(this.botonBuscarPasajes)
    }

}
export default homePO;