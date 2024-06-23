# DevOps Node Mongo App

This project is a simple Node.js application with authentication features (sign-in and sign-up) built using Express and MongoDB. The application is containerized using Docker and deployed on a Kubernetes cluster. Jenkins is used to automate the CI/CD pipeline.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [CI/CD Pipeline](#cicd-pipeline)
- [Kubernetes Deployment](#kubernetes-deployment)
- [Project Structure](#project-structure)

## Project Overview

This application demonstrates a complete CI/CD pipeline setup for a Node.js application, including Dockerization and deployment to a Kubernetes cluster. It includes the following main features:
- User registration (sign-up)
- User login (sign-in)
- MongoDB for data persistence

## Features

- User authentication with sign-in and sign-up functionality.
- Data storage using MongoDB.
- Containerized using Docker.
- CI/CD pipeline setup with Jenkins.
- Deployed on a Kubernetes cluster.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker
- Kubernetes
- Jenkins

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- Docker installed
- Kubernetes cluster setup (e.g., Minikube)
- Jenkins installed and configured

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ShayanZZ/devops-node-mongo-app.git
    cd devops-node-mongo-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the `root` directory with the following content:
    ```env
    MONGODB_URI=mongodb://localhost:27017/devops-node-mongo-app
    ```

## Running the Application

### Using Docker

1. Build the Docker image:
    ```bash
    docker build -t devops-node-mongo-app .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 3000:3000 devops-node-mongo-app
    ```

### Using Docker Compose

1. Run the application:
    ```bash
    docker-compose up
    ```

## CI/CD Pipeline

### Jenkins Setup

1. Create a new Jenkins pipeline and configure the repository URL.
2. Add the following environment variables in Jenkins:
    - `DOCKER_HUB_REPO`
    - `DOCKER_HUB_CREDENTIALS`
    - `KUBECONFIG_CREDENTIALS`
3. Use the provided `Jenkinsfile` for the pipeline script.

## Kubernetes Deployment

1. Ensure you have the Kubernetes configuration file.
2. Deploy MongoDB and the application:
    ```bash
    kubectl apply -f mongo-deployment.yml
    kubectl apply -f app-deployment.yml
    ```

## Project Structure

```plaintext
DEVOPS-NODE-MONGO-APP/
│
├── models/
│   └── user.js
│
├── public/
│   ├── index.html
│   ├── signin.html
│   ├── signup.html
│   └── success.html
│
├── routes/
│   └── auth.js
│
├── .dockerignore
├── .env
├── .gitignore
├── app-deployment.yml
├── app.js
├── docker-compose.yml
├── Dockerfile
├── Jenkinsfile
├── mongo-deployment.yml
├── package-lock.json
├── package.json
└── README.md
