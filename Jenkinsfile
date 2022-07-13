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
            sh "chmod -R 777 cypress"
            sh "sudo npx cypress run --browser chrome"  
            //sh "npm run mochawesome:merge" 
            }
        }
         
    }
}
