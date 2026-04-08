
export const datascience = 

{
  dataanalyst: {
    "title": "Data Analyst Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundation: Data & Business Basics",
        "why": "A Data Analyst turns numbers into insights. You need to understand both business and data fundamentals.",
        "learn": [
          "Excel/Google Sheets (pivot tables, formulas, charts)",
          "Business Metrics (KPIs, revenue, churn, retention)",
          "Data Lifecycle (collection → cleaning → analysis → visualization)"
        ],
        "resources": [
          {home:"Excel Basics for Data Analysis – Microsoft",url:"https://learn.microsoft.com/en-us/training/paths/excel-data-analysis/"},
          {home:"Google Data Analytics Professional Certificate (Coursera)",url:"https://www.coursera.org/professional-certificates/google-data-analytics"},
          {home:"Book: Data Analytics Made Accessible by Anil Maheshwari"}
        ],
        "mission": "Analyze a sales dataset in Excel and create 3 key business insights with pivot tables."
      },
      {
        "level": 2,
        "title": "Core Tools: SQL & Databases",
        "why": "SQL is the bread and butter for querying structured data from databases.",
        "learn": [
          "SQL Basics (SELECT, WHERE, JOIN, GROUP BY, ORDER BY)",
          "Advanced SQL (Window functions, CTEs, subqueries)",
          "Database types (Relational: MySQL, PostgreSQL; Cloud: BigQuery, Snowflake)"
        ],
        "resources": [
          {home:"SQLBolt (Interactive)",url:"https://sqlbolt.com/"},
          {home:"Mode Analytics SQL Tutorial",url:"https://mode.com/sql-tutorial/"},
          {home:"Book:  SQL by Alan Beaulieu"}
        ],
        "mission": "Write queries on a sample database to find 'Top 5 products by sales per region.'"
      },
      {
        "level": 3,
        "title": "Data Cleaning & Analysis (Python/R)",
        "why": "Real-world data is messy — you must clean, transform, and analyze it.",
        "learn": [
          "Python (Pandas, NumPy) or R (dplyr, tidyr)",
          "Data Wrangling (handling nulls, duplicates, formatting)",
          "Exploratory Data Analysis (EDA)"
        ],
        "resources": [
          {home:"Python for Data Analysis – Wes McKinney",url:"https://wesmckinney.com/book/"},
          {home:"Kaggle Python Course",url:"https://www.kaggle.com/learn/python"},
          {home:"R for Data Science",url:"https://r4ds.had.co.nz/"}
        ],
        "mission": "Take a messy CSV dataset → clean it using Pandas → calculate insights (mean, trends, correlations)."
      },
      {
        "level": 4,
        "title": "Data Visualization & Storytelling",
        "why": "Analysis is useless unless you communicate insights visually.",
        "learn": [
          "Visualization Tools: Tableau, Power BI, Looker",
          "Python/R visualization: Matplotlib, Seaborn, Plotly, ggplot2",
          "Dashboard Design Principles (clarity, interactivity, KPIs)"
        ],
        "resources": [
          {home:"Tableau Free Training",url:"https://www.tableau.com/learn/training"},
          {home:"Power BI Guided learning – Microsoft",url:"https://learn.microsoft.com/en-us/training/powerplatform/power-bi"},
          {home:"Book: Storytelling with Data by Cole Nussbaumer"}
        ],
        "mission": "Create a Tableau/Power BI dashboard showing monthly revenue trends + customer retention rates."
      },
      {
        "level": 5,
        "title": "Statistics & Business Intelligence",
        "why": "A Data Analyst must understand the 'why' behind data patterns.",
        "learn": [
          "Probability & Descriptive Statistics (mean, variance, standard deviation)",
          "Hypothesis Testing (t-tests, chi-square, ANOVA)",
          "Correlation vs Causation",
          "Business Intelligence (BI reporting, OLAP cubes)"
        ],
        "resources": [
          {home:"Khan Academy – Statistics & Probability",url:"https://www.khanacademy.org/math/statistics-probability"},
          {home:"StatQuest with Josh Starmer (YouTube)",url:"https://www.youtube.com/user/joshstarmer"},
          {home:"Book: Naked Statistics by Charles Wheelan"}
        ],
        "mission": "Test if 'new ad campaign significantly increased sales' using hypothesis testing."
      },
      {
        "level": 6,
        "title": "Advanced Skills & Specialization",
        "why": "To level up and stand out in the industry.",
        "learn": [
          "Big Data (Hadoop, Spark)",
          "Cloud Data Tools (AWS Redshift, GCP BigQuery, Azure Synapse)",
          "Machine learning Basics (regression, classification)",
          "Domain Specialization (Finance, Healthcare, Marketing Analytics)"
        ],
        "resources": [
          {home:"Datacamp: Data Analyst Career Track",url:"https://www.datacamp.com/tracks/data-analyst"},
          {home:"Google BigQuery Documentation",url:"https://cloud.google.com/bigquery/docs"},
          {home:"Harvard Business School – Business Analytics",url:"https://online.hbs.edu/courses/business-analytics/"}
        ],
        "mission": "Run a predictive model (linear regression) to forecast future sales from historical data."
      }
    ]
  }
