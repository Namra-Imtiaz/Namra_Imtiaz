const SectionTitle = ({ title, eyebrow }) => (
  <div className="mb-10">
    {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-2">{eyebrow}</p>}
    <h2 className="text-3xl font-bold text-ink">{title}</h2>
  </div>
)

export default SectionTitle
