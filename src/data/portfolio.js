export const personalInfo = {
  name: 'Namra Imtiaz',
  title: 'Software Engineer',
  tagline: 'Full-stack engineer building **multi-tenant SaaS**, **cloud-backed products** and **AI-powered systems**.',
  email: 'namraimtiaz04@gmail.com',
  phone: '+92 313 1368638',
  linkedin: 'https://www.linkedin.com/in/namra-imtiaz-64ba2325a/',
  github: 'https://github.com/Namra-Imtiaz',
  location: 'Karachi, Sindh, Pakistan',
  summary:
    'Software Engineer with **full-stack experience** building **SaaS-based enterprise products**. I am comfortable **owning features end to end**, from backend APIs to production-facing UI. Hands-on with **cloud architecture and deployment**, and I use **AI tools** to speed up development and problem-solving. Quick to adapt to new tools and platforms.',
};

export const stats = [
  { value: '3', label: 'Roles & internships' },
  { value: '7', label: 'Projects built', note: '+1 in progress' },
  { value: '2', label: 'Research contributions' },
];

export const experienceData = [
  {
    title: 'Full Stack Developer (Hybrid)',
    company: 'EdgeFirm',
    duration: '03/2026 - Present',
    current: true,
    tech: ['NestJS', 'Next.js', 'React', 'Prisma', 'PostgreSQL', 'Azure', 'Cloudflare'],
    points: [
      'Built a **multi-tenant SaaS platform** and **internal admin portal** supporting multiple organizations on a shared platform.',
      'Implemented **tenant isolation**, organization onboarding and user management to keep customer data securely separated.',
      'Developed **authentication** and **role-based access control (RBAC)** so users only reach authorized features and resources.',
      'Built integrations across **Microsoft Azure**, **Power Platform** and **Microsoft Purview**, with **Cloudflare** for security and performance.',
      'Improved reliability through **error handling**, **automated testing**, **logging** and **CI/CD** pipeline improvements.',
      'Worked directly with **clients** to gather requirements, refine solutions and plan **phased releases**.',
    ],
  },
  {
    title: 'MERN Stack Developer Intern',
    company: '10Pearls Pakistan',
    duration: '09/2025 - 11/2025',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    points: [
      'Built **full CRUD functionality** for creating, editing and organizing notes, backed by **MongoDB** and a **RESTful API**.',
      'Implemented **real-time search** so users find notes as they type.',
      'Added **tagging and pinning** to help users organize and prioritize frequently used notes.',
    ],
  },
  {
    title: 'Data Analytics and Web Developer Intern',
    company: 'Changan Pakistan',
    duration: '07/2025 - 08/2025',
    tech: ['Dashboards', 'Web modules', 'Analytics'],
    points: [
      'Increased data-driven decision-making by **80%** by building **dashboards** that visualize key business metrics.',
      'Developed web modules for a centralized **Dealership Management System**.',
      'Improved **tracking and reporting** for warranty claims and dealership performance.',
    ],
  },
];

export const educationData = [
  {
    degree: 'Bachelor in Software Engineering',
    institution: 'NED University of Engineering and Technology',
    duration: '10/2022 - 09/2026',
    location: 'Karachi, Pakistan',
  },
  {
    degree: 'Pre-Engineering',
    institution: 'Cantt College',
    duration: '01/2020 - 01/2022',
    location: 'Karachi, Pakistan',
  },
];

