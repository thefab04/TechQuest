

export const cyber = 

{
  cybersecurityanalyst: {
    "title": "Cybersecurity Analyst Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Core IT Foundations",
        "why": "Cybersecurity sits on top of IT fundamentals — without them, defenses are weak.",
        "learn": [
          "Networking (TCP/IP, DNS, DHCP, Firewalls)",
          "Operating Systems (Windows & Linux basics)",
          "Computer hardware basics"
        ],
        "resources": [
          {name:"Networking Basics – Cisco",url:"https://skillsforall.com/course/networking-basics"},
          {name:"Linux Journey",url:"https://linuxjourney.com/"},
          {name:"Windows Server Basics – Microsoft 'learn'",url:"https://learn.microsoft.com/en-us/training/modules/windows-server-fundamentals/"}
        ],
        "mission": "Set up a small home lab (1 Linux VM + 1 Windows VM) and practice connecting them over a network."
      },
      {
        "level": 2,
        "title": "Cybersecurity Fundamentals",
        "why": "Before tools, you must understand the principles of security.",
        "learn": [
          "CIA Triad (Confidentiality, Integrity, Availability)",
          "Threats & Vulnerabilities",
          "Security Controls & Policies",
          "Types of Attacks (Phishing, Malware, DDoS, SQL Injection)"
        ],
        "resources": [
          {name:"NIST Cybersecurity Framework",url:"https://www.nist.gov/cyberframework"},
          {name:"Introduction to Cybersecurity – Cisco",url:"https://skillsforall.com/course/introduction-cybersecurity"},
          {name:"FreeCodeCamp Cybersecurity Intro (YouTube)",url:"https://youtu.be/3Kq1MIfTWCE"}
        ],
        "mission": "Write a security policy for your home lab → include password rules, patching, and access controls."
      },
      {
        "level": 3,
        "title": "Security Tools & Monitoring",
        "why": "Analysts rely on tools to detect and investigate threats.",
        "learn": [
          "SIEM (Splunk, ELK, Microsoft Sentinel)",
          "IDS/IPS (Snort, Suricata)",
          "Endpoint Protection (EDR/XDR)",
          "Firewalls & Proxy tools (pfSense, Wireshark)"
        ],
        "resources": [
          {name:"Splunk Free Training",url:"https://www.splunk.com/en_us/training.html"},
          {name:"Wireshark Docs",url:"https://www.wireshark.org/docs/"},
          {name:"TryHackMe SOC 'level' 1 Path",url:"https://tryhackme.com/path/outline/soclevel1"}
        ],
        "mission": "Capture network traffic with Wireshark → identify normal vs suspicious packets."
      },
      {
        "level": 4,
        "title": "Threat Intelligence & Incident Response",
        "why": "Analysts are first responders during an attack.",
        "learn": [
          "Incident Response Lifecycle (NIST 800-61)",
          "Threat Hunting basics",
          "Digital Forensics basics",
          "Malware Analysis (intro)"
        ],
        "resources": [
          {name:"SANS Incident Handler's Handbook (PDF)",url:"https://www.sans.org/white-papers/33901/"},
          {name:"Cyber Kill Chain Explained (YouTube)",url:"https://youtu.be/uR03hOihB_k"},
          {name:"TryHackMe Incident Response Lab",url:"https://tryhackme.com/room/incidentresponse"}
        ],
        "mission": "Simulate a phishing attack in your lab → investigate logs to identify the source."
      },
      {
        "level": 5,
        "title": "Security Frameworks & Compliance",
        "why": "Analysts work within regulations to keep businesses compliant.",
        "learn": [
          "ISO 27001, NIST CSF, SOC2, GDPR basics",
          "Risk Management frameworks",
          "Vulnerability Management (Nessus, OpenVAS)"
        ],
        "resources": [
          {name:"NIST CSF Overview",url:"https://www.nist.gov/cyberframework"},
          {name:"ISO 27001 Guide",url:"https://www.iso.org/isoiec-27001-information-security.html"},
          {name:"OpenVAS Docs",url:"https://www.openvas.org/"}
        ],
        "mission": "Run a vulnerability scan on your lab system → create a simple risk assessment report."
      },
      {
        "level": 6,
        "title": "Advanced Defensive Security",
        "why": "You'll 'level' up from monitoring → active defense.",
        "learn": [
          "SOC Operations (Tier 1, Tier 2 responsibilities)",
          "Log correlation & anomaly detection",
          "Threat Intelligence feeds (MISP, VirusTotal, AlienVault OTX)",
          "Security Automation (SOAR platforms)"
        ],
        "resources": [
          {name:"MITRE ATT&CK Framework",url:"https://attack.mitre.org/"},
          {name:"AlienVault OTX",url:"https://otx.alienvault.com/"},
          {name:"Blue Team Labs Online",url:"https://otx.alienvault.com/"}
        ],
        "mission": "Build an alerting system → if someone brute forces SSH on your VM, log + alert it via email/Slack."
      },
      {
        "level": 7,
        "title": "Offensive Awareness (Red Team Basics)",
        "why": "To defend, you must know how attackers think.",
        "learn": [
          "Penetration testing basics (Kali Linux, Metasploit, Nmap, Burp Suite)",
          "Social Engineering basics",
          "Web App Security (OWASP Top 10)"
        ],
        "resources": [
          {name:"OWASP Top 10",url:"https://owasp.org/www-project-top-ten/"},
          {name:"HackTheBox Academy",url:"https://academy.hackthebox.com/"},
          {name:"Nmap Docs",url:"https://nmap.org/book/man.html"}
        ],
        "mission": "Use Nmap to scan your lab VM → identify open ports → try to exploit misconfigurations."
      },
      {
        "level": 8,
        "title": "Cloud Security (Bonus Specialization)",
        "why": "Organizations are moving to cloud → analysts must adapt.",
        "learn": [
          "AWS Security (IAM, GuardDuty, CloudTrail)",
          "Azure Security Center",
          "GCP Security Basics"
        ],
        "resources": [
          {name:"AWS Security Docs",url:"https://docs.aws.amazon.com/security/"},
          {name:"Azure Security Docs",url:"https://learn.microsoft.com/en-us/azure/security/"},
          {name:"GCP Security Overview",url:"https://cloud.google.com/security"}
        ],
        "mission": "Enable GuardDuty in AWS free tier → analyze a security finding."
      },
      {
        "level": 9,
        "title": "Certifications & Career Growth",
        "why": "Certifications validate your skills & unlock jobs.",
        "learn": [
          "Cybersecurity certification paths",
          "Portfolio building",
          "Career progression"
        ],
        /*
        "resources": [
          {name:"Cybersecurity Certification Guide",url:""},
          {name:"Portfolio Building Tips",url:""}
        ],
        */
        "mission": "Pick one certification → prepare a study plan → share lab projects in your portfolio",
        "certifications": {
          "entry'level'": [
            "CompTIA Security+",
            "Microsoft SC-200",
            "CySA+"
          ],
          "intermediate": [
            "SSCP",
            "GIAC Security Essentials (GSEC)"
          ],
          "advanced": [
            "CISSP",
            "CISM (for leadership roles)"
          ]
        },
        "projectIdeas": [
          "Build your own SOC Lab with Splunk + Suricata + ELK",
          "Create a Phishing Detection Report with real-world logs",
          "Publish a blue team playbook on GitHub"
        ]
      }
    ]
  }
