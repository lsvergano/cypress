/*

Presionar Ctrl + P en VSC (abre cuadro de búsqueda).
Escribir ">snippet" y seleccionar la opción "configurar snippets"
Aparece una lista de lenguajes, seleccionar javascript.
Abre el archivo con los snippets (javascript.json), ahí se pueden crear.

Ejemplo de snippet:

"Plantilla_inicial": {
		"body": [
			
			"/// <reference types='Cypress' />",
			"",
			"require('cypress-xpath')",
			"",
			"describe('${1}', () =>{",
			"",
    			"\tit('${2}', () =>{",
        			"\t\tcy.visit('${3}')",
        			"\t\tcy.title().should('eq', '${4}')",
    			"\t})",
			"})"

		],
		"description": "Plantilla_inicial"
		 }
}
_______________________________________________________________________

Dentro del body se pone el código del snippet.
Los '${1}', '${2}', etc es el orden donde se pondrá el foco al tabular.
También se puede poner '${1:descripcion}', '${2:tituloDelTest}', etc.
"\t" indica tabulación.
Todas las líneas deben ir entre comillas dobles y con coma al final.
(por eso dentro de cada instrucción hay que usar comillas simples).

*/

/// <reference types='Cypress' />
			
require('cypress-xpath')

describe('Prueba snippets', () =>{
			
    it('Test Snippet', () =>{
        cy.visit('https://www.google.com')
        cy.title().should('eq', 'Google')
    })
})