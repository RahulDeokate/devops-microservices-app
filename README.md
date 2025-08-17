# DevOps Microservices Application 🚀
 
This repository contains a **microservices-based application** designed for learning and practicing DevOps workflows.  
It includes multiple services packaged into Docker containers, integrated with CI/CD pipelines for automated builds and pushes.
 
---
 
## 📂 Project Structure
 
devops-microservices-app/
│── app/
│   ├── auth-service/                 
│   │   ├── index.html
│   │   ├── style.css
│   │   ├── script.js
│   │   └── Dockerfile
│   │
│   ├── profile-service/              
│       ├── index.html
│       ├── style.css
│       ├── script.js
│       └── Dockerfile
│
│── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   ├── terraform.tfvars
│   │
│   └── modules/
│       ├── vpc/
│       │   ├── main.tf
│       │   ├── variables.tf
│       │   └── outputs.tf
│       │
│       ├── subnets/
│       │   ├── main.tf
│       │   ├── variables.tf
│       │   └── outputs.tf
│       │
│       ├── eks/
│       │   ├── main.tf
│       │   ├── variables.tf
│       │   └── outputs.tf
│       │
│       └── node-group/
│           ├── main.tf
│           ├── variables.tf
│           └── outputs.tf
│
│── jenkins/
│   ├── Jenkinsfile
│   └── setup_script.sh
│
│── .gitignore
│── README.md
 
---
 
## ⚙️ Technologies Used
- **Microservices** architecture  
- **Docker** for containerization  
- **Terraform** for infrastructure provisioning  
- **Jenkins** for CI/CD pipeline  
- **Kubernetes** for orchestration  
 
---
 
## 🚀 Workflow
1. Developers push changes to this repo.  
2. Jenkins pipeline automatically:
   - Builds Docker images for each service  
   - Pushes images to DockerHub  
3. ArgoCD (via the GitOps repo) detects manifest changes and deploys updated images to Kubernetes.  
 
---
 
## 📌 Learning Outcomes
- Hands-on with **microservices architecture**  
- Building & pushing Docker images  
- Writing modular Terraform code  
- Implementing Jenkins-based CI/CD pipelines  
- Preparing services for GitOps with ArgoCD
 
 
---
