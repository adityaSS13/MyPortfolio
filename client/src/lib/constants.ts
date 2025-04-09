// Personal Information
export const personalInfo = {
  name: "Aditya Shahapure",
  role: "Computer Scientist",
  description: "A data-driven problem solver with expertise in software engineering and data science. Recently graduated with an MS in Computer Science from Indiana University, I'm passionate about creating innovative solutions that transform complex challenges into impactful technology.",
  email: "adishahapure@gmail.com",
  availability: "Available for work",
  socialLinks: {
    github: "https://github.com/aditya-shahapure",
    linkedin: "https://linkedin.com/in/adishahapure",
    twitter: "https://twitter.com",
    email: "mailto:adishahapure@gmail.com"
  }
};

// Skills categorized by type
export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "SiPython" },
      { name: "Java", icon: "SiJava" },
      { name: "SQL", icon: "SiPostgresql" },
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss3" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "C++", icon: "SiCplusplus" }
    ]
  },
  {
    title: "IDEs / Software Technologies",
    skills: [
      { name: "VS-Code", icon: "SiVisualstudiocode" },
      { name: "IntelliJ", icon: "SiIntellijidea" },
      { name: "Colab", icon: "SiGooglecolab" },
      { name: "Kaggle", icon: "SiKaggle" },
      { name: "Jupyter", icon: "SiJupyter" },
      { name: "Tableau", icon: "SiTableau" },
      { name: "PowerBI", icon: "SiPowerbi" },
      { name: "Excel", icon: "SiMicrosoftexcel" },
      { name: "Git", icon: "SiGit" },
      { name: "Github", icon: "SiGithub" },
      { name: "Docker", icon: "SiDocker" },
      { name: "AWS", icon: "SiAmazonaws" },
      { name: "Figma", icon: "SiFigma" },
      { name: "Jira", icon: "SiJira" }
    ]
  },
  {
    title: "Libraries / Frameworks",
    skills: [
      { name: "TensorFlow", icon: "SiTensorflow" },
      { name: "Sklearn", icon: "SiScikit" },
      { name: "Pandas", icon: "SiPandas" },
      { name: "NumPy", icon: "SiNumpy" },
      { name: "PyTorch", icon: "SiPytorch" },
      { name: "ReactJS", icon: "SiReact" },
      { name: "React-Native", icon: "SiReact" },
      { name: "Angular", icon: "SiAngular" },
      { name: "NextJS", icon: "SiNextdotjs" },
      { name: "TanStack-Query", icon: "SiReactquery" },
      { name: "NodeJS", icon: "SiNodedotjs" },
      { name: "Tailwind", icon: "SiTailwindcss" },
      { name: "Flask", icon: "SiFlask" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "Oracle DB", icon: "SiOracle" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Firebase Firestore", icon: "SiFirebase" }
    ]
  }
];

// Experience
export const experiences = [
  {
    title: "Graduate Research Assistant",
    company: "Indiana University Bloomington",
    period: "May 2023 - May 2024",
    description: "Developed REST API for custom Generative AI LLM models in Python and Flask, enabling user requests for AI-based entity analysis. Orchestrated cloud solutions on AWS EC2 with Docker for over 500 simultaneous requests from collaborative research projects.",
    technologies: ["Python", "Flask", "AWS", "Docker", "LLM"],
    color: "primary"
  },
  {
    title: "Software Engineer",
    company: "Vodafone Intelligent Solutions",
    period: "July 2019 - July 2022",
    description: "Led development of a MEAN stack Customer Experience Management App that improved customer satisfaction metrics by 30% through interactive dashboards and data-driven insights. Engineered Python data pipelines to provide seamless data access for different business units across 30+ countries.",
    technologies: ["MEAN Stack", "Python", "ETL", "Analytics"],
    color: "secondary"
  },
  {
    title: "Data Science Intern",
    company: "Quantiphi Inc.",
    period: "Feb 2019 - June 2019",
    description: "Created Python deep learning models for speech analytics and sentiment analysis. Specialized in implementing data transformation pipelines and visualization dashboards for clients in the healthcare sector.",
    technologies: ["Python", "TensorFlow", "NLP", "Data Analysis"],
    color: "info"
  }
];

// Projects
export const projects = [
  {
    title: "InvestiGATE",
    description: "AI-assisted startup evaluation platform using LLMs to process startup financial data and provide investment readiness scores.",
    technologies: ["Python", "Flask", "LangChain", "OpenAI"],
    githubUrl: "https://github.com/aditya-shahapure/InvestiGATE",
    color: "primary"
  },
  {
    title: "SenTree",
    description: "Developed a machine learning model to predict tree growth and health based on environmental data, helping reforestation efforts in areas affected by deforestation.",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/aditya-shahapure/SenTree",
    color: "secondary"
  },
  {
    title: "TrendCast",
    description: "Implemented a time-series analysis system that forecasts market trends and provides trading signals with custom algorithmic strategies.",
    technologies: ["Python", "PyTorch", "Plotly", "NumPy"],
    githubUrl: "https://github.com/aditya-shahapure/TrendCast",
    color: "info"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and Framer Motion, featuring dark theme and animated UI components.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/aditya-shahapure/portfolio",
    color: "success"
  }
];

// Education
export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Indiana University Bloomington",
    period: "2022 - 2024",
    description: "Specialized in Data Science, Machine Learning, and Software Engineering. Completed coursework in Advanced AI, Cloud Computing, and Database Systems. Achieved a GPA of 3.9/4.0."
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Mumbai University",
    period: "2015 - 2019",
    description: "Focused on algorithms, data structures, and software development. Participated in multiple hackathons and coding competitions. Graduated with First Class Honors."
  }
];

// Achievements
export const achievements = [
  {
    title: "First Prize, University Hackathon",
    organization: "Indiana University",
    year: "2024",
    description: "Led a team of 4 to develop an award-winning Startup Decision Support System that analyzes key KPIs to detect business anomalies and suggest targeted improvements for growth."
  },
  {
    title: "Runner-up, Grant Thornton Case Study Competition",
    organization: "Grant Thornton",
    year: "2023",
    description: "Developed and presented a comprehensive Change Management strategy to help businesses navigate AI integration while effectively mitigating employee unrest."
  },
  {
    title: "'Star Employee' Recognition",
    organization: "Vodafone Intelligent Solutions",
    year: "2021",
    description: "Recognized for exceptional ownership skills and providing critical technical support during high-pressure situations."
  }
];

// Navigation Links
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];
