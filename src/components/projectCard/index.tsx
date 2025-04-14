import React from 'react'
import { useRouter } from 'next/router'


// TODO: props type
const ProjectCard = (props: any) => {
  const { data } = props
  const router = useRouter()

  console.log('ProjectCard props: ')
  console.log(props)

  const onClick = () => {
    router.push(`/projects/${data.project.slug}`)
  }

  return (
    <div className="project-cards__card project-card" onClick={onClick}>
      <div className="project-card__image">
        <img src={data.project.image.src} className="project-card__image__i" />
      </div>

      <div className="project-card__title">
        { data.project.title }
      </div>

      <div className="project-card__description">
        { data.project.snippet }
      </div>


    </div>
  )
}
export default ProjectCard