,

  ethicalhacker: {
    "title": "Ethical Hacker Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Core IT & Security Foundations",
        "why": "To break systems, you must first understand how they work.",
        "learn": [
          "Networking (TCP/IP, Subnetting, DNS, VPNs)",
          "Operating Systems (Linux, Windows)",
          "Security basics (firewalls, proxies, CIA triad)"
        ],
        "resources": [
          {name:"Linux Journey",url:"https://linuxjourney.com/"},
          {name:"Networking Basics – Cisco",url:"https://skillsforall.com/course/networking-basics"},
          {name:"CompTIA Security+ Guide",url:"https://www.comptia.org/certifications/security"}
        ],
        "mission": "Set up a home lab → 1 Linux VM (attacker), 1 Windows VM (target)."
      },
      {
        "level": 2,
        "title": "Scripting & Programming",
        "why": "Ethical hackers automate attacks, build exploits, and write scripts.",
        "learn": [
          "Python (automation & exploit scripts)",
          "Bash (Linux automation)",
          "JavaScript (web exploits)"
        ],
        "resources": [
          {name:"Python for Security – FreeCodeCamp",url:"https://youtu.be/fWnaR-rxAic"},
          {name:"'learn' Bash – Codecademy",url:"https://www.codecademy.com/learn/bash-scripting"}
        ],
        "mission": "Write a Python script to scan open ports (mini Nmap)."
      },
      {
        "level": 3,
        "title": "Reconnaissance & Footprinting",
        "why": "First step of hacking = gather intel.",
        "learn": [
          "OSINT (Open Source Intelligence)",
          "Tools: Nmap, Maltego, Recon-ng",
          "Google Dorking"
        ],
        "resources": [
          {name:"Nmap Docs",url:"https://nmap.org/book/man.html"},
          {name:"OSINT Framework",url:"https://osintframework.com/"},
          {name:"Google Dorking Tutorial – YouTube",url:"https://youtu.be/xzv6HsO2b8A"}
        ],
        "mission": "Use Nmap to scan your lab VM → map open ports & services."
      },
      {
        "level": 4,
        "title": "Scanning & Enumeration",
        "why": "Once you find targets, dig deeper into vulnerabilities.",
        "learn": [
          "Banner Grabbing",
          "Network Scanning (Nmap, Masscan)",
          "Vulnerability Scanning (Nessus, OpenVAS)"
        ],
        "resources": [
          {name:"OpenVAS Docs",url:"https://www.openvas.org/"},
          {name:"Nessus Essentials Free",url:"https://www.tenable.com/products/nessus/nessus-essentials"}
        ],
        "mission": "Scan your Windows VM → identify outdated services."
      },
      {
        "level": 5,
        "title": "Exploitation Basics",
        "why": "Ethical hackers exploit weaknesses to prove risk.",
        "learn": [
          "Metasploit Framework",
          "SQL Injection, XSS, CSRF",
          "Password Cracking (John the Ripper, Hydra)"
        ],
        "resources": [
          {name:"Metasploit Unleashed",url:"https://www.offsec.com/metasploit-unleashed/"},
          {name:"OWASP Top 10",url:"https://owasp.org/www-project-top-ten/"},
          {name:"SQL Injection Explained – YouTube",url:"https://youtu.be/ciNHn38EyRc"}
        ],
        "mission": "Use Metasploit to exploit a vulnerable VM (Metasploitable2)."
      },
      {
        "level": 6,
        "title": "Web Application Hacking",
        "why": "Most attacks happen on web apps.",
        "learn": [
          "OWASP Top 10 in depth",
          "Tools: Burp Suite, ZAP Proxy",
          "Cookie/session attacks"
        ],
        "resources": [
          {name:"PortSwigger Academy",url:"https://portswigger.net/web-security"},
          {name:"ZAP Proxy Docs",url:"https://www.zaproxy.org/getting-started/"}
        ],
        "mission": "Practice SQLi/XSS on DVWA (Damn Vulnerable Web App)."
      },
      {
        "level": 7,
        "title": "Wireless & Network Hacking",
        "why": "Wi-Fi is often a weak link.",
        "learn": [
          "WPA/WPA2 cracking",
          "MITM (Man-in-the-Middle) attacks",
          "Tools: Aircrack-ng, Wireshark, Ettercap"
        ],
        "resources": [
          {name:"Aircrack-ng Docs",url:"https://www.aircrack-ng.org/doku.php"},
          {name:"Wireshark Tutorial – YouTube",url:"https://youtu.be/0fKg7e37bQE"}
        ],
        "mission": "Capture Wi-Fi handshake in lab → attempt crack with Aircrack-ng."
      },
      {
        "level": 8,
        "title": "Privilege Escalation & Post Exploitation",
        "why": "Getting in isn't enough; gaining control matters.",
        "learn": [
          "Linux/Windows privilege escalation techniques",
          "Persistence mechanisms",
          "Lateral movement"
        ],
        "resources": [
          {name:"GTFOBins",url:"https://gtfobins.github.io/"},
          {name:"Windows PrivEsc Cheatsheet",url:"https://book.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation"}
        ],
        "mission": "Exploit a low-privilege user in Metasploitable → escalate to root."
      },
      {
        "level": 9,
        "title": "Advanced Ethical Hacking",
        "why": "Professional hackers specialize in advanced domains.",
        "learn": [
          "Malware Analysis Basics",
          "Reverse Engineering (Ghidra, IDA)",
          "Cloud Hacking (AWS, Azure, GCP)",
          "Exploit Development"
        ],
        "resources": [
          {name:"Ghidra User Guide",url:"https://ghidra-sre.org/"},
          {name:"AWS Security Docs",url:"https://docs.aws.amazon.com/security/"}
        ],
        "mission": "Analyze a simple malware sample in a sandbox."
      },
      {
        "level": 10,
        "title": "Certifications & Real-World Practice",
        "why": "Credentials + practice = ethical hacker credibility.",
        "learn": [
          "Ethical hacking certifications",
          "Practical penetration testing",
          "Portfolio building"
        ],
        /*
        "resources": [
          {name:"Certification Roadmaps",url:""},
          {name:"Practice Platform Guides",url:""}
        ],
        */
        "mission": "Solve at least 25 HackTheBox machines → publish writeups (redact sensitive info) on GitHub/blog.",
        "certifications": [
          "CEH (Certified Ethical Hacker) – Beginner Friendly",
          "eJPT (Junior Penetration Tester) – Hands-on labs",
          "OSCP (Offensive Security Certified Professional) – Industry Gold Standard",
          "PNPT (Practical Network Penetration Tester) – Realistic exam"
        ],
        "practiceLabs": [
          "HackTheBox",
          "TryHackMe",
          "VulnHub"
        ]
      }
    ]
  }