// category: 'ai' | 'web' | 'mobile'
export const projectsData = [
  {
    name: 'Multi-Tenant SaaS Platform (EdgeFirm)',
    category: 'web',
    featured: true,
    status: 'In progress',
    description:
      '**Multi-tenant SaaS platform** and **internal admin portal** serving multiple organizations on a shared platform, built at EdgeFirm. Covers **tenant isolation**, organization onboarding, user management, authentication with **role-based access control**, and integrations with **Microsoft Azure, Power Platform and Microsoft Purview**, secured with Cloudflare. The admin portal handles customer management, platform monitoring and support operations. Proprietary client work, so the source is private.',
    technologies: ['NestJS', 'Next.js', 'React', 'Prisma', 'PostgreSQL', 'Azure', 'Cloudflare'],
    links: [],
  },
  {
    name: 'Water Leakage Detection (FYP)',
    category: 'ai',
    featured: true,
    description:
      'End-to-end **IoT + AI system** for **real-time water pipe leak detection**: an ESP32 acoustic sensor node feeding a **CNN classifier** (teacher-student knowledge distillation, INT8 TFLite for edge), **field-tested at a live pumping station**. I built the full-stack layer: a **Flask REST API** for ingestion and inference, and a **React dashboard** for live leak status, alerts and historical analytics.',
    technologies: ['ESP32', 'TensorFlow / TFLite', 'Flask', 'React', 'Docker'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Namra-Imtiaz/Water_leakage_detection', type: 'github' },
      { label: 'API (Hugging Face)', href: 'https://huggingface.co/spaces/namra04/water-leakage-api', type: 'live' },
      { label: 'Notebook', href: 'https://colab.research.google.com/drive/1ueSPGD22jz9QLXCTF0bTp82v0jinXqOV', type: 'notebook' },
    ],
  },
  {
    name: 'FoodInn',
    category: 'web',
    featured: true,
    description:
      'Full-stack **MERN food delivery platform** engineered around **12 GoF design patterns**: Singleton (API), Builder (checkout), Factory (navigation), Observer (tracking), Strategy (payments) and MVC + Chain of Responsibility (backend). **Four role-based portals** with JWT/RBAC, **stress-tested for 10K users**.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Design Patterns'],
    links: [{ label: 'GitHub', href: 'https://github.com/Namra-Imtiaz/Foodinn', type: 'github' }],
  },
  {
    name: 'NotesHub',
    category: 'web',
    description:
      'Notes app built during my 10Pearls internship: **full CRUD**, **real-time search**, **tagging and pinning** on top of a MongoDB database and RESTful API.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    links: [{ label: 'GitHub', href: 'https://github.com/Namra-Imtiaz/namra-mern-10pshine/tree/develop', type: 'github' }],
  },
  {
    name: 'Brain Tumor Detection',
    category: 'ai',
    description:
      '**Computer vision** system for **brain tumor detection from MRI** using preprocessing, feature extraction and a **Random Forest** model. Achieved **86% accuracy**, enabling faster diagnosis.',
    technologies: ['Python', 'OpenCV', 'scikit-learn', 'Random Forest'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Namra-Imtiaz/Brain_tumor_detection', type: 'github' },
      { label: 'Colab', href: 'https://colab.research.google.com/drive/1qLUNIgeCgo_e21ILXplIFFql6OzQ8333?usp=sharing', type: 'notebook' },
    ],
  },
  {
    name: 'Mental Wellness App',
    category: 'mobile',
    description:
      '**Flutter + Firebase** app with authentication, **Monte Carlo decision-based support** and an **AI-powered chatbot**. Includes mood-based music, guided meditations and personalized profiles to promote self-care.',
    technologies: ['Flutter', 'Firebase', 'AI Chatbot'],
    links: [{ label: 'GitHub', href: 'https://github.com/Namra-Imtiaz/mental_wellness_app', type: 'github' }],
  },
  {
    name: 'ArtisanHub',
    category: 'web',
    description:
      '**MERN artisan marketplace** with product management, cart and checkout flows. Shipped with a full **SRS**, design document, **SonarQube** code-quality report and manual test documentation.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'SonarQube'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Namra-Imtiaz/artisian-hub', type: 'github' },
      { label: 'Design Doc', href: '/documents/DETAILED DESIGN DOCUMENT.pdf', type: 'doc' },
      { label: 'Code Quality', href: '/documents/CQcheck_064645.pdf', type: 'doc' },
      { label: 'Test Report', href: '/documents/Testing.pdf', type: 'doc' },
      { label: 'SRS', href: '/documents/SRS.pdf', type: 'doc' },
    ],
  },
  {
    name: 'StreamSphere',
    category: 'web',
    description:
      '**Node.js media management system** with robust handling of **file, image and video** processing workflows.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT'],
    links: [{ label: 'GitHub', href: 'https://github.com/Namra-Imtiaz/nodejs_backend_project', type: 'github' }],
  },
];

export const researchData = [
  {
    title: 'Implementing a Semantic Proxy Layer for Pre-Generation Analysis of Retrieval Contexts',
    summary:
      'Contributed to designing and validating a **guardrail architecture (Phi-3-mini)** that defends **RAG systems against indirect prompt injection**, reducing Attack Success Rate to a **low single-digit rate** with minimal latency overhead.',
    tags: ['RAG Security', 'Prompt Injection', 'Phi-3-mini'],
  },
  {
    title: 'Dynamic and Deterministic Scheduling in LLMs and VLMs',
    summary:
      'Contributed to a survey on **scheduling challenges in LLM/VLM serving** covering dynamic batching, memory management, tokenization, parallelism and edge deployment, synthesizing **80+ academic references**.',
    tags: ['LLM Serving', 'Scheduling', 'Edge Deployment'],
  },
  {
    title: 'Human Computer Interaction in Device Development',
    summary: 'Research paper exploring HCI principles in the design and development of devices.',
    tags: ['HCI'],
  },
];

export const skillsData = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'C++', 'Dart'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Flutter'] },
  { group: 'Backend', items: ['NestJS', 'Node.js', 'Express', 'Flask', 'Prisma', 'REST APIs', 'JWT Auth', 'RBAC', 'Multi-tenancy'] },
  { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Firebase'] },
  { group: 'Cloud & DevOps', items: ['Microsoft Azure', 'CI/CD (Azure)', 'Docker', 'Cloudflare', 'Vercel'] },
  { group: 'Microsoft Services', items: ['Power Platform', 'Power Apps', 'Microsoft Purview'] },
  { group: 'AI / ML', items: ['TensorFlow / TFLite', 'CNNs', 'Knowledge Distillation', 'Random Forest', 'OpenCV', 'RAG'] },
  { group: 'Practices', items: ['Design Patterns (GoF)', 'Automated Testing', 'Logging & Error Handling', 'Agile'] },
];

export const leadershipData = [
  { role: 'IT Director', org: 'IEEE PES NEDUET Society', detail: 'Led frontend training for members of IEEE PES.' },
  { role: 'IT Member', org: 'NSA NEDUET Society', detail: 'Led a GitHub session at the National Incubation Center (NIC).' },
];

export const certificationsData = [
  { title: 'AI & Data Science Bootcamp', org: 'AI Club Baithak III, AI Club Society' },
  { title: 'Intermediate SQL', org: 'DataCamp' },
];

export const hackathonsData = ['SQL Saga Competition', 'Mental Wellness Hackathon', 'PyCon', 'Web Dev Hackathon'];
