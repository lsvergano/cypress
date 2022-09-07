/// <reference types="Cypress" />

describe("Reto con combos/listas", () =>{

    it("Ingreso al sitio", () =>{
        cy.visit("https://demo.seleniumeasy.com/jquery-dual-list-box-demo.html")
        cy.title().should('eq', 'Selenium Easy - JQuery Dual List Box Demo')
    })


    it("Agregar 7 personas a la segunda lista", () => {
        cy.get(':nth-child(1) > .form-control').should('be.visible').select(['Sophia','Giovanna','Isis','Lara','Laura','Valentina','Julia']).
        then(()=>{cy.get('.pAdd').should('be.visible').click()})
        cy.log('Se agregaron 7 personas')
        cy.wait(1000)
    })

    it("Quitar 2 personas de la lista", () => {
        cy.get(':nth-child(3) > .form-control').should('be.visible').select(["Valentina","Julia"]).then(()=>{
            cy.get('.pRemove').should('be.visible').click()
        })
        cy.log('Se quitaron 2 personas')
    })
})





