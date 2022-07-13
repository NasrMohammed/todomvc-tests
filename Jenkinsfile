pipeline {
    agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:10'
    }
  }
    stages {
        stage('Run cypress tests') {
            steps {
            //sh "rm -r cypress/results/*" 
            //sh "rm -r mochawesome-report/*"
           // sh "rm -r cypress/screenshots/*"
            sh "npm install" 
            sh "chmod -R 777 *"
            sh "sudo chown -R 115:122 '/.npm'"
            sh "cypress install"
            sh "npx cypress run --browser chrome"  
            //sh "npm run mochawesome:merge" 
            }
        }
         
    }
}
