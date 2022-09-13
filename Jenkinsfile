pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Casos Cypress 2 nodos paralelos') {
            parallel {
                stage('Nodo Chrome') {
                    agent {
                        label "Nodo_1"
                    }
                    steps {
                        git url: 'https://github.com/lsvergano/cypress.git'
                        bat 'npm install cypress@9.7.0'                      
                        bat 'npx cypress run --browser chrome --record --key c60bdaf7-1df1-4d1c-b42b-4da7de9be959 --spec "cypress/integration/5-AyudaMovistar/APIs/API.js"  --parallel'
                    
                    }
                }

                stage('Nodo Firefox') {
                    agent {
                        label "Nodo_2"
                    }
                    steps {
                        git url: 'https://github.com/lsvergano/cypress.git'
                        bat 'npm install cypress@9.7.0'                      
                        bat 'npx cypress run --browser chrome --record --key c60bdaf7-1df1-4d1c-b42b-4da7de9be959 --spec "cypress/integration/5-AyudaMovistar/APIs/API.js"  --parallel'
                    
                    }
                }
   
                  
            }

             
        }

    }
            
}