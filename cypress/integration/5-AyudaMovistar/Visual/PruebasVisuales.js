/// <reference types="Cypress" />

before(()=>{
  cy.visit(Cypress.env("urlAyudaMovistar"))
})

describe("Pruebas visuales", () => {

    it('Captura Home completo', () => {
      cy.document().toMatchImageSnapshot({
        "imageConfig": {
          "createDiffImage": true,
          "threshold": 0.01,
          "thresholdType": "percent", //Puede ser pixel o percent
        },
        "name": "custom image name",
        "separator": "custom image separator",
      });
    })

    it('Captura imagen logo Movistar', () => {
      cy.get('.py-0.bg-white #logo-movistar').toMatchImageSnapshot()
    })

    it('Captura logo Movistar', () => {
      cy.get('.py-0.bg-white #logo-movistar').toMatchSnapshot()
    })

})

/*Captura imagen coordenadas exactas:
cy.document().toMatchImageSnapshot({
    clip: { x: 0, y: 0, width: 100, height: 100 },
  });


Configuración captura (de texto):
{
  "ignoreExtraFields": false,
  "ignoreExtraArrayItems": false,
  "normalizeJson": true,
  "replace": {
    "key": "value",
  }
  */