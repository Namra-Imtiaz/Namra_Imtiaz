import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, Phone, User, GraduationCap, Code, Briefcase, Award, Book, MapPin, ChevronUp, Palette, Layout, Server, Smartphone, Zap, CheckCircle, Download, Menu, X, ExternalLink } from 'lucide-react';
import picture from '../assets/me.jpeg';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

const MainPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerRef = useRef(null);

  // Progress bar at the top of the page
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const personalInfo = {
    name: 'Namra Imtiaz',
    title: 'MERN Stack Developer & UI/UX Designer',
    email: 'namraimtiaz04@gmail.com',
    phone: '(+92)3131368638',
    linkedin: 'https://www.linkedin.com/in/namra-imtiaz',
    github: 'https://github.com/Namra-Imtiaz',
    location: 'Karachi, Pakistan',
    summary: 'Passionate Frontend Developer with skills in HTML, CSS, JavaScript, and React. Experienced in UI/UX design, creating smooth and user-friendly interfaces. Currently expanding my skills in the MERN stack by building projects and learning Flutter for mobile app development. Always eager to learn, solve problems, and create useful solutions.'
  };

  const educationData = [
    {
      degree: 'Bachelor in Software Engineering',
      institution: 'NED University of Engineering & Technology',
      duration: '10/2022 - Present',
      location: 'Karachi, Pakistan',
      description: 'Currently in my third year, sixth semester of a comprehensive software engineering program, gaining expertise in software development and problem-solving.'},
    {
      degree: 'Pre-Engineering',
      institution: 'Cantt College',
      duration: '01/2020 - 01/2022',
      location: 'Karachi, Pakistan',
      description: 'Completed pre-engineering studies with a focus on mathematics and physics.'
    }
  ];

  const experienceData = [
    {
      title: 'Full Stack Development - Remote Intern',
      company: 'DevelopersHub Corporation',
      duration: '03/2025 - 04/2025',
      description: 'Worked on MERN stack-based development tasks, contributing to real-world projects and enhancing full stack skills through practical experience.'
    },
    {
      title: 'IT Director',
      company: 'IEEE PES NEDUET Society',
      duration: '10/2024 - Present',
      description: 'Guided members in frontend development and organized UI/UX workshops.'
    },
    {
      title: 'IT Member',
      company: 'NSA NEDUET SOCIETY',
      duration: '12/2024 - Present',
      description: 'Working on NSA\'s portal under the IT heads.'
    },
    {
      title: 'C++ Intern',
      company: 'CodSoft',
      duration: '10/2023 - 11/2023',
      description: 'Developed various C++ applications, strengthening problem-solving and programming abilities.'
    }
  ];

  const projectsData = [
    {
      name: 'Mental Wellness App (in progress)',
      description: 'Developing a mental wellness app using Flutter, featuring user authentication, a Monte Carlo decision-based support system, and an AI-powered chatbot. Includes personalized profiles, mood-based music therapy, and guided meditation for a complete self-care experience.',
      technologies: ['flutter', 'AI', 'firebase'],
      github: 'https://github.com/Namra-Imtiaz/mental_wellness_app'
    },
    {
      name: 'SellSphere (in progress)',
      description: 'Developing a scalable e-commerce platform that enables businesses to manage vendors, products, and customers efficiently. Built with Next.js 14, Prisma, and MongoDB, it offers a seamless and feature-rich online marketplace experience.',
      technologies: ['Next.js 14', 'Prisma', 'MongoDB', 'Tailwind CSS'],
      github: '#'
    },
    {
      name: 'ArtisianHub (MERN)',
      description: 'Developed an online marketplace for local artisans with user-friendly profiles, product management, shopping cart functionality, and secure checkout, showcasing full-stack web development skills. The project included a comprehensive SRS, design document, code quality evaluation using SonarQube, and detailed manual testing for functionality and reliability.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Namra-Imtiaz/artisian-hub',
      documents: [
        { name: "Design Document", path: "/documents/DETAILED DESIGN DOCUMENT.pdf" },
        { name: "Code Quality check", path: "/documents/CQcheck_064645.pdf" },
        { name: "Manual Test", path: "/documents/testing.pdf" },
        { name: "SRS", path: "/documents/SRS.pdf" }
      ],
    },
    {
      name: 'Post Submission System',
      description: 'Built and deployed a post submission system using React and Appwrite, hosted on Vercel. Implemented document creation, update, and file upload features.',
      technologies: ['React', 'Appwrite', 'Vercel'],
      github: 'https://github.com/Namra-Imtiaz/appwriteblog'
    },
    {
      name: 'TutorLinknet',
      description: 'Developed an online tutoring platform with user-friendly profiles and registration.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      github: '#'
    },
    {
      name: 'Portfolio and To-Do List',
      description: 'Created a personal portfolio and a to-do list application using React, showcasing skills in component design and state management.',
      technologies: ['React', 'CSS'],
      github: 'https://github.com/Namra-Imtiaz/react_projects/tree/main/10_todocontextlocal'
    },
    {
      name: 'Craftique (Figma)',
      description: 'Designed a craft-focused e-commerce mobile application with an engaging and user-friendly UI/UX.',
      technologies: ['Figma', 'UI/UX Design'],
      github: 'https://www.figma.com/design/jp3CWVBQ5p0mRaE3WTQmgU/HCI-2?node-id=0-1&t=L8LHsLOmupPC0Ssg-1'
    }
  ];

  const skillsData = {
    technical: [
      'HTML', 'CSS', 'JavaScript', 'React', 
      'SQL', 'Python', 'C++', 'Figma','Node.js',
      'Adobe Illustrator'
    ],
    interpersonal: [
      'Teamwork', 'Ability to work under pressure', 
      'Creativity', 'Time Management','Negotiation'
    ]
  };

  const servicesData = [
    {
      icon: <Layout size={24} />,
      title: 'Frontend Development',
      description: 'Building modern and interactive user interfaces using React and other frontend technologies.'
    },
    {
      icon: <Code size={24} />,
      title: 'MERN Basic Development',
      description: 'Learning and developing web applications using the MERN stack.'
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Creating user-friendly and visually appealing designs focused on enhancing user experience.'
    },
    {
      icon: <Code size={24} />,
      title: 'Software Requirement Specification (SRS)',
      description: 'Documenting detailed software requirements to ensure clear development guidelines and project success.'
    }
];




  const certificationsData = [
    {
      title: 'AI and Data Science Bootcamp',
      organization: 'AI Club KI BHAITAK III by AI Club Society',
      duration: '03/2024 - 05/2024',
      description: 'Completed a three-month bootcamp, gaining a basic understanding of AI and Data Science concepts.'
    },
    {
        title: 'Adobe Illustrator',
        organization: 'Next Dimension',
        duration: '03/2023 - 04/2024',
        description: 'Completed a one-month course on Adobe Illustrator, learning essential design principles, vector graphics, and creative techniques for digital illustrations.'
      },
      {
        title: 'Frontend Hackathon',
        organization: 'Society for Promotions and Science,Engineering and Technology Society',
        duration: '6/2024',
        description: 'Participated in frontend Hackathon organized by SENTEC Society.'
      },
  ];



