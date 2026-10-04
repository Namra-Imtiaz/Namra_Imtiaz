// Strips **bold** markers so text renders normally.
// To bring bold back, return <strong className="font-semibold text-ink"> for odd parts.
const RichText = ({ text }) => text.replace(/\*\*(.+?)\*\*/g, '$1')

export default RichText
