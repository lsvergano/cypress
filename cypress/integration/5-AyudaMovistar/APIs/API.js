/// <reference types="Cypress" />

describe('Pruebas de API', () => {
    let api;

    it('Get - código 200', () => {
        api = cy.request('https://postman-echo.com/get?nombre=Lucho&edad=38')
        api.its("status").should("equal", 200)
    })

    it('Get - Código 200 con expect', () => {
        api = cy.request('https://postman-echo.com/get?nombre=Lucho&edad=38')
        .should((response)=>{
            expect(response.status).to.eq(200)
        })
    })

    it('Get - Verificación de campos (un sólo registro)', () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/get?nombre=Lucho&edad=38',
            headers: {
                accept: 'application/json'
            }
        }).then((response)=>{

            expect(response.status).to.eq(200)
            
            let datos;
            datos = JSON.parse(JSON.stringify(response.body))

            expect(datos.args).has.property("nombre", "Lucho")
            expect(datos.args).has.property("edad", "38")
            expect(datos.headers).has.property("x-forwarded-port", "443")
        })
    })

    it('Get - Verificación de campos (campos arrays)', () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/get?nombre=Lucho&edad=38&nombre=Ivana&edad=33',
            headers: {
                accept: 'application/json'
            }
        }).then((response)=>{
            let datos;
            datos = JSON.parse(JSON.stringify(response.body))

            expect(datos.args.nombre[0]).to.eq("Lucho")
            expect(datos.args.edad[0]).to.eq("38")
            
            expect(datos.args.nombre[1]).to.eq("Ivana")
            expect(datos.args.edad[1]).to.eq("33")
        })
    })

    //sitio de apis de tragos: https://www.thecocktaildb.com/api.php

    it('Get - Verificación de campos (muchos registros)', () => {

        cy.request({
            method: 'GET',
            url: 'www.thecocktaildb.com/api/json/v1/1/search.php?f=c', //tragos que empiezan con la letra c
            headers: {
                accept: 'application/json'
            }
        }).then((response)=>{
            let datos;
            datos = JSON.parse(JSON.stringify(response.body))

            expect(datos.drinks[0]).has.property("strDrink", "Casino")
            expect(datos.drinks[0]).has.property("idDrink", "17185")
            expect(datos.drinks[1]).has.property("strDrink", "Caipirinha")
            expect(datos.drinks[1]).has.property("idDrink", "11202")
        })
    })

    it('Get con usuario y contraseña', () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            failOnStatusCode: false, //hace que no falle el test si el estado es distinto de 2xx o 3xx (por ej 401 no autorizado)
            auth: {
                username: "postman",
                password: "password"
                },
            headers: {
                accept: 'application/json'//,
                /*Otra opción (obtenido del header del request en la consola de postman):
                Authorization: "Basic cG9zdG1hbjpwYXNzd29yZA=="*/
                }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })

    it('Get con token', () => {
        cy.request({
            method: 'GET',
            url: 'http://httpbin.org/bearer',
            failOnStatusCode: false,
            headers: {
                accept: 'application/json',
                Authorization: "Bearer lucho27", //Bearer = tipo de autorización || lucho27 = token (obtenido de Postman)
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })

    it('Post', () => {
        cy.request({
            method: 'POST',
            url: 'https://postman-echo.com/post',
            body: {
                'Nombre': 'Lucho',
                'Edad': 38
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })

    it('Post múltiples registros', () => {

        let ciudades = ['La Plata', 'Bariloche', 'Buenos Aires', 'Córdoba', 'Mendoza']
        
        for(let i=1; i<=ciudades.length; i++){

            cy.request({
                method: 'POST',
                url: 'https://postman-echo.com/post',
                body: {
                    'Ciudad': ciudades[i]
                }
            }).then((response)=>{
                expect(response.status).to.eq(200)
            })
        }

    })

    it('Put (editar)', () => {
        cy.request({
            method: 'PUT',
            url: 'https://postman-echo.com/put',
            body: {
                'Nombre': 'Lucho',
                'Edad': 39
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })

    it('Delete', () => {
        cy.request({
            method: 'Delete',
            url: 'https://postman-echo.com/delete',
            body: {
                'id': 1
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
    })

    it('Servicio SOAP', () => {

        let numA = 5
        let numB = 7
        let suma = numA + numB

        const bodyRequest = `<?xml version="1.0" encoding="utf-8"?>\n<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n  <soap:Body>\n    <Add xmlns="http://tempuri.org/">\n      <intA>` + numA + `</intA>\n      <intB>` + numB + `</intB>\n    </Add>\n  </soap:Body>\n</soap:Envelope>`

        cy.request({
            method: 'POST',
            url: 'http://www.dneonline.com/calculator.asmx',
            failOnStatusCode: true,
            headers: {
                'Content-Type': 'text/xml',
            },
            body: bodyRequest
 
        }).then((response)=>{
            expect(response.status).to.eq(200)

            expect(response.body).contains('<AddResult>' + suma)

            //response = JSON.parse(JSON.stringify(response.body))
            //expect(response).contains('<AddResult>' + suma)
        })     
    })

})