,

  socanalyst: {
    "title": "SOC Analyst Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Core IT & Security Fundamentals",
        "why": "SOC analysts need a strong base in IT to understand alerts and logs.",
        "learn": [
          "Networking (TCP/IP, DNS, HTTP, SSL/TLS)",
          "Operating Systems (Linux & Windows basics)",
          "Security Basics (CIA triad, firewalls, proxies, IDS/IPS)"
        ],
        "resources": [
          {name:"Linux Journey",url:"https://linuxjourney.com/"},
          {name:"Networking Basics – Cisco",url:"https://skillsforall.com/course/networking-basics"},
          {name:"CompTIA Security+ Guide",url:"https://www.comptia.org/certifications/security"}
        ],
        "mission": "Build a home lab → 1 Linux VM + 1 Windows VM + pfSense firewall."
      },
      {
        "level": 2,
        "title": "Security Operations Basics",
        "why": "Understand the SOC environment before touching tools.",
        "learn": [
          "SOC Tiers (Tier 1 – Alert triage, Tier 2 – Deep analysis, Tier 3 – Threat hunting)",
          "Incident Response Lifecycle (NIST 800-61)",
          "Security Controls (preventive, detective, corrective)"
        ],
        "resources": [
          {name:"NIST IR Guide (PDF)",url:"https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf"},
          {name:"SOC Analyst Training – YouTube",url:"https://youtu.be/5cW7h6xMksg"}
        ],
        "mission": "Write an Incident Response Playbook for a phishing attack."
      },
      {
        "level": 3,
        "title": "SIEM (Security Information & Event Management)",
        "why": "SOC analysts live inside SIEM tools — it's their command center.",
        "learn": [
          "Splunk, ELK (Elasticsearch, Logstash, Kibana), Microsoft Sentinel",
          "Log analysis & correlation rules",
          "Alert tuning & false positive reduction"
        ],
        "resources": [
          {name:"Splunk Free Training",url:"https://www.splunk.com/en_us/training.html"},
          {name:"Elastic SIEM Docs",url:"https://www.elastic.co/guide/en/security/current/index.html"},
          {name:"Microsoft Sentinel Docs",url:"https://learn.microsoft.com/en-us/azure/sentinel/"}
        ],
        "mission": "Install ELK → send Linux syslogs → create alerts for failed logins."
      },
      {
        "level": 4,
        "title": "Endpoint & Network Security Monitoring",
        "why": "You'll analyze both host and network activity.",
        "learn": [
          "IDS/IPS (Snort, Suricata)",
          "Endpoint Detection (EDR tools: CrowdStrike, Defender ATP)",
          "Network traffic analysis (Wireshark, Zeek)"
        ],
        "resources": [
          {name:"Wireshark Tutorial – YouTube",url:"https://youtu.be/0fKg7e37bQE"},
          {name:"Snort Docs",url:"https://snort.org/downloads"},
          {name:"TryHackMe SOC ",url:"https://tryhackme.com/path/outline/soclevel1"}
        ],
        "mission": "Capture packets with Wireshark → identify a brute-force attack."
      },
      {
        "level": 5,
        "title": "Threat Intelligence & Hunting",
        "why": "Move from reactive → proactive defense.",
        "learn": [
          "MITRE ATT&CK Framework",
          "Threat intel feeds (AlienVault OTX, MISP, VirusTotal)",
          "Threat Hunting queries (Splunk, KQL in Sentinel)"
        ],
        "resources": [
          {name:"MITRE ATT&CK",url:"https://attack.mitre.org/"},
          {name:"AlienVault OTX",url:"https://otx.alienvault.com/"},
          {name:"Threat Hunting Training – YouTube",url:"https://youtu.be/qx2hZ3gY3jE"}
        ],
        "mission": "Hunt for unusual PowerShell commands in Windows event logs."
      },
      {
        "level": 6,
        "title": "Incident Response & Forensics",
        "why": "SOC analysts investigate incidents, not just detect them.",
        "learn": [
          "Digital Forensics basics (disk, memory, network)",
          "Malware analysis (sandboxing with Cuckoo)",
          "Log forensics (Windows Event Viewer, Linux syslog)"
        ],
        "resources": [
          {name:"SANS Digital Forensics",url:"https://www.sans.org/digital-forensics-security/"},
          {name:"Cuckoo Sandbox Docs",url:"https://cuckoosandbox.org/"}
        ],
        "mission": "Analyze a malware sample → document IoCs (Indicators of Compromise)."
      },
      {
        "level": 7,
        "title": "Security Automation (SOAR)",
        "why": "Big SOCs automate repetitive missions to save time.",
        "learn": [
          "SOAR tools (Splunk Phantom, Palo Alto Cortex XSOAR)",
          "Playbook automation (auto-block IPs, auto-reset accounts)",
          "Python scripting for automation"
        ],
        "resources": [
          {name:"Splunk SOAR Docs",url:"https://docs.splunk.com/Documentation/SOAR"},
          {name:"Cortex XSOAR Docs",url:"https://docs.paloaltonetworks.com/cortex"}
        ],
        "mission": "Automate alert response → suspicious IP triggers auto-block in firewall."
      },
      {
        "level": 8,
        "title": "Cloud Security Monitoring",
        "why": "SOCs must handle AWS, Azure, GCP environments.",
        "learn": [
          "Cloud SIEM (Microsoft Sentinel, AWS GuardDuty, GCP SCC)",
          "Cloud logging & monitoring (CloudTrail, CloudWatch, Azure Monitor)",
          "Cloud IAM Security"
        ],
        "resources": [
          {name:"AWS Security Docs",url:"https://docs.aws.amazon.com/security/"},
          {name:"Azure Security Docs",url:"https://learn.microsoft.com/en-us/azure/security/"},
          {name:"Google Cloud Security Docs",url:"https://cloud.google.com/security"}
        ],
        "mission": "Enable GuardDuty on AWS → investigate alerts in SIEM."
      },
      {
        "level": 9,
        "title": "Certifications & Career Growth",
        "why": "Certifications boost your SOC career path.",
        "learn": [
          "SOC certification paths",
          "Portfolio building",
          "Career progression"
        ],

        /*
        "resources": [
          {name:"SOC Certification Guide",url:""},
          {name:"Portfolio Building Tips",url:""}
        ],
        */
        "mission": "Solve at least 10 TryHackMe SOC labs → showcase findings in a blog/report.",
        "certifications": {
          "entrylevel": [
            "CompTIA Security+",
            "Microsoft SC-200",
            "Splunk Core Certified User"
          ],
          "intermediate": [
            "CompTIA CySA+",
            "EC-Council CSA"
          ],
          "advanced": [
            "GCIA (Intrusion Analyst)",
            "GCIH (Incident Handler)"
          ]
        },
        "projectIdeas": [
          "Build your own Mini SOC Lab with Splunk + Suricata",
          "Write a Threat Hunting Report using MITRE ATT&CK mapping",
          "Publish Incident Response Playbooks on GitHub/portfolio"
        ]
      }
    ]
  }
