/// <reference types='Cypress' />

require('cypress-xpath')

describe('Before, BeforeEach, AfterEach, After', () =>{

    let tiempo = 100 //Si se declara dentro del Before puede dar error, así que mejor hacerla global.

    before(function(){
        cy.log('Comienzan las pruebas')
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq', 'My Store')
        cy.wait(tiempo)
    })

    beforeEach(function(){
        cy.log('Comienzo de test')
    })

    afterEach(function(){
        cy.log('Finaliza test')
    })

    after(function(){
        cy.log('Finalizaron todas las pruebas.')
    })

    it('Prueba uno', () =>{
        cy.get('#search_query_top').should('be.visible')
    })

    it('Prueba dos', () => {
        cy.get('.login').should('be.visible')
    })

    it('Prueba tres', function(){
        cy.get('.active > .homefeatured').should('be.visible')
    })
})