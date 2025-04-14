import { MediaBlockProps } from '../../types'

const ImageDescription = ({ description }: { description: string }) => (
  <div className="article-block-media__description media-description">
    { description }
  </div>
)
export default ImageDescription