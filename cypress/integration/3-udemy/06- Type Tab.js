/*
Tab, útil para pasar de un campo de texto a otro con más rapidez, pero se pierden los asserts.
Para utilizarlo primero hay que importar la librería con: npm install -D cypress-plugin-tab
*/

require('cypress-plugin-tab') //es necesario declarar esta sentencia para que funcione el type tab. No sé por qué da error.

describe("Tabular entre cuadros de texto", () =>{

    it("Type tab", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1500)

        cy.get('#firstName').type('Bart').tab().type('Simpson').tab().type('bartsimpson@gmail.com') //da error porque está comentado el require.
    })

})
