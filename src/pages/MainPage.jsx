import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Linkedin, Github, Mail, Phone, User, GraduationCap, Code, Briefcase, Award, MapPin,
  ChevronUp, Menu, X, ExternalLink, FlaskConical, Users, Globe, FileText, BookOpen, Database,
} from 'lucide-react';
import picture from '../assets/me.jpeg';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import CopyButton from '../components/CopyButton';
import RichText from '../components/RichText';
import {
  personalInfo, stats, experienceData, educationData, projectsData, researchData,
  skillsData, leadershipData, certificationsData, hackathonsData,
} from '../data/portfolio';

const NAV = ['home', 'about', 'experience', 'projects', 'research', 'skills', 'education', 'contact'];

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI / IoT' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
];

const LINK_ICONS = { github: Github, live: Globe, notebook: BookOpen, drive: Database, doc: FileText };

const socials = [
  { icon: Linkedin, url: personalInfo.linkedin, label: 'LinkedIn Profile' },
  { icon: Github, url: personalInfo.github, label: 'GitHub Profile' },
];

const card = 'bg-bg rounded-xl border border-line hover:shadow-md transition duration-200';
const chip = 'bg-accent-soft text-muted border border-line px-3 py-1 rounded-md text-xs font-medium';

const MainPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const { scrollYProgress } = useScroll();
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      const probe = window.scrollY + 120;
      for (const id of NAV) {
        const el = document.getElementById(id);
        if (el && probe >= el.offsetTop && probe < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const visibleProjects = projectsData.filter((p) => filter === 'all' || p.category === filter);

  const navLinks = (extra = '') =>
    NAV.map((id) => (
      <a
        key={id}
        href={`#${id}`}
        onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
        className={`${activeSection === id ? 'text-accent' : 'text-muted'} hover:underline transition-colors capitalize ${extra}`}
      >
        {id}
      </a>
    ));

  return (
    <div className="bg-bg text-ink min-h-screen font-sans">
      <motion.div className="fixed top-0 left-0 h-0.5 bg-accent z-50" style={{ width: progressBarWidth }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-bg/90 backdrop-blur border-b border-line">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-ink">N.I</Link>
          <div className="hidden md:flex space-x-6 text-sm">{navLinks()}</div>
          <button
            className="md:hidden text-muted"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-bg border-b border-line overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">{navLinks('py-1')}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-accent text-on-accent p-3 rounded-full shadow-lg z-50 hover:opacity-90 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Home */}
      <section id="home" className="min-h-[90vh] flex items-center justify-center pt-16 bg-bg relative">
        <AnimatedSection className="text-center px-4 z-10 max-w-3xl">
          <div className="relative inline-block mb-6">
            <img src={picture} alt="Namra Imtiaz" className="mx-auto rounded-full w-44 h-44 object-cover ring-4 ring-accent-soft" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
            Namra Imtiaz
          </h1>
          <p className="text-xl md:text-2xl text-muted font-medium mb-3">{personalInfo.title}</p>
          <p className="text-muted mb-8"><RichText text={personalInfo.tagline} /></p>

          <div className="flex justify-center items-center gap-5 mb-8 flex-wrap">
            {socials.map(({ icon: Icon, url, label }) => (
              <a key={label} href={url} {...(url.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })} aria-label={label}
                className="text-ink hover:text-muted transition">
                <Icon size={30} />
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              className="inline-flex items-center border border-line text-ink px-6 py-3 rounded-lg font-semibold hover:bg-accent-soft transition-colors">
              View Projects
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-surface border-y border-line">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="About Me" eyebrow="About" />
            <div className="grid lg:grid-cols-5 gap-12">
              <p className="lg:col-span-3 text-lg text-muted leading-8"><RichText text={personalInfo.summary} /></p>
              <ul className="lg:col-span-2 space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
                  { icon: MapPin, label: 'Location', value: personalInfo.location },
                ].map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <Icon className="text-accent mt-1 shrink-0" size={20} />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        {href
                          ? <a href={href} className="text-ink font-medium hover:text-accent break-all">{value}</a>
                          : <span className="text-ink font-medium">{value}</span>}
                        {href && <CopyButton text={value} label={label} />}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-3 mt-14 pt-10 border-t border-line gap-y-8">
              {stats.map((s, i) => (
                <div key={s.label} className={`px-4 ${i > 0 ? 'sm:border-l sm:border-line' : 'sm:pl-0'}`}>
                  <dd className="text-4xl font-bold text-ink">{s.value}</dd>
                  <dt className="text-base text-ink mt-1">{s.label}</dt>
                  {s.note && <dd className="text-sm font-semibold text-accent mt-0.5">{s.note}</dd>}
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Experience" eyebrow="Career" />
            <div className="space-y-8 relative">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-line hidden md:block" />
              {experienceData.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  className={`${card} p-6 relative md:ml-12`}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="absolute top-8 -left-12 w-3.5 h-3.5 bg-line rounded-full hidden md:block ring-4 ring-bg" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1 gap-2">
                    <h3 className="text-xl font-bold text-ink">{exp.title}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full w-fit ${exp.current ? 'bg-accent-soft text-ink font-semibold border border-line' : 'bg-surface text-muted border border-line'}`}>
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-ink text-lg font-semibold mb-4 flex items-center"><Briefcase className="mr-2 text-accent" size={18} />{exp.company}</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-muted mb-4">
                    {exp.points.map((p) => <li key={p}><RichText text={p} /></li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2">{exp.tech.map((t) => <span key={t} className={chip}>{t}</span>)}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Projects" eyebrow="Work" />
            <div className="flex flex-wrap gap-2 mb-8">
              {FILTERS.map((f) => (
                <button key={f.id} onClick={() => setFilter(f.id)}
                  className={`px-4 py-1.5 rounded-md text-sm transition-colors ${filter === f.id ? 'bg-accent text-on-accent font-semibold' : 'bg-surface text-muted border border-line hover:text-accent'}`}>
                  {f.label}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((p) => (
                  <motion.div
                    layout
                    key={p.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`${card} p-6 flex flex-col ${p.featured ? 'md:col-span-2' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-xl font-bold text-ink">{p.name}</h3>
                      {p.status
                        ? <span className="text-xs bg-accent-soft text-accent border border-accent/40 px-2 py-1 rounded-md whitespace-nowrap font-semibold">{p.status}</span>
                        : p.featured && <span className="text-xs bg-accent-soft text-muted border border-line px-2 py-1 rounded-md whitespace-nowrap">Featured</span>}
                    </div>
                    <p className="text-muted mb-4 flex-1"><RichText text={p.description} /></p>
                    <div className="flex flex-wrap gap-2 mb-4">{p.technologies.map((t) => <span key={t} className={chip}>{t}</span>)}</div>
                    {p.links.length > 0 && (
                      <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-line">
                        {p.links.map((l) => {
                          const Icon = LINK_ICONS[l.type] || ExternalLink;
                          return (
                            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                              className="flex items-center text-sm text-accent hover:underline transition-colors">
                              <Icon size={16} className="mr-1.5" /> {l.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Research" eyebrow="Publications" />
            <div className="grid md:grid-cols-3 gap-6">
              {researchData.map((r) => (
                <div key={r.title} className={`${card} p-6 flex flex-col`}>
                  <h3 className="text-lg font-bold text-ink mb-3">{r.title}</h3>
                  <p className="text-muted text-sm mb-4 flex-1"><RichText text={r.summary} /></p>
                  <div className="flex flex-wrap gap-2 mb-4">{r.tags.map((t) => <span key={t} className={chip}>{t}</span>)}</div>
                  {r.href && (
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-accent hover:text-accent">
                      <ExternalLink size={16} className="mr-1.5" /> {r.linkLabel}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Skills" eyebrow="Toolbox" />
            <div className="divide-y divide-line border-y border-line">
              {skillsData.map((g) => (
                <div key={g.group} className="grid md:grid-cols-4 gap-3 md:gap-8 py-5">
                  <h3 className="text-base font-semibold text-ink">{g.group}</h3>
                  <div className="md:col-span-3 flex flex-wrap gap-2">
                    {g.items.map((s) => <span key={s} className={chip}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education & Community */}
      <section id="education" className="py-20 bg-bg">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Education & Community" eyebrow="Background" />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                {educationData.map((e) => (
                  <div key={e.degree} className={`${card} p-6`}>
                    <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-ink">{e.degree}</h3>
                      <span className="text-sm bg-surface text-muted border border-line px-3 py-1 rounded-full w-fit">{e.duration}</span>
                    </div>
                    <p className="text-muted">{e.institution}</p>
                    <p className="text-muted text-sm flex items-center mt-1"><MapPin size={14} className="mr-1" />{e.location}</p>
                  </div>
                ))}
                <div className={`${card} p-6`}>
                  <h3 className="text-lg font-bold text-ink mb-3 flex items-center"><Award size={18} className="mr-2 text-muted" />Certifications & Competitions</h3>
                  <ul className="space-y-1 text-muted mb-4">
                    {certificationsData.map((c) => <li key={c.title}>{c.title} <span className="text-muted">- {c.org}</span></li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2">{hackathonsData.map((h) => <span key={h} className={chip}>{h}</span>)}</div>
                </div>
              </div>
              <div className={`${card} p-6`}>
                <h3 className="text-lg font-bold text-ink mb-4 flex items-center"><Users size={18} className="mr-2 text-muted" />Leadership & Community</h3>
                <div className="space-y-5">
                  {leadershipData.map((l) => (
                    <div key={l.role} className="border-l-2 border-line pl-4">
                      <p className="font-semibold text-ink">{l.role}</p>
                      <p className="text-sm text-muted">{l.org}</p>
                      <p className="text-muted mt-1">{l.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle title="Contact Me" eyebrow="Contact" />
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-ink mb-4">Let's work together</h3>
                <p className="text-muted mb-6">
                  Open to full-time software engineering roles and interesting projects. Send a message and I'll get back to you.
                </p>
                <div className="space-y-5">
                  {[
                    { icon: Mail, title: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                    { icon: Phone, title: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
                    { icon: MapPin, title: 'Location', value: personalInfo.location },
                  ].map(({ icon: Icon, title, value, href }) => (
                    <div key={title} className="flex items-center">
                      <div className="bg-accent-soft p-3 rounded-full mr-4"><Icon className="text-ink" size={20} /></div>
                      <div>
                        <h4 className="text-sm font-semibold text-muted">{title}</h4>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          {href ? <a href={href} className="text-accent hover:underline">{value}</a> : <span className="text-muted">{value}</span>}
                          {href && <CopyButton text={value} label={title} />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <form action={`https://formsubmit.co/${personalInfo.email}`} method="POST" className={`${card} p-6`}>
                {[
                  { id: 'name', label: 'Name', type: 'text' },
                  { id: 'email', label: 'Email', type: 'email' },
                ].map((f) => (
                  <div className="mb-4" key={f.id}>
                    <label htmlFor={f.id} className="block text-muted font-medium mb-2">{f.label}</label>
                    <input type={f.type} id={f.id} name={f.id} required placeholder={`Your ${f.label}`}
                      className="w-full px-4 py-2 bg-bg border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-ink" />
                  </div>
                ))}
                <div className="mb-4">
                  <label htmlFor="message" className="block text-muted font-medium mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} required placeholder="Your Message"
                    className="w-full px-4 py-2 bg-bg border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-ink" />
                </div>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New message from your portfolio" />
                <button type="submit" className="w-full bg-accent text-on-accent py-3 rounded-lg hover:opacity-90 transition-colors font-bold">
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <footer className="bg-surface py-8 border-t border-line">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted mb-4">&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4">
            {socials.map(({ icon: Icon, url, label }) => (
              <a key={label} href={url} {...(url.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })} aria-label={label}
                className="text-accent hover:underline transition-colors">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