//   const achievementsData = [
//     {
//       title: 'IT Director at IEEE PES NEDUET Society',
//       description: 'Led the IT team and organized successful workshops on frontend development and UI/UX design.'
//     },
//     {
//       title: 'Completed Multiple Client Projects',
//       description: 'Successfully delivered web applications and design projects to clients with positive feedback.'
//     }
//   ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-50"
        style={{ width: progressBarWidth, transformOrigin: "0%" }}
      />

      {/* Navigation */}
      <nav ref={headerRef} className="fixed top-0 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur-sm shadow-lg border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <motion.span 
                className="text-2xl font-bold text-cyan-400 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                N.I
              </motion.span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'services', 'education', 'experience', 'projects', 'skills', 'contact'].map((section) => (
              <motion.a 
                key={section} 
                href={`#${section}`} 
                className={`${activeSection === section ? 'text-cyan-400' : 'text-gray-300'} hover:text-cyan-400 transition-colors capitalize relative`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
                {activeSection === section && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"
                    layoutId="activeSection"
                  />
                )}
              </motion.a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <motion.button 
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden bg-gray-900 border-b border-gray-800"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {['home', 'about', 'services', 'education', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                  <motion.a 
                    key={section} 
                    href={`#${section}`} 
                    className={`${activeSection === section ? 'text-cyan-400' : 'text-gray-300'} hover:text-cyan-400 transition-colors capitalize py-2`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section);
                    }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-cyan-500 text-black p-3 rounded-full shadow-lg z-50 hover:bg-cyan-600 transition-colors"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-cyan-500/10"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                opacity: 0 
              }}
              animate={{ 
                x: [
                  Math.random() * window.innerWidth, 
                  Math.random() * window.innerWidth
                ],
                y: [
                  Math.random() * window.innerHeight, 
                  Math.random() * window.innerHeight
                ],
                opacity: [0, 0.3, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
        
        <AnimatedSection className="text-center px-4 z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative inline-block mb-6"
          >
            <img 
              src={picture}
              alt="Namra Imtiaz" 
              className="mx-auto rounded-full w-48 h-48 object-cover border-4 border-cyan-500"
            />
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-cyan-400/50"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-cyan-400">Namra</span> Imtiaz
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {personalInfo.title}
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-4 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              { icon: <Linkedin size={32} />, url: personalInfo.linkedin, label: "LinkedIn Profile" },
              { icon: <Github size={32} />, url: personalInfo.github, label: "GitHub Profile" },
              { icon: <Mail size={32} />, url: `mailto:${personalInfo.email}`, label: "Email Contact" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                aria-label={social.label}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.a 
            href="/Namra Imtiaz_Resume.pdf" 
            download 
            className="inline-flex items-center bg-cyan-500 text-black px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="mr-2" /> Download CV
          </motion.a>
          
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <motion.div
                className="w-1 h-2 bg-cyan-400 rounded-full mt-2"
                animate={{ opacity: [0, 1, 0], y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </motion.div>
            <p className="text-xs text-cyan-400 mt-2">Scroll Down</p>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="About Me" icon={<User size={24} />} />
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-500 shadow-xl">
              <motion.p 
                className="text-lg text-gray-300 mb-6 leading-relaxed"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {personalInfo.summary}
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: <Mail className="text-cyan-400" size={20} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: <Phone className="text-cyan-400" size={20} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: <MapPin className="text-cyan-400" size={20} />, label: "Location", value: personalInfo.location }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center bg-gray-900/80 p-4 rounded-lg hover:bg-gray-900 transition-all duration-300"
                    variants={fadeInUp}
                    whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                  >
                    <div className="bg-gray-800 p-3 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400">{item.label}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-cyan-400 hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-300">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Services I Offer" icon={<Briefcase size={24} />} />
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {servicesData.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <ServiceCard 
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Education" icon={<GraduationCap size={24} />} />
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700 hidden md:block"></div>
              
              {educationData.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 relative md:ml-12"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ x: 10, boxShadow: "0 10px 30px -15px rgba(0, 231, 255, 0.2)" }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1/2 transform -translate-x-16 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full hidden md:block"></div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-cyan-400">{edu.degree}</h3>
                    <span className="text-gray-400 bg-gray-700 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                      {edu.duration}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center text-gray-300">
                      <Book className="mr-2 text-cyan-400" size={16} />
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-gray-300 mt-1">
                      <MapPin className="mr-2 text-cyan-400" size={16} />
                      {edu.location}
                    </div>
                  </div>
                  <p className="text-gray-400">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Experience" icon={<Briefcase size={24} />} />
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700 hidden md:block"></div>
              
              {experienceData.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 relative md:ml-12"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ x: 10, boxShadow: "0 10px 30px -15px rgba(0, 231, 255, 0.2)" }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1/2 transform -translate-x-16 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full hidden md:block"></div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
                    <span className="text-gray-400 bg-gray-700 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center text-gray-300">
                      <Briefcase className="mr-2 text-cyan-400" size={16} />
                      {exp.company}
                    </div>
                  </div>
                  <p className="text-gray-400">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Projects" icon={<Code size={24} />} />
            <div className="grid md:grid-cols-2 gap-8">
              {projectsData.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                  whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(0, 231, 255, 0.2)" }}
                >
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">{project.name}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-gray-700 text-cyan-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-2 space-y-2 md:space-y-0">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <Github size={18} className="mr-1" /> GitHub
                    </motion.a>
                      
                    {project.documents &&
                      project.documents.map((doc, docIndex) => (
                        <motion.a
                          key={docIndex}
                          href={doc.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors ml-4 first:ml-0"
                          whileHover={{ x: 3 }}
                          download
                        >
                          <Download size={18} className="mr-1" /> {doc.name}
                        </motion.a>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Skills" icon={<Code size={24} />} />
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-6">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skillsData.technical.map((skill, index) => (
                    <motion.span 
                      key={index} 
                      className="bg-gray-700 text-cyan-300 px-4 py-2 rounded-lg flex items-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      <CheckCircle size={16} className="mr-2" /> {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-6">Interpersonal Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skillsData.interpersonal.map((skill, index) => (
                    <motion.span 
                      key={index} 
                      className="bg-gray-700 text-cyan-300 px-4 py-2 rounded-lg flex items-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      <CheckCircle size={16} className="mr-2" /> {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Certifications" icon={<Award size={24} />} />
            <div className="space-y-8">
              {certificationsData.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ x: 10, boxShadow: "0 10px 30px -15px rgba(0, 231, 255, 0.2)" }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-cyan-400">{cert.title}</h3>
                    <span className="text-gray-400 bg-gray-700 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                      {cert.duration}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center text-gray-300">
                      <Award className="mr-2 text-cyan-400" size={16} />
                      {cert.organization}
                    </div>
                  </div>
                  <p className="text-gray-400">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Achievements Section */}
      {/* <section id="achievements" className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Achievements" icon={<Award size={24} />} />
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {achievementsData.map((achievement, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -15px rgba(0, 231, 255, 0.2)" }}
                >
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Contact Me" icon={<Mail size={24} />} />
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Get In Touch</h3>
                <p className="text-gray-300 mb-6">
                  Feel free to reach out to me.
                </p>
                <div className="space-y-6">
                  {[
                    { icon: <Mail className="text-cyan-400" size={20} />, title: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                    { icon: <Phone className="text-cyan-400" size={20} />, title: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                    { icon: <MapPin className="text-cyan-400" size={20} />, title: "Location", value: personalInfo.location }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="bg-gray-800 p-3 rounded-full mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400">{item.title}</h4>
                        {item.href ? (
                          <a href={item.href} className="text-cyan-400 hover:underline">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-gray-300">{item.value}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <form action="https://formsubmit.co/namraimtiaz04@gmail.com" method="POST" className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <input type="hidden" name="_captcha" value="false" />
                  <motion.button 
                    type="submit" 
                    className="w-full bg-cyan-500 text-black py-3 rounded-lg hover:bg-cyan-600 transition-colors font-bold"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(6, 182, 212, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.p 
            className="text-gray-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            &copy; 2024 {personalInfo.name}. All Rights Reserved.
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {[
              { icon: <Linkedin size={24} />, url: personalInfo.linkedin, label: "LinkedIn Profile" },
              { icon: <Github size={24} />, url: personalInfo.github, label: "GitHub Profile" },
              { icon: <Mail size={24} />, url: `mailto:${personalInfo.email}`, label: "Email Contact" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                aria-label={social.label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;