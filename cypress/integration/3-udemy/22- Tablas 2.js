/// <reference types="Cypress" />

describe("Obtener distintos elementos de una tabla", () =>{

    it("Recorrer todos los datos de la tabla", () =>{
        cy.visit("https://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title().should('eq', 'Selenium Easy - Tabel Sort and Search Demo')

        const datos = [] //Definimos un arreglo donde vamos a guardar los datos de la tabla.

        cy.get("[role='row'] td").each(($el, index, $list)=>{  //El each lleva siempre tres variables.
            //[role='row'] (sin td) traería todo agrupado.
            datos[index]=$el.text()  //Guarda el texto de cada instancia each de la clase en el arreglo.
        }).then(()=>{ //promesa. Luego de recorrido todo el each, hacer lo siguiente..
            for(let i = 0; i <= datos.length; i++){ //For que recorre toda la longitud del arreglo.
                cy.log(datos[i])  //imprime el dato de cada posición del arreglo.
            }
        })
    })


    it("Recorrer todos los datos de la tabla", () =>{

        const datos = []
        let cantidad = 0

        cy.get("[role='row'] td").each(($el, index, $list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let i = 0; i <= datos.length; i++){
                if(Number(datos[i])){           //Si el dato es numérico
                    cantidad+=Number(datos[i]) //cantidad+= x es lo mismo que hacer cantidad = cantidad + x
                }
            }
            cy.log("La suma es: " + cantidad)
            expect(cantidad).eq(394) //Todos son válidos
            expect(cantidad).equal(394)
            expect(cantidad).to.eq(394)
            expect(cantidad).to.equal(394)
        })
    })

    it("Averiguar la edad del Sr A. Satou", () =>{

        let columna = cy.get(":nth-child(3) > .sorting_1") //Obtengo la celda donde dice A. Satou.
        columna.each(($el, index, $list)=>{ //El each lleva siempre 3 variables.
            let dato = $el.text()  //Guardo el texto del elemento en una variable.
            
            if(dato.includes("A. Satou")){  //Si la variable incluye el texto...
                columna.eq(index).next().next().next().then((edadInterna)=>{  //En la columna situada (el index lo obtiene del each)...
                //con next se saltea a la sigiuente. Pasa tres columnas y hace una promesa con el parámetro edad Interna.
                    let edad = edadInterna.text() //El texto de edadInterna lo guardo en la variable edad.
                    cy.log("La edad de " + dato + " es de "+ edad + " años.")
                    expect(edad).eq('33') //Entre comillas porque en la tabla está como texto.
                })
            }


        })

    })


})