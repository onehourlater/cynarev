import React from 'react'
import NotFound from "next/error";
import { useRouter } from 'next/router'
import type {
  GetStaticProps,
  GetStaticPaths,
} from 'next'

import { plugData } from '@/src/api/plug'
import ArticleBlock from '@/src/components/articleBlock'
import {ProjectContext} from '@/src/containers/project'
import WorkStatus from '@/src/components/workStatus';


const PageTitle = (props: { title: string }) => {
  const { title } = props
  return (
    <div className="page-title">
      <h1>
        { title }
      </h1>
    </div>
  )
}

const ProjectPreviewBlock = (props: { bgColor: string, src: string, description: string }) => {
  const { bgColor, src } = props
  const { description } = props

  return (
    <div className="project-preview-block">
      <div className="project-preview-block__image" style={{ backgroundColor: bgColor }}>
        <img src={src} className="project-preview-block__image__i" />
      </div>
      <div className="project-preview-block__description">
        { description }
      </div>
    </div>
  )
}

// TODO: data props
const ProjectBlocks = (props: { data: any }) => {
  const { data } = props
  if (!data)
    return <> project data is empty </>
  
  return (
    <div className="article-blocks">
      { data.blocks.map((element: any, index: number) => <ArticleBlock key={`${data.project.slug}-${index}`} {...element} />) }
    </div>
  )
}

// TODO: data props
const ProjectNextPage = (props: { next: any }) => {
  const { next } = props
  const router = useRouter()

  const onClick = () => {
    router.push(`/projects/${next.slug}`)
  }

  return (
    <div className="project-next-page" onClick={onClick}>
      <div className="project-next-page__title">
        <div className="project-next-page__title__key">
          Следующий проект
        </div>
        <div className="project-next-page__title__value">
          { next.title }
        </div>
      </div>
      <div className="project-next-page__image" style={{ backgroundColor: next.image.bgColor }}>
        <img src={next.image.src} className="project-next-page__image__i" />
      </div>
    </div>
  )
}
 
export const getStaticPaths = (async () => {
  return {
    paths: [{
        params: {
          slug: 'auditonline',
        },
      }, {
        params: {
          slug: 'asamclo',
        },
      }, {
        params: {
          slug: 'phones',
        },
      }, 
    ],
    fallback: true,
  }
}) satisfies GetStaticPaths
 
export const getStaticProps = (async (context) => {
  return { props: {} }
}) satisfies GetStaticProps<{}>
 
export default function ProjectPage() {
  const router = useRouter()
  const { slug } = router.query

  const projectData = plugData.find(el => el.project.slug == slug)

  // TODO: 404
  if (!projectData)
		return <NotFound statusCode={404} />;

  return (
    <div className="project-page">
      <WorkStatus align={'center'} />

      <PageTitle title={projectData.project.title} />
      <ProjectPreviewBlock src={projectData.project.image.src} bgColor={projectData.project.image.bgColor} description={projectData.project.description} />
  
      <ProjectContext.Provider value={{ project: projectData.project }}>
        <ProjectBlocks data={projectData} />
      </ProjectContext.Provider>

      <ProjectNextPage next={projectData.page.next}/>
    </div>
  )
}