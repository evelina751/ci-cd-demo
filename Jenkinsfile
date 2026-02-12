pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:${env.PATH}"
        IMAGE = "ci-cd-demo:latest"
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Image') {
            steps {
                sh 'podman build -t $IMAGE .'
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh '''
                podman stop app || true
                podman rm app || true
                podman run -d -p 3000:3000 --name app $IMAGE
                '''
            }
        }
    }
}
