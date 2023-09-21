# Task 3

This guide explains how to build Docker images for the frontend and backend applications and deploy the containers.

## Prerequisites

Before you begin, make sure you have the following tools and dependencies installed on your system:

- [Docker](https://docs.docker.com/get-docker/)
- Node.js and npm for your frontend and backend development environments.

## Getting Started

1. Clone the project repository to your local machine:

   ```bash
   git clone https://github.com/nikodem-niq/drpoket-recruitment-task
   cd /task-three


2. Build frontend
   ```bash
   cd frontend
   docker build -t frontend-drpoket-task-three .

3. Build backend
   ```bash
   cd ../backend
   docker build -t backend-drpoket-task-three .


4. Deployment 
   ```bash
   docker run -d -p 80:80 frontend
   docker run -d -p 3000:3000 backend

*OR*
in /task-three/ directory:

   ```bash
   docker-compose up
