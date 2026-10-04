import { GraduationCap, Github, Globe, BookOpen, MapPin, Award } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import PhotoGallery from './PhotoGallery'
import { fypData } from '../data/portfolio'
import sitc from '../assets/fyp/sitc-presentation.jpg'
import poster from '../assets/fyp/poster-team.jpg'
import field from '../assets/fyp/field-test.jpg'
import hardware from '../assets/fyp/hardware.jpg'

const ICONS = { github: Github, live: Globe, notebook: BookOpen }

const gallery = [
  { src: sitc, ratio: 3 / 2, caption: 'Presenting at Indus AI Week 2026, SITC' },
  { src: poster, ratio: 3 / 4, caption: 'Poster presentation, Department of Software Engineering, NED' },
  { src: field, ratio: 4 / 3, caption: 'Field testing at a live pumping station' },
  { src: hardware, ratio: 4 / 3, caption: 'ESP32 acoustic sensor prototype' },
]

const chip = 'bg-accent-soft text-muted border border-line px-3 py-1 rounded-md text-xs font-medium'

const FypSection = () => {
  return (
    <section id="fyp">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <AnimatedSection>
          <SectionTitle title="Final Year Project" eyebrow="Capstone" />

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-ink">{fypData.title}</h3>
              <p className="text-muted mt-1 mb-5">{fypData.subtitle}</p>
              <p className="text-muted leading-7 mb-6">{fypData.description}</p>

              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">My contribution</h4>
              <ul className="list-disc pl-5 space-y-2 text-muted mb-6">
                {fypData.myRole.map((r) => <li key={r}>{r}</li>)}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {fypData.tech.map((t) => <span key={t} className={chip}>{t}</span>)}
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-line">
                {fypData.links.map((l) => {
                  const Icon = ICONS[l.type] || Globe
                  return (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center text-sm text-accent hover:underline">
                      <Icon size={16} className="mr-1.5" /> {l.label}
                    </a>
                  )
                })}
              </div>
            </div>

            <aside className="lg:col-span-2 space-y-6">
              <div className="rounded-xl border border-line p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2 flex items-center">
                  <GraduationCap size={16} className="mr-2" /> Supervised by
                </p>
                <p className="text-ink font-semibold">{fypData.supervisor}</p>
                <p className="text-sm text-muted">{fypData.supervisorRole}</p>
              </div>

              <div className="rounded-xl border border-line p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4 flex items-center">
                  <Award size={16} className="mr-2" /> Presented at
                </p>
                <ul className="space-y-4">
                  {fypData.presentedAt.map((e) => (
                    <li key={e.place} className="flex gap-3">
                      <MapPin size={16} className="text-accent mt-1 shrink-0" />
                      <div>
                        <p className="text-ink font-semibold">{e.place}</p>
                        <p className="text-sm text-muted">{e.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <PhotoGallery photos={gallery} className="mt-12" />
        </AnimatedSection>
      </div>

    </section>
  )
}

export default FypSection
