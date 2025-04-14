// Personal Information
export const personalInfo = {
  name: "Aditya Shahapure",
  role: "Computer Scientist",
  description:
    "A data-driven problem solver with experience in software engineering and data science. Having graduated recently with an MS in Computer Science from Indiana University, I'm passionate about creating innovative solutions that transform complex challenges into impactful technology.",
  email: "adityashahapureusa@gmail.com",
  availability: "Available for work",
  socialLinks: {
    github: "https://github.com/adityaSS13",
    linkedin: "https://www.linkedin.com/in/aditya-s-shahapure/",
    email: "mailto:adityashahapureusa@gmail.com",
  },
};

// Skills categorized by type
export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "SiPython" },
      { name: "Java", icon: "FaJava" },
      { name: "SQL", icon: "SiPostgresql" },
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss3" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "C++", icon: "SiCplusplus" },
    ],
  },

  {
    title: "IDEs / Software Technologies",
    skills: [
      { name: "VS-Code", icon: "FaCode" },
      { name: "IntelliJ", icon: "SiIntellijidea" },
      { name: "Colab", icon: "SiGooglecolab" },
      { name: "Kaggle", icon: "SiKaggle" },
      { name: "Jupyter", icon: "SiJupyter" },
      { name: "Tableau", icon: "SiTableau" },
      { name: "PowerBI", icon: "FaChartBar" },
      { name: "Excel", icon: "FaFileExcel" },
      { name: "Git", icon: "SiGit" },
      { name: "Github", icon: "SiGithub" },
      { name: "Docker", icon: "SiDocker" },
      { name: "AWS", icon: "FaCloud" },
      { name: "Figma", icon: "SiFigma" },
      { name: "Jira", icon: "SiJira" },
    ],
  },
  {
    title: "Libraries / Frameworks",
    skills: [
      { name: "TensorFlow", icon: "SiTensorflow" },
      { name: "Sklearn", icon: "SiScikitlearn" },
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
      { name: "Flask", icon: "SiFlask" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "Oracle DB", icon: "SiOracle" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Firebase Firestore", icon: "SiFirebase" },
    ],
  },
];

// Experience
export const experiences = [
  {
    title: "Research Data Scientist",
    company: "Project-990",
    period: "Aug 2024 - Dec 2024",
    description:
      "Leveraged advanced NLP techniques to classify 270,000+ nonprofit mission statements using RoBERTa and Zephyr LLM. Optimized processing with HPC cluster computing, reducing classification time by 12 hours and manual effort by 60% through innovative model implementation.",
    technologies: ["NLP", "RoBERTa", "Zephyr LLM", "HPC"],
    color: "primary",
  },
  {
    title: "Graduate Teaching Assistant",
    company: "IU Luddy School of Informatics & CS",
    period: "Aug 2024 - Dec 2024",
    description:
      "Facilitated JavaScript learning for 35 students through hands-on coding activities and personalized office hours, enhancing their technical proficiency and problem-solving skills in web development.",
    technologies: ["JavaScript", "Web Development", "Teaching"],
    color: "primary",
  },
  {
    title: "Graduate Teaching Assistant",
    company: "IU O'Neill School of Public & Environmental Affairs",
    period: "Aug 2024 - Dec 2024",
    description:
      "Guided 32 public affairs students in mastering technical tools including Excel, Tableau, GenAI, and web development, bridging the gap between technology and public policy applications.",
    technologies: ["Excel", "Tableau", "GenAI", "Web Development"],
    color: "primary",
  },
  {
    title: "Software Development Engineer Intern",
    company: "Soloist",
    period: "June 2024 - Dec 2024",
    description:
      "Developed a music collaboration iOS app using React Native, implementing user-centric features and database functionality. Established code review processes and CI/CD pipelines that streamlined development in an Agile environment.",
    technologies: ["React Native", "iOS", "CI/CD", "Agile"],
    color: "primary",
  },
  {
    title: "Graduate Teaching Assistant",
    company: "IU School of Public Health",
    period: "Aug 2023 - June 2024",
    description:
      "Supported multiple public health courses through administrative assistance, student mentoring, and academic assessment, helping students navigate complex health concepts and course requirements.",
    technologies: ["Mentoring", "Assessment", "Public Health"],
    color: "primary",
  },
  {
    title: "Software Engineer",
    company: "Vodafone Intelligent Solutions",
    period: "Aug 2020 - April 2024",
    description:
      "Managed enterprise Java systems processing 10K+ daily orders while maintaining 12 servers for Vodafone-Germany. Resolved technical incidents using SQL and Linux tools, optimizing change management processes and reducing deployment time by 35%.",
    technologies: ["Java", "SQL", "Linux", "Enterprise Systems"],
    color: "primary",
  },
];

