


export const testing = 
  {
  qaeng: {
    "title": "QA Engineer Roadmap (Manual + Automation)",
    "levels": [
      {
        "level": 1,
        "title": "Foundations of QA & Software Testing",
        "why": "Before automating tests, you must understand how testing works manually. Manual testing is the roots of QA.",
        "learn": [
          "Software Development Life Cycle (SDLC) & STLC",
          "Types of Testing → Functional, Non-Functional, Regression, Smoke, UAT",
          "Test Case Design → Boundary Value, Equivalence Partitioning",
          "Bug Life Cycle & Reporting"
        ],
        "resources": [
          {home:"Software Testing Fundamentals",url:"https://softwaretestingfundamentals.com/"},
          {home:"Guru99 – Manual Testing",url:"https://www.guru99.com/manual-testing.html"},
          {home:"ISTQB Foundation Syllabus (PDF)",url:"https://www.istqb.org/certifications/certified-tester-foundation-level"}
        ],
        "missions": [
          "Write 20+ test cases for a simple web app",
          "Report bugs using Jira (or Bugzilla)"
        ]
      },
      {
        "level": 2,
        "title": "Tools for Manual QA",
        "why": "Manual testers don't just click buttons — they use tools for test management & tracking.",
        "learn": [
          "Test Management → Jira, TestRail, Zephyr",
          "Defect Tracking → Jira, Bugzilla",
          "API Testing Basics → Postman"
        ],
        "resources": [
          {home:"Jira Software Tutorial",url:"https://www.atlassian.com/software/jira/guides"},
          {home:"Postman API Testing Guide",url:"https://learning.postman.com/docs/getting-started/introduction/"},
          {home:"TestRail Docs",url:"https://support.gurock.com/"}
        ],
        "missions": [
          "Create a test plan in Jira",
          "Test an API with Postman"
        ]
      },
      {
        "level": 3,
        "title": "Test Automation Foundations",
        "why": "Automation = superpowers of QA. It saves time, reduces human error, and scales testing.",
        "learn": [
          "Programming for QA → Python / Java / JavaScript",
          "Selenium WebDriver → Automating browser tests",
          "Test Frameworks → TestNG (Java), PyTest (Python), JUnit, Mocha",
          "Automation Patterns → Page Object Model (POM)"
        ],
        "resources": [
          {home:"Selenium Official Docs",url:"https://www.selenium.dev/documentation/"},
          {home:"PyTest Documentation",url:"https://docs.pytest.org/"},
          {home:"TestNG Docs",url:"https://testng.org/doc/"},
          {home:"Automation Step by Step (YouTube)",url:"https://www.youtube.com/@AutomationStepByStep"}
        ],
        "missions": [
          "Automate login test for a website with Selenium",
          "Build a small test suite with PyTest/TestNG"
        ]
      },
      {
        "level": 4,
        "title": "API & Mobile Automation",
        "why": "Apps today = Web + Mobile + APIs. A QA engineer must test them all.",
        "learn": [
          "API Automation → REST Assured (Java), Requests (Python)",
          "Mobile Testing → Appium",
          "Postman Collections + Newman CLI for automation"
        ],
        "resources": [
          {home:"REST Assured Docs",url:"https://rest-assured.io/"},
          {home:"Appium Official Docs",url:"https://appium.io/docs/en/latest/"},
          {home:"Postman Newman CLI",url:"https://learning.postman.com/docs/collections/using-newman-cli/"}
        ],
        "missions": [
          "Automate REST API tests with REST Assured",
          "Automate a simple Android app test with Appium"
        ]
      },
      {
        "level": 5,
        "title": "CI/CD & TestOps (QA in DevOps)",
        "why": "Modern QA = shift-left testing → integrating QA into CI/CD pipelines.",
        "learn": [
          "CI/CD Tools → Jenkins, GitHub Actions, GitLab CI",
          "Containerization → Docker basics for test environments",
          "Parallel & Cross-Browser Testing → Selenium Grid, BrowserStack, Sauce Labs"
        ],
        "resources": [
          {home:"Jenkins Docs",url:"https://www.jenkins.io/doc/"},
          {home:"GitHub Actions Docs",url:"https://docs.github.com/en/actions"},
          {home:"BrowserStack Testing",url:"https://www.browserstack.com/docs"}
        ],
        "missions": [
          "Integrate automated tests into Jenkins pipeline",
          "Run cross-browser tests on BrowserStack"
        ]
      },
      {
        "level": 6,
        "title": "Advanced QA Engineering & Specialization",
        "why": "QA isn't only about finding bugs — it's about ensuring reliability, security, and performance.",
        "learn": [
          "Performance Testing → JMeter, Locust",
          "Security Testing → OWASP ZAP, Burp Suite basics",
          "Automation at Scale → Cypress (JS), Playwright (JS/TS)",
          "Behavior-Driven Development (BDD) → Cucumber, Gherkin"
        ],
        "resources": [
{home:"Apache JMeter",url:"https://jmeter.apache.org/"},
          {home:"Locust Load Testing",url:"https://locust.io/"},
          {home:"Cypress Docs",url:"https://docs.cypress.io/"},
          {home:"Playwright Docs",url:"https://playwright.dev/"},
          {home:"OWASP ZAP",url:"https://www.zaproxy.org/"}
        ],
        "missions": [
          "Run a load test with JMeter",
          "Create a BDD test with Cucumber",
          "Try a test automation framework like Cypress/Playwright"
        ]
      },
      {
        "level": 7,
        "title": "Mastery & QA Engineering Role",
        "why": "Now you're not just a tester — you're a QA Engineer ensuring quality at scale.",
        "learn": [
          "Test Strategy & QA Leadership",
          "Continuous Testing Practices",
          "Advanced TestOps (Monitoring + Observability in QA)",
          "AI in QA (Test generation, self-healing tests)"
        ],
        "resources": [
          {home:"Ministry of Testing",url:"https://www.ministryoftesting.com/"},
          {home:"LambdaTest Blog",url:"https://www.lambdatest.com/blog/"},
          {home:"AI in Testing (Infosys Paper)",url:"https://www.infosys.com/services/validation-solutions/documents/ai-powered-testing.pdf"}
        ],
        "missions": [
          "Build a portfolio of 5 automation projects (Web, API, Mobile, CI/CD)",
          "Publish QA blogs/tutorials on Medium or GitHub",
          "Apply for QA Engineer (Manual + Automation) roles"
        ]
      }
    ]
  },

  testautomationeng : {
    "title": "Test Automation Engineer Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundations of QA & SDLC",
        "why": "Even as an automation expert, you must first understand how software testing works manually before writing scripts.",
        "learn": [
          "Basics of Software Testing (SDLC, STLC)",
          "Test Case Design Techniques",
          "Types of Testing → Functional, Regression, Smoke, Sanity",
          "Bug Reporting & Defect Life Cycle"
        ],
        "resources": [
          {home:"Software Testing Fundamentals",url:"https://softwaretestingfundamentals.com/"},
          {home:"Guru99 – Manual Testing",url:"https://www.guru99.com/manual-testing.html"},
          {home:"ISTQB Foundation Syllabus",url:"https://www.istqb.org/certifications/certified-tester-foundation-level"}
        ],
        "missions": [
          "Write 20+ test cases for a sample app",
          "File bugs using Jira or Bugzilla"
        ]
      },
      {
        "level": 2,
        "title": "Programming for Automation",
        "why": "Automation = coding the tests. You need solid programming basics.",
        "learn": [
          "Pick a Language → Python / Java / JavaScript",
          "OOPs Concepts (Classes, Objects, Inheritance, Encapsulation)",
          "Data Structures → Arrays, Lists, Maps",
          "File Handling, Exceptions, Logging"
        ],
        "resources": [
          {home:"Python for Everybody (Coursera)",url:"https://www.coursera.org/specializations/python"},
          {home:"Java Programming (W3Schools)",url:"https://www.w3schools.com/java/"},
          {home:"JavaScript Basics (MDN)",url:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript"}
        ],
        "missions": [
          "Write simple scripts for file handling",
          "Automate a basic login form validation using code"
        ]
      },
      {
        "level": 3,
        "title": "Core Test Automation Tools",
        "why": "Here's where you start automating browsers, APIs, and apps.",
        "learn": [
          "Web Automation → Selenium WebDriver",
          "Test Frameworks → TestNG (Java), PyTest (Python), JUnit, Mocha",
          "API Automation → Postman, REST Assured, Requests (Python)",
          "Mobile Testing → Appium"
        ],
        "resources": [
          {home:"Selenium Docs",url:"https://www.selenium.dev/documentation/"},
          {home:"PyTest Docs",url:"https://docs.pytest.org/"},
          {home:"REST Assured Docs",url:"https://rest-assured.io/"},
          {home:"Appium Docs",url:"https://appium.io/docs/en/latest/"},
          {home:"Automation Step by Step (YouTube)",url:"https://www.youtube.com/@AutomationStepByStep"}
        ],
        "missions": [
          "Automate Google login test with Selenium",
          "Build API test suite with REST Assured or Postman",
          "Write a mobile test with Appium"
        ]
      },
      {
        "level": 4,
        "title": "Advanced Test Automation",
        "why": "Now you move from simple scripts → scalable automation frameworks.",
        "learn": [
          "Page Object Model (POM) & Data-Driven Testing",
          "Behavior-Driven Development (BDD) → Cucumber + Gherkin",
          "Parallel & Cross-Browser Testing → Selenium Grid, BrowserStack",
          "Version Control → Git/GitHub"
        ],
        "resources": [
          {home:"Cucumber Docs",url:"https://cucumber.io/docs/"},
          {home:"GitHub learning Lab",url:"https://lab.github.com/"},
          {home:"BrowserStack Guide",url:"https://www.browserstack.com/docs/automate"}
        ],
        "missions": [
          "Build a Selenium framework with POM",
          "Create BDD test cases with Cucumber",
          "Run tests in parallel using Selenium Grid"
        ]
      },
      {
        "level": 5,
        "title": "CI/CD & DevOps for Automation",
        "why": "Modern automation engineers integrate tests into DevOps pipelines for continuous testing.",
        "learn": [
          "CI/CD Tools → Jenkins, GitHub Actions, GitLab CI",
          "Docker basics for test environments",
          "Test Execution in Pipelines",
          "Monitoring test results with Allure Reports / Extent Reports"
        ],
        "resources": [
          {home:"Jenkins Docs",url:"https://www.jenkins.io/doc/"},
          {home:"GitHub Actions Docs",url:"https://docs.github.com/en/actions"},
          {home:"Docker Docs",url:"https://docs.docker.com/get-started/"},
          {home:"Allure Test Reports",url:"https://docs.qameta.io/allure/"}
        ],
        "missions": [
          "Integrate Selenium test suite into Jenkins pipeline",
          "Run automated tests inside Docker container"
        ]
      },
      {
        "level": 6,
        "title": "Specialized & Modern Test Automation",
        "why": "Stay ahead by exploring modern test frameworks and performance testing.",
        "learn": [
          "Modern Web Testing → Cypress, Playwright",
          "API Contract Testing → Pact",
          "Performance Testing → JMeter, Locust",
          "Security Testing Basics → OWASP ZAP"
        ],
        "resources": [
          {home:"Cypress Docs",url:"https://docs.cypress.io/"},
          {home:"Playwright Docs",url:"https://playwright.dev/"},
          {home:"Apache JMeter",url:"https://jmeter.apache.org/"},
          {home:"Locust Load Testing",url:"https://locust.io/"},
          {home:"OWASP ZAP",url:"https://www.zaproxy.org/"}
        ],
        "missions": [
          "Automate web tests with Cypress/Playwright",
          "Run a load test with JMeter",
          "Perform API contract test with Pact"
        ]
      },
      {
        "level": 7,
        "title": "Mastery as a Test Automation Engineer",
        "why": "At this stage, you're not just writing tests — you're building test ecosystems.",
        "learn": [
          "Test Strategy & Framework Architecture",
          "Advanced CI/CD + TestOps",
          "Cloud-based Testing (LambdaTest, SauceLabs)",
          "AI in Test Automation (self-healing tests, AI-driven test generation)"
        ],
        "resources": [
          {home:"LambdaTest Blog",url:"https://www.lambdatest.com/blog/"},
          {home:"SauceLabs Docs",url:"https://docs.saucelabs.com/"},
          {home:"AI in Testing (Infosys Whitepaper)",url:"https://www.infosys.com/services/validation-solutions/documents/ai-powered-testing.pdf"}
        ],
        "missions": [
          "Build a full-stack automation framework (Web + API + Mobile + CI/CD)",
          "Contribute to an open-source automation project",
          "Showcase portfolio on GitHub + Medium"
        ]
      }
    ]
  },


  performancetester: {
    "title": "Performance Tester Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundations of Software Testing & QA",
        "why": "Before measuring performance, you must understand basic testing principles and where performance testing fits in QA.",
        "learn": [
          "Basics of Software Testing (SDLC, STLC)",
          "Types of Testing → Functional vs Non-Functional",
          "Performance Testing Types → Load, Stress, Soak, Spike",
          "Metrics → Response time, Throughput, Latency, TPS"
        ],
        "resources": [
          {home:"Software Testing Fundamentals",url:"https://softwaretestingfundamentals.com/"},
          {home:"Guru99 – Performance Testing Guide",url:"https://www.guru99.com/performance-testing.html"},
{home:"ISTQB Foundation Syllabus",url:"https://www.istqb.org/certifications/certified-tester-foundation-level"}
        ],
        "missions": [
          "Write sample test scenarios for load and stress testing",
          "Identify performance KPIs for a sample web app"
        ]
      },
      {
        "level": 2,
        "title": "Core Performance Testing Tools",
        "why": "A Performance Tester must master load testing tools to simulate real-world traffic.",
        "learn": [
          "Apache JMeter → Load & Stress testing basics",
          "Locust (Python-based) → Scalable load tests",
          "Gatling (Scala/Java-based) → High-performance load testing",
          "Test scripts, Thread groups, Assertions"
        ],
        "resources": [
          {home:"Apache JMeter Official Docs",url:"https://jmeter.apache.org/"},
          {home:"Locust Load Testing",url:"https://locust.io/"},
          {home:"Gatling Documentation",url:"https://gatling.io/docs/"}
        ],
        "missions": [
          "Create a JMeter test plan for 100 virtual users",
          "Write a Locust script to simulate API traffic"
        ]
      },
      {
        "level": 3,
        "title": "Performance Testing for Web, API & Mobile",
        "why": "Modern apps = Web + Mobile + APIs → you must test all.",
        "learn": [
          "Web Performance Testing (Browser-based testing)",
          "API Performance Testing (REST, GraphQL)",
          "Mobile App Performance Testing (Network, Battery, Memory)",
          "Tools → JMeter + BlazeMeter, Postman + Newman"
        ],
        "resources": [
{home:"BlazeMeter (Cloud Load Testing)",url:"https://www.blazemeter.com/"},
          {home:"Postman API Testing",url:"https://learning.postman.com/docs/getting-started/introduction/"},
          {home:"AppDynamics Mobile Performance Monitoring",url:"https://www.appdynamics.com/product/mobile-real-user-monitoring"}
        ],
        "missions": [
          "Load test an API with JMeter/Locust",
          "Run a mobile app performance test using BlazeMeter"
        ]
      },
      {
        "level": 4,
        "title": "Performance Monitoring & APM Tools",
        "why": "Testing alone is not enough. You must monitor system health while running tests.",
        "learn": [
          "Server & Infrastructure Monitoring → CPU, Memory, Disk I/O",
          "APM (Application Performance Monitoring) → Dynatrace, AppDynamics, New Relic",
          "Log Analysis → ELK Stack (Elasticsearch, Logstash, Kibana), Grafana"
        ],
        "resources": [
          {home:"New Relic Docs",url:"https://docs.newrelic.com/"},
          {home:"Dynatrace Docs",url:"https://www.dynatrace.com/support/help/"},
          {home:"Grafana Monitoring",url:"https://grafana.com/docs/"}
        ],
        "missions": [
          "Monitor server metrics during a load test",
          "Generate performance reports in Grafana/ELK"
        ]
      },
      {
        "level": 5,
        "title": "CI/CD & Performance in DevOps (PerfOps)",
        "why": "In modern teams, performance tests are integrated into CI/CD pipelines (shift-left testing).",
        "learn": [
          "CI/CD Tools → Jenkins, GitHub Actions, GitLab CI",
          "Automating Performance Tests with JMeter/Locust in pipelines",
          "Containerization → Docker + Kubernetes for scalable tests",
          "Cloud Load Testing → AWS, GCP, Azure"
        ],
        "resources": [
          {home:"Jenkins CI/CD Docs",url:"https://www.jenkins.io/doc/"},
          {home:"GitHub Actions Docs",url:"https://docs.github.com/en/actions"},
          {home:"AWS Performance Testing Guide",url:"https://docs.aws.amazon.com/whitepapers/latest/performance-efficiency-pillars/performance-testing.html"}
        ],
        "missions": [
          "Run JMeter tests in a Jenkins pipeline",
          "Execute load tests inside Docker containers"
        ]
      },
      {
        "level": 6,
        "title": "Advanced Performance Testing",
        "why": "This is where you become a performance engineering pro, optimizing systems under heavy load.",
        "learn": [
          "Scalability & Reliability Testing",
          "Chaos Engineering → Simulating failures (Gremlin, Chaos Monkey)",
          "Performance Tuning → DB queries, Caching, Network latency",
          "Profiling & Bottleneck Analysis"
        ],
        "resources": [
          {home:"Gremlin Chaos Engineering",url:"https://www.gremlin.com/"},
          {home:"Netflix Chaos Monkey",url:"https://github.com/Netflix/chaosmonkey"},
          {home:"Database Performance Tuning (Oracle Guide)",url:"https://docs.oracle.com/cd/E11882_01/server.112/e10821/intro.htm"}
        ],
        "missions": [
          "Run chaos tests with Gremlin/Chaos Monkey",
          "Optimize a slow API endpoint by profiling DB queries"
        ]
      },
      {
        "level": 7,
        "title": "Mastery as a Performance Tester",
        "why": "Now you're not just testing performance — you're engineering performance at scale.",
        "learn": [
          "Performance Test Strategy & Planning",
          "Capacity Planning for enterprise systems",
          "Advanced PerfOps & SRE practices",
          "AI in Performance Testing (anomaly detection, self-healing tests)"
        ],
        "resources": [
          {home:"Site Reliability Engineering (Google Book, Free)",url:"https://sre.google/sre-book/table-of-contents/"},
          {home:"PerfOps Practices (Medium Guide)",url:"https://medium.com/tag/performance-testing"},
          {home:"AI in Software Testing (Infosys Whitepaper)",url:"https://www.infosys.com/services/validation-solutions/documents/ai-powered-testing.pdf"}
        ],
        "missions": [
          "Design a performance testing framework for a real-world app",
          "Publish performance reports + strategies on GitHub/Medium",
          "Aim for a role as Performance Tester / Performance Engineer / SRE"
        ]
      }
    ]
  }
};



