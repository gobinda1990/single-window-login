pipeline {
    agent any

    environment {
        IMAGE_BACKEND = "backend:latest"
        IMAGE_FRONTEND = "frontend:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/gobinda1990/single-window-login.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh """
                    docker build -t ${IMAGE_BACKEND} ./backend
                    docker build -t ${IMAGE_FRONTEND} ./frontend
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                sh """
                docker compose -f docker-compose.yml down
                docker compose -f docker-compose.yml up -d --build
                """
            }
        }
    }
}

