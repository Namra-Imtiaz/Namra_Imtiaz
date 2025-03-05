const SectionTitle = ({ title, icon }) => {
    return (
      <div className="flex items-center mb-12">
        <div className="bg-cyan-500 p-3 rounded-lg text-black mr-4">{icon}</div>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
      </div>
    )
  }
  
  export default SectionTitle
  
  