// Projects
export const projects = [
  {
    title: "BookInTime",
    description:
      "Developed a microservices-based movie booking platform deployed on AWS EKS, focusing on authentication UI and responsive design using ReactJS and CSS. Contributed to a scalable architecture utilizing Kubernetes for orchestration, MongoDB for data persistence, and RabbitMQ for asynchronous notifications. Implemented features like ticket booking, search functionality, and profile management, interfacing with containerized backend services through RESTful APIs.",
    technologies: ["React", "CSS", "MongoDB", "AWS"],
    githubUrl: "https://github.com/adityaSS13/BookInTime",
    color: "primary",
  },
  {
    title: "Cloud-Enhanced Analysis of Video-Game Reviews",
    description:
      "Built a Python Flask web app with Jinja2 templating to provide purchase recommendations for PS4 games via BERT-based sentiment analysis of Metacritic reviews. Designed an intuitive frontend and integrated web scraping to extract game review data, enabling real-time sentiment analysis with NLP techniques. Deployed the application to Microsoft Azure using Git for seamless accessibility.",
    technologies: ["Flask", "Python", "BERT", "Azure"],
    githubUrl:
      "https://github.com/adityaSS13/Cloud-Enhanced-Analysis-of-Video-Game-reviews",
    color: "primary",
  },
  {
    title: "Association Rule Mining",
    description:
      "Programmed a system to create meaningful association rules by mining Emergency Calls data, helping 911 dispatchers anticipate emergency types. Implemented the Apriori Algorithm in Python to interpret complex associations and enhanced the program using RDD-based FPGrowth with PySpark for improved efficiency.",
    technologies: ["Python", "PySpark", "Apriori Algo", "FPGrowth"],
    githubUrl: "https://github.com/adityaSS13/Association-Rules-Mining",
    color: "primary",
  },
];

// Education
export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Indiana University Bloomington",
    period: "2022 - 2024",
    description: "GPA: 3.9/4.0",
  },
  {
    degree: "Bachelor of Engineering in Electronics & Telecommunications",
    institution: "Pune University",
    period: "2016 - 2020",
    description: "GPA: 8.78/10.0",
  },
];

// Achievements
export const achievements = [
  {
    title: "First Prize, University Hackathon",
    organization: "Indiana University",
    year: "2024",
    description:
      "Led a team of 4 to develop an award-winning Startup Decision Support System that analyzes key KPIs to detect business anomalies and suggest targeted improvements for growth.",
  },
  {
    title: "Runner-up, Grant Thornton Case Study Competition",
    organization: "Grant Thornton",
    year: "2023",
    description:
      "Developed and presented a comprehensive Change Management strategy to help businesses navigate AI integration while effectively mitigating employee unrest.",
  },
  {
    title: "'Star Employee' Recognition",
    organization: "Vodafone Intelligent Solutions",
    year: "2021",
    description:
      "Recognized for exceptional ownership skills and providing critical technical support during high-pressure situations.",
  },
];

// Navigation Links
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];
