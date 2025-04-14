import classNames from 'classnames'

import { MediaStruct } from '../../types'


const SlidesPreview = (props: { bgColor: string | null | undefined, images: MediaStruct[], selectedImageIndex: number, setSelectedImageIndex: Function }) => {
  const { bgColor, images } = props
  const { selectedImageIndex, setSelectedImageIndex } = props

  if (!images) return <div> images missing </div>

  return (
   <div className="slider-thumbnail-cards">
      { images.map((element: MediaStruct, index: number) => {
        const classnames = classNames('slider-thumbnail-cards__card slider-thumbnail-card', { 
          'slider-thumbnail-card--active': selectedImageIndex == index
        })
        return (
          <div key={index} className={classnames} style={{ backgroundColor: bgColor ?? '#efefef' }} onClick={() => setSelectedImageIndex(index)}>
            <img src={element.thumbnail} className="slider-thumbnail-card__i" />
          </div>
        )
      })}
   </div>
  )
}
export default SlidesPreview