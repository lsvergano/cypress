/// <reference types="Cypress" />

describe("Aserciones varias", () =>{

require('cypress-xpath')

    it("Ingreso al sitio", () =>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq', 'My Store')
    })

    it("Contains", ()=> {
        cy.get("#block_top_menu").contains("Women").click()
        //Contains busca dentro de un elemento padre un elemento hijo que contenga el valor.
    })

    it("Find y Eq", () => {
        cy.get('.left-block').find(".product-image-container").eq(2).click() /*Find busca una clase hijo dentro de clase padre.
        Eq indica el índice para seleccionar uno solo cuando hay varios iguales. Como el índice de un arreglo.*/
        
        //cy.get('.left-block').eq(2).click() -> También funciona sin el find
    })

    it("Validando un texto e imprimiendo según lo que dice", ()=>{
        // get("#id <espacio> .clase") --> seleccionam id (padre) Y clase(hijo).
        cy.get("#product_condition .editable").then((etiqueta)=>{ //Promesa que toma como parámetro el elemento seleccionado
            let vestido = etiqueta.text() //Se guarda el texto del elemento en una variable
            if(vestido=="New"){
                cy.log("El vestido es nuevo")
            }
        })
    })

    it("Validando el precio", ()=>{
        cy.get("#our_price_display").then((precio)=>{
            let valor = precio.text().slice(1, precio.text().indexOf('.')) //Desde el segundo caracter hasta que encuentre el punto.
            if(valor < 27){
                cy.log("Está barato, lo compro")
                cy.get('#add_to_cart').click()
            }
            else{
                cy.log("Es un robooo, no me alcanza")
                cy.xpath('//*[@id="columns"]/div[1]/a[2]').click()
            }
        })
    })
    
    it.only("Have text y contain text", ()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')

        cy.get("#userName").should("be.visible", {timeout:5000}).type("Lucho") //timeout opcional: para setear el máximo de espera.
        cy.get("#submit").should("be.visible").click()

        cy.get("#name").should("have.text", "Name:Lucho")   //Valida texto igual a
        cy.get("#name").should("contain.text", "Lucho")     //Valida que contenga ese valor en alguna parte del texto
    })

    it("Have value", () => {
        cy.get("#userName").should("be.visible").clear().type("LSV")
        cy.get("#userName").should("have.value", "LSV").then(()=>{ //Si el valor del campo es X entonces función
            cy.get("#userEmail").should("be.visible").type("lucho@gmail.com")
            cy.get("#submit").should("be.enabled").click()
        })
    })

    it("Have class", ()=>{
        cy.get("#userName").should("be.enabled").should("have.class", "mr-sm-2").then(()=>{ /*También se puede usar and en lugar del segundo should:
        cy.get("#userName").should("be.enabled").and("have.class", "mr-sm-2").then(()=>{
        Se tienen que cumplir las dos condiciones para llegar al then. Básicamente es lo mismo que usar dos should.. */
            cy.get("#userName").clear().type("Lucho")
        })
    })

    it("Not", ()=>{
        cy.get("#userName").should("be.enabled").should("not.have.class", "clase_falsa_123").then(()=>{ 
            cy.get("#userName").clear().type("Lucho")
        })
    })

    it("Lenght y CSS", () => {
        cy.visit("https://demo.seleniumeasy.com/table-pagination-demo.html")
        cy.title().should('eq', 'Selenium Easy - Table with Pagination Demo')

        cy.get("#myTable >tr >td").should("have.length", 91).and("have.css", "padding", "8px")
        // ">" selecciona sub elemento dentro del elemento. En este caso td dentro de tr dentro de la tabla.
        // Have.lenght cuenta longitud, en este caso 91 elementos en la tabla.
        // Have.css valida el estilo de CSS, en este caso el padding (relleno?) de 8 píxeles.
    })

    it("Contains para seleccionar un elemento", () => {
        let tiempo = 1000
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title().should('eq', 'Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(tiempo)

        //Cerrar cartel emergente
        cy.get(".at-cm-no-button").should("be.visible").click({force:true})

        cy.get(".form-group > #user-message").should("be.visible").type("A la grande le puse Cuca")

        cy.contains("[type='button']", "Show Message").should("be.visible").click({force:true})
        //Selecciona dentro de todos los "type button" el que contenga el texto Show Message.
        //Al utilizar "Contains" no es necesario que esté el texto completo. Alcanza con una porción del texto que sea unívoca.
    
    })

    it("Validación de sumas", () => {
        /*Útil para cuando hay operaciones matemáticas dentro de la página.
        Se puede hacer la operación internamente y comparar el resultado con el que muestra la página*/

        let a = 10
        let b = 15

        cy.get("#sum1").should("be.visible").type(a)
        cy.get("#sum2").should("be.visible").type(b)

        cy.contains("[type='button']", "Get Total").click()

        cy.get("#displayvalue").should("be.visible").then((e)=>{
            let resultado = e.text() //Se guarda en una variable el resultado mostrado por la página.
            if (resultado == a + b){ //Se valida que el resultado de la página sea igual al cálculo interno.
                cy.log("La suma está bien")
            }else{
                cy.log("La suma está mal")
            }
        })
    })

    it("Invoke", ()=>{
        //Invocar un atributo del elemento.
        cy.wait(1000)

        cy.get("#sum1").invoke("attr", "placeholder").should("contain", "Enter value").then(()=>{
            cy.get("#sum1").clear().type('27')
        })

        //Invoke también puede crear el atributo si el elemento no lo contiene.
        //Acá por ejemplo se le crea un atributo de color y se aplica color rojo.

        cy.get("#sum1").invoke("attr", "Style", "color:red")
    })

    it("Invoke para cancelar nueva pestaña", () => {
        cy.visit("https://www.argentina.gob.ar/censo2022")
        cy.title().should('eq', 'Censo 2022 | Argentina.gob.ar')
        cy.wait(700)

        cy.contains("Conocé más").should('be.visible').invoke('removeAttr', 'target').click()
        //El atributo 'target' en la página indica que abre una nueva ventana. Con rmeoveAttr en el invoque se quita ese atributo.
    })

    //Assert "expect" en archivo 22- Tablas 2.js.
})