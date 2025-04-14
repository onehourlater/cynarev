import ImageDescription from './ImageDescription'
import ImageProjectInfo from './ImageProjectInfo'
import { MediaProjectInfo } from '../../types'

type MediaBlockInfoProps = {
  description: string;
  project: MediaProjectInfo,
}
const MediaBlockInfo = (props: MediaBlockInfoProps) => {
  const { description, project } = props

  if (!project) {
    return <ImageDescription description={description} />
  }
  return <ImageProjectInfo description={description} project={project}  />
}
export default MediaBlockInfo