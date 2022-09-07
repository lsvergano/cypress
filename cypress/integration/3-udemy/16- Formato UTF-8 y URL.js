/// <reference types="Cypress" />

//UTF-8 permite utilicer tildes y la ñ.

describe("Referencias a ventanas",()=>{

    it("Propiedad Charset", ()=>{
    
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should("eq", "The Number Game")

        cy.document().should("have.property", "charset").and("eq", "UTF-8")
    })

    it("Validar URL",()=>{

        cy.url().should("include", "random-number.html") //Valida que la URL incluya/contenga esa parte.
        cy.url().should("eq", "https://testsheepnz.github.io/random-number.html") //Valuda la URL completa.
    })

})