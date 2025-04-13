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
    title: "Research Data Scientist",
    company: "Project-990",
    period: "Aug 2024 - Dec 2024",
    description: "Leveraged advanced NLP techniques to classify 270,000+ nonprofit mission statements using RoBERTa and Zephyr LLM. Optimized processing with HPC cluster computing, reducing classification time by 12 hours and manual effort by 60% through innovative model implementation.",
    technologies: ["NLP", "RoBERTa", "Zephyr LLM", "HPC"],
    color: "primary"
  },
  {
    title: "Graduate Teaching Assistant",
    company: "IU Luddy School of Informatics & CS",
    period: "Aug 2024 - Dec 2024",
    description: "Facilitated JavaScript learning for 35 students through hands-on coding activities and personalized office hours, enhancing their technical proficiency and problem-solving skills in web development.",
    technologies: ["JavaScript", "Web Development", "Teaching"],
    color: "secondary"
  },
  {
    title: "Graduate Teaching Assistant",
    company: "IU O'Neill School of Public & Environmental Affairs",
    period: "Aug 2024 - Dec 2024",
    description: "Guided 32 public affairs students in mastering technical tools including Excel, Tableau, GenAI, and web development, bridging the gap between technology and public policy applications.",
    technologies: ["Excel", "Tableau", "GenAI", "Web Development"],
    color: "info"
  },
  {
    title: "Software Development Engineer Intern",
    company: "Soloist",
    period: "June 2024 - Dec 2024",
    description: "Developed a music collaboration iOS app using React Native, implementing user-centric features and database functionality. Established code review processes and CI/CD pipelines that streamlined development in an Agile environment.",
    technologies: ["React Native", "iOS", "CI/CD", "Agile"],
    color: "success"
  },
  {
    title: "Graduate Teaching Assistant",
    company: "IU School of Public Health",
    period: "August 2023 - June 2024",
    description: "Supported multiple public health courses through administrative assistance, student mentoring, and academic assessment, helping students navigate complex health concepts and course requirements.",
    technologies: ["Mentoring", "Assessment", "Public Health"],
    color: "primary"
  },
  {
    title: "Software Engineer",
    company: "Vodafone Intelligent Solutions",
    period: "August 2020 - April 2024",
    description: "Managed enterprise Java systems processing 10K+ daily orders while maintaining 12 servers for Vodafone-Germany. Resolved technical incidents using SQL and Linux tools, optimizing change management processes and reducing deployment time by 35%.",
    technologies: ["Java", "SQL", "Linux", "Enterprise Systems"],
    color: "secondary"
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
    description: "GPA: 3.9/4.0"
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Mumbai University",
    period: "2015 - 2019",
    description: "GPA: 8.78/10.0"
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
