const PortfolioCard = ({ project = {} }) => {
  const skills = project.skills || []
    const skillList = skills.map( (skill, ind) => (
    <div className="p-2" key={ind}>
      <div className="h-4 w-4 mx-auto">
        { skill.original }
      </div>
      <div className="pt-2 font-bold text-center text-sm">
        { skill.name }
      </div>
    </div>
  ))

  return (
    <div className="p-3 py-5 w-auto">
      <div className="relative pb-5/6">
        <img className="absolute h-full w-full object-cover rounded-lg shadow-md" src={ project.imageURL } alt={ project.imageAlt }/>
      </div>
      <div className="relative px-4 -mt-16 w-84 group">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-300">
          <h4 className="mt-1 font-semibold text-lg leading-tight truncate">{ project.title }</h4>
          <div className=" text-teal-500 font-bold truncate">
            <a href={ project.link }>Github</a>
          </div>
          <div className="flex flex-wrap mt-1">
            { skillList }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard