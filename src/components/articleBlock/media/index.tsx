import React, { useState, lazy } from 'react'
import classNames from 'classnames'

import { MediaBlockProps, MediaStruct } from './types'

import MediaBlockView from './components/view'
import MediaBlockInfo from './components/info'


const MediaBlock = (props: MediaBlockProps) => {  
  const { data: { project, media, description } } = props

  return (
    <div className="article-block-media mb-2">
      <MediaBlockView media={media} />
      <MediaBlockInfo description={description} project={project} />
    </div>
  )
} 
export default MediaBlock
export type {
  MediaBlockProps,
}