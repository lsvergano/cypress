// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import 'cypress-axe';

import 'cypress-plugin-snapshots/commands';


let isSoftAssertion = false;
let errors = [];


const { initPlugin } = require('cypress-plugin-snapshots/plugin');
 
module.exports = (on, config) => {
  initPlugin(on, config);
  return config;
};

/*Configuración Snapshot
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
  "imageConfig": {
    "createDiffImage": true,
    "threshold": 0.01,
    "thresholdType": "percent", // Puede ser pixel o percent
  },
  "name": "custom image name",
  "separator": "custom image separator",
});
*/

chai.softExpect = function ( ...args ) {
    isSoftAssertion = true;
    return chai.expect(...args);
},
chai.softAssert = function ( ...args ) {
    isSoftAssertion = true;
    return chai.assert(...args);
}

const registerCypressGrep = require('cypress-grep')
registerCypressGrep()