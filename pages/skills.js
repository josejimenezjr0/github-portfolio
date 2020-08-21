import { skillList } from '../staticInfo'

const Skills = () => {
  const listSkills = skillList.map( (skill, ind) => (
    <div className="p-4">
      <div className="h-20 w-20 mx-auto">
        { skill.original }
      </div>
      <div className="pt-2 font-bold text-center text-2xl">
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
        { listSkills }
      </div>
    </div>
  )
}

export default Skills