,

  cloudsecurity: {
    "title": "Cloud Security Engineer Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundation: Core IT & Security Knowledge",
        "why": "You need strong basics in IT, networking, and security before jumping into cloud-specific areas.",
        "learn": [
          "Operating Systems (Linux, Windows Server)",
          "Networking (TCP/IP, DNS, VPN, Firewalls, Subnetting)",
          "Security Fundamentals (CIA triad, authentication, encryption, threat models)",
          "IAM basics (users, roles, permissions)"
        ],
        "resources": [
          {name:"CS50 Cybersecurity Basics",url:"https://cs50.harvard.edu/cybersecurity/"},
          {name:"Networking Basics – Cisco",url:"https://skillsforall.com/learningcollections/networking-basics"}
          
        ],
        "mission": "Secure a simple Linux VM with firewall + SSH hardening."
      },
      {
        "level": 2,
        "title": "Cloud Fundamentals (Multi-Cloud Basics)",
        "why": "You must understand the cloud platforms before securing them.",
        "learn": [
          "AWS, Azure, GCP basics (compute, storage, networking)",
          "Shared Responsibility Model",
          "Cloud IAM (policies, RBAC, groups, MFA)",
          "Cost management basics"
        ],
        "resources": [
          {name:"AWS Cloud Practitioner Essentials (Free)",url:"https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/"},
          {name:"Azure Fundamentals (Free)",url:"https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/"},
          {name:"Google Cloud Fundamentals",url:"https://cloud.google.com/training/cloud-infrastructure"}
        ],
        "mission": "Deploy a VM in AWS/Azure/GCP and configure IAM roles securely."
      },
      {
        "level": 3,
        "title": "Cloud Security Deep Dive",
        "why": "This is your bread and butter — mastering security inside cloud platforms.",
        "learn": [
          "IAM & Access Control (Zero Trust)",
          "Data Protection (KMS, encryption at rest/in transit, secrets management)",
          "Network Security (VPCs, WAF, security groups, firewalls)",
          "Monitoring & Logging (CloudTrail, CloudWatch, GuardDuty, Azure Sentinel, GCP Security Command Center)"
        ],
        "resources": [
          {name:"AWS Security Documentation",url:"https://docs.aws.amazon.com/security/?id=docs_gateway"},
          {name:"Azure Security Best Practices",url:"https://learn.microsoft.com/en-us/security/"},
          {name:"GCP Security Docs",url:"https://cloud.google.com/security"}
        ],
        "mission": "Configure an S3 bucket with proper encryption, block public access, enable logging, and test access."
      },
      {
        "level": 4,
        "title": "DevSecOps Integration",
        "why": "Modern cloud security = automation + CI/CD + security at every stage.",
        "learn": [
          "CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins)",
          "Container Security (Docker, Kubernetes, EKS/AKS/GKE security)",
          "Infrastructure as Code Security (Terraform, CloudFormation, policy as code with Open Policy Agent)",
          "Secrets & Vaults (HashiCorp Vault, AWS Secrets Manager)"
        ],
        "resources": [
          {name:"Practical DevSecOps – Free Labs",url:"https://www.practical-devsecops.com/devsecops-resources/"},
          {name:"Kubernetes Security by CNCF",url:"https://training.linuxfoundation.org/training/kubernetes-security/"},
          {name:"OWASP DevSecOps Guide",url:"https://owasp.org/www-project-devsecops-guideline/"}
        ],
        "mission": "Create a pipeline that deploys a container securely with image scanning + secrets in Vault."
      },
      {
        "level": 5,
        "title": "Compliance, Risk & Incident Response",
        "why": "Companies trust you to handle audits and incidents in the cloud.",
        "learn": [
          "Compliance frameworks: GDPR, HIPAA, PCI-DSS, SOC 2",
          "Risk assessment models (NIST, CIS, ISO 27001)",
          "Incident response in cloud environments (Forensics, SIEM, SOAR)",
          "Cloud-native security tools (AWS Security Hub, Azure Defender, GCP Security Command Center)"
        ],
        "resources": [
          {name:"NIST Cybersecurity Framework",url:"https://www.nist.gov/cyberframework"},
          {name:"CIS Benchmarks for Cloud",url:"https://www.cisecurity.org/cis-benchmarks"},
          {name:"AWS Incident Response Guide",url:"https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/welcome.html"}
        ],
        "mission": "Simulate a security incident (compromised IAM key) and contain it using rotation, monitoring, and alerts."
      },
      {
        "level": 6,
        "title": "Advanced Specialization",
        "why": "To stand out, focus on advanced security areas.",
        "learn": [
          "Cloud Forensics",
          "Threat Hunting in Cloud",
          "Zero Trust Architecture",
          "Security Automation with Python/Bash"
        ],
        "resources": [
          {name:"MITRE ATT&CK for Cloud",url:"https://attack.mitre.org/matrices/enterprise/cloud/"},
          {name:"BlackHat Cloud Security Talks (YouTube)",url:"https://www.youtube.com/@BlackHatOfficialYT"},
          {name:"Book: Cloud Security Handbook by Edd Wilder-James"}
        ],
        "mission": "Automate cloud log analysis for suspicious activity using Python + CloudWatch/Azure Monitor."
      }
    ]
  }
