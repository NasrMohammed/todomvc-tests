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
            sh "chmod -R 777 *"
            sh "chown person /usr/local/lib/node_modules"
            sh  "chown person /usr/local/bin"
            sh  "USER person"
            sh  " WORKDIR /home/person"
            sh "./node_modules/.bin/cypress install --force"
            sh "npx cypress run --browser chrome"  
            //sh "npm run mochawesome:merge" 
            }
        }
         
    }
}