,


  dataeng: {
    "title": "Data Engineering Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundation: Core Programming & Databases",
        "why": "Data Engineers handle data at scale, so programming and database skills are essential.",
        "learn": [
          "Programming: Python, Java, or Scala",
          "SQL & Relational Databases (MySQL, PostgreSQL)",
          "Data Modeling & Schema Design"
        ],
        "resources": [
          {home:"Python for Data Engineers – DataCamp",url:"https://www.datacamp.com/courses/data-engineering-for-python"},
          {home:"SQLBolt – Interactive SQL",url:"https://sqlbolt.com/"},
          {home:"Book: Designing Data-Intensive Applications by Martin Kleppmann"}
        ],
        "mission": "Design a small database schema for a sales system and write queries to retrieve key metrics."
      },
      {
        "level": 2,
        "title": "ETL (Extract, Transform, Load) & Data Pipelines",
        "why": "Moving and transforming data reliably is the core of data engineering.",
        "learn": [
          "ETL Concepts (Batch vs Streaming)",
          "Tools: Apache Airflow, Luigi, Talend",
          "Data Cleaning & Transformation (Pandas, PySpark)"
        ],
        "resources": [
{home:"Airflow Documentation",url:"https://airflow.apache.org/docs/"},
          {home:"PySpark Tutorial – Databricks",url:"https://databricks.com/spark/getting-started-with-apache-spark"},
          {home:"ETL Concepts – YouTube",url:"https://youtu.be/IO2iEy1wz8Q"}
        ],
        "mission": "Build a pipeline that extracts CSV data → transforms it → loads into a database."
      },
      {
        "level": 3,
        "title": "Big Data & Distributed Systems",
        "why": "To handle massive datasets efficiently, you need distributed computing knowledge.",
        "learn": [
          "Hadoop & HDFS basics",
          "Spark (PySpark, RDD, DataFrame API)",
          "Kafka for real-time streaming"
        ],
        "resources": [
          {home:"Hadoop Tutorial – Hadoop Apache",url:"https://hadoop.apache.org/docs/stable/"},
          {home:"PySpark Documentation",url:"https://spark.apache.org/docs/latest/api/python/"},
          {home:"Kafka Quickstart",url:"https://kafka.apache.org/quickstart"}
        ],
        "mission": "Process a large CSV dataset using Spark → output transformed results."
      },
      {
        "level": 4,
        "title": "Data Warehousing & Cloud Platforms",
        "why": "Data Engineers design storage solutions for analytics and reporting.",
        "learn": [
          "Cloud Storage & Data Warehousing: AWS Redshift, GCP BigQuery, Azure Synapse",
          "Star & Snowflake Schemas",
          "Data Partitioning & Indexing"
        ],
        "resources": [
          {home:"AWS Redshift Docs",url:"https://docs.aws.amazon.com/redshift/"},
          {home:"BigQuery Docs",url:"https://cloud.google.com/bigquery/docs"},
          {home:"Azure Synapse Docs",url:"https://learn.microsoft.com/en-us/azure/synapse-analytics/"}
        ],
        "mission": "Build a data warehouse schema → load transformed sales data → run aggregation queries."
      },
      {
        "level": 5,
        "title": "Data Orchestration & Workflow Management",
        "why": "Complex pipelines need scheduling, monitoring, and automation.",
        "learn": [
          "Apache Airflow (DAGs, missions, operators)",
          "Prefect, Luigi basics",
          "Monitoring & Alerting pipelines"
        ],
        "resources": [
          {home:"Airflow Tutorial – YouTube",url:"https://youtu.be/cHATHSB_450"},
          {home:"Prefect Docs",url:"https://docs.prefect.io/"}
        ],
        "mission": "Schedule a daily ETL job → trigger alert if it fails."
      },
      {
        "level": 6,
        "title": "Data Governance & Security",
        "why": "Engineers must ensure data is clean, reliable, and secure.",
        "learn": [
          "Data Quality & Validation",
          "Access Control & Role Management",
          "Compliance: GDPR, HIPAA, SOC 2",
          "Encryption at rest & in transit"
        ],
        "resources": [
          {home:"Data Governance Framework – DAMA",url:"https://www.dama.org/"},
          {home:"AWS Data Security Best Practices",url:"https://aws.amazon.com/security/"}
        ],
        "mission": "Implement access controls on your cloud data warehouse + logging."
      },
      {
        "level": 7,
        "title": "Advanced & Real-Time Data Engineering",
        "why": "Scale up to enterprise-grade pipelines.",
        "learn": [
          "Stream Processing (Apache Flink, Spark Streaming)",
          "Event-driven architectures",
          "Data Lake design & management (AWS S3, Delta Lake)",
          "CI/CD for data pipelines"
        ],
        "resources": [
          {home:"Spark Structured Streaming Docs",url:"https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html"},
          {home:"Delta Lake Documentation",url:"https://docs.delta.io/latest/index.html"}
        ],
        "mission": "Create a streaming pipeline that processes events → stores in warehouse → triggers alerts for anomalies."
      },
      {
        "level": 8,
        "title": "Certifications & Career Growth",
        "why": "Certifications validate skills and open doors to enterprise roles.",
        "learn": [
          "Data engineering certifications",
          "Portfolio building",
          "Career progression"
        ],


        /*
        "resources": [
          {home:"Certification Roadmaps",url:""},
{home:"Portfolio Building Tips",url:""}
        ],

        */


        "mission": "Deploy a project that ingests live sales or IoT data → processes → visualizes.",
        "certifications": [
          "Google Cloud Professional Data Engineer",
          "AWS Certified Data Analytics – Specialty",
          "Databricks Certified Data Engineer Associate"
        ],
        "projectIdeas": [
          "Build a full ETL pipeline from raw data → warehouse → dashboard",
          "Implement streaming analytics using Kafka + Spark Streaming",
          "Showcase your GitHub with modular, production-ready data pipelines"
        ]
      }
    ]
  }
