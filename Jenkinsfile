pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/sumittayde/sample-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("cicd-demo")
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    docker.image("cicd-demo").run("-p 3000:3000")
                }
            }
        }
    }
}
