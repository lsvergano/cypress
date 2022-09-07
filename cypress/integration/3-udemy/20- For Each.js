/// <reference types="Cypress" />

describe("Bucles For y Each", () =>{

    it("Bucle Each", () =>{ //Recorre todos los elementos de la clase e imprime el nombre.
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq', 'My Store')
        cy.wait(500)

        cy.get(".product-name").each(($el, index, $list) => { //Los 3 param no son obligatorios. Se sugiere usar cy.log para ver qué traen.
            cy.log($el.text())
        })
    })

    it("Bucle Each", () =>{ //Recorre todos los nombres y hace click en uno en especial.
        
        cy.get(".product-name").each(($el, index, $list) => {
            let vestido = $el.text()
            if(vestido.includes("Blouse")){
                cy.wrap($el).click() //Wrap para seleccionar el elemento. No se puede usar el get dentro del each.
                //Este ejemplo devuelve un warning pero no se rompe.
            }
        })
    })

    it("Bucle For", () => { //En una clase donde hay varios elementos iguales, entra en los 3 primeros, toca algo y vuelve.
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq', 'My Store')
        cy.wait(500)

        for(let i=0; i<=2; i++){ //i++ indica que se incrementa de a 1.
            cy.get("#center_column .product-name").eq(i).click({force:true})
            cy.wait(1500)
            cy.get("#quantity_wanted").should("be.visible").clear().type('5')
            cy.get(".icon-home").should('be.visible').click({force:true})
            cy.wait(1500)
        }

    })

    it.only("Bucles For Each", () => { //Recorre todos los elementos.
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq', 'My Store')
        cy.wait(500)
        const datos = [] //Constante en la cual se va a guardar la cantidad de elementos que tiene la clase.

        cy.get("#center_column .product-name").each(($el, index, $list) => {    //Each que recorre todo el elemento.
            datos[index] = $el.text()   //Se guardan los elementos en la variable datos.
        }).then(()=>{
            for(let i=0; i<=datos.length; i++){ //Hasta longitud de datos.
                cy.get("#center_column .product-name").eq(i).click({force:true})
                cy.wait(1500)
                cy.get("#quantity_wanted").should("be.visible").clear().type('5')
                cy.get(".icon-home").should('be.visible').click({force:true})
                cy.wait(1500)
        }

        })
    })

})