    /*Excepciones para atrapar un error
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })*/

    //Aserciones expect:
    //expect(var1).to.equal(var2)
    //expect(var1).to.contain(var2)

    //cypress.json
    //"pageLoadTimeout": 9000 (tiempo máximo permitido para cargar una página)
    //"defaultCommandTimeout": 20000 (tiempo máximo permitido para cargar un campo)

    //También se puede en el arhivo .js (en el before o antes):
    //Cypress.config("defaultCommandTimeout", 20000)
    //La diferencia es que en cypress.json tiene alcance para todos los proyectos. En el .js sólo para ese puntual.

    //_____________________________________//

    //Videos: Se crean cuando se corre por consola (se crean con el run, no con el open). Por ejemplo:
    //npx cypress run --spec "cypress\integration\4-Flybondi\Funcional\ComprarPasajeTarjetaInvalida.js"

    //cy.screenshot("nombre archivo")
    //también se crean solamente cuando se corre por npx.

    //Key para integración continua (se obtiene al iniciar sesión y configurar dashboard)
    //npx cypress run --record --key c60bdaf7-1df1-4d1c-b42b-4da7de9be959
    //npx cypress run --browser chrome --record --key c60bdaf7-1df1-4d1c-b42b-4da7de9be959 --env grep="texto a filtrar"