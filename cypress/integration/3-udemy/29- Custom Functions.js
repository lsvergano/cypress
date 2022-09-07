/// <reference types='Cypress' />

require('cypress-xpath')

describe('Funciones personalizadas', () =>{

    before(()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq', 'My Store')
        cy.wait(500)
    })

    //Las funciones se declaran en el archivo commands.js dentro de la carpeta support.
    it('Funcion Uno', () =>{
        cy.CompletarTexto("#search_query_top", "Dress", 700)
        //Se pasan los parámetros/argumentos definidos en la función.
    })

    it('Funcion Dos', function(){
        cy.ClickLupa('#searchbox > .btn')
    })
})