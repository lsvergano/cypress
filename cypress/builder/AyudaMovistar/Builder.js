export default class datosBuilder {

    busquedaInvalida() {
        this.textoBusqueda = 'abcdefg'
        return this
    }

    busquedaValida() {
        this.textoBusqueda = 'Portabilidad'
        return this
    }

    clienteLineaNoMovistar() {
        this.ANI = '1177777777'
        return this
    }

    clienteLineaFormatoInvalido() {
        this.ANI = '45459090'
        return this
    }

    clienteEmailIncorrecto() {
        this.email = 'correo@prueba'
        this.contraseña = '12345'
        return this
    }

    clienteContraseñaIncorrecta() {
        this.email = 'correo@prueba.com'
        this.contraseña = '1234'
        return this
    }

}