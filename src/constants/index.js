export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
]

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    category: "ML & AI",
    items: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Machine Learning", "Deep Learning"],
  },
  {
    category: "Web & Backend",
    items: ["HTML", "CSS", "React", "Flask", "MySQL"],
  },
  {
    category: "Tools & Automation",
    items: ["Git", "GitHub", "VS Code", "Arduino", "Raspberry Pi"],
  },
]

export const projects = [
  {
    name: "TB Detection Using Deep Learning",
    description:
      "A deep learning-based system to detect tuberculosis from chest X-ray images using CNNs. Includes image preprocessing, model training, and evaluation to improve diagnostic accuracy and automate TB screening.",
    tags: ["Python", "Deep Learning", "CNN", "Medical AI"],
    github: "https://github.com/Sumeet8767",
    live: "https://github.com/Sumeet8767/TB_Detection_Deep_learing",
  },
  {
    name: "Brain-Computer Interface System",
    description:
      "Real-time BCI system for brain signal processing and classification using machine learning. Integrated EEG sensors with Raspberry Pi and Arduino for real-time device control and signal interpretation.",
    tags: ["Python", "ML", "EEG", "Raspberry Pi", "Arduino"],
    github: "https://github.com/Sumeet8767",
    live: "https://github.com/Sumeet8767/BCI-Brain-Health-Pro",
  },
]

export const education = [
  {
    degree: "B.Tech — CSE (AI in Analytics)",
    institution: "MIT-ADT University",
    duration: "2022 – Present",
    grade: "CGPA: 7.40",
  },
  {
    degree: "XII (HSC)",
    institution: "MAEER's MIT Junior College",
    duration: "2022",
    grade: "77.5%",
  },
  {
    degree: "X (SSC)",
    institution: "Angel High School & Junior College",
    duration: "2020",
    grade: "88.90%",
  },
]

export const experience = [
  {
    company: "IS360 Technologies",
    role: "Inter-College Intern",
    duration: "Oct 2024 – May 2026",
    points: [
      "Built a real-time Brain-Computer Interface (BCI) system using EEG data and machine learning.",
      "Implemented signal processing and classification for brainwave analysis.",
      "Integrated the system with hardware devices like Raspberry Pi and Arduino.",
    ],
  },
]

export const certifications = [
  "Data Visualization in R — Johns Hopkins University (Coursera)",
  "Introduction to Machine Learning — IBM (Coursera)",
  "Artificial Intelligence – Information Technology Specialist"
]