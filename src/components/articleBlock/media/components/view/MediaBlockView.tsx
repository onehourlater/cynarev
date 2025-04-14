import React, { useState, useContext } from 'react'

import { ProjectContext } from '@/src/containers/project'
import MediaRepresentation from './MediaRepresentation'
import SlidesPreview from './SlidesPreview'
import { MediaStruct } from '../../types'


type MediaBlockInfoProps = {
  media: MediaStruct[];
}
const MediaBlockView = (props: MediaBlockInfoProps) => {
  console.log('MediaBlockView props')
  console.log(props)
  
  const { media } = props
  const { project } = useContext(ProjectContext)

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  console.log('MediaBlockView project: ')
  console.log(project)
  
  if (!media) {
    return <div> no images </div>
  }

  // TODO: selectedImageIndex out of array case
  const selectedMedia = media[selectedImageIndex]

  // TODO:
  return (
    <div className="article-block-media__view media-view">
      <MediaRepresentation type={selectedMedia.type} src={selectedMedia.src} bgColor={project?.image.bgColor} />
      { media.length > 1 && (
        <SlidesPreview bgColor={project?.image.bgColor} images={media} selectedImageIndex={selectedImageIndex} setSelectedImageIndex={setSelectedImageIndex} /> 
      )}
    </div>
  )
}
export default MediaBlockView