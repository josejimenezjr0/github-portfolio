import { skillList } from '../public/staticInfo'

const Skills = () => {
  const large = skillList.large.map( (skill, ind) => (
    <div className="p-4" key={ind}>
      <div className="h-20 w-20 mx-auto">
        { skill.original }
      </div>
      <div className="pt-2 font-bold text-center text-2xl">
        { skill.name }
      </div>
    </div>
  ))

  const medium = skillList.medium.map( (skill, ind) => (
    <div className="p-4" key={ind}>
      <div className="h-12 w-12 mx-auto">
        { skill.original }
      </div>
      <div className="pt-2 font-bold text-center text-lg">
        { skill.name }
      </div>
    </div>
  ))

  const small = skillList.small.map( (skill, ind) => (
    <div className="p-4" key={ind}>
      <div className="h-6 w-6 mx-auto">
        { skill.original }
      </div>
      <div className="pt-2 font-bold text-center text-sm">
        { skill.name }
      </div>
    </div>
  ))

  return (
    <div id="skills" className="p-8 flex-col flex-wrap items-center justify-center">
      <div>
        <p className="text-4xl font-bold text-center">Skills</p>
        <hr className="mx-auto"/>
      </div>
      <div className="flex flex-wrap justify-center p-4">
        { large }
      </div>
      <div className="flex flex-wrap justify-center p-4">
        { medium }
      </div>
      <div className="flex flex-wrap justify-center p-4">
        { small }
      </div>
    </div>
  )
}

export default Skills