,

  securityarchitect: {
    "title": "Security Architect Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundation: IT & Security Basics",
        "why": "A Security Architect must design security systems from the ground up — so deep fundamentals are a must.",
        "learn": [
          "Networking (OSI model, TCP/IP, DNS, VPNs, Firewalls)",
          "Operating Systems (Windows Server, Linux hardening)",
          "Security Principles (CIA triad, authentication, cryptography basics, PKI, hashing)",
          "Identity & Access Management (SSO, RBAC, MFA)"
        ],
        "resources": [
          {name:"Cisco Networking Basics",url:"https://skillsforall.com/learningcollections/networking-basics"},
          {name:"CompTIA Security+ Guide",url:"https://www.comptia.org/certifications/security"},
          {name:"Book: Principles of Information Security by Whitman & Mattord"}
        ],
        "mission": "Set up a secure Linux server with firewall rules, SSH hardening, and user roles."
      },
      {
        "level": 2,
        "title": "Intermediate: Security Engineering Skills",
        "why": "Before you design, you must know how to build secure systems.",
        "learn": [
          "Secure Network Design (DMZs, VLANs, Zero Trust, segmentation)",
          "Encryption in depth (TLS, IPSec, data-at-rest vs data-in-transit)",
          "Application Security (OWASP Top 10, secure coding practices)",
          "SIEM basics (Splunk, ELK, Azure Sentinel)"
        ],
        "resources": [
          {name:"OWASP Top 10",url:"https://owasp.org/www-project-top-ten/"},
          {name:"MITRE ATT&CK Framework",url:"https://attack.mitre.org/"},
          {name:"Splunk Free Training",url:"https://www.splunk.com/en_us/training.html"}
        ],
        "mission": "Design a small enterprise network with segmentation (internal, DMZ, external) + firewall rules."
      },
      {
        "level": 3,
        "title": "Cloud & Modern Architectures",
        "why": "Enterprises are moving to cloud-native setups — a Security Architect must secure both on-prem and cloud.",
        "learn": [
          "AWS, Azure, GCP security models",
          "Cloud IAM (policies, RBAC, least privilege)",
          "Secure cloud network design (VPCs, firewalls, WAFs, Zero Trust)",
          "Hybrid & Multi-Cloud architectures"
        ],
        "resources": [
          {name:"AWS Security Best Practices",url:"https://aws.amazon.com/architecture/security-identity-compliance/"},
          {name:"Azure Security Center Docs",url:"https://learn.microsoft.com/en-us/azure/security/"},
          {name:"Google Cloud Security Overview",url:"https://cloud.google.com/security"}
        ],
        "mission": "Architect a secure multi-tier app deployment on AWS with IAM, VPC, WAF, and monitoring enabled."
      },
      {
        "level": 4,
        "title": "Governance, Risk & Compliance (GRC)",
        "why": "As an architect, you must design systems that meet regulatory and audit requirements.",
        "learn": [
          "Risk Management Frameworks (NIST, ISO 27001, CIS Controls)",
          "Compliance: GDPR, HIPAA, PCI-DSS, SOC 2",
          "Threat Modeling (STRIDE, PASTA)",
          "Security Policies & Procedures (incident response, disaster recovery)"
        ],
        "resources": [
          {name:"NIST Cybersecurity Framework",url:"https://www.nist.gov/cyberframework"},
          {name:"CIS Controls",url:"https://www.cisecurity.org/controls"},
          {name:"ISO 27001 Overview",url:"https://www.iso.org/isoiec-27001-information-security.html"}
        ],
        "mission": "Perform a threat model for a financial app and suggest security controls (encryption, IAM, logging)."
      },
      {
        "level": 5,
        "title": "Advanced Architecture & Design",
        "why": "This is where you move into the role of a true architect.",
        "learn": [
          "Zero Trust Architectures",
          "Security Automation (SIEM + SOAR, automated IR playbooks)",
          "Secure DevOps (DevSecOps principles, IaC security, container security)",
          "Cryptographic Architectures (PKI design, key management)"
        ],
        "resources": [
          {name:"Zero Trust by NIST",url:"https://csrc.nist.gov/publications/detail/sp/800-207/final"},
          {name:"HashiCorp Vault Docs",url:"https://developer.hashicorp.com/vault/docs"},
          {name:"Book: Enterprise Security Architecture by Sherwood et al."}
        ],
        "mission": "Design a secure enterprise architecture blueprint for a company (cloud + on-prem + compliance)."
      },
      {
        "level": 6,
        "title": "Leadership & Communication",
        "why": "Security Architects aren't just techies — they guide teams, talk to executives, and make strategic decisions.",
        "learn": [
          "Security Strategy & Roadmapping",
          "Budgeting & Security Investments",
          "Communicating with Non-Technical Stakeholders",
          "Leading Security Teams (mentoring engineers, enforcing policies)"
        ],
        "resources": [
          {name:"CISSP Certification Guide",url:"https://www.isc2.org/certifications/cissp"},
          {name:"Book: Cybersecurity Leadership by Mansur Hasib"},
          {name:"CISO Tradecraft Podcast",url:"https://www.cisotradecraft.com/"}
        ],
        "mission": "Create and present a security roadmap to leadership with technical + business justifications."
      }
    ]
  }

  
  };

