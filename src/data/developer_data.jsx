
export const dev = {

  frontenddev: {
    "title": "Frontend Developer Learning Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Entering the Web World",
        "description": "Before coding, you must know how the internet and browsers actually work.",
        "learningObjectives": [
          "What is HTTP",
          "DNS",
          "Client-server model",
          "Hosting",
          "How a browser renders pages"
        ],
        "resources": [
          {
            name : "MDN – How the Web Works",
            url : "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works"
          },
          {
            name : "Git & GitHub Crash Course (YouTube)",
            url : "https://youtu.be/ulOKYl5sHGk"
          }
        ],
        "mission": "Install VS Code, Git, Node.js, create a GitHub account, and push your first 'Hello World' file."
      },
      {
        "level": 2,
        "title": "HTML – The Skeleton",
        "description": "HTML is the backbone of every website — it gives structure to content.",
        "learningObjectives": [
          "Headings",
          "Paragraphs",
          "Links",
          "Images",
          "Forms",
          "Tables",
          "Semantic tags"
        ],
        "resources": [
          {
            name : "HTML Basics – MDN",
            url : "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          },
          {
            name : "HTML Crash Course (YouTube)",
            url : "https://youtu.be/UB1O30fR-EE"
          }
        ],
        "mission": "Build your personal bio page with name, image, links, and a contact form."
      },
      {
        "level": 3,
        "title": "CSS – The Skin & Beauty",
        "description": "CSS makes sites look alive — colors, layouts, animations, and responsiveness.",
        "learningObjectives": [
          "Selectors",
          "Box Model",
          "Flexbox",
          "Grid",
          "Media Queries"
        ],
        "resources": [
          {
            name : "CSS Basics – MDN",
            url : "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          },
          {
            name : "CSS Flexbox & Grid Crash Course (YouTube)",
            url : "https://youtu.be/0xMQfnTU6oo"
          }
        ],
        "mission": "Recreate the Google Homepage UI and make it responsive."
      },
      {
        "level": 4,
        "title": "JavaScript Basics – The Brain",
        "description": "JS adds logic and interactivity — without it, websites are static.",
        "learningObjectives": [
          "Variables",
          "Loops",
          "Functions",
          "DOM manipulation",
          "Events"
        ],
        "resources": [
          {name: "JavaScript Guide – MDN", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"},
          {name: "JavaScript Crash Course (YouTube)", url: "https://youtu.be/hdI2bqOjy3c"}
        ],
        "mission": "Build a To-Do List app where users can add and remove tasks."
      },
      {
        "level": 5,
        "title": "Advanced JavaScript – Superpowers",
        "description": "APIs, async code, and modern JS features power real-world apps.",
        "learningObjectives": [
          "ES6+",
          "Fetch API",
          "Async/await",
          "localStorage"
        ],
        "resources": [
          {name: "Fetch API – MDN", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"},
          {name: "Async JS Crash Course (YouTube)", url: "https://youtu.be/PoRJizFvM7s"}
        ],
        "mission": "Create a Weather App that fetches live data from an API."
      },
      {
        "level": 6,
        "title": "Git & Teamwork",
        "description": "Every dev uses Git — it tracks code history and enables collaboration.",
        "learningObjectives": [
          "Git basics (commit, branch, merge)",
          "GitHub (fork, pull requests)"
        ],
        "resources": [
          {name: "Pro Git Book", url: "https://git-scm.com/book/en/v2"},
          {name: "Git Tutorial (YouTube)", url: "https://youtu.be/3fUbBnN_H2c"}
        ],
        "mission": "Push all your projects to GitHub and contribute a small fix to an open repo."
      },
      {
        "level": 7,
        "title": "React – The Modern Toolkit",
        "description": "React is the most popular frontend library for building dynamic UIs.",
        "learningObjectives": [
          "Components",
          "Props",
          "State",
          "Hooks",
          "React Router"
        ],
        "resources": [
          {name: "React Docs", url: "https://react.dev/"},
          {name: "React Crash Course (YouTube)", url: "https://youtu.be/w7ejDZ8SWv8"}
        ],
        "mission": "Build a Movie Search App using an open movie API."
      },
      {
        "level": 8,
        "title": "Styling React Apps",
        "description": "React + modern styling makes apps beautiful and scalable.",
        "learningObjectives": [
          "TailwindCSS",
          "styled-components"
        ],
        "resources": [
          {name: "Tailwind CSS Docs", url: "https://tailwindcss.com/docs/installation"},
          {name: "React + Tailwind Crash Course (YouTube)", url: "https://youtu.be/UBOj6rqRUME"}
        ],
        "mission": "Rebuild your portfolio website in React with Tailwind styling."
      },
      {
        "level": 9,
        "title": "State Management",
        "description": "Larger apps need better ways to manage data between components.",
        "learningObjectives": [
          "Context API",
          "Redux Toolkit"
        ],
        "resources": [
          {name: "Redux Toolkit Docs", url: "https://redux-toolkit.js.org/"},
          {name: "Redux Crash Course (YouTube)", url: "https://youtu.be/poQXNp9ItL4"}
        ],
        "mission": "Create a Shopping Cart App with add/remove items using Context or Redux."
      },
      {
        "level": 10,
        "title": "Deployment & Showcase",
        "description": "A developer without a portfolio is invisible. Show your work to the world.",
        "learningObjectives": [
          "Hosting on Netlify/Vercel",
          "Environment variables",
          "Optimization basics"
        ],
        "resources": [
          {name: "React Deployment Guide", url: "https://create-react-app.dev/docs/deployment/"},
          {name: "Deploy React Apps to Netlify (YouTube)", url: "https://youtu.be/8O7gQeZbM2o"}
        ],
        "mission": "Deploy your portfolio site + 3 projects (Todo, Weather, Movie App)."
      }
    ]
  },

  backenddev: {
    "title": "Backend Developer Roadmap — Beginner to Pro",
    "levels": [
      {
        "level": 1,
        "title": "Introduction & Setup",
        "description": "A backend dev powers the 'engine room' of apps — handling databases, APIs, authentication, and business logic. Before coding, you need the right tools.",
        "learningObjectives": [
          "How client-server works",
          "Backend responsibilities", 
          "Setting up VS Code, Git, Node.js (or chosen runtime)"
        ],
        "resources": [
          {name: "MDN – Client-Server Overview", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview"},
          {name: "Git & GitHub Crash Course (YouTube)", url: "https://youtu.be/ulOKYl5sHGk"}
        ],
        "mission": "Install VS Code, Git, Node.js (or Python/Java depending on choice), and push a simple 'Hello Backend' repo to GitHub."
      },
      {
        "level": 2,
        "title": "Programming Language Fundamentals",
        "description": "Backend = strong coding logic. Pick one backend-friendly language: JavaScript (Node.js), Python (Django/Flask/FastAPI), or Java (Spring).",
        "learningObjectives": [
          "Variables, data types, loops, functions",
          "OOP basics",
          "Error handling",
          "Modules"
        ],
        "resources": [
          {name: "JavaScript Guide – MDN", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"},
          {name: "Python Crash Course (YouTube)", url: "https://youtu.be/kqtD5dpn9C8"},
          {name: "Java Programming Tutorial (YouTube)", url: "https://youtu.be/grEKMHGYyns"}
        ],
        "mission": "Write a program that manages student records (CRUD: Create, Read, Update, Delete) using plain code."
      },
      {
        "level": 3,
        "title": "HTTP & APIs",
        "description": "Backend is about serving data to clients via APIs. You must master requests, responses, status codes, and REST principles.",
        "learningObjectives": [
          "HTTP methods (GET, POST, PUT, DELETE)",
          "JSON",
          "RESTful API design"
        ],
        "resources": [
          {name: "REST API Tutorial", url: "https://restfulapi.net/"},
          {name: "HTTP Crash Course (YouTube)", url: "https://youtu.be/iYM2zFP3Zn0"}
        ],
        "mission": "Create a mock REST API that returns JSON data like /api/users."
      },
      {
        "level": 4,
        "title": "Databases (SQL & NoSQL)",
        "description": "Backend stores and retrieves data. You need both relational (SQL) and non-relational (NoSQL) knowledge.",
        "learningObjectives": [
          "SQL (tables, queries, joins, transactions)",
          "NoSQL (documents, collections, MongoDB basics)"
        ],
        "resources": [
          {name: "PostgreSQL Tutorial", url: "https://www.postgresql.org/docs/"},
          {name: "MongoDB Basics (YouTube)", url: "https://youtu.be/-56x56UppqQ"}
        ],
        "mission": "Build a Library App backend where books are stored in a SQL DB and users in MongoDB."
      },
      {
        "level": 5,
        "title": "Frameworks & Servers",
        "description": "Frameworks save time by providing routing, middleware, and scalability.",
        "learningObjectives": [
          "Node.js: Express.js",
          "Python: Django / FastAPI", 
          "Java: Spring Boot"
        ],
        "resources": [
          {name: "Express.js Docs", url: "https://expressjs.com/"},
          {name: "Django Docs", url: "https://docs.djangoproject.com/en/stable/"},
          {name: "Spring Boot Docs", url: "https://spring.io/projects/spring-boot"}
        ],
        "mission": "Build a simple blog backend API with CRUD using your chosen framework."
      },
      {
        "level": 6,
        "title": "Authentication & Security",
        "description": "Protect user data and app endpoints.",
        "learningObjectives": [
          "JWT / OAuth2",
          "Password hashing",
          "HTTPS",
          "Input validation & sanitization"
        ],
        "resources": [
          {name: "JWT Guide", url: "https://jwt.io/introduction"},
          {name: "Auth in Node.js (YouTube)", url: "https://youtu.be/7nafaH9SddU"}
        ],
        "mission": "Add JWT-based authentication to your blog API."
      },
      {
        "level": 7,
        "title": "Advanced Backend Features",
        "description": "Real apps need more than CRUD — you'll manage caching, file uploads, background jobs.",
        "learningObjectives": [
          "File Uploads (Multer/S3)",
          "Caching (Redis)",
          "Background Jobs (Bull, Celery)"
        ],
        "resources": [
          {
          name:"Redis Docs",url : "https://redis.io/docs/latest/"},
          {name:"File Upload in Node.js (YouTube)",url:"https://youtu.be/9Qzmri1WaaE"}
        ],
        "mission": "Extend your API with image upload + caching popular results in Redis."
      },
      {
        "level": 8,
        "title": "APIs Beyond REST (GraphQL, WebSockets)",
        "description": "Modern apps often use GraphQL for flexibility or WebSockets for real-time features.",
        "learningObjectives": [
          "Basics of GraphQL queries & mutations",
          "WebSocket connections"
        ],
        "resources": [
          
          { name:"GraphQL Docs",url : "https://graphql.org/learn/"},
          {name:"WebSockets Crash Course (YouTube)",url :"https://youtu.be/8ARodQ4Wlf4"}
        ],
        "mission": "Add real-time chat API with WebSockets or build a GraphQL endpoint for your Task Manager."
      },
      {
        "level": 9,
        "title": "Deployment & DevOps Basics",
        "description": "Backend must run live for users. Learn deployment, hosting, and scaling basics.",
        "learningObjectives": [
          "Docker",
          "CI/CD pipelines", 
          "Cloud hosting (Heroku, Render, AWS EC2)"
        ],
        "resources": [
          {name:"Docker Docs",url : "https://docs.docker.com/get-started/"},
          {name:"Heroku Deployment (YouTube)",url:"https://youtu.be/7GfH6frj4Yk"}
        ],
        "mission": "Deploy your API on Render/Heroku and share the live link + GitHub repo."
      },
      {
        "level": 10,
        "title": "Portfolio & Projects",
        "description": "Your portfolio is your proof of skills — backend employers want to see APIs, databases, and security.",
        "learningObjectives": [
          "System Design Basics",
          "API documentation (Swagger/Postman)"
        ],
        "resources": [
          {name:"System Design Basics",url:"https://github.com/donnemartin/system-design-primer"},
          {name:"Backend Project Ideas (YouTube)" ,url:"https://youtu.be/q0kC57z6jXU"}
        ],
        "mission": "Build at least 3 deployable backend projects + write clear API documentation (Swagger/Postman).",
        "projectIdeas": [
          "Task Manager API (CRUD, JWT, DB)",
          "E-commerce Backend (products, cart, orders, payments)", 
          "Chat Application API (WebSocket + Redis)"
        ]
      }

    ]
  },

  fullstackdev: {
    "title": "Full Stack Developer Roadmap — Beginner to Pro",
    "levels": [
      {
        "level": 1,
        "title": "The Big Picture",
        "description": "Full Stack means you can build both frontend (UI) and backend (server, database). You must first understand how the two communicate.",
        "learningObjectives": [
          "Client-Server model",
          "HTTP",
          "APIs",
          "Request/response cycle"
        ],
        "resources": [
          {name:"MDN – Client-Server Overview",url:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview"},
          {name:"HTTP Crash Course (YouTube)" ,url:"https://youtu.be/iYM2zFP3Zn0"}
        ],
        "mission": "Draw a diagram showing how browser → server → database interact."
      },
      {
        "level": 2,
        "title": "HTML & CSS (Frontend Foundation)",
        "description": "Every app needs a beautiful and accessible user interface.",
        "learningObjectives": [
          "HTML structure",
          "Semantic tags",
          "CSS styling",
          "Flexbox",
          "Grid",
          "Responsive design"
        ],
        "resources": [
          {name:"HTML Basics – MDN",url:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"},
          {name:"CSS Flexbox & Grid Crash Course (YouTube)",url:"https://youtu.be/0xMQfnTU6oo"}
        ],
        "mission": "Build a personal portfolio page with responsive design."
      },
      {
        "level": 3,
        "title": "JavaScript (Frontend Logic)",
        "description": "JavaScript brings interactivity to websites and is also the language you'll use on the backend (Node.js).",
        "learningObjectives": [
          "Variables",
          "Functions",
          "DOM manipulation",
          "Events",
          "ES6 features",
          "Async/await"
        ],
        "resources": [
          {name:"JavaScript Guide – MDN",url :"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"},
          {name:"JavaScript Crash Course (YouTube)",url:"https://youtu.be/w7ejDZ8SWv8"}
        ],
        "mission": "Build a Todo App where tasks can be added, deleted, and saved in localStorage."
      },
      {
        "level": 4,
        "title": "React.js (Frontend Framework)",
        "description": "React lets you build scalable, component-based UIs. It's the most in-demand frontend library.",
        "learningObjectives": [
          "Components",
          "Props",
          "State",
          "Hooks",
          "React Router"
        ],
        "resources": [
          {name:"React Docs",url:"https://react.dev/"},
          {name:"React Crash Course (YouTube)",url:"https://youtu.be/w7ejDZ8SWv8"}
        ],
        "mission": "Build a Movie Search App using an external API in React."
      },
      {
        "level": 5,
        "title": "Databases (Backend Foundation)",
        "description": "Full Stack devs must store and manage data. Learn both SQL (structured) and NoSQL (document-based).",
        "learningObjectives": [
          "PostgreSQL/MySQL basics",
          "MongoDB collections",
          "CRUD queries"
        ],
        "resources": [
          {name:"PostgreSQL Tutorial",url:"https://www.postgresql.org/docs/"},
          {name:"MongoDB Crash Course (YouTube)",url:"https://youtu.be/-56x56UppqQ"}
        ],
        "mission": "Create a Student Records DB with SQL and a User Profiles DB in MongoDB."
      },
      {
        "level": 6,
        "title": "Backend with Node.js + Express",
        "description": "Node.js + Express is the most popular backend stack for full stack devs.",
        "learningObjectives": [
          "Express.js routes",
          "Middleware",
          "REST APIs",
          "Error handling"
        ],
        "resources": [
          {name:"Express.js Docs",url:"https://expressjs.com/"},
          {name:"Node.js + Express Crash Course (YouTube)",url:"https://youtu.be/Oe421EPjeBE"}
        ],
        "mission": "Build a Task Manager API (CRUD for tasks)."
      },
      {
        "level": 7,
        "title": "Authentication & Security",
        "description": "Every app needs login/signup with secure data handling.",
        "learningObjectives": [
          "JWT",
          "Password hashing (bcrypt)",
          "Authentication middleware"
        ],
        "resources": [
          {name:"JWT Introduction",url:"https://jwt.io/introduction"},
          {name:"Node.js Auth Crash Course (YouTube)",url:"https://youtu.be/7nafaH9SddU"}
        ],
        "mission": "Add User Login & Signup to your Task Manager API using JWT."
      },
      {
        "level": 8,
        "title": "Connecting Frontend & Backend",
        "description": "This is where you become Full Stack. Your React frontend consumes your Express backend APIs.",
        "learningObjectives": [
          "Axios/fetch in React",
          "CORS",
          "API integration"
        ],
        "resources": [
          {name:"Using Fetch – MDN",url:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"},
          {name:"React + Node.js Full Stack Crash Course (YouTube)",url:"https://youtu.be/7CqJlxBYj-M"}
        ],
        "mission": "Connect your React Todo App with your Express API & MongoDB."
      },
      {
        "level": 9,
        "title": "Advanced Features",
        "description": "Real-world apps need more — file uploads, payments, notifications.",
        "learningObjectives": [
          "File upload (Multer)",
          "Payment APIs (Stripe)",
          "Caching (Redis)"
        ],
        "resources": [
          {name:"File Upload in Node.js (YouTube)",url:"https://youtu.be/9Qzmri1WaaE"},
          {name:"Stripe Docs",url:"https://stripe.com/docs/development"}

        ],
        "mission": "Add profile picture upload and checkout flow to your app."
      },
      {
        "level": 10,
        "title": "Deployment & DevOps Basics",
        "description": "Apps must go live. Learn deployment, CI/CD, Docker, and cloud basics.",
        "learningObjectives": [
          "Netlify/Vercel for frontend",
          "Render/Heroku/AWS for backend",
          "Docker containers"
        ],
        "resources": [
          {name:"Deploy React App to Netlify (YouTube)",url:"https://youtu.be/8O7gQeZbM2o"},
          {name:"Deploy Node.js to Render (Docs)",url:"https://render.com/docs/deploy-node-express-app"}

        ],
        "mission": "Deploy your full stack app (React + Express + DB) and share the live link + GitHub repo."
      },
      {
        "level": 11,
        "title": "Portfolio & Projects",
        "description": "Employers want to see proof of your full stack skills. Build projects that cover different features.",
        "learningObjectives": [
          "System design",
          "Project documentation",
          "Live deployment"
        ],
        "resources": [
        {name:"System Design Primer",url:"https://github.com/donnemartin/system-design-primer"},
          {name:"Full Stack Project Ideas (YouTube)",url:"https://youtu.be/0CkzW5gGsEc"}
        ],
        "mission": "Deploy at least 2-3 full stack projects with polished documentation & live demo",
        "projectIdeas": [
          "E-commerce App (products, cart, payments, auth)",
          "Chat Application (real-time with WebSockets)",
          "Blog Platform (CRUD, auth, comments)"
        ]
      }
    ]
  },
  
  mobileappdev: {
    "title": "Mobile App Developer Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundation (Programming & OOP)",
        "description": "Mobile apps are powered by strong programming skills. Before diving into frameworks, you need a solid base in one language.",
        "learningObjectives": [
          "Java, Kotlin (for Android), Swift (for iOS), or Dart (for Flutter)",
          "OOP, data structures, and problem-solving"
        ],
        "resources": [
          {name:"Java Tutorial – W3Schools",url:"https://www.w3schools.com/java/"},
          {name:"Kotlin Docs",url:"https://kotlinlang.org/docs/home.html"},
          {name:"Dart Language Tour",url:"https://dart.dev/guides/language"},
          {name:"Swift.org",url:"https://swift.org/learn/"}
        ],
        "mission": "Build a simple console-based calculator and a notes app (no UI, just logic)."
      },
      {
        "level": 2,
        "title": "Mobile Development Basics",
        "description": "Learn the structure of mobile apps, UI design principles, and lifecycle of apps.",
        "learningObjectives": [
          "Activities, Fragments (Android), ViewControllers (iOS), Widgets (Flutter)",
          "Layouts, navigation, and event handling"
        ],
        "resources": [
          {name:"Android Basics – Developer Docs",url:"https://developer.android.com/courses/android-basics-kotlin/course"},
          {name:"iOS SwiftUI Tutorials",url:"https://developer.apple.com/learn/curriculum/"},
          {name:"Flutter Widgets 101",url:"https://docs.flutter.dev/development/ui/widgets-intro"}
        ],
        "mission": "Create a mobile 'To-Do App' with add/remove tasks functionality."
      },
      {
        "level": 3,
        "title": "UI & Styling",
        "description": "A mobile app is only as good as its design and usability. Learn UI/UX and responsive layouts.",
        "learningObjectives": [
          "Material Design (Android), SwiftUI (iOS), Flutter UI components",
          "Animations and responsive design"
        ],
        "resources": [
          {name:"Material Design Guidelines",url:"https://m3.material.io/"},
          {name:"SwiftUI Essentials – Apple",url:"https://developer.apple.com/tutorials/swiftui"},
          {name:"Flutter Layout Guide",url:"https://docs.flutter.dev/development/ui/layout"}
        ],
        "mission": "Redesign your To-Do App with a clean UI, custom colors, and simple animations."
      },
      {
        "level": 4,
        "title": "Data & Storage",
        "description": "Apps need to store data — either locally or remotely.",
        "learningObjectives": [
          "SQLite, Room (Android), Core Data (iOS)",
          "SharedPreferences, Hive (Flutter)"
        ],
        "resources": [
          {name:"Room Database – Android Docs",url:"https://developer.android.com/training/data-storage/room"},
          {name:"Core Data by Apple",url:"https://developer.apple.com/documentation/coredata"},
          {name:"Storing Data in Flutter",url:"https://docs.flutter.dev/cookbook/persistence"}
        ],
        "mission": "Upgrade your To-Do App to save tasks permanently (local storage)."
      },
      {
        "level": 5,
        "title": "Networking & APIs",
        "description": "Most apps interact with online services. Learn REST APIs, JSON, and HTTP requests.",
        "learningObjectives": [
          "Retrofit/Volley (Android), URLSession/Alamofire (iOS), HTTP package (Flutter)"
        ],
        "resources": [
          {name:"REST APIs with Android",url:"https://developer.android.com/training/volley"},
          {name:"iOS Networking Guide",url:"https://developer.apple.com/documentation/foundation/url_loading_system"},
          {name:"Flutter HTTP Cookbook",url:"https://docs.flutter.dev/cookbook/networking/fetch-data"}
        ],
        "mission": "Build a Weather App that fetches live weather data from an API."
      },
      {
        "level": 6,
        "title": "State Management & Architecture",
        "description": "As apps grow, managing state becomes complex. Learn patterns like MVVM, MVC, and state management libraries.",
        "learningObjectives": [
          "Android → MVVM, LiveData, ViewModel",
          "iOS → MVC, Combine, SwiftUI State",
          "Flutter → Provider, Riverpod, Bloc"
        ],
        "resources": [
          {name:"Guide to App Architecture – Android",url:"https://developer.android.com/topic/architecture"},
          {name:"SwiftUI State Management",url:"https://developer.apple.com/documentation/swiftui/state"},
          {name:"Flutter State Management",url:"https://docs.flutter.dev/development/data-and-backend/state-mgmt/intro"}
        ],
        "mission": "Create a Notes App with multiple screens, categories, and proper state management."
      },
      {
        "level": 7,
        "title": "Authentication & Security",
        "description": "Most apps require users to log in and protect their data.",
        "learningObjectives": [
          "Firebase Auth, OAuth, JWT",
          "Secure storage"
        ],
        "resources": [
          {name:"Firebase Authentication Docs",url:"https://firebase.google.com/docs/auth"},
          {name:"Secure iOS Data",url:"https://developer.apple.com/documentation/security"},
          {name:"Flutter Firebase Auth",url:"https://firebase.flutter.dev/docs/auth/usage/"}
        ],
        "mission": "Add user sign-in/sign-up functionality to your Notes App."
      },
      {
        "level": 8,
        "title": "Push Notifications & Device Features",
        "description": "Make apps engaging with notifications and device integration (camera, GPS, sensors).",
        "learningObjectives": [
          "Firebase Cloud Messaging, local notifications",
          "Camera API, location services"
        ],
        "resources": [
          {name:"Push Notifications – Android",url:"https://developer.android.com/develop/ui/views/notifications"},
          {name:"UserNotifications – iOS",url:"https://developer.apple.com/documentation/usernotifications"},
          {name:"Flutter Local Notifications",url:"https://pub.dev/packages/flutter_local_notifications"}
        ],
        "mission": "Build a Reminder App with notifications and location-based alerts."
      },
      {
        "level": 9,
        "title": "Deployment",
        "description": "Time to launch your apps into the real world.",
        "learningObjectives": [
          "Google Play Console, App Store Connect",
          "APK/IPA packaging, app signing"
        ],
        "resources": [
          {name:"Publishing to Google Play",url:"https://developer.android.com/studio/publish"},
          {name:"Distributing iOS Apps",url:"https://developer.apple.com/app-store/"},
          {name:"Deploy Flutter Apps",url:"https://docs.flutter.dev/deployment"}
        ],
        "mission": "Publish your To-Do or Weather App to Play Store/TestFlight."
      },
      {
        "level": 10,
        "title": "Advanced Skills & Portfolio",
        "description": "To stand out, explore cross-platform, testing, and advanced animations.",
        "learningObjectives": [
          "Flutter for cross-platform, React Native",
          "Unit/UI Testing, CI/CD pipelines"
        ],
        "resources": [
          {name:"Flutter Testing Guide",url:"https://docs.flutter.dev/cookbook/testing"},
          {name:"React Native Docs",url:"https://reactnative.dev/docs/getting-started"},
          {name:"CI/CD for Mobile",url:"https://docs.fastlane.tools/"},
        ],
        "mission": "Build a final Portfolio App (e.g., expense tracker, chat app) and publish it with polished UI + API integration."
      }
    ]
  },

  gamedev:
  {
  "title": "Game Developer Roadmap",
  "levels": [
    {
      "level": 1,
      "title": "Programming Foundations",
      "description": "Games are software at the core. You need strong programming skills to control game logic, mechanics, and performance.",
      "learningObjectives": [
        "C++ (for Unreal Engine)",
        "C# (for Unity)",
        "Python (for simple 2D prototyping)",
        "OOP, math for games (vectors, matrices, physics)"
      ],
      "resources": [
        { name: "C++ Tutorial – W3Schools", url: "https://www.w3schools.com/cpp/" },
        { name: "C# Basics – Microsoft Docs", url: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" },
        { name: "Khan Academy – Intro to Game Math", url: "https://www.khanacademy.org/math" }
      ],
      "mission": "Build a console-based mini game like Tic-Tac-Toe or Snake."
    },
    {
      "level": 2,
      "title": "Game Engines & Tools",
      "description": "Game engines are the backbone of modern development. They handle rendering, physics, assets, and scripting.",
      "learningObjectives": [
        "Unity → Beginner-friendly, C#, good for 2D/3D and mobile/PC.",
        "Unreal Engine → Industry standard, C++, Blueprints, best for AAA graphics.",
        "Godot → Lightweight, free, GDScript, great for 2D."
      ],
      "resources": [
        { name: "Unity Learn Hub", url: "https://learn.unity.com/" },
        { name: "Unreal Engine Docs", url: "https://dev.epicgames.com/documentation/en-us/unreal-engine" },
        { name: "Godot Docs", url: "https://docs.godotengine.org/en/stable/" }
      ],
      "mission": "Make your first 2D Platformer or Pong Game using your chosen engine."
    },
    {
      "level": 3,
      "title": "2D Game Development",
      "description": "Starting with 2D helps you focus on game design without worrying about heavy 3D graphics.",
      "learningObjectives": [
        "Sprites, animations, collisions, physics, tilemaps, parallax scrolling"
      ],
      "resources": [
        { name: "Unity 2D Game Kit", url: "https://assetstore.unity.com/packages/templates/tutorials/2d-game-kit-107098" },
        { name: "Godot 2D Tutorial (Video)", url: "https://youtu.be/qEwXDQdv0Yk" },
        { name: "Unreal 2D (Paper2D)", url: "https://docs.unrealengine.com/4.27/en-US/AnimatingObjects/Paper2D/" }
      ],
      "mission": "Build a Flappy Bird clone or Top-down Shooter with a score system."
    },
    {
      "level": 4,
      "title": "3D Game Development",
      "description": "Learn 3D concepts to expand into immersive games.",
      "learningObjectives": [
        "3D objects, lighting, shaders, physics, cameras, character controllers, AI navigation"
      ],
      "resources": [
        { name: "Unity 3D Game Development (Docs)", url: "https://learn.unity.com/pathway/junior-programmer" },
        { name: "Unreal Blueprint Visual Scripting", url: "https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprints-visual-scripting-in-unreal-engine" },
        { name: "Godot 3D Guide", url: "https://docs.godotengine.org/en/stable/tutorials/3d/" }
      ],
      "mission": "Create a First-Person Shooter demo or 3D Racing Game."
    },
    {
      "level": 5,
      "title": "Game Design Principles",
      "description": "Games aren’t just code; they’re experiences. Understanding design keeps players engaged.",
      "learningObjectives": [
        "Core loops, level design, difficulty balancing, story integration, UI/UX in games"
      ],
      "resources": [
        { name: "Game Design Document (GDD) Template", url: "https://www.gamedesigning.org/learn/game-design-document/" },
        { name: "Extra Credits – Game Design (YouTube)", url: "https://youtube.com/playlist?list=PLhyKYa0YJ_5C7EHXQxTT5n9L6XD3mY3Ue" }
      ],
      "mission": "Write a GDD and redesign one of your older games with proper levels and progression."
    },
    {
      "level": 6,
      "title": "Multiplayer & Networking",
      "description": "Multiplayer games dominate today’s market. Learn networking basics to build them.",
      "learningObjectives": [
        "Sockets, Photon Engine (Unity), Unreal Networking, Godot Multiplayer API"
      ],
      "resources": [
        { name: "Unity Multiplayer (Netcode)", url: "https://docs-multiplayer.unity3d.com/" },
        { name: "Unreal Networking Guide", url: "https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Networking/" },
        { name: "Godot High-level Multiplayer", url: "https://docs.godotengine.org/en/stable/tutorials/networking/high_level_multiplayer.html" }
      ],
      "mission": "Create a Multiplayer Chat Room App or a basic co-op shooter."
    },
    {
      "level": 7,
      "title": "Assets & Art Integration",
      "description": "Games need graphics, sound, and music. Even if you’re not an artist, you must learn asset integration.",
      "learningObjectives": [
        "Importing textures, models, sound effects, optimizing assets, basics of Blender for 3D models"
      ],
      "resources": [
        { name: "Blender Beginner Tutorial", url: "https://youtu.be/TPrnSACiTJ4" },
        { name: "OpenGameArt (Free Assets)", url: "https://opengameart.org/" },
        { name: "Kenny.nl Assets", url: "https://kenney.nl/assets" }
      ],
      "mission": "Replace placeholder art in your games with custom or free assets."
    },
    {
      "level": 8,
      "title": "Optimization & Testing",
      "description": "Games must run smoothly across devices. Learn optimization and debugging.",
      "learningObjectives": [
        "Performance profiling, memory management, FPS optimization, playtesting"
      ],
      "resources": [
        { name: "Unity Optimization Tips", url: "https://learn.unity.com/tutorial/optimizing-your-game" },
        { name: "Unreal Performance Guide", url: "https://docs.unrealengine.com/5.0/en-US/performance-and-optimization-in-unreal-engine/" },
        { name: "Game Testing Guide", url: "https://www.gamedesigning.org/career/game-tester/" }
      ],
      "mission": "Optimize your 3D game to run under 60 FPS on mid-tier hardware."
    },
    {
      "level": 9,
      "title": "Publishing & Monetization",
      "description": "It’s time to share your game with the world. Learn deployment, monetization, and community building.",
      "learningObjectives": [
        "Steamworks (PC), Google Play Console, App Store Connect, itch.io publishing, ads & in-app purchases"
      ],
      "resources": [
        { name: "Steamworks Docs", url: "https://partner.steamgames.com/doc/home" },
        { name: "Publishing on Google Play", url: "https://developer.android.com/studio/publish" },
        { name: "itch.io Guide", url: "https://itch.io/docs/creators/getting-started" }
      ],
      "mission": "Publish your game on itch.io or Google Play with a basic monetization model."
    },
    {
      "level": 10,
      "title": "Advanced Game Development",
      "description": "Push beyond basics to explore VR/AR, AI-driven NPCs, procedural generation, and cross-platform builds.",
      "learningObjectives": [
        "Unity XR, Unreal Metahumans, AI pathfinding, shaders, advanced physics"
      ],
      "resources": [
        { name: "Unity VR Development", url: "https://learn.unity.com/pathway/vr-development" },
        { name: "Unreal Metahumans", url: "https://www.unrealengine.com/en-US/metahuman" },
        { name: "Procedural Generation Guide", url: "https://pcgbook.com/" }
      ],
      "mission": "Build a VR Experience or Procedural World Generator as your portfolio project."
    }
  ]
},

  embeddedsystemdev: {
    "title": "Embedded Systems Developer Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundation in Electronics & Programming",
        "description": "Embedded systems live inside hardware, so you must know both coding and electronics.",
        "learningObjectives": [
          "Digital logic",
          "Microcontrollers basics",
          "C programming",
          "Binary/hex math"
        ],
        "resources": [
          {name:"C Programming Tutorial – GeeksforGeeks",url:"https://www.geeksforgeeks.org/c-programming-language/"},
          {name:"Digital Electronics Basics (YouTube)",url:"https://youtu.be/l6E5j8QcoG8"},
          {name:"Introduction to Microcontrollers – NPTEL",url:"https://nptel.ac.in/courses/117/105/117105135/"}
        ],
        "mission": "Blink an LED using Arduino (Hello World of Embedded)."
      },
      {
        "level": 2,
        "title": "Microcontrollers & Boards",
        "description": "Microcontrollers are the heart of embedded systems.",
        "learningObjectives": [
          "Arduino (beginner), STM32, ESP32, Raspberry Pi Pico",
          "GPIO, UART, I2C, SPI"
        ],
        "resources": [
          {name:"Arduino Docs",url:"https://docs.arduino.cc/"},
          {name:"STM32 Getting Started",url:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html"},
          {name:"ESP32 Guide",url:"https://randomnerdtutorials.com/getting-started-with-esp32/"}
        ],
        "mission": "Build a temperature sensor system with Arduino + LCD display."
      },
      {
        "level": 3,
        "title": "Embedded C & Real-Time Programming",
        "description": "Embedded systems often run in real-time environments with tight constraints.",
        "learningObjectives": [
          "Embedded C",
          "Interrupts",
          "Timers",
          "RTOS basics (FreeRTOS)"
        ],
        "resources": [
          {name:"Embedded C Tutorial",url:"https://www.tutorialspoint.com/embedded_systems/es_embedded_c_programming.htm"},
          {name:"FreeRTOS Docs",url:"https://www.freertos.org/"},
          {name:"Interrupts Explained (Video)",url:"https://youtu.be/uLJk0p7-b6c"}
        ],
        "mission": "Program a digital stopwatch using timers and interrupts."
      },
      {
        "level": 4,
        "title": "Sensors & Actuators",
        "description": "Embedded devices interact with the real world.",
        "learningObjectives": [
          "How to read data from sensors (temperature, humidity, IR, ultrasonic)",
          "Control motors/relays"
        ],
        "resources": [
          {name:"Interfacing Sensors with Arduino",url:"https://create.arduino.cc/projecthub/projects/tags/sensors"},
          {name:"ESP32 Sensors Guide",url:"https://randomnerdtutorials.com/projects-esp32/"}
        ],
        "mission": "Build an ultrasonic distance measurement system with buzzer alerts."
      },
      {
        "level": 5,
        "title": "Communication Protocols",
        "description": "Devices need to talk with each other and with external systems.",
        "learningObjectives": [
          "UART, I2C, SPI, CAN bus",
          "Wireless (Bluetooth, Wi-Fi, Zigbee)"
        ],
        "resources": [
          {name:"I2C Protocol Tutorial",url:"https://learn.sparkfun.com/tutorials/i2c/all"},
          {name:"CAN Bus Explained (YouTube)",url:"https://youtu.be/LR1i5B8J2aA"},
          {name:"ESP32 Wi-Fi & Bluetooth",url:"https://randomnerdtutorials.com/esp32-bluetooth/"}
        ],
        "mission": "Create a wireless weather station sending sensor data over Bluetooth/Wi-Fi."
      },
      {
        "level": 6,
        "title": "Embedded Linux & Raspberry Pi",
        "description": "For advanced projects, you'll use Linux-based embedded systems.",
        "learningObjectives": [
          "Basics of Linux commands",
          "GPIO with Python (Raspberry Pi)",
          "Cross-compiling",
          "Device drivers"
        ],
        "resources": [
          {name:"Raspberry Pi Docs",url:"https://www.raspberrypi.com/documentation/"},
          {name:"Linux Device Drivers Book (PDF)",url:"https://lwn.net/Kernel/LDD3/"},
          {name:"Raspberry Pi GPIO Tutorial",url:"https://projects.raspberrypi.org/en/projects/physical-computing"}
        ],
        "mission": "Build a smart home controller (turn lights/fans on/off from Pi)."
      },
      {
        "level": 7,
        "title": "IoT Integration",
        "description": "Embedded systems today connect to the internet = IoT.",
        "learningObjectives": [
          "MQTT, REST APIs",
          "Cloud platforms (AWS IoT, Azure IoT, ThingsBoard)"
        ],
        "resources": [
          {name:"MQTT Essentials",url:"https://www.hivemq.com/mqtt-essentials/"},
          {name:"AWS IoT Core Docs",url:"https://docs.aws.amazon.com/iot/"},
          {name:"IoT Projects – Random Nerd Tutorials",url:"https://randomnerdtutorials.com/"}
        ],
        "mission": "Build an IoT-based smart home system controlled via mobile app."
      },
      {
        "level": 8,
        "title": "PCB Design & Hardware Prototyping",
        "description": "Serious embedded developers design their own circuits.",
        "learningObjectives": [
          "PCB design tools (KiCad, Eagle)",
          "Soldering",
          "Circuit debugging"
        ],
        "resources": [
          {name:"KiCad Docs",url:"https://docs.kicad.org/"},
          {name:"PCB Design Tutorial (Video)",url:"https://youtu.be/izsGkVdF7aY"}
        ],
        "mission": "Design and fabricate a PCB for your earlier sensor project."
      },
      {
        "level": 9,
        "title": "Optimization & Power Management",
        "description": "Embedded systems often run on batteries, so efficiency matters.",
        "learningObjectives": [
          "Low-power modes",
          "Memory optimization",
          "Watchdog timers"
        ],
        "resources": [
          {name:"Low Power Techniques (Microchip)",url:"https://microchipdeveloper.com/tls2101:power-saving-techniques"},
          {name:"ARM Cortex-M Low Power Guide",url:"https://developer.arm.com/documentation/dui0662/b/"}
        ],
        "mission": "Optimize your weather station project to run on battery for weeks."
      },
      {
        "level": 10,
        "title": "Final Projects & Portfolio",
        "description": "Projects prove your skills and prepare you for jobs.",
        "learningObjectives": [
          "Combine sensors, actuators, networking, and custom PCB into one system"
        ],
        "resources": [
          {name:"Awesome Embedded Systems Projects (GitHub)",url:"https://github.com/AbhishekMaira10/awesome-embedded-systems"},
          {name:"Hackster.io Projects",url:"https://www.hackster.io/"}
        ],
        "mission": "Build and publish a capstone project",
        "projectIdeas": [
          "Smart agriculture system",
          "IoT-based health monitor",
          "Custom drone controller"
        ]
      }
    ]
  }


};




/*
export const dev = {


  frontenddev: {
    "title": "Frontend Developer Learning Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Entering the Web World",
        "description": "Before coding, you must know how the internet and browsers actually work.",
        "learningObjectives": [
          "What is HTTP",
          "DNS",
          "Client-server model",
          "Hosting",
          "How a browser renders pages"
        ],
        "resources": [
          {
            name : "MDN – How the Web Works",
            url : "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works"
          },
           {
            name : "Git & GitHub Crash Course (YouTube)",
            url : "https://youtu.be/ulOKYl5sHGk"
          }
        ],
        "mission": "Install VS Code, Git, Node.js, create a GitHub account, and push your first 'Hello World' file."
      },
      {
        "level": 2,
        "title": "HTML – The Skeleton",
        "description": "HTML is the backbone of every website — it gives structure to content.",
        "learningObjectives": [
          "Headings",
          "Paragraphs",
          "Links",
          "Images",
          "Forms",
          "Tables",
          "Semantic tags"
        ],
        "resources": [
          {
            name : "HTML Basics – MDN",
            url : "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
          },
          {
            name : "HTML Crash Course (YouTube)",
            url : "https://youtu.be/UB1O30fR-EE"
          }
        ],
        "mission": "Build your personal bio page with name, image, links, and a contact form."
      },
      {
        "level": 3,
        "title": "CSS – The Skin & Beauty",
        "description": "CSS makes sites look alive — colors, layouts, animations, and responsiveness.",
        "learningObjectives": [
          "Selectors",
          "Box Model",
          "Flexbox",
          "Grid",
          "Media Queries"
        ],
        "resources": [
{
            name : "CSS Basics – MDN",
            url : "https://developer.mozilla.org/en-US/docs/Learn/CSS"
          },
          {
            name : "CSS Flexbox & Grid Crash Course (YouTube)",
            url : "https://youtu.be/0xMQfnTU6oo"
          }
        ],
        "mission": "Recreate the Google Homepage UI and make it responsive."
      },
      {
        "level": 4,
        "title": "JavaScript Basics – The Brain",
        "description": "JS adds logic and interactivity — without it, websites are static.",
        "learningObjectives": [
          "Variables",
          "Loops",
          "Functions",
          "DOM manipulation",
          "Events"
        ],
        "resources": [
          "JavaScript Guide – MDN",
          "JavaScript Crash Course (YouTube)"
        ],
        "mission": "Build a To-Do List app where users can add and remove tasks."
      },
      {
        "level": 5,
        "title": "Advanced JavaScript – Superpowers",
        "description": "APIs, async code, and modern JS features power real-world apps.",
        "learningObjectives": [
          "ES6+",
          "Fetch API",
          "Async/await",
          "localStorage"
        ],
        "resources": [
          "Fetch API – MDN",
          "Async JS Crash Course (YouTube)"
        ],
        "mission": "Create a Weather App that fetches live data from an API."
      },
      {
        "level": 6,
        "title": "Git & Teamwork",
        "description": "Every dev uses Git — it tracks code history and enables collaboration.",
        "learningObjectives": [
          "Git basics (commit, branch, merge)",
          "GitHub (fork, pull requests)"
        ],
        "resources": [
          "Pro Git Book",
          "Git Tutorial (YouTube)"
        ],
        "mission": "Push all your projects to GitHub and contribute a small fix to an open repo."
      },
      {
        "level": 7,
        "title": "React – The Modern Toolkit",
        "description": "React is the most popular frontend library for building dynamic UIs.",
        "learningObjectives": [
          "Components",
          "Props",
          "State",
          "Hooks",
          "React Router"
        ],
        "resources": [
          "React Docs",
          "React Crash Course (YouTube)"
        ],
        "mission": "Build a Movie Search App using an open movie API."
      },
      {
        "level": 8,
        "title": "Styling React Apps",
        "description": "React + modern styling makes apps beautiful and scalable.",
        "learningObjectives": [
          "TailwindCSS",
          "styled-components"
        ],
        "resources": [
          "Tailwind CSS Docs",
          "React + Tailwind Crash Course (YouTube)"
        ],
        "mission": "Rebuild your portfolio website in React with Tailwind styling."
      },
      {
        "level": 9,
        "title": "State Management",
        "description": "Larger apps need better ways to manage data between components.",
        "learningObjectives": [
          "Context API",
          "Redux Toolkit"
        ],
        "resources": [
          "Redux Toolkit Docs",
          "Redux Crash Course (YouTube)"
        ],
        "mission": "Create a Shopping Cart App with add/remove items using Context or Redux."
      },
      {
        "level": 10,
        "title": "Deployment & Showcase",
        "description": "A developer without a portfolio is invisible. Show your work to the world.",
        "learningObjectives": [
          "Hosting on Netlify/Vercel",
          "Environment variables",
          "Optimization basics"
        ],
        "resources": [
          "React Deployment Guide",
          "Deploy React Apps to Netlify (YouTube)"
        ],
        "mission": "Deploy your portfolio site + 3 projects (Todo, Weather, Movie App)."
      }
    ]
  },



  backenddev: {
    "title": "Backend Developer Roadmap — Beginner to Pro",
    "levels": [
      {
        "level": 1,
        "title": "Introduction & Setup",
        "description": "A backend dev powers the 'engine room' of apps — handling databases, APIs, authentication, and business logic. Before coding, you need the right tools.",
        "learningObjectives": [
          "How client-server works",
          "Backend responsibilities", 
          "Setting up VS Code, Git, Node.js (or chosen runtime)"
        ],
        "resources": [
          "MDN – Client-Server Overview",
          "Git & GitHub Crash Course (YouTube)"
        ],
        "mission": "Install VS Code, Git, Node.js (or Python/Java depending on choice), and push a simple 'Hello Backend' repo to GitHub."
      },
      {
        "level": 2,
        "title": "Programming Language Fundamentals",
        "description": "Backend = strong coding logic. Pick one backend-friendly language: JavaScript (Node.js), Python (Django/Flask/FastAPI), or Java (Spring).",
        "learningObjectives": [
          "Variables, data types, loops, functions",
          "OOP basics",
          "Error handling",
          "Modules"
        ],
        "resources": [
          "JavaScript Guide – MDN",
          "Python Crash Course (YouTube)",
          "Java Programming Tutorial (YouTube)"
        ],
        "mission": "Write a program that manages student records (CRUD: Create, Read, Update, Delete) using plain code."
      },
      {
        "level": 3,
        "title": "HTTP & APIs",
        "description": "Backend is about serving data to clients via APIs. You must master requests, responses, status codes, and REST principles.",
        "learningObjectives": [
          "HTTP methods (GET, POST, PUT, DELETE)",
          "JSON",
          "RESTful API design"
        ],
        "resources": [
          "REST API Tutorial",
          "HTTP Crash Course (YouTube)"
        ],
        "mission": "Create a mock REST API that returns JSON data like /api/users."
      },
      {
        "level": 4,
        "title": "Databases (SQL & NoSQL)",
        "description": "Backend stores and retrieves data. You need both relational (SQL) and non-relational (NoSQL) knowledge.",
        "learningObjectives": [
          "SQL (tables, queries, joins, transactions)",
          "NoSQL (documents, collections, MongoDB basics)"
        ],
        "resources": [
          "PostgreSQL Tutorial",
          "MongoDB Basics (YouTube)"
        ],
        "mission": "Build a Library App backend where books are stored in a SQL DB and users in MongoDB."
      },
      {
        "level": 5,
        "title": "Frameworks & Servers",
        "description": "Frameworks save time by providing routing, middleware, and scalability.",
        "learningObjectives": [
          "Node.js: Express.js",
          "Python: Django / FastAPI", 
          "Java: Spring Boot"
        ],
        "resources": [
          "Express.js Docs",
          "Django Docs",
          "Spring Boot Docs"
        ],
        "mission": "Create a Task Manager API with CRUD routes using your chosen framework."
      },
      {
        "level": 6,
        "title": "Authentication & Security",
        "description": "Backend must protect data — user accounts, sessions, tokens.",
        "learningObjectives": [
          "JWT, OAuth",
          "Password hashing (bcrypt)",
          "Input validation",
          "CORS, rate limiting"
        ],
        "resources": [
          "JWT Guide",
          "Auth in Node.js (YouTube)"
        ],
        "mission": "Implement login & signup with JWT authentication in your Task Manager API."
      },
      {
        "level": 7,
        "title": "Advanced Backend Features",
        "description": "Real apps need more than CRUD — you'll manage caching, file uploads, background jobs.",
        "learningObjectives": [
          "File Uploads (Multer/S3)",
          "Caching (Redis)",
          "Background Jobs (Bull, Celery)"
        ],
        "resources": [
          "Redis Docs",
          "File Upload in Node.js (YouTube)"
        ],
        "mission": "Extend your API with image upload + caching popular results in Redis."
      },
      {
        "level": 8,
        "title": "APIs Beyond REST (GraphQL, WebSockets)",
        "description": "Modern apps often use GraphQL for flexibility or WebSockets for real-time features.",
        "learningObjectives": [
          "Basics of GraphQL queries & mutations",
          "WebSocket connections"
        ],
        "resources": [
          "GraphQL Docs",
          "WebSockets Crash Course (YouTube)"
        ],
        "mission": "Add real-time chat API with WebSockets or build a GraphQL endpoint for your Task Manager."
      },
      {
        "level": 9,
        "title": "Deployment & DevOps Basics",
        "description": "Backend must run live for users. Learn deployment, hosting, and scaling basics.",
        "learningObjectives": [
          "Docker",
          "CI/CD pipelines", 
          "Cloud hosting (Heroku, Render, AWS EC2)"
        ],
        "resources": [
          "Docker Docs",
          "Heroku Deployment (YouTube)"
        ],
        "mission": "Deploy your API on Render/Heroku and share the live link + GitHub repo."
      },
      {
        "level": 10,
        "title": "Portfolio & Projects",
        "description": "Your portfolio is your proof of skills — backend employers want to see APIs, databases, and security.",
        "learningObjectives": [
          "System Design Basics",
          "API documentation (Swagger/Postman)"
        ],
        "resources": [
          "System Design Basics",
          "Backend Project Ideas (YouTube)"
        ],
        "mission": "Build at least 3 deployable backend projects + write clear API documentation (Swagger/Postman).",
        "projectIdeas": [
          "Task Manager API (CRUD, JWT, DB)",
          "E-commerce Backend (products, cart, orders, payments)", 
          "Chat Application API (WebSocket + Redis)"
        ]
      }
    ]
  },



  fullstackdev: {
    "title": "Full Stack Developer Roadmap — Beginner to Pro",
    "levels": [
      {
        "level": 1,
        "title": "The Big Picture",
        "description": "Full Stack means you can build both frontend (UI) and backend (server, database). You must first understand how the two communicate.",
        "learningObjectives": [
          "Client-Server model",
          "HTTP",
          "APIs",
          "Request/response cycle"
        ],
        "resources": [
          "MDN – Client-Server Overview",
          "HTTP Crash Course (YouTube)"
        ],
        "mission": "Draw a diagram showing how browser → server → database interact."
      },
      {
        "level": 2,
        "title": "HTML & CSS (Frontend Foundation)",
        "description": "Every app needs a beautiful and accessible user interface.",
        "learningObjectives": [
          "HTML structure",
          "Semantic tags",
          "CSS styling",
          "Flexbox",
          "Grid",
          "Responsive design"
        ],
        "resources": [
          "HTML Basics – MDN",
          "CSS Flexbox & Grid Crash Course (YouTube)"
        ],
        "mission": "Build a personal portfolio page with responsive design."
      },
      {
        "level": 3,
        "title": "JavaScript (Frontend Logic)",
        "description": "JavaScript brings interactivity to websites and is also the language you'll use on the backend (Node.js).",
        "learningObjectives": [
          "Variables",
          "Functions",
          "DOM manipulation",
          "Events",
          "ES6 features",
          "Async/await"
        ],
        "resources": [
          "JavaScript Guide – MDN",
          "JavaScript Crash Course (YouTube)"
        ],
        "mission": "Build a Todo App where tasks can be added, deleted, and saved in localStorage."
      },
      {
        "level": 4,
        "title": "React.js (Frontend Framework)",
        "description": "React lets you build scalable, component-based UIs. It's the most in-demand frontend library.",
        "learningObjectives": [
          "Components",
          "Props",
          "State",
          "Hooks",
          "React Router"
        ],
        "resources": [
          "React Docs",
          "React Crash Course (YouTube)"
        ],
        "mission": "Build a Movie Search App using an external API in React."
      },
      {
        "level": 5,
        "title": "Databases (Backend Foundation)",
        "description": "Full Stack devs must store and manage data. Learn both SQL (structured) and NoSQL (document-based).",
        "learningObjectives": [
          "PostgreSQL/MySQL basics",
          "MongoDB collections",
          "CRUD queries"
        ],
        "resources": [
          "PostgreSQL Tutorial",
          "MongoDB Crash Course (YouTube)"
        ],
        "mission": "Create a Student Records DB with SQL and a User Profiles DB in MongoDB."
      },
      {
        "level": 6,
        "title": "Backend with Node.js + Express",
        "description": "Node.js + Express is the most popular backend stack for full stack devs.",
        "learningObjectives": [
          "Express.js routes",
          "Middleware",
          "REST APIs",
          "Error handling"
        ],
        "resources": [
          "Express.js Docs",
          "Node.js + Express Crash Course (YouTube)"
        ],
        "mission": "Build a Task Manager API (CRUD for tasks)."
      },
      {
        "level": 7,
        "title": "Authentication & Security",
        "description": "Every app needs login/signup with secure data handling.",
        "learningObjectives": [
          "JWT",
          "Password hashing (bcrypt)",
          "Authentication middleware"
        ],
        "resources": [
          "JWT Introduction",
          "Node.js Auth Crash Course (YouTube)"
        ],
        "mission": "Add User Login & Signup to your Task Manager API using JWT."
      },
      {
        "level": 8,
        "title": "Connecting Frontend & Backend",
        "description": "This is where you become Full Stack. Your React frontend consumes your Express backend APIs.",
        "learningObjectives": [
          "Axios/fetch in React",
          "CORS",
          "API integration"
        ],
        "resources": [
          "Using Fetch – MDN",
          "React + Node.js Full Stack Crash Course (YouTube)"
        ],
        "mission": "Connect your React Todo App with your Express API & MongoDB."
      },
      {
        "level": 9,
        "title": "Advanced Features",
        "description": "Real-world apps need more — file uploads, payments, notifications.",
        "learningObjectives": [
          "File upload (Multer)",
          "Payment APIs (Stripe)",
          "Caching (Redis)"
        ],
        "resources": [
          "File Upload in Node.js (YouTube)",
          "Stripe Docs"
        ],
        "mission": "Add profile picture upload and checkout flow to your app."
      },
      {
        "level": 10,
        "title": "Deployment & DevOps Basics",
        "description": "Apps must go live. Learn deployment, CI/CD, Docker, and cloud basics.",
        "learningObjectives": [
          "Netlify/Vercel for frontend",
          "Render/Heroku/AWS for backend",
          "Docker containers"
        ],
        "resources": [
          "Deploy React App to Netlify (YouTube)",
          "Deploy Node.js to Render (Docs)"
        ],
        "mission": "Deploy your full stack app (React + Express + DB) and share the live link + GitHub repo."
      },
      {
        "level": 11,
        "title": "Portfolio & Projects",
        "description": "Employers want to see proof of your full stack skills. Build projects that cover different features.",
        "learningObjectives": [
          "System design",
          "Project documentation",
          "Live deployment"
        ],
        "resources": [
          "System Design Primer",
          "Full Stack Project Ideas (YouTube)"
        ],
        "mission": "Deploy at least 2-3 full stack projects with polished documentation & live demo",
        "projectIdeas": [
          "E-commerce App (products, cart, payments, auth)",
          "Chat Application (real-time with WebSockets)",
          "Blog Platform (CRUD, auth, comments)"
        ]
      }
    ]
  },

  
  mobileappdev: {
    "title": "Mobile App Developer Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundation (Programming & OOP)",
        "description": "Mobile apps are powered by strong programming skills. Before diving into frameworks, you need a solid base in one language.",
        "learningObjectives": [
          "Java, Kotlin (for Android), Swift (for iOS), or Dart (for Flutter)",
          "OOP, data structures, and problem-solving"
        ],
        "resources": [
          "Java Tutorial – W3Schools",
          "Kotlin Docs",
          "Dart Language Tour",
          "Swift.org"
        ],
        "mission": "Build a simple console-based calculator and a notes app (no UI, just logic)."
      },
      {
        "level": 2,
        "title": "Mobile Development Basics",
        "description": "Learn the structure of mobile apps, UI design principles, and lifecycle of apps.",
        "learningObjectives": [
          "Activities, Fragments (Android), ViewControllers (iOS), Widgets (Flutter)",
          "Layouts, navigation, and event handling"
        ],
        "resources": [
          "Android Basics – Developer Docs",
          "iOS SwiftUI Tutorials",
          "Flutter Widgets 101"
        ],
        "mission": "Create a mobile 'To-Do App' with add/remove tasks functionality."
      },
      {
        "level": 3,
        "title": "UI & Styling",
        "description": "A mobile app is only as good as its design and usability. Learn UI/UX and responsive layouts.",
        "learningObjectives": [
          "Material Design (Android), SwiftUI (iOS), Flutter UI components",
          "Animations and responsive design"
        ],
        "resources": [
          "Material Design Guidelines",
          "SwiftUI Essentials – Apple",
          "Flutter Layout Guide"
        ],
        "mission": "Redesign your To-Do App with a clean UI, custom colors, and simple animations."
      },
      {
        "level": 4,
        "title": "Data & Storage",
        "description": "Apps need to store data — either locally or remotely.",
        "learningObjectives": [
          "SQLite, Room (Android), Core Data (iOS)",
          "SharedPreferences, Hive (Flutter)"
        ],
        "resources": [
          "Room Database – Android Docs",
          "Core Data by Apple",
          "Storing Data in Flutter"
        ],
        "mission": "Upgrade your To-Do App to save tasks permanently (local storage)."
      },
      {
        "level": 5,
        "title": "Networking & APIs",
        "description": "Most apps interact with online services. Learn REST APIs, JSON, and HTTP requests.",
        "learningObjectives": [
          "Retrofit/Volley (Android), URLSession/Alamofire (iOS), HTTP package (Flutter)"
        ],
        "resources": [
          "REST APIs with Android",
          "iOS Networking Guide",
          "Flutter HTTP Cookbook"
        ],
        "mission": "Build a Weather App that fetches live weather data from an API."
      },
      {
        "level": 6,
        "title": "State Management & Architecture",
        "description": "As apps grow, managing state becomes complex. Learn patterns like MVVM, MVC, and state management libraries.",
        "learningObjectives": [
          "Android → MVVM, LiveData, ViewModel",
          "iOS → MVC, Combine, SwiftUI State",
          "Flutter → Provider, Riverpod, Bloc"
        ],
        "resources": [
          "Guide to App Architecture – Android",
          "SwiftUI State Management",
          "Flutter State Management"
        ],
        "mission": "Create a Notes App with multiple screens, categories, and proper state management."
      },
      {
        "level": 7,
        "title": "Authentication & Security",
        "description": "Most apps require users to log in and protect their data.",
        "learningObjectives": [
          "Firebase Auth, OAuth, JWT",
          "Secure storage"
        ],
        "resources": [
          "Firebase Authentication Docs",
          "Secure iOS Data",
          "Flutter Firebase Auth"
        ],
        "mission": "Add user sign-in/sign-up functionality to your Notes App."
      },
      {
        "level": 8,
        "title": "Push Notifications & Device Features",
        "description": "Make apps engaging with notifications and device integration (camera, GPS, sensors).",
        "learningObjectives": [
          "Firebase Cloud Messaging, local notifications",
          "Camera API, location services"
        ],
        "resources": [
          "Push Notifications – Android",
          "UserNotifications – iOS",
          "Flutter Local Notifications"
        ],
        "mission": "Build a Reminder App with notifications and location-based alerts."
      },
      {
        "level": 9,
        "title": "Deployment",
        "description": "Time to launch your apps into the real world.",
        "learningObjectives": [
          "Google Play Console, App Store Connect",
          "APK/IPA packaging, app signing"
        ],
        "resources": [
          "Publishing to Google Play",
          "Distributing iOS Apps",
          "Deploy Flutter Apps"
        ],
        "mission": "Publish your To-Do or Weather App to Play Store/TestFlight."
      },
      {
        "level": 10,
        "title": "Advanced Skills & Portfolio",
        "description": "To stand out, explore cross-platform, testing, and advanced animations.",
        "learningObjectives": [
          "Flutter for cross-platform, React Native",
          "Unit/UI Testing, CI/CD pipelines"
        ],
        "resources": [
          "Flutter Testing Guide",
          "React Native Docs",
          "CI/CD for Mobile"
        ],
        "mission": "Build a final Portfolio App (e.g., expense tracker, chat app) and publish it with polished UI + API integration."
      }
    ]
  },


  gamedev: {
    "title": "Mobile App Developer Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundation (Programming & OOP)",
        "description": "Mobile apps are powered by strong programming skills. Before diving into frameworks, you need a solid base in one language.",
        "learningObjectives": [
          "Java, Kotlin (for Android), Swift (for iOS), or Dart (for Flutter)",
          "OOP, data structures, and problem-solving"
        ],
        "resources": [
          "Java Tutorial – W3Schools",
          "Kotlin Docs",
          "Dart Language Tour",
          "Swift.org"
        ],
        "mission": "Build a simple console-based calculator and a notes app (no UI, just logic)."
      },
      {
        "level": 2,
        "title": "Mobile Development Basics",
        "description": "Learn the structure of mobile apps, UI design principles, and lifecycle of apps.",
        "learningObjectives": [
          "Activities, Fragments (Android), ViewControllers (iOS), Widgets (Flutter)",
          "Layouts, navigation, and event handling"
        ],
        "resources": [
          "Android Basics – Developer Docs",
          "iOS SwiftUI Tutorials",
          "Flutter Widgets 101"
        ],
        "mission": "Create a mobile 'To-Do App' with add/remove tasks functionality."
      },
      {
        "level": 3,
        "title": "UI & Styling",
        "description": "A mobile app is only as good as its design and usability. Learn UI/UX and responsive layouts.",
        "learningObjectives": [
          "Material Design (Android), SwiftUI (iOS), Flutter UI components",
          "Animations and responsive design"
        ],
        "resources": [
          "Material Design Guidelines",
          "SwiftUI Essentials – Apple",
          "Flutter Layout Guide"
        ],
        "mission": "Redesign your To-Do App with a clean UI, custom colors, and simple animations."
      },
      {
        "level": 4,
        "title": "Data & Storage",
        "description": "Apps need to store data — either locally or remotely.",
        "learningObjectives": [
          "SQLite, Room (Android), Core Data (iOS)",
          "SharedPreferences, Hive (Flutter)"
        ],
        "resources": [
          "Room Database – Android Docs",
          "Core Data by Apple",
          "Storing Data in Flutter"
        ],
        "mission": "Upgrade your To-Do App to save tasks permanently (local storage)."
      },
      {
        "level": 5,
        "title": "Networking & APIs",
        "description": "Most apps interact with online services. Learn REST APIs, JSON, and HTTP requests.",
        "learningObjectives": [
          "Retrofit/Volley (Android), URLSession/Alamofire (iOS), HTTP package (Flutter)"
        ],
        "resources": [
          "REST APIs with Android",
          "iOS Networking Guide",
          "Flutter HTTP Cookbook"
        ],
        "mission": "Build a Weather App that fetches live weather data from an API."
      },
      {
        "level": 6,
        "title": "State Management & Architecture",
        "description": "As apps grow, managing state becomes complex. Learn patterns like MVVM, MVC, and state management libraries.",
        "learningObjectives": [
          "Android → MVVM, LiveData, ViewModel",
          "iOS → MVC, Combine, SwiftUI State",
          "Flutter → Provider, Riverpod, Bloc"
        ],
        "resources": [
          "Guide to App Architecture – Android",
          "SwiftUI State Management",
          "Flutter State Management"
        ],
        "mission": "Create a Notes App with multiple screens, categories, and proper state management."
      },
      {
        "level": 7,
        "title": "Authentication & Security",
        "description": "Most apps require users to log in and protect their data.",
        "learningObjectives": [
          "Firebase Auth, OAuth, JWT",
          "Secure storage"
        ],
        "resources": [
          "Firebase Authentication Docs",
          "Secure iOS Data",
          "Flutter Firebase Auth"
        ],
        "mission": "Add user sign-in/sign-up functionality to your Notes App."
      },
      {
        "level": 8,
        "title": "Push Notifications & Device Features",
        "description": "Make apps engaging with notifications and device integration (camera, GPS, sensors).",
        "learningObjectives": [
          "Firebase Cloud Messaging, local notifications",
          "Camera API, location services"
        ],
        "resources": [
          "Push Notifications – Android",
          "UserNotifications – iOS",
          "Flutter Local Notifications"
        ],
        "mission": "Build a Reminder App with notifications and location-based alerts."
      },
      {
        "level": 9,
        "title": "Deployment",
        "description": "Time to launch your apps into the real world.",
        "learningObjectives": [
          "Google Play Console, App Store Connect",
          "APK/IPA packaging, app signing"
        ],
        "resources": [
          "Publishing to Google Play",
          "Distributing iOS Apps",
          "Deploy Flutter Apps"
        ],
        "mission": "Publish your To-Do or Weather App to Play Store/TestFlight."
      },
      {
        "level": 10,
        "title": "Advanced Skills & Portfolio",
        "description": "To stand out, explore cross-platform, testing, and advanced animations.",
        "learningObjectives": [
          "Flutter for cross-platform, React Native",
          "Unit/UI Testing, CI/CD pipelines"
        ],
        "resources": [
          "Flutter Testing Guide",
          "React Native Docs",
          "CI/CD for Mobile"
        ],
        "mission": "Build a final Portfolio App (e.g., expense tracker, chat app) and publish it with polished UI + API integration."
      }
    ]
  },


  embeddedsystemdev: {
    "title": "Embedded Systems Developer Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundation in Electronics & Programming",
        "description": "Embedded systems live inside hardware, so you must know both coding and electronics.",
        "learningObjectives": [
          "Digital logic",
          "Microcontrollers basics",
          "C programming",
          "Binary/hex math"
        ],
        "resources": [
          "C Programming Tutorial – GeeksforGeeks",
          "Digital Electronics Basics (YouTube)",
          "Introduction to Microcontrollers – NPTEL"
        ],
        "mission": "Blink an LED using Arduino (Hello World of Embedded)."
      },
      {
        "level": 2,
        "title": "Microcontrollers & Boards",
        "description": "Microcontrollers are the heart of embedded systems.",
        "learningObjectives": [
          "Arduino (beginner), STM32, ESP32, Raspberry Pi Pico",
          "GPIO, UART, I2C, SPI"
        ],
        "resources": [
          "Arduino Docs",
          "STM32 Getting Started",
          "ESP32 Guide"
        ],
        "mission": "Build a temperature sensor system with Arduino + LCD display."
      },
      {
        "level": 3,
        "title": "Embedded C & Real-Time Programming",
        "description": "Embedded systems often run in real-time environments with tight constraints.",
        "learningObjectives": [
          "Embedded C",
          "Interrupts",
          "Timers",
          "RTOS basics (FreeRTOS)"
        ],
        "resources": [
          "Embedded C Tutorial",
          "FreeRTOS Docs",
          "Interrupts Explained (Video)"
        ],
        "mission": "Program a digital stopwatch using timers and interrupts."
      },
      {
        "level": 4,
        "title": "Sensors & Actuators",
        "description": "Embedded devices interact with the real world.",
        "learningObjectives": [
          "How to read data from sensors (temperature, humidity, IR, ultrasonic)",
          "Control motors/relays"
        ],
        "resources": [
          "Interfacing Sensors with Arduino",
          "ESP32 Sensors Guide"
        ],
        "mission": "Build an ultrasonic distance measurement system with buzzer alerts."
      },
      {
        "level": 5,
        "title": "Communication Protocols",
        "description": "Devices need to talk with each other and with external systems.",
        "learningObjectives": [
          "UART, I2C, SPI, CAN bus",
          "Wireless (Bluetooth, Wi-Fi, Zigbee)"
        ],
        "resources": [
          "I2C Protocol Tutorial",
          "CAN Bus Explained (YouTube)",
          "ESP32 Wi-Fi & Bluetooth"
        ],
        "mission": "Create a wireless weather station sending sensor data over Bluetooth/Wi-Fi."
      },
      {
        "level": 6,
        "title": "Embedded Linux & Raspberry Pi",
        "description": "For advanced projects, you'll use Linux-based embedded systems.",
        "learningObjectives": [
          "Basics of Linux commands",
          "GPIO with Python (Raspberry Pi)",
          "Cross-compiling",
          "Device drivers"
        ],
        "resources": [
          "Raspberry Pi Docs",
          "Linux Device Drivers Book (PDF)",
          "Raspberry Pi GPIO Tutorial"
        ],
        "mission": "Build a smart home controller (turn lights/fans on/off from Pi)."
      },
      {
        "level": 7,
        "title": "IoT Integration",
        "description": "Embedded systems today connect to the internet = IoT.",
        "learningObjectives": [
          "MQTT, REST APIs",
          "Cloud platforms (AWS IoT, Azure IoT, ThingsBoard)"
        ],
        "resources": [
          "MQTT Essentials",
          "AWS IoT Core Docs",
          "IoT Projects – Random Nerd Tutorials"
        ],
        "mission": "Build an IoT-based smart home system controlled via mobile app."
      },
      {
        "level": 8,
        "title": "PCB Design & Hardware Prototyping",
        "description": "Serious embedded developers design their own circuits.",
        "learningObjectives": [
          "PCB design tools (KiCad, Eagle)",
          "Soldering",
          "Circuit debugging"
        ],
        "resources": [
          "KiCad Docs",
          "PCB Design Tutorial (Video)"
        ],
        "mission": "Design and fabricate a PCB for your earlier sensor project."
      },
      {
        "level": 9,
        "title": "Optimization & Power Management",
        "description": "Embedded systems often run on batteries, so efficiency matters.",
        "learningObjectives": [
          "Low-power modes",
          "Memory optimization",
          "Watchdog timers"
        ],
        "resources": [
          "Low Power Techniques (Microchip)",
          "ARM Cortex-M Low Power Guide"
        ],
        "mission": "Optimize your weather station project to run on battery for weeks."
      },
      {
        "level": 10,
        "title": "Final Projects & Portfolio",
        "description": "Projects prove your skills and prepare you for jobs.",
        "learningObjectives": [
          "Combine sensors, actuators, networking, and custom PCB into one system"
        ],
        "resources": [
          "Awesome Embedded Systems Projects (GitHub)",
          "Hackster.io Projects"
        ],
        "mission": "Build and publish a capstone project",
        "projectIdeas": [
          "Smart agriculture system",
          "IoT-based health monitor",
          "Custom drone controller"
        ]
      }
    ]
  }

};


*/

