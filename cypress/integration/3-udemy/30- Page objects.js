import ProyectoUdemy from '../../support/PageObjects/ProyectoUdemy/PO_Udemy'
/// <reference types='Cypress' />

require('cypress-xpath')

describe('Page Objets Model', () =>{

    const master = new ProyectoUdemy()

    master.visitHome()

    master.mensajeFinal()

    //A veces necesario para evitar errores:
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Sección 1', () =>{
        master.seccionUno('Josefa', 'Pérez', 'josefaperez@gmail.com', 100)
    })

    it('Sección 2', function(){
        master.seccionDos(2215557777, 'Calle falsa 123', 'La Plata', 'California', 100)
    })

    it('Sección 3', () => {
        master.seccionTres(1900, 'josefaperez.com', 'Cosas de Josefa', 100)
    })
})