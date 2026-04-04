
    export const cloud = {

      cloudeng: {
        "title": "Cloud Engineering Roadmap",
        "levels": [
          {
            "level": 1,
            "title": "Computer Science & Networking Basics",
            "why": "Cloud is just someone else's computer — so you need to understand how computers talk and work.",
            "learn": [
              "Operating Systems",
              "Networking (IP, DNS, HTTP/HTTPS, Load Balancers, Firewalls)",
              "Client-Server model"
            ],
            "resources": [
              {home:"Computer Networking Crash Course (YouTube)",url:"https://youtu.be/qiQR5rTSshw"},
              {home:"CS50 OS & Networking Lectures",url:"https://cs50.harvard.edu/x/"},
              {home:"GeeksforGeeks Networking Basics",url:"https://www.geeksforgeeks.org/computer-network-tutorials/"}
            ],
            "missions": "Write a summary: How does a client request reach a server via DNS + IP + HTTP?"
          },
          {
            "level": 2,
            "title": "Linux & Scripting",
            "why": "Almost all cloud servers run Linux. You must master it.",
            "learn": [
              "File system, permissions, process management",
              "Package installation",
              "Bash scripting"
            ],
            "resources": [
              {home:"Linux Journey",url:"https://linuxjourney.com/"},
              {home:"Bash for Beginners",url:"https://tldp.org/LDP/Bash-Beginners-Guide/html/"},
              {home:"Linux for Cloud Engineers (YouTube)",url:"https://youtu.be/wBp0Rb-ZJak"},
            ],
            "missions": "Launch a Linux VM (local/VirtualBox), configure a firewall, and write a script to install Nginx automatically."
          },
          {
            "level": 3,
            "title": "Cloud Fundamentals",
            "why": "Before diving deep, you need to understand what cloud is and its service models.",
            "learn": [
              "Cloud Service Models (IaaS, PaaS, SaaS, FaaS)",
              "Deployment Models (Public, Private, Hybrid, Multi-Cloud)",
              "Shared Responsibility Model"
            ],
            "resources": [
              {home:"AWS Cloud Practitioner Essentials (Free)",url:"https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/"},
              {home:"Azure Fundamentals",url:"https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/"},
              {home:"GCP Fundamentals",url:"https://cloud.google.com/training/courses/cloud-fundamentals-core-infrastructure"}
            ],
            "missions": "Create a comparison table: AWS vs Azure vs GCP basic services."
          },
          {
            "level": 4,
            "title": "Core Cloud Services",
            "why": "These are the building blocks of every app.",
            "learn": [
              "Compute → EC2 (AWS), VM (Azure), Compute Engine (GCP)",
              "Storage → S3, Blob, Cloud Storage",
              "Databases → RDS, Azure SQL, Cloud SQL",
              "Networking → VPC, Subnets, Load Balancers"
            ],
            "resources": [
              {home:"AWS Free Tier",url:"https://aws.amazon.com/free/"},
              {home:"GCP Free Tier",url:"https://cloud.google.com/free"},
              {home:"Azure Free Account",url:"https://azure.microsoft.com/en-in/free/"}
            ],
            "missions": "Host a static website in S3 / Blob Storage and make it public."
          },
          {
            "level": 5,
            "title": "Identity & Access Management (IAM)",
            "why": "Security is #1 in cloud. Without IAM, anyone could access your 'resources'.",
            "learn": [
              "IAM Users, Roles, Policies",
              "MFA",
              "Least Privilege Principle"
            ],
            "resources": [
              {home:"AWS IAM Docs",url:"https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html"},
              {home:"Azure RBAC Docs",url:"https://learn.microsoft.com/en-us/azure/role-based-access-control/"},
              {home:"GCP IAM Docs",url:"https://cloud.google.com/iam/docs"}
            ],
            "missions": "Create a new IAM user with restricted access to just one bucket or VM."
          },
          {
            "level": 6,
            "title": "Automation & Infrastructure as Code",
            "why": "Cloud engineers don't click buttons all day — they automate infra.",
            "learn": [
              "Terraform",
              "CloudFormation (AWS)",
              "ARM Templates (Azure)",
              "Deployment Manager (GCP)"
            ],
            "resources": [
              {home:"Terraform Docs",url:"https://developer.hashicorp.com/terraform/docs"},
              {home:"Terraform Crash Course (YouTube)",url:"https://youtu.be/SLB_c_ayRMo"}
            ],
            "missions": "Write Terraform code to deploy an EC2 instance with Nginx installed."
          },
          {
            "level": 7,
            "title": "Containers & Orchestration",
            "why": "Modern apps run in containers; Cloud Engineers must handle them.",
            "learn": [
              "Docker",
              "Kubernetes (EKS, AKS, GKE)"
            ],
            "resources": [
              {home:"Docker Docs",url:"https://docs.docker.com/get-started/"},
              {home:"Kubernetes Crash Course (YouTube)",url:"https://youtu.be/X48VuDVv0do"}
            ],
            "missions": "Deploy a Dockerized web app to Kubernetes in the cloud."
          },
          {
            "level": 8,
            "title": "Monitoring, Logging & Scaling",
            "why": "You need to make sure apps run fast, safe, and cost-effective.",
            "learn": [
              "Monitoring → CloudWatch, Azure Monitor, Stackdriver",
              "Logging → ELK Stack, Cloud-native logs",
              "Scaling → Auto Scaling Groups, Load Balancers, CDN"
            ],
            "resources": [
              {home:"AWS Monitoring Docs",url:"https://aws.amazon.com/cloudwatch/"},
              {home:"Grafana & Prometheus",url:"https://grafana.com/"}
            ],
            "missions": "Create a CloudWatch alarm that triggers when CPU usage > 70%."
          },
          {
            "level": 9,
            "title": "Security, Compliance & Networking Deep Dive",
            "why": "Cloud Engineers = guardians of data.",
            "learn": [
              "VPC, VPN, Direct Connect",
              "Encryption (KMS, TLS, At Rest vs In Transit)",
              "Compliance standards (GDPR, HIPAA, ISO27001)"
            ],
            "resources": [
              {home:"AWS Security Best Practices",url:"https://aws.amazon.com/architecture/security-identity-compliance/"},
              {home:"Azure Security Docs",url:"https://learn.microsoft.com/en-us/azure/security/"}
            ],
            "missions": "Create a private subnet with a NAT gateway → host a DB securely inside it."
          },
          {
            "level": 10,
            "title": "Advanced Cloud Services",
            "why": "This is where you 'level' up and differentiate yourself.",
            "learn": [
              "Serverless (AWS Lambda, Azure Functions, GCP Cloud Functions)",
              "Messaging (SNS/SQS, Pub/Sub, Event Grid)",
              "Big Data (Athena, BigQuery, Synapse)",
              "DevOps Integration (CI/CD pipelines in cloud)"
            ],
            "resources": [
              {home:"AWS Serverless Docs",url:"https://aws.amazon.com/serverless/"},
              {home:"Azure Functions Docs",url:"https://learn.microsoft.com/en-us/azure/azure-functions/"},
              {home:"BigQuery Docs",url:"https://cloud.google.com/bigquery/docs"}
            ],
            "missions": "Build a serverless function that triggers on file upload to S3/Blob and processes the file."
          },
          {
            "level": 11,
            "title": "Certifications & Portfolio",
            "why": "Certificates prove your knowledge + portfolio proves your skills.",
            "learn": [
              "Cloud certifications",
              "Project documentation",
              "Portfolio building"
            ],
            /*
            "resources": [
              {home:"AWS Certification Guide",url:""},
              {home:"Azure Certification Path",url:""},
              {home:"GCP Certification Guide",url:""}
            ],
            */
            "missions": "Build & document 3 projects → publish them on GitHub + LinkedIn portfolio",
            "certifications": {
              "beginner": [
                "AWS Cloud Practitioner",
                "Azure Fundamentals",
                "GCP Associate Cloud Engineer"
              ],
              "intermediate": [
                "AWS Solutions Architect Associate",
                "Azure Administrator",
                "GCP Professional Cloud Architect"
              ],
              "advanced": [
                "AWS DevOps Pro",
                "Azure Solutions Architect Expert"
              ]
            },
            "projectIdeas": [
              "Deploy a full-stack app on AWS using Terraform + CI/CD",
              "Multi-region architecture with failover",
              "Serverless image processing pipeline"
            ]
          }
        ]
      },
    
    

    devops: {
      "title": "DevOps Engineering Roadmap",
      "levels": [
        {
          "level": 1,
          "title": "Foundations (CS, Linux, Networking)",
          "why": "DevOps sits on top of systems. You must know how computers, servers, and networks actually work.",
          "learn": [
            "OS basics",
            "Linux commands",
            "Shell scripting",
            "Networking (TCP/IP, DNS, HTTP, Load Balancers)"
          ],
          "resources": [
            {home:"Linux Journey",url:"https://linuxjourney.com/"},
            {home:"Networking Basics (YouTube)",url:"https://youtu.be/qiQR5rTSshw"},
            {home:"Bash Scripting Guide",url:"https://tldp.org/LDP/Bash-Beginners-Guide/html/"}
          ],
          "missions": "Set up a Linux VM, automate Nginx installation with a bash script."
        },
        {
          "level": 2,
          "title": "Version Control with Git & GitHub",
          "why": "DevOps = collaboration. Everything runs on version control.",
          "learn": [
            "Git basics",
            "Branching, merging",
            "Pull requests",
            "GitHub workflows"
          ],
          "resources": [
            {home:"Pro Git Book",url:"https://git-scm.com/book/en/v2"},
            {home:"Git & GitHub Crash Course (YouTube)",url:"https://youtu.be/ulOKYl5sHGk"}
          ],
          "missions": "Create a repo → push commits → open a pull request → merge changes."
        },
        {
          "level": 3,
          "title": "Programming for Automation",
          "why": "You'll write scripts and automation pipelines.",
          "learn": [
            "Python (preferred)",
            "Go/JavaScript basics for DevOps tooling"
          ],
          "resources": [
            {home:"Python Docs",url:"https://docs.python.org/3/tutorial/"},
            {home:"Automate with Python (YouTube)",url:"https://youtu.be/s8XjEuplx_U"}
          ],
          "missions": "Write a Python script to parse logs and send alerts for errors."
        },
        {
          "level": 4,
          "title": "Continuous Integration (CI)",
          "why": "CI ensures every commit is tested & integrated automatically.",
          "learn": [
            "Jenkins",
            "GitHub Actions",
            "GitLab CI",
            "CircleCI"
          ],
          "resources": [
            {home:"Jenkins Docs",url:"https://www.jenkins.io/doc/"},
            {home:"GitHub Actions Docs",url:"https://docs.github.com/en/actions"},
            {home:"CI/CD Pipeline Crash Course (YouTube)",url:"https://youtu.be/scEDHsr3APg"}
          ],
          "missions": "Create a pipeline that runs tests automatically when code is pushed."
        },
        {
          "level": 5,
          "title": "Configuration Management",
          "why": "Servers must be consistent and reproducible.",
          "learn": [
            "Ansible",
            "Puppet",
            "Chef",
            "SaltStack"
          ],
          "resources": [
            {home:"Ansible Docs",url:"https://docs.ansible.com/"},
            {home:"Ansible Crash Course (YouTube)",url:"https://youtu.be/5HyJH2Sl0x0"}
          ],
          "missions": "Write an Ansible playbook to install Apache on multiple servers."
        },
        {
          "level": 6,
          "title": "Containerization",
          "why": "Apps must run anywhere consistently — Docker makes this possible.",
          "learn": [
            "Docker basics",
            "Images, containers",
            "Docker Compose"
          ],
          "resources": [
            {home:"Docker Docs",url:"https://docs.docker.com/get-started/"},
            {home:"Docker Crash Course (YouTube)",url:"https://youtu.be/pTFZFxd4hOI"}
          ],
          "missions": "Dockerize a simple Flask/Node.js app and run it locally."
        },
        {
          "level": 7,
          "title": "Container Orchestration (Kubernetes)",
          "why": "When apps scale, containers must be managed — Kubernetes does it.",
          "learn": [
            "Pods, Services, Deployments",
            "Ingress",
            "Helm"
          ],
          "resources": [
            {home:"Kubernetes Docs",url:"https://kubernetes.io/docs/home/"},
            {home:"Kubernetes Crash Course (YouTube)",url:"https://youtu.be/X48VuDVv0do"}
          ],
          "missions": "Deploy your Dockerized app to Kubernetes with scaling enabled."
        },
        {
          "level": 8,
          "title": "Cloud Platforms",
          "why": "DevOps happens mostly in the cloud (AWS, Azure, GCP).",
          "learn": [
            "Compute (EC2, VM)",
            "Storage (S3, Blob)",
            "Networking (VPC)",
            "IAM"
          ],
          "resources": [
            {home:"AWS Free Tier",url:"https://aws.amazon.com/free/"},
            {home:"Azure Free Tier",url:"https://azure.microsoft.com/free/"},
            {home:"GCP Free Tier",url:"https://cloud.google.com/free"}
          ],
          "missions": "Deploy a containerized app to AWS ECS/EKS (or Azure/GCP equivalents)."
        },
        {
          "level": 9,
          "title": "Infrastructure as Code (IaC)",
          "why": "Don't click buttons — automate cloud infra.",
          "learn": [
            "Terraform (main)",
            "AWS CloudFormation",
            "Azure ARM templates"
          ],
          "resources": [
            {home:"Terraform Docs",url:"https://developer.hashicorp.com/terraform/docs"},
            {home:"Terraform Crash Course (YouTube)",url:"https://youtu.be/SLB_c_ayRMo"}
          ],
          "missions": "Write Terraform code to deploy a VM + security group."
        },
        {
          "level": 10,
          "title": "Monitoring & Logging",
          "why": "DevOps = keep systems reliable, scalable, and observable.",
          "learn": [
            "Prometheus, Grafana",
            "ELK Stack",
            "CloudWatch, Azure Monitor"
          ],
          "resources": [
            {home:"Grafana Docs",url:"https://grafana.com/docs/"},
            {home:"Prometheus Docs",url:"https://prometheus.io/docs/"},
            {home:"Monitoring with Prometheus & Grafana (YouTube)",url:"https://youtu.be/h4Sl21AKiDg"}
          ],
          "missions": "Monitor a web app's CPU usage & show it on Grafana dashboard."
        },
        {
          "level": 11,
          "title": "Security & DevSecOps",
          "why": "Security is baked into DevOps — not added later.",
          "learn": [
            "Secrets management",
            "CI/CD security scans",
            "Container security",
            "IAM"
          ],
          "resources": [
            {home:"OWASP DevSecOps Guide",url:"https://owasp.org/www-project-devsecops-guideline/"},
            {home:"HashiCorp Vault",url:"https://www.vaultproject.io/"}
          ],
          "missions": "Add a security scan step in your CI/CD pipeline."
        },
        {
          "level": 12,
          "title": "Advanced DevOps & SRE Mindset",
          "why": "Go beyond tools — focus on scalability, reliability, and automation.",
          "learn": [
            "Chaos engineering",
            "Autoscaling",
            "Multi-cloud",
            "Incident response"
          ],
          "resources": [
            {home:"Google SRE Book",url:"https://sre.google/books/"},
            {home:"Chaos Engineering (YouTube)",url:"https://youtu.be/C8g5X4vCZJA"}
          ],
          "missions": "Simulate a server crash & ensure your system auto recovers."
        },
        {
          "level": 13,
          "title": "Portfolio & Certifications",
          "why": "Show proof of skills & open career opportunities.",
          "learn": [
            "DevOps certification paths",
            "Project documentation",
            "Portfolio building"
          ],
           /*       
          "resources": [
            {home:"DevOps Certification Guide",url:""},
            {home:"GitHub Portfolio Setup",url:""}
          ],
          */
          "missions": "Build 3 end-to-end DevOps projects and publish them on GitHub.",
          "certifications": {
            "beginner": [
              "Docker Certified Associate",
              "Kubernetes CKA"
            ],
            "intermediate": [
              "AWS DevOps Engineer Associate",
              "Azure DevOps Engineer Expert"
            ],
            "advanced": [
              "Certified Kubernetes Administrator (CKA)",
              "HashiCorp Terraform Associate"
            ]
          },
          "projectIdeas": [
            "CI/CD pipeline with Jenkins + Docker + Kubernetes",
            "Deploy microservices with monitoring & logging",
            "Automate cloud infrastructure with Terraform + Ansible"
          ]
        }
      ]
    },
  

    sitereliabilityeng: {
      "title": "Site Reliability Engineering (SRE) Roadmap",
      "levels": [
        {
          "level": 1,
          "title": "Computer Science & Systems Foundations",
          "why": "An SRE is part developer, part systems engineer. You need strong basics.",
          "learn": [
            "Operating Systems (Linux)",
            "Networking",
            "Databases fundamentals",
            "Client-Server architecture"
          ],
          "resources": [
            {home:"Linux Journey",url:"https://linuxjourney.com/"},
            {home:"Networking Basics (YouTube)",url:"https://youtu.be/qiQR5rTSshw"},
            {home:"CS50 Systems Lectures",url:"https://cs50.harvard.edu/x/"}
          ],
          "missions": "Set up a Linux VM, configure firewall rules, monitor CPU/memory usage."
        },
        {
          "level": 2,
          "title": "Software Engineering for SRE",
          "why": "Unlike traditional Ops, SREs write a lot of code to solve infra problems.",
          "learn": [
            "Python, Go, Java (choose one primary)",
            "Data Structures & Algorithms (problem-solving)"
          ],
          "resources": [
            {home:"Python Docs",url:"https://docs.python.org/3/tutorial/"},
            {home:"Go by Example",url:"https://gobyexample.com/"},
            {home:"LeetCode Practice",url:"https://leetcode.com/"}
          ],
          "missions": "Write a script that monitors a log file and alerts when errors appear."
        },
        {
          "level": 3,
          "title": "DevOps Core (CI/CD, Automation, IaC)",
          "why": "SREs inherit DevOps practices but use them with a reliability focus.",
          "learn": [
            "CI/CD → Jenkins, GitHub Actions",
            "Infrastructure as Code → Terraform, Ansible",
            "Configuration Management → Puppet, Chef"
          ],
          "resources": [
            {home:"Terraform Docs",url:"https://developer.hashicorp.com/terraform/docs"},
            {home:"Jenkins Docs",url:"https://www.jenkins.io/doc/"},
            {home:"CI/CD Crash Course (YouTube)",url:"https://youtu.be/scEDHsr3APg"}
          ],
          "missions": "Automate deploying a web app to cloud with Terraform + CI/CD."
        },
        {
          "level": 4,
          "title": "Monitoring & Observability",
          "why": "This is SRE's superpower — knowing what's happening in the system in real time.",
          "learn": [
            "Monitoring → Prometheus, Grafana, CloudWatch, Stackdriver",
            "Logging → ELK Stack, Loki",
            "Tracing → Jaeger, OpenTelemetry"
          ],
          "resources": [
            {home:"Prometheus Docs",url:"https://prometheus.io/docs/"},
            {home:"Grafana Docs",url:"https://grafana.com/docs/"},
            {home:"Observability Guide (YouTube)",url:"https://youtu.be/TyRT4o2y2dc"}
          ],
          "missions": "Build a Grafana dashboard showing uptime, latency, and errors of a service."
        },
        {
          "level": 5,
          "title": "Reliability Principles",
          "why": "This is where SRE differs from DevOps → it's about measurable reliability.",
          "learn": [
            "SLIs (Service 'levels' Indicators)",
            "SLOs (Service 'level' Objectives)",
            "SLAs (Service 'level' Agreements)",
            "Error Budgets & Availability targets"
          ],
          "resources": [
            {home:"Google SRE Book",url:"https://sre.google/books/"},
            {home:"Error Budgets (Google Blog)",url:"https://cloud.google.com/blog/products/devops-sre/error-budgets-and-the-trade-off-between-innovation-and-reliability"}
          ],
          "missions": "Define SLOs for a sample web app (e.g., 99.9% uptime, < 200ms latency)."
        },
        {
          "level": 6,
          "title": "Scalability & Resilience",
          "why": "Systems fail — SREs design for graceful recovery & scalability.",
          "learn": [
            "Load balancing, Auto-scaling, Failover",
            "Caching (Redis, Memcached, CDN)",
            "Chaos Engineering (fault injection testing)"
          ],
          "resources": [
            {home:"Kubernetes Scaling Docs",url:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},
            {home:"Chaos Monkey by Netflix",url:"https://netflix.github.io/chaosmonkey/"},
            {home:"Chaos Engineering (YouTube)",url:"https://youtu.be/C8g5X4vCZJA"}
          ],
          "missions": "Deploy an app → simulate server crash → verify auto-recovery."
        },
        {
          "level": 7,
          "title": "Cloud & Kubernetes Mastery",
          "why": "SREs run distributed systems in the cloud at scale.",
          "learn": [
            "Kubernetes (Pods, Services, Ingress, Operators)",
            "Cloud-native tools (GKE, EKS, AKS)",
            "Service Mesh (Istio, Linkerd)"
          ],
          "resources": [
            {home:"Kubernetes Docs",url:"https://kubernetes.io/docs/home/"},
            {home:"Service Mesh Intro (YouTube)",url:"https://youtu.be/4ISw2pIjyU8"}
          ],
          "missions": "Deploy a microservice app on Kubernetes with auto-scaling and monitoring."
        },
        {
          "level": 8,
          "title": "Security & Compliance",
          "why": "Reliability also means security → protect infra from attacks.",
          "learn": [
            "IAM, TLS, Certificates, Secrets Management (Vault, KMS)",
            "Security scans in CI/CD",
            "Compliance frameworks (SOC2, GDPR, HIPAA)"
          ],
          "resources": [
            {home:"OWASP Top 10",url:"https://owasp.org/www-project-top-ten/"},
            {home:"Vault by HashiCorp",url:"https://www.vaultproject.io/"}
          ],
          "missions": "Secure secrets in Kubernetes using Vault or Secrets Manager."
        },
        {
          "level": 9,
          "title": "Incident Response & On-Call",
          "why": "SREs are firefighters during outages. You must be battle-ready.",
          "learn": [
            "Incident management",
            "Postmortems",
            "Alerting strategies",
            "PagerDuty, Runbooks"
          ],
          "resources": [
            {home:"Google SRE Incident Response",url:"https://sre.google/workbook/incident-response/"},
            {home:"On-Call Guide (YouTube)",url:"https://youtu.be/TSqRzETU3Qc"}
          ],
          "missions": "Create a runbook for 'Web App Down' → include steps for diagnosis & recovery."
        },
        {
          "level": 10,
          "title": "Advanced SRE & Culture",
          "why": "SRE is not just tools → it's a mindset of balancing reliability vs speed.",
          "learn": [
            "Toil reduction",
            "Automation",
            "Blameless culture",
            "Resilience engineering"
          ],
          "resources": [
            {home:"The SRE Workbook",url:"https://sre.google/workbook/table-of-contents/"},
            {home:"Blameless Postmortems Guide",url:"https://sre.google/workbook/postmortem-culture/"}
          ],
          "missions": "Identify a manual repetitive 'mission' → automate it fully."
        },
        {
          "level": 11,
          "title": "Certifications & Portfolio",
          "why": "Certs give credibility, projects prove mastery.",
          "learn": [
            "SRE certification paths",
            "Project documentation",
            "Portfolio building"
          ],
          /*
          "resources": [
            {home:"SRE Certification Guide",url:""},
            {home:"GitHub Portfolio Setup",url:""}
          ],
          */
          "missions": "Publish 2-3 real-world reliability projects on GitHub + LinkedIn.",
          "certifications": [
            "Google Professional Cloud DevOps Engineer",
            "CKA (Certified Kubernetes Administrator)",
            "HashiCorp Terraform Associate"
          ],
          "projectIdeas": [
            "Multi-region Kubernetes deployment with monitoring & scaling",
            "Automated incident alerting & dashboard",
            "Chaos engineering pipeline (failure injection)"
          ]
        }
      ]
    },
  

    platformeng: {
      "title": "Platform Engineer Roadmap",
      "levels": [
        {
          "level": 1,
          "title": "Core Foundations",
          "why": "Platform Engineering sits at the intersection of software engineering, cloud, and DevOps. Strong fundamentals make you adaptable.",
          "learn": [
            "OS (Linux)",
            "Networking (TCP/IP, DNS, Load Balancers)",
            "Programming (Python/Go)",
            "Git basics"
          ],
          "resources": [
            {home:"Linux Journey",url:"https://linuxjourney.com/"},
            {home:"Networking Basics – YouTube",url:"https://youtu.be/qiQR5rTSshw"},
            {home:"Pro Git Book",url:"https://git-scm.com/book/en/v2"}
          ],
          "missions": "Build a simple Python script that configures a Linux server automatically."
        },
        {
          "level": 2,
          "title": "Software Engineering Mindset",
          "why": "Unlike Ops roles, Platform Engineers design reusable systems.",
          "learn": [
            "Data structures & algorithms",
            "APIs, REST & gRPC",
            "Microservices patterns"
          ],
          "resources": [
            {home:"CS50x (Free Harvard Course)",url:"https://cs50.harvard.edu/x/"},
            {home:"System Design Basics – YouTube",url:"https://youtu.be/lvzmEnC4i9Y"}
          ],
          "missions": "Write an API that exposes system metrics (CPU, RAM) from your server."
        },
        {
          "level": 3,
          "title": "Cloud & Infrastructure",
          "why": "Your 'platform' lives in the cloud.",
          "learn": [
            "AWS (EC2, S3, IAM, VPC)",
            "Azure, or GCP basics",
            "Multi-cloud concepts"
          ],
          "resources": [
            {home:"AWS Free Tier",url:"https://aws.amazon.com/free/"},
            {home:"Azure Fundamentals",url:"https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/"},
            {home:"GCP Free Tier",url:"https://cloud.google.com/free"}
          ],
          "missions": "Deploy a VM + secure it with IAM and networking rules."
        },
        {
          "level": 4,
          "title": "Infrastructure as Code (IaC)",
          "why": "Platforms must be reproducible — IaC makes it possible.",
          "learn": [
            "Terraform (main)",
            "Crossplane, Pulumi",
            "Helm (for Kubernetes)"
          ],
          "resources": [
            {home:"Terraform Docs",url:"https://developer.hashicorp.com/terraform/docs"},
            {home:"Helm Docs",url:"https://helm.sh/docs/"}
          ],
          "missions": "Use Terraform to provision an S3 bucket and Helm to deploy an app in Kubernetes."
        },
        {
          "level": 5,
          "title": "Containers & Kubernetes",
          "why": "Containers are the universal unit of deployment; Kubernetes is the universal orchestrator.",
          "learn": [
            "Docker",
            "Kubernetes (Pods, Services, Deployments, Ingress)",
            "Operators"
          ],
          "resources": [
            {home:"Docker Docs",url:"https://docs.docker.com/get-started/"},
            {home:"Kubernetes Crash Course – YouTube",url:"https://youtu.be/X48VuDVv0do"}
          ],
          "missions": "Build a Dockerized microservice → deploy it to Kubernetes with Ingress + AutoScaling."
        },
        {
          "level": 6,
          "title": "CI/CD Pipelines",
          "why": "Platforms accelerate developers — CI/CD is the core engine.",
          "learn": [
            "Jenkins, GitHub Actions, GitLab CI",
            "ArgoCD (GitOps)"
          ],
          "resources": [
            {home:"Jenkins Docs",url:"https://www.jenkins.io/doc/"},
            {home:"GitHub Actions Docs",url:"https://docs.github.com/en/actions"},
            {home:"ArgoCD Docs",url:"https://argo-cd.readthedocs.io/en/stable/"}
          ],
          "missions": "Create a CI/CD pipeline that builds a Docker image, runs tests, and deploys to Kubernetes automatically."
        },
        {
          "level": 7,
          "title": "Developer Experience (DevEx)",
          "why": "Platform Engineers build self-service platforms → developers should deploy apps easily.",
          "learn": [
            "Internal Developer Platforms (IDP)",
            "Backstage (by Spotify)",
            "Service Catalogs, Templates"
          ],
          "resources": [
            {home:"Backstage Docs",url:"https://backstage.io/docs/"},
            {home:"Platform Engineering 101 – YouTube",url:"https://youtu.be/xmV8zDNH2ps"}
          ],
          "missions": "Set up Backstage → create a developer template for launching a new service with CI/CD + monitoring."
        },
        {
          "level": 8,
          "title": "Observability & Reliability",
          "why": "A platform without monitoring is blind.",
          "learn": [
            "Prometheus, Grafana, Loki",
            "Jaeger, OpenTelemetry"
          ],
          "resources": [
            {home:"Prometheus Docs",url:"https://prometheus.io/docs/"},
            {home:"Grafana Docs",url:"https://grafana.com/docs/"}
          ],
          "missions": "Build a dashboard showing all services running on your platform (uptime, errors, latency)."
        },
        {
          "level": 9,
          "title": "Security & Compliance",
          "why": "Platforms = shared infra → must be secure by design.",
          "learn": [
            "IAM, RBAC (Kubernetes)",
            "Secrets Management (Vault, KMS)",
            "Policy-as-Code (OPA, Kyverno)"
          ],
          "resources": [
            {home:"Vault Docs",url:"https://developer.hashicorp.com/vault/docs"},
            {home:"OPA (Open Policy Agent)",url:"https://www.openpolicyagent.org/docs/latest/"}
          ],
          "missions": "Secure Kubernetes secrets with Vault and enforce RBAC policies."
        },
        {
          "level": 10,
          "title": "Scaling & Reliability Engineering",
          "why": "Platforms need to handle thousands of developers and services.",
          "learn": [
            "Auto-scaling",
            "Service Mesh (Istio/Linkerd)",
            "Chaos Engineering"
          ],
          "resources": [
            {home:"Istio Docs",url:"https://istio.io/latest/docs/"},
            {home:"Chaos Engineering (YouTube)",url:"https://youtu.be/C8g5X4vCZJA"}
          ],
          "missions": "Deploy Istio to manage traffic routing between microservices and simulate a failure."
        },
        {
          "level": 11,
          "title": "Advanced Platform Topics",
          "why": "This is where you differentiate yourself as a Platform Engineer.",
          "learn": [
            "FinOps (cost optimization in cloud)",
            "Multi-cloud/hybrid platforms",
            "Event-driven systems (Kafka, Pub/Sub)",
            "Service Blueprints & Golden Paths"
          ],
          "resources": [
            {home:"FinOps Foundation",url:"https://www.finops.org/introduction/what-is-finops/"},
            {home:"Apache Kafka Docs",url:"https://kafka.apache.org/documentation/"}
          ],
          "missions": "Build a cost-optimized Kubernetes cluster with Kafka event streaming."
        },
        {
          "level": 12,
          "title": "Certifications & Portfolio",
          "why": "Credentials + projects = career boost.",
          "learn": [
            "Platform engineering certifications",
            "Project documentation",
            "Portfolio building"
          ],

          /*
          "resources": [
            {home:"Certification Guides",url:""},
            {home:"GitHub Portfolio Setup",url:""}
          ],
          */
          "missions": "Document your platform project → publish on GitHub → demo on LinkedIn/portfolio site.",
          "certifications": [
            "Terraform Associate",
            "Kubernetes CKA",
            "AWS Solutions Architect Associate",
            "GitOps Fundamentals (ArgoCD/Flux)"
          ],
          "projectIdeas": [
            "Build an Internal Developer Platform with Backstage + Kubernetes + ArgoCD",
            "Create a multi-tenant Kubernetes cluster with monitoring & RBAC",
            "Automate infrastructure provisioning + CI/CD + observability as one self-service platform"
          ]
        }
      ]
    }

    };