/*
  export const cyber = 

{
  cybersecurityanalyst: {
    "title": "Cybersecurity Analyst Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Core IT Foundations",
        "why": "Cybersecurity sits on top of IT fundamentals — without them, defenses are weak.",
        "learn": [
          "Networking (TCP/IP, DNS, DHCP, Firewalls)",
          "Operating Systems (Windows & Linux basics)",
          "Computer hardware basics"
        ],
        "resources": [
          "Networking Basics – Cisco",
          "Linux Journey",
          "Windows Server Basics – Microsoft 'learn'"
        ],
        "mission": "Set up a small home lab (1 Linux VM + 1 Windows VM) and practice connecting them over a network."
      },
      {
        "level": 2,
        "title": "Cybersecurity Fundamentals",
        "why": "Before tools, you must understand the principles of security.",
        "learn": [
          "CIA Triad (Confidentiality, Integrity, Availability)",
          "Threats & Vulnerabilities",
          "Security Controls & Policies",
          "Types of Attacks (Phishing, Malware, DDoS, SQL Injection)"
        ],
        "resources": [
          "NIST Cybersecurity Framework",
          "Introduction to Cybersecurity – Cisco",
          "FreeCodeCamp Cybersecurity Intro (YouTube)"
        ],
        "mission": "Write a security policy for your home lab → include password rules, patching, and access controls."
      },
      {
        "level": 3,
        "title": "Security Tools & Monitoring",
        "why": "Analysts rely on tools to detect and investigate threats.",
        "learn": [
          "SIEM (Splunk, ELK, Microsoft Sentinel)",
          "IDS/IPS (Snort, Suricata)",
          "Endpoint Protection (EDR/XDR)",
          "Firewalls & Proxy tools (pfSense, Wireshark)"
        ],
        "resources": [
          "Splunk Free Training",
          "Wireshark Docs",
          "TryHackMe SOC 'level' 1 Path"
        ],
        "mission": "Capture network traffic with Wireshark → identify normal vs suspicious packets."
      },
      {
        "level": 4,
        "title": "Threat Intelligence & Incident Response",
        "why": "Analysts are first responders during an attack.",
        "learn": [
          "Incident Response Lifecycle (NIST 800-61)",
          "Threat Hunting basics",
          "Digital Forensics basics",
          "Malware Analysis (intro)"
        ],
        "resources": [
          "SANS Incident Handler's Handbook (PDF)",
          "Cyber Kill Chain Explained (YouTube)",
          "TryHackMe Incident Response Lab"
        ],
        "mission": "Simulate a phishing attack in your lab → investigate logs to identify the source."
      },
      {
        "level": 5,
        "title": "Security Frameworks & Compliance",
        "why": "Analysts work within regulations to keep businesses compliant.",
        "learn": [
          "ISO 27001, NIST CSF, SOC2, GDPR basics",
          "Risk Management frameworks",
          "Vulnerability Management (Nessus, OpenVAS)"
        ],
        "resources": [
          "NIST CSF Overview",
          "ISO 27001 Guide",
          "OpenVAS Docs"
        ],
        "mission": "Run a vulnerability scan on your lab system → create a simple risk assessment report."
      },
      {
        "level": 6,
        "title": "Advanced Defensive Security",
        "why": "You'll 'level' up from monitoring → active defense.",
        "learn": [
          "SOC Operations (Tier 1, Tier 2 responsibilities)",
          "Log correlation & anomaly detection",
          "Threat Intelligence feeds (MISP, VirusTotal, AlienVault OTX)",
          "Security Automation (SOAR platforms)"
        ],
        "resources": [
          "MITRE ATT&CK Framework",
          "AlienVault OTX",
          "Blue Team Labs Online"
        ],
        "mission": "Build an alerting system → if someone brute forces SSH on your VM, log + alert it via email/Slack."
      },
      {
        "level": 7,
        "title": "Offensive Awareness (Red Team Basics)",
        "why": "To defend, you must know how attackers think.",
        "learn": [
          "Penetration testing basics (Kali Linux, Metasploit, Nmap, Burp Suite)",
          "Social Engineering basics",
          "Web App Security (OWASP Top 10)"
        ],
        "resources": [
          "OWASP Top 10",
          "HackTheBox Academy",
          "Nmap Docs"
        ],
        "mission": "Use Nmap to scan your lab VM → identify open ports → try to exploit misconfigurations."
      },
      {
        "level": 8,
        "title": "Cloud Security (Bonus Specialization)",
        "why": "Organizations are moving to cloud → analysts must adapt.",
        "learn": [
          "AWS Security (IAM, GuardDuty, CloudTrail)",
          "Azure Security Center",
          "GCP Security Basics"
        ],
        "resources": [
          "AWS Security Docs",
          "Azure Security Docs",
          "GCP Security Overview"
        ],
        "mission": "Enable GuardDuty in AWS free tier → analyze a security finding."
      },
      {
        "level": 9,
        "title": "Certifications & Career Growth",
        "why": "Certifications validate your skills & unlock jobs.",
        "learn": [
          "Cybersecurity certification paths",
          "Portfolio building",
          "Career progression"
        ],
        "resources": [
          "Cybersecurity Certification Guide",
          "Portfolio Building Tips"
        ],
        "mission": "Pick one certification → prepare a study plan → share lab projects in your portfolio",
        "certifications": {
          "entry'level'": [
            "CompTIA Security+",
            "Microsoft SC-200",
            "CySA+"
          ],
          "intermediate": [
            "SSCP",
            "GIAC Security Essentials (GSEC)"
          ],
          "advanced": [
            "CISSP",
            "CISM (for leadership roles)"
          ]
        },
        "projectIdeas": [
          "Build your own SOC Lab with Splunk + Suricata + ELK",
          "Create a Phishing Detection Report with real-world logs",
          "Publish a blue team playbook on GitHub"
        ]
      }
    ]
  }
,

  ethicalhacker: {
    "title": "Ethical Hacker Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Core IT & Security Foundations",
        "why": "To break systems, you must first understand how they work.",
        "learn": [
          "Networking (TCP/IP, Subnetting, DNS, VPNs)",
          "Operating Systems (Linux, Windows)",
          "Security basics (firewalls, proxies, CIA triad)"
        ],
        "resources": [
          "Linux Journey",
          "Networking Basics – Cisco",
          "CompTIA Security+ Guide"
        ],
        "mission": "Set up a home lab → 1 Linux VM (attacker), 1 Windows VM (target)."
      },
      {
        "level": 2,
        "title": "Scripting & Programming",
        "why": "Ethical hackers automate attacks, build exploits, and write scripts.",
        "learn": [
          "Python (automation & exploit scripts)",
          "Bash (Linux automation)",
          "JavaScript (web exploits)"
        ],
        "resources": [
          "Python for Security – FreeCodeCamp",
          "'learn' Bash – Codecademy"
        ],
        "mission": "Write a Python script to scan open ports (mini Nmap)."
      },
      {
        "level": 3,
        "title": "Reconnaissance & Footprinting",
        "why": "First step of hacking = gather intel.",
        "learn": [
          "OSINT (Open Source Intelligence)",
          "Tools: Nmap, Maltego, Recon-ng",
          "Google Dorking"
        ],
        "resources": [
          "Nmap Docs",
          "OSINT Framework",
          "Google Dorking Tutorial – YouTube"
        ],
        "mission": "Use Nmap to scan your lab VM → map open ports & services."
      },
      {
        "level": 4,
        "title": "Scanning & Enumeration",
        "why": "Once you find targets, dig deeper into vulnerabilities.",
        "learn": [
          "Banner Grabbing",
          "Network Scanning (Nmap, Masscan)",
          "Vulnerability Scanning (Nessus, OpenVAS)"
        ],
        "resources": [
          "OpenVAS Docs",
          "Nessus Essentials Free"
        ],
        "mission": "Scan your Windows VM → identify outdated services."
      },
      {
        "level": 5,
        "title": "Exploitation Basics",
        "why": "Ethical hackers exploit weaknesses to prove risk.",
        "learn": [
          "Metasploit Framework",
          "SQL Injection, XSS, CSRF",
          "Password Cracking (John the Ripper, Hydra)"
        ],
        "resources": [
          "Metasploit Unleashed",
          "OWASP Top 10",
          "SQL Injection Explained – YouTube"
        ],
        "mission": "Use Metasploit to exploit a vulnerable VM (Metasploitable2)."
      },
      {
        "level": 6,
        "title": "Web Application Hacking",
        "why": "Most attacks happen on web apps.",
        "learn": [
          "OWASP Top 10 in depth",
          "Tools: Burp Suite, ZAP Proxy",
          "Cookie/session attacks"
        ],
        "resources": [
          "PortSwigger Academy",
          "ZAP Proxy Docs"
        ],
        "mission": "Practice SQLi/XSS on DVWA (Damn Vulnerable Web App)."
      },
      {
        "level": 7,
        "title": "Wireless & Network Hacking",
        "why": "Wi-Fi is often a weak link.",
        "learn": [
          "WPA/WPA2 cracking",
          "MITM (Man-in-the-Middle) attacks",
          "Tools: Aircrack-ng, Wireshark, Ettercap"
        ],
        "resources": [
          "Aircrack-ng Docs",
          "Wireshark Tutorial – YouTube"
        ],
        "mission": "Capture Wi-Fi handshake in lab → attempt crack with Aircrack-ng."
      },
      {
        "level": 8,
        "title": "Privilege Escalation & Post Exploitation",
        "why": "Getting in isn't enough; gaining control matters.",
        "learn": [
          "Linux/Windows privilege escalation techniques",
          "Persistence mechanisms",
          "Lateral movement"
        ],
        "resources": [
          "GTFOBins",
          "Windows PrivEsc Cheatsheet"
        ],
        "mission": "Exploit a low-privilege user in Metasploitable → escalate to root."
      },
      {
        "level": 9,
        "title": "Advanced Ethical Hacking",
        "why": "Professional hackers specialize in advanced domains.",
        "learn": [
          "Malware Analysis Basics",
          "Reverse Engineering (Ghidra, IDA)",
          "Cloud Hacking (AWS, Azure, GCP)",
          "Exploit Development"
        ],
        "resources": [
          "Ghidra User Guide",
          "AWS Security Docs"
        ],
        "mission": "Analyze a simple malware sample in a sandbox."
      },
      {
        "level": 10,
        "title": "Certifications & Real-World Practice",
        "why": "Credentials + practice = ethical hacker credibility.",
        "learn": [
          "Ethical hacking certifications",
          "Practical penetration testing",
          "Portfolio building"
        ],
        "resources": [
          "Certification Roadmaps",
          "Practice Platform Guides"
        ],
        "mission": "Solve at least 25 HackTheBox machines → publish writeups (redact sensitive info) on GitHub/blog.",
        "certifications": [
          "CEH (Certified Ethical Hacker) – Beginner Friendly",
          "eJPT (Junior Penetration Tester) – Hands-on labs",
          "OSCP (Offensive Security Certified Professional) – Industry Gold Standard",
          "PNPT (Practical Network Penetration Tester) – Realistic exam"
        ],
        "practiceLabs": [
          "HackTheBox",
          "TryHackMe",
          "VulnHub"
        ]
      }
    ]
  }
,

  socanalyst: {
    "title": "SOC Analyst Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Core IT & Security Fundamentals",
        "why": "SOC analysts need a strong base in IT to understand alerts and logs.",
        "learn": [
          "Networking (TCP/IP, DNS, HTTP, SSL/TLS)",
          "Operating Systems (Linux & Windows basics)",
          "Security Basics (CIA triad, firewalls, proxies, IDS/IPS)"
        ],
        "resources": [
          "Linux Journey",
          "Networking Basics – Cisco",
          "CompTIA Security+ Guide"
        ],
        "mission": "Build a home lab → 1 Linux VM + 1 Windows VM + pfSense firewall."
      },
      {
        "level": 2,
        "title": "Security Operations Basics",
        "why": "Understand the SOC environment before touching tools.",
        "learn": [
          "SOC Tiers (Tier 1 – Alert triage, Tier 2 – Deep analysis, Tier 3 – Threat hunting)",
          "Incident Response Lifecycle (NIST 800-61)",
          "Security Controls (preventive, detective, corrective)"
        ],
        "resources": [
          "NIST IR Guide (PDF)",
          "SOC Analyst Training – YouTube"
        ],
        "mission": "Write an Incident Response Playbook for a phishing attack."
      },
      {
        "level": 3,
        "title": "SIEM (Security Information & Event Management)",
        "why": "SOC analysts live inside SIEM tools — it's their command center.",
        "learn": [
          "Splunk, ELK (Elasticsearch, Logstash, Kibana), Microsoft Sentinel",
          "Log analysis & correlation rules",
          "Alert tuning & false positive reduction"
        ],
        "resources": [
          "Splunk Free Training",
          "Elastic SIEM Docs",
          "Microsoft Sentinel Docs"
        ],
        "mission": "Install ELK → send Linux syslogs → create alerts for failed logins."
      },
      {
        "level": 4,
        "title": "Endpoint & Network Security Monitoring",
        "why": "You'll analyze both host and network activity.",
        "learn": [
          "IDS/IPS (Snort, Suricata)",
          "Endpoint Detection (EDR tools: CrowdStrike, Defender ATP)",
          "Network traffic analysis (Wireshark, Zeek)"
        ],
        "resources": [
          "Wireshark Tutorial – YouTube",
          "Snort Docs",
          "TryHackMe SOC "
        ],
        "mission": "Capture packets with Wireshark → identify a brute-force attack."
      },
      {
        "level": 5,
        "title": "Threat Intelligence & Hunting",
        "why": "Move from reactive → proactive defense.",
        "learn": [
          "MITRE ATT&CK Framework",
          "Threat intel feeds (AlienVault OTX, MISP, VirusTotal)",
          "Threat Hunting queries (Splunk, KQL in Sentinel)"
        ],
        "resources": [
          "MITRE ATT&CK",
          "AlienVault OTX",
          "Threat Hunting Training – YouTube"
        ],
        "mission": "Hunt for unusual PowerShell commands in Windows event logs."
      },
      {
        "level": 6,
        "title": "Incident Response & Forensics",
        "why": "SOC analysts investigate incidents, not just detect them.",
        "learn": [
          "Digital Forensics basics (disk, memory, network)",
          "Malware analysis (sandboxing with Cuckoo)",
          "Log forensics (Windows Event Viewer, Linux syslog)"
        ],
        "resources": [
          "SANS Digital Forensics",
          "Cuckoo Sandbox Docs"
        ],
        "mission": "Analyze a malware sample → document IoCs (Indicators of Compromise)."
      },
      {
        "level": 7,
        "title": "Security Automation (SOAR)",
        "why": "Big SOCs automate repetitive missions to save time.",
        "learn": [
          "SOAR tools (Splunk Phantom, Palo Alto Cortex XSOAR)",
          "Playbook automation (auto-block IPs, auto-reset accounts)",
          "Python scripting for automation"
        ],
        "resources": [
          "Splunk SOAR Docs",
          "Cortex XSOAR Docs"
        ],
        "mission": "Automate alert response → suspicious IP triggers auto-block in firewall."
      },
      {
        "level": 8,
        "title": "Cloud Security Monitoring",
        "why": "SOCs must handle AWS, Azure, GCP environments.",
        "learn": [
          "Cloud SIEM (Microsoft Sentinel, AWS GuardDuty, GCP SCC)",
          "Cloud logging & monitoring (CloudTrail, CloudWatch, Azure Monitor)",
          "Cloud IAM Security"
        ],
        "resources": [
          "AWS Security Docs",
          "Azure Security Docs",
          "Google Cloud Security Docs"
        ],
        "mission": "Enable GuardDuty on AWS → investigate alerts in SIEM."
      },
      {
        "level": 9,
        "title": "Certifications & Career Growth",
        "why": "Certifications boost your SOC career path.",
        "learn": [
          "SOC certification paths",
          "Portfolio building",
          "Career progression"
        ],
        "resources": [
          "SOC Certification Guide",
          "Portfolio Building Tips"
        ],
        "mission": "Solve at least 10 TryHackMe SOC labs → showcase findings in a blog/report.",
        "certifications": {
          "entrylevel": [
            "CompTIA Security+",
            "Microsoft SC-200",
            "Splunk Core Certified User"
          ],
          "intermediate": [
            "CompTIA CySA+",
            "EC-Council CSA"
          ],
          "advanced": [
            "GCIA (Intrusion Analyst)",
            "GCIH (Incident Handler)"
          ]
        },
        "projectIdeas": [
          "Build your own Mini SOC Lab with Splunk + Suricata",
          "Write a Threat Hunting Report using MITRE ATT&CK mapping",
          "Publish Incident Response Playbooks on GitHub/portfolio"
        ]
      }
    ]
  }
,

  cloudsecurity: {
    "title": "Cloud Security Engineer Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundation: Core IT & Security Knowledge",
        "why": "You need strong basics in IT, networking, and security before jumping into cloud-specific areas.",
        "learn": [
          "Operating Systems (Linux, Windows Server)",
          "Networking (TCP/IP, DNS, VPN, Firewalls, Subnetting)",
          "Security Fundamentals (CIA triad, authentication, encryption, threat models)",
          "IAM basics (users, roles, permissions)"
        ],
        "resources": [
          "CS50 Cybersecurity Basics",
          "Networking Basics – Cisco",
          "Book: CompTIA Security+ Guide"
        ],
        "mission": "Secure a simple Linux VM with firewall + SSH hardening."
      },
      {
        "level": 2,
        "title": "Cloud Fundamentals (Multi-Cloud Basics)",
        "why": "You must understand the cloud platforms before securing them.",
        "learn": [
          "AWS, Azure, GCP basics (compute, storage, networking)",
          "Shared Responsibility Model",
          "Cloud IAM (policies, RBAC, groups, MFA)",
          "Cost management basics"
        ],
        "resources": [
          "AWS Cloud Practitioner Essentials (Free)",
          "Azure Fundamentals (Free)",
          "Google Cloud Fundamentals"
        ],
        "mission": "Deploy a VM in AWS/Azure/GCP and configure IAM roles securely."
      },
      {
        "level": 3,
        "title": "Cloud Security Deep Dive",
        "why": "This is your bread and butter — mastering security inside cloud platforms.",
        "learn": [
          "IAM & Access Control (Zero Trust)",
          "Data Protection (KMS, encryption at rest/in transit, secrets management)",
          "Network Security (VPCs, WAF, security groups, firewalls)",
          "Monitoring & Logging (CloudTrail, CloudWatch, GuardDuty, Azure Sentinel, GCP Security Command Center)"
        ],
        "resources": [
          "AWS Security Documentation",
          "Azure Security Best Practices",
          "GCP Security Docs"
        ],
        "mission": "Configure an S3 bucket with proper encryption, block public access, enable logging, and test access."
      },
      {
        "level": 4,
        "title": "DevSecOps Integration",
        "why": "Modern cloud security = automation + CI/CD + security at every stage.",
        "learn": [
          "CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins)",
          "Container Security (Docker, Kubernetes, EKS/AKS/GKE security)",
          "Infrastructure as Code Security (Terraform, CloudFormation, policy as code with Open Policy Agent)",
          "Secrets & Vaults (HashiCorp Vault, AWS Secrets Manager)"
        ],
        "resources": [
          "Practical DevSecOps – Free Labs",
          "Kubernetes Security by CNCF",
          "OWASP DevSecOps Guide"
        ],
        "mission": "Create a pipeline that deploys a container securely with image scanning + secrets in Vault."
      },
      {
        "level": 5,
        "title": "Compliance, Risk & Incident Response",
        "why": "Companies trust you to handle audits and incidents in the cloud.",
        "learn": [
          "Compliance frameworks: GDPR, HIPAA, PCI-DSS, SOC 2",
          "Risk assessment models (NIST, CIS, ISO 27001)",
          "Incident response in cloud environments (Forensics, SIEM, SOAR)",
          "Cloud-native security tools (AWS Security Hub, Azure Defender, GCP Security Command Center)"
        ],
        "resources": [
          "NIST Cybersecurity Framework",
          "CIS Benchmarks for Cloud",
          "AWS Incident Response Guide"
        ],
        "mission": "Simulate a security incident (compromised IAM key) and contain it using rotation, monitoring, and alerts."
      },
      {
        "level": 6,
        "title": "Advanced Specialization",
        "why": "To stand out, focus on advanced security areas.",
        "learn": [
          "Cloud Forensics",
          "Threat Hunting in Cloud",
          "Zero Trust Architecture",
          "Security Automation with Python/Bash"
        ],
        "resources": [
          "MITRE ATT&CK for Cloud",
          "BlackHat Cloud Security Talks (YouTube)",
          "Book: Cloud Security Handbook by Edd Wilder-James"
        ],
        "mission": "Automate cloud log analysis for suspicious activity using Python + CloudWatch/Azure Monitor."
      }
    ]
  }
,

  securityarchitect: {
    "title": "Security Architect Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundation: IT & Security Basics",
        "why": "A Security Architect must design security systems from the ground up — so deep fundamentals are a must.",
        "learn": [
          "Networking (OSI model, TCP/IP, DNS, VPNs, Firewalls)",
          "Operating Systems (Windows Server, Linux hardening)",
          "Security Principles (CIA triad, authentication, cryptography basics, PKI, hashing)",
          "Identity & Access Management (SSO, RBAC, MFA)"
        ],
        "resources": [
          "Cisco Networking Basics",
          "CompTIA Security+ Guide",
          "Book: Principles of Information Security by Whitman & Mattord"
        ],
        "mission": "Set up a secure Linux server with firewall rules, SSH hardening, and user roles."
      },
      {
        "level": 2,
        "title": "Intermediate: Security Engineering Skills",
        "why": "Before you design, you must know how to build secure systems.",
        "learn": [
          "Secure Network Design (DMZs, VLANs, Zero Trust, segmentation)",
          "Encryption in depth (TLS, IPSec, data-at-rest vs data-in-transit)",
          "Application Security (OWASP Top 10, secure coding practices)",
          "SIEM basics (Splunk, ELK, Azure Sentinel)"
        ],
        "resources": [
          "OWASP Top 10",
          "MITRE ATT&CK Framework",
          "Splunk Free Training"
        ],
        "mission": "Design a small enterprise network with segmentation (internal, DMZ, external) + firewall rules."
      },
      {
        "level": 3,
        "title": "Cloud & Modern Architectures",
        "why": "Enterprises are moving to cloud-native setups — a Security Architect must secure both on-prem and cloud.",
        "learn": [
          "AWS, Azure, GCP security models",
          "Cloud IAM (policies, RBAC, least privilege)",
          "Secure cloud network design (VPCs, firewalls, WAFs, Zero Trust)",
          "Hybrid & Multi-Cloud architectures"
        ],
        "resources": [
          "AWS Security Best Practices",
          "Azure Security Center Docs",
          "Google Cloud Security Overview"
        ],
        "mission": "Architect a secure multi-tier app deployment on AWS with IAM, VPC, WAF, and monitoring enabled."
      },
      {
        "level": 4,
        "title": "Governance, Risk & Compliance (GRC)",
        "why": "As an architect, you must design systems that meet regulatory and audit requirements.",
        "learn": [
          "Risk Management Frameworks (NIST, ISO 27001, CIS Controls)",
          "Compliance: GDPR, HIPAA, PCI-DSS, SOC 2",
          "Threat Modeling (STRIDE, PASTA)",
          "Security Policies & Procedures (incident response, disaster recovery)"
        ],
        "resources": [
          "NIST Cybersecurity Framework",
          "CIS Controls",
          "ISO 27001 Overview"
        ],
        "mission": "Perform a threat model for a financial app and suggest security controls (encryption, IAM, logging)."
      },
      {
        "level": 5,
        "title": "Advanced Architecture & Design",
        "why": "This is where you move into the role of a true architect.",
        "learn": [
          "Zero Trust Architectures",
          "Security Automation (SIEM + SOAR, automated IR playbooks)",
          "Secure DevOps (DevSecOps principles, IaC security, container security)",
          "Cryptographic Architectures (PKI design, key management)"
        ],
        "resources": [
          "Zero Trust by NIST",
          "HashiCorp Vault Docs",
          "Book: Enterprise Security Architecture by Sherwood et al."
        ],
        "mission": "Design a secure enterprise architecture blueprint for a company (cloud + on-prem + compliance)."
      },
      {
        "level": 6,
        "title": "Leadership & Communication",
        "why": "Security Architects aren't just techies — they guide teams, talk to executives, and make strategic decisions.",
        "learn": [
          "Security Strategy & Roadmapping",
          "Budgeting & Security Investments",
          "Communicating with Non-Technical Stakeholders",
          "Leading Security Teams (mentoring engineers, enforcing policies)"
        ],
        "resources": [
          "CISSP Certification Guide",
          "Book: Cybersecurity Leadership by Mansur Hasib",
          "CISO Tradecraft Podcast"
        ],
        "mission": "Create and present a security roadmap to leadership with technical + business justifications."
      }
    ]
  }

  
  };


*/