,


  datascientist: {
    "title": "Data Scientist Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundation: Math & Statistics",
        "why": "Data science is all about interpreting patterns in data. Math is your lens.",
        "learn": [
          "Probability & Statistics (mean, median, variance, standard deviation)",
          "Hypothesis Testing (t-tests, chi-square, ANOVA)",
          "Linear Algebra (vectors, matrices)",
          "Calculus basics (derivatives for optimization in ML)"
        ],
        "resources": [
{home:"Khan Academy – Statistics & Probability",url:"https://www.khanacademy.org/math/statistics-probability"},
          {home:"Linear Algebra – MIT OpenCourseWare",url:"https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/"},
          {home:"Book: Naked Statistics by Charles Wheelan"}
        ],
        "mission": "Analyze a sample dataset → calculate mean, variance, and correlation between features."
      },
      {
        "level": 2,
        "title": "Programming & Data Handling",
        "why": "Data Scientists manipulate, clean, and analyze large datasets.",
        "learn": [
          "Python (Pandas, NumPy, Matplotlib, Seaborn) or R (dplyr, ggplot2)",
          "Data Cleaning & Preprocessing",
          "Handling missing data, normalization, scaling",
          "Working with CSV, JSON, SQL databases"
        ],
        "resources": [
          {home:"Python for Data Science – FreeCodeCamp",url:"https://youtu.be/rfscVS0vtbw"},
          {home:"R for Data Science",url:"https://r4ds.had.co.nz/"},
          {home:"Kaggle Datasets for practice: Kaggle",url:"https://www.kaggle.com/datasets"}
        ],
        "mission": "Load a messy CSV → clean it → visualize distributions and relationships."
      },
      {
        "level": 3,
        "title": "Exploratory Data Analysis (EDA)",
        "why": "Understand the story behind the data before modeling.",
        "learn": [
          "Data Visualization (histograms, scatter plots, box plots)",
          "Feature Engineering & Selection",
          "Outlier Detection",
          "Correlation Analysis"
        ],
        "resources": [
          {home:"Seaborn Docs",url:"https://seaborn.pydata.org/"},
          {home:"Matplotlib Tutorials",url:"https://matplotlib.org/stable/tutorials/index.html"},
          {home:"EDA with Pandas – YouTube",url:"https://youtu.be/Qh0ZGUpzKHk"}
        ],
        "mission": "Perform EDA on a dataset → create a report with key insights and visualizations."
      },
      {
        "level": 4,
        "title": "Machine learning Fundamentals",
        "why": "Predictive modeling is the core of data science.",
        "learn": [
          "Supervised learning (Regression, Classification)",
          "Unsupervised learning (Clustering, PCA)",
          "Model Evaluation Metrics (Accuracy, Precision, Recall, F1 Score, ROC-AUC)",
          "Overfitting & Regularization (Lasso, Ridge)"
        ],
        "resources": [
          
          {home:"Scikit-learn",url:"https://scikit-learn.org/stable/"}
        ],
        "mission": "Build a classification model to predict customer churn → evaluate metrics and improve performance."
      },
      {
        "level": 5,
        "title": "Advanced Machine learning & AI",
        "why": "To handle complex data and make smarter predictions.",
        "learn": [
          "Deep learning (Neural Networks, CNNs, RNNs, Transformers)",
          "Natural Language Processing (NLP)",
          "Time Series Forecasting",
          "Model Deployment (Flask, FastAPI, Streamlit)"
        ],
        "resources": [
          {home:"TensorFlow Docs",url:"https://www.tensorflow.org/"},
          {home:"PyTorch Tutorials",url:"https://pytorch.org/tutorials/"},
          {home:"Hugging Face NLP",url:"https://huggingface.co/docs/transformers/index"}
        ],
        "mission": "Build a deep learning model to predict sales or classify images → deploy it as a simple web app."
      },
      {
        "level": 6,
        "title": "Big Data & Cloud",
        "why": "Real-world datasets are huge and require distributed systems.",
        "learn": [
          "Spark (PySpark) for distributed data processing",
          "Cloud Platforms (AWS S3 + SageMaker, GCP BigQuery + AI Platform, Azure ML)",
          "Data Pipeline Integration (ETL + ML)"
        ],
        "resources": [
          {home:"PySpark Docs",url:"https://spark.apache.org/docs/latest/api/python/"},
          {home:"AWS SageMaker Docs",url:"https://docs.aws.amazon.com/sagemaker/"},
          {home:"Azure ML Docs",url:"https://learn.microsoft.com/en-us/azure/machine-learning/"}
        ],
        "mission": "Process a large dataset in Spark → train a model and deploy it in cloud."
      },
      {
        "level": 7,
        "title": "Data Storytelling & Visualization",
        "why": "Insights are only valuable if communicated effectively.",
        "learn": [
          "Dashboards & Reporting (Tableau, Power BI)",
          "Interactive Visualizations (Plotly, Streamlit)",
          "Storytelling with data (highlight trends, anomalies, actionable insights)"
        ],
        "resources": [
          {home:"Tableau Free Training",url:"https://www.tableau.com/learn/training"},
          {home:"Power BI ing – Microsoft",url:"https://learn.microsoft.com/en-us/training/powerplatform/power-bi/"},
          {home:"Book: Storytelling with Data by Cole Nussbaumer"}
        ],
        "mission": "Create a dashboard → highlight key KPIs and present insights in a business-ready format."
      },
      {
        "level": 8,
        "title": "Projects & Portfolio",
        "why": "Showcasing real projects demonstrates practical skills.",
        "learn": [
          "Project development",
          "Portfolio building",
          "GitHub presentation"
        ],
        "resources": [
          {home:"Kaggle Competitions",url:"https://www.kaggle.com/competitions"},
          {home:"GitHub Portfolio Inspiration",url:"https://github.com/topics/data-science-projects"}
        ],
        "mission": "Complete 3–5 projects → publish notebooks + visualizations on GitHub/portfolio.",
        "projectIdeas": [
          "Predictive Analytics (churn, sales forecasting)",
          "Customer Segmentation (clustering)",
          "NLP Project (sentiment analysis or text classification)",
          "Image Classification or Object Detection"
        ]
      },
      {
        "level": 9,
        "title": "Certifications & Career Growth",
        "why": "Validates your expertise and opens job opportunities.",
        "learn": [
          "Data science certifications",
          "Career progression planning",
          "Professional networking"
        ],

        /* 
        "resources": [
          {home:"Certification Guides",url:""},
          {home:"Career Development",url:""}
        ],

        */
        "mission": "Pick one certification → complete labs + projects → share on LinkedIn + GitHub.",
        "certifications": [
          "Google Data Analytics / TensorFlow Developer / AWS ML Specialty",
          "Microsoft Certified: Azure Data Scientist Associate",
          "IBM Data Science Professional Certificate"
        ],
        "careerPath": [
          "Data Analyst → Junior Data Scientist → Data Scientist → Senior Data Scientist → ML Engineer / AI Specialist"
        ]
      }
    ]
  }
