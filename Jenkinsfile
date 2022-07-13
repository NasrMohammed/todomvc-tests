pipeline {
    agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:16'
    }
  }
    stages {
        stage('Run cypress tests') {
            steps {
            //sh "rm -r cypress/results/*" 
            //sh "rm -r mochawesome-report/*"
           // sh "rm -r cypress/screenshots/*"
            sh "mkdir /root/.cache"
            sh "chmod -R 777 *"
            sh "./node_modules/.bin/cypress install --force"
            sh "mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache"
            sh "npx cypress run --browser chrome"  
            //sh "npm run mochawesome:merge" 
            }
        }
         
    }
}
