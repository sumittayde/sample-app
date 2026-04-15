pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/sumittayde/sample-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("sample-app")
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    docker.image("sample-app").run("-p 3000:3000")
                }
            }
        }
    }
}
