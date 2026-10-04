import { Users, Github, Award } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import PhotoGallery from './PhotoGallery'
import { communityData, certificationsData, hackathonsData } from '../data/portfolio'

const CommunitySection = () => {
  const { events, others } = communityData
  return (
    <section id="community">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <AnimatedSection>
          <SectionTitle title="Leadership & Community" eyebrow="Beyond the code" />

          <div className="divide-y divide-line border-b border-line">
            {events.map((e) => {
              const wide = e.photos.length > 2
              return (
                <div key={e.title} className="py-10 first:pt-0">
                  <div className={wide ? '' : 'grid lg:grid-cols-5 gap-8 items-center'}>
                    <div className="lg:col-span-3">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent bg-accent-soft px-3 py-1 rounded-md mb-4">
                        <Users size={14} /> {e.badge}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-ink leading-tight">{e.title}</h3>
                      <p className="text-muted mt-2 mb-5">{e.role} &middot; {e.org}</p>
                      <p className="text-muted leading-7 mb-5">{e.description}</p>
                      {e.points && (
                        <ul className="list-disc pl-5 space-y-2 text-muted mb-5">
                          {e.points.map((p) => <li key={p}>{p}</li>)}
                        </ul>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {e.tags.map((t) => (
                          <span key={t} className="inline-flex items-center gap-1.5 bg-accent-soft text-muted border border-line px-3 py-1 rounded-md text-xs font-medium">
                            {t === 'GitHub' && <Github size={13} />}{t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={wide ? 'mt-6' : 'lg:col-span-2'}>
                      <PhotoGallery photos={e.photos} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="rounded-xl border border-line bg-bg p-6 mt-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3 flex items-center">
              <Award size={14} className="mr-2" /> Certifications &amp; Competitions
            </p>
            <ul className="space-y-1 text-muted mb-4">
              {certificationsData.map((c) => <li key={c.title}><span className="text-ink font-medium">{c.title}</span> - {c.org}</li>)}
            </ul>
            <div className="flex flex-wrap gap-2">
              {hackathonsData.map((h) => (
                <span key={h} className="bg-accent-soft text-muted border border-line px-3 py-1 rounded-md text-xs font-medium">{h}</span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {others.map((o) => (
              <div key={o.role} className="rounded-xl border border-line bg-bg p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2 flex items-center">
                  <Users size={14} className="mr-2" /> {o.org}
                </p>
                <h4 className="text-lg font-bold text-ink">{o.role}</h4>
                <p className="text-muted mt-1">{o.detail}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default CommunitySection
