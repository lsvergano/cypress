/// <reference types="Cypress" />

//primero instalar paquete con npm install --save-dev cypress-file-upload
import 'cypress-file-upload'

describe('Carga de archivos',()=>{

    it("Cargar una imagen", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1500)
        
        let archivo='Diablo.png' //Se define el archivo a subir. Por defecto debe estar en la carpeta fixtures.
        cy.get('#uploadPicture').attachFile(archivo)

    })


})