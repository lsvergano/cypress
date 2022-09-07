
class ProyectoUdemy{

    visitHome(){
        let tiempo = 500
        before(function(){
            cy.visit('https://demo.seleniumeasy.com/input-form-demo.html')
            cy.title().should('eq', 'Selenium Easy - Input Form Demo with Validations')
            cy.wait(tiempo)
        })
    }

    mensajeFinal(){
        after(()=>{
            cy.log("Pruebas finalizadas")
        })
    }

    seccionUno(nombre, apellido, email, tiempo){
        cy.xpath('//*[@id="contact_form"]/fieldset/div[1]/div/div/input').clear().should('be.visible').type(nombre)
        cy.wait(tiempo)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[2]/div/div/input').clear().should('be.visible').type(apellido)
        cy.wait(tiempo)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[3]/div/div/input').clear().should('be.visible').type(email)
        cy.wait(tiempo)
    }

    seccionDos(telefono, dire, ciudad, estado, tiempo){
        cy.xpath('//*[@id="contact_form"]/fieldset/div[4]/div/div/input').clear().should('be.visible').type(telefono)
        cy.wait(tiempo)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[5]/div/div/input').clear().should('be.visible').type(dire)
        cy.wait(tiempo)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[6]/div/div/input').clear().should('be.visible').type(ciudad)
        cy.wait(tiempo)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[7]/div/div/select').select(estado)
        cy.wait(tiempo)
    }

    seccionTres(codigo_postal, web, proyecto, tiempo){
        cy.xpath('//*[@id="contact_form"]/fieldset/div[8]/div/div/input').clear().should('be.visible').type(codigo_postal)
        cy.wait(tiempo)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[9]/div/div/input').clear().should('be.visible').type(web)
        cy.wait(tiempo)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[10]/div/div[1]/label/input').check().should('be.checked')
        cy.wait(tiempo)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[11]/div/div/textarea').clear().should('be.visible').type(proyecto)
        cy.wait(tiempo)
        cy.xpath('//*[@id="contact_form"]/fieldset/div[13]/div/button').should('be.visible').click()
        cy.wait(tiempo)
    }
}

export default ProyectoUdemy;