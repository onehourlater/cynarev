import React, { lazy } from 'react'
import dynamic from 'next/dynamic'


const DynamicReactPlayerView = dynamic(() => import('./VideoView'), {
  ssr: false,
})
const LazyImageView = lazy(() => import('./ImageView'))

const MediaRepresentation = (props: { type: string, src: string, thumbnail: string, bgColor: string | null | undefined }) => {
  const { type } = props

  if (type == 'video') {
    return <DynamicReactPlayerView {...props} />
  }

  return <LazyImageView {...props} />
}
export default MediaRepresentation