,


  mleng: {
    "title": "Machine learning Engineer Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundation: Math & Programming",
        "why": "ML is math-heavy and programming-intensive; you need a solid foundation first.",
        "learn": [
          "Linear Algebra (vectors, matrices, dot products)",
          "Calculus (derivatives, gradients for optimization)",
          "Probability & Statistics (distributions, Bayes theorem)",
          "Programming: Python (NumPy, Pandas), basic OOP, Git"
        ],
        "resources": [
          {home:"Khan Academy – Linear Algebra",url:"https://www.khanacademy.org/math/linear-algebra"},
          {home:"Probability & Statistics – MIT OpenCourseWare",url:"https://ocw.mit.edu/courses/res-6-012-introduction-to-probability-spring-2018/"},
          {home:"Python for Data Science – FreeCodeCamp",url:"https://youtu.be/rfscVS0vtbw"}
        ],
        "mission": "Implement basic linear algebra operations and probability calculations in Python."
      },
      {
        "level": 2,
        "title": "Data Handling & Preprocessing",
        "why": "Real-world data is messy; MLEs must clean and process it efficiently.",
        "learn": [
          "Data Cleaning & Wrangling (Pandas, NumPy, missing value handling)",
          "Feature Engineering & Scaling",
          "Handling Large Datasets (chunking, generators)"
        ],
        "resources": [
          {home:"Pandas Documentation",url:"https://pandas.pydata.org/docs/"},
          {home:"Kaggle Data Cleaning Tutorials",url:"https://www.kaggle.com/learn/data-cleaning"}
        ],
        "mission": "Preprocess a CSV dataset → normalize features → prepare for ML modeling."
      },
      {
        "level": 3,
        "title": "Machine learning Algorithms & Theory",
        "why": "Core knowledge of ML algorithms is essential to build models.",
        "learn": [
          "Supervised learning (Linear/Logistic Regression, Decision Trees, Random Forests)",
          "Unsupervised learning (Clustering, PCA, Anomaly Detection)",
          "Evaluation Metrics (Accuracy, Precision, Recall, F1, ROC-AUC)",
          "Overfitting, Regularization (L1, L2, Dropout)"
        ],
        "resources": [
          {home:"Scikit- Docs",url:"https://scikit-learn.org/stable/"},
          {home:"Kaggle  ML",url:"https://www.kaggle.com/learn/intro-to-machine-learning"},
          {home:"Book: Hands-On Machi, Keras & TensorFlow by Aurélien Géron"}
        ],
        "mission": "Build a regression and classification model → evaluate metrics → tune hyperparameters."
      },
      {
        "level": 4,
        "title": "Deep learning & Neural Networks",
        "why": "Many production ML systems require deep learning models.",
        "learn": [
          "Neural Networks (Perceptron, MLPs)",
          "CNNs (Image Processing), RNNs/LSTMs (Sequence Data)",
          "Transformers & Attention Mechanisms (NLP missions)",
          "Frameworks: TensorFlow, Keras, PyTorch"
        ],
        "resources": [
          {home:"PyTorch Tutorials",url:"https://pytorch.org/tutorials/"},
          {home:"TensorFlow Docs",url:"https://www.tensorflow.org/"},
          {home:"Deeplearning.AI – Coursera",url:"https://www.coursera.org/specializations/deep-learning"}
        ],
        "mission": "Build a CNN for MNIST digit classification → deploy locally."
      },
      {
        "level": 5,
        "title": "Model Deployment & Productionization",
        "why": "ML engineers deploy models into real systems that scale.",
        "learn": [
          "APIs & Web Frameworks (Flask, FastAPI, Django REST)",
          "Model Serialization (Pickle, Joblib, ONNX)",
          "Dockerizing ML models",
          "CI/CD pipelines for ML"
        ],
        "resources": [
          {home:"Deploy ML with Flask – YouTube",url:"https://youtu.be/5XvHq_f0km8"},
          {home:"FastAPI Documentation",url:"https://fastapi.tiangolo.com/"},
          {home:"ML Productionization – MLOps Guide",url:"https://ml-ops.org/"}
        ],
        "mission": "Deploy a trained ML model as a REST API → test with sample inputs."
      },
      {
        "level": 6,
        "title": "MLOps & Cloud Integration",
        "why": "Production ML requires monitoring, scaling, and maintaining models.",
        "learn": [
          "MLOps (CI/CD for ML, monitoring, retraining pipelines)",
          "Cloud ML Platforms (AWS SageMaker, GCP AI Platform, Azure ML)",
          "Model Monitoring & Logging (drift detection, performance metrics)"
        ],
        "resources": [
          {home:"AWS SageMaker Docs",url:"https://docs.aws.amazon.com/sagemaker/"},
          {home:"Kubeflow Docs",url:"https://www.kubeflow.org/"},
          {home:"MLOps with MLflow",url:"https://mlflow.org/docs/latest/index.html"}
        ],
        "mission": "Deploy model to cloud → track metrics → automate retraining on new data."
      },
      {
        "level": 7,
        "title": "Advanced Topics & Specialization",
        "why": "Stand out with specialized ML expertise.",
        "learn": [
          "NLP (BERT, GPT models, Hugging Face Transformers)",
          "Computer Vision (Object Detection, Segmentation)",
          "Reinforcement learning (Q-learning, Policy Gradient)",
          "Graph ML, Time Series Forecasting"
        ],
        "resources": [
          {home:"Hugging Face Transformers",url:"https://huggingface.co/docs/transformers/index"},
          {home:"Deep Reinforcement learning – FreeCodeCamp",url:"https://youtu.be/dh8eRZHgZ14"},
          {home:"Fast.ai Courses",url:"https://course.fast.ai/"}
        ],
        "mission": "Train a transformer-based text classification model → deploy with API."
      },
      {
        "level": 8,
        "title": "Portfolio & Projects",
        "why": "Demonstrate real-world ML skills for hiring.",
        "learn": [
          "Project development",
          "Portfolio building",
          "Production deployment"
        ],
        "resources": [
          {home:"Kaggle Competitions",url:"https://www.kaggle.com/competitions"},
          {home:"GitHub Project Examples",url:"https://github.com/topics/machine-learning-projects"}
        ],
        "mission": "Build 3–5 production-ready ML projects → publish on GitHub with API endpoints + documentation.",
        "projectIdeas": [
          "Image classification / Object detection projects",
          "NLP sentiment analysis / chatbot",
          "Time series forecasting (sales, stock, IoT)",
          "Production ML pipelines (ETL → training → deployment)"
        ]
      }
    ]
  }
