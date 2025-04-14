
import { plugData } from '@/src/api/plug'
import ProjectCard from '@/src/components/projectCard'

// TODO: props type
const ProjectCards = (props: any) => {

  return (
    <div className="project-cards">
      { plugData.map((element: any, index: number) => <ProjectCard key={index} data={element} /> )}
    </div>
  )
}
export default ProjectCards