,


  aieng : {
    "title": "AI Engineering Roadmap",
    "levels": [
      {
        "level": 1,
        "title": "Foundations of AI",
        "why": "Your base armor: math, programming, and data.",
        "learn": [
          "Mathematics (Linear Algebra, Stats, Calculus)",
          "Python (NumPy, Pandas, Matplotlib)",
          "SQL, Data Structures, Algorithms"
        ],
        "resources": [
          {home:"Mathematics for Machine learning (Book PDF)",url:"https://mml-book.github.io/"},
          {home:"MIT OpenCourseWare – Linear Algebra",url:"https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"},
          {home:"Harvard CS50 (Intro to CS)",url:"https://cs50.harvard.edu/x/"},
          {home:"Kaggle Datasets",url:"https://www.kaggle.com/datasets"}
        ],
        "mission": [
          "50+ LeetCode problems",
          "2 beginner projects (Data Cleaning + Visualization)"
        ]
      },
      {
        "level": 2,
        "title": "Machine learning Core",
        "why": "ML is the engine of AI.",
        "learn": [
          "Regression, Classification, Clustering",
          "Cross-validation, Bias-Variance",
          "Frameworks: Scikit-learn, XGBoost"
        ],
        "resources": [
          {home:"Andrew Ng's ML Course (Coursera)",url:"https://www.coursera.org/learn/machine-learning"},
          {home:"Hands-On Machine learing with Scikit TensorFlow (Book)",url:"https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/"},
          {home:"Scikit-learn Docs",url:"https://scikit-learn.org/stable/"}
        ],
        "mission": [
          "Spam Classifier",
          "Join 1 Kaggle Competition"
        ]
      },
      {
        "level": 3,
        "title": "Deep learning & Neural Networks",
        "why": "Unlock superpowers with neural networks.",
        "learn": [
          "Neural Nets, CNNs, RNNs, Transformers",
          "PyTorch & TensorFlow"
        ],
        "resources": [
          {home:"Deep learning Specialization – Andrew Ng",url:"https://www.coursera.org/specializations/deep-learning"},
          {home:"PyTorch Official Tutorials",url:"https://pytorch.org/tutorials/"},
          {home:"Fast.ai Course",url:"https://course.fast.ai/"}
        ],
        "mission": [
          "Train a CNN on CIFAR-10",
          "Build a text generator (LSTM/Transformer)"
        ]
      },
      {
        "level": 4,
        "title": "Specialized AI Fields",
        "why": "Choose your AI super-domain.",
        "learn": [
          "NLP, Computer Vision, Reinforcement learning, Generative AI"
        ],
        "resources": [
          {home:"Hugging Face Transformers Course",url:"https://huggingface.co/transformers/training"},
          {home:"Stanford CS231n",url:"http://cs231n.stanford.edu/"},
          {home:"OpenAI Gym",url:"https://www.gymlibrary.dev/"},
          {home:"Deeplearning.AI – GANs Specialization",url:"https://www.coursera.org/specializations/generative-adversarial-networks-gans"}
        ],
        "specializations": {
          "NLP": "Hugging Face Transformers Course",
          "Computer Vision": "Stanford CS231n",
          "Reinforcement learning": "OpenAI Gym",
          "Generative AI": "Deeplearning.AI – GANs Specialization"
        },
        "mission": [
          "Pick one specialization → Build 1 real-world project"
        ]
      },
      {
        "level": 5,
        "title": "AI Engineering & MLOps",
        "why": "From models → real-world deployment.",
        "learn": [
          "Model Deployment: Flask, FastAPI, Docker",
          "Cloud: AWS Sagemaker, GCP AI Platform",
          "MLOps: MLflow, Kubeflow"
        ],
        "resources": [
          {home:"MLOps Book (Free PDF)",url:"https://ml-ops.org/"},
          {home:"Full Stack Deep learning Bootcamp",url:"https://fullstackdeeplearning.com/"},
          {home:"AWS Sagemaker Docs",url:"https://docs.aws.amazon.com/sagemaker/"}
        ],
        "mission": [
          "Deploy a model with Flask + Docker",
          "Set up CI/CD pipeline with retraining"
        ]
      },
      {
        "level": 6,
        "title": "Mastery & Real-World Impact",
        "why": "Become an AI warrior solving big problems.",
        "learn": [
          "AI Ethics & Bias",
          "Distributed Training",
          "Research Paper Reading"
        ],
        "resources": [
          {home:"arXiv (AI Research Papers)",url:"https://arxiv.org/"},
          {home:"Stanford CS224n – NLP with Deep learning",url:"http://web.stanford.edu/class/cs224n/"},
          {home:"NeurIPS Conference",url:"https://nips.cc/"}
        ],
        "mission": [
          "Publish AI project on GitHub + Medium",
          "Contribute to open-source AI project",
          "Grab internship/freelance AI role"
        ]
      }
    ]
  }

  
}
;



