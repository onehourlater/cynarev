import { MediaProjectInfo } from '../../types'

type ImageProjectInfoType = {
  description: string;
  project: MediaProjectInfo,
}

const ImageProjectInfo = ({ description, project }: ImageProjectInfoType) => (
  <div className="article-block-media__project-info media-project-info">
    <div className="media-project-info__description">
      { description }
    </div>
    <div className="media-project-info__project">
      <div className="media-project-info__project__name">
        { project.name }
      </div>
      <div className="media-project-info__project__url">
        <a href={ project.url } rel="nofollow" target="_blank" className="project-link project-link-619A60">{ project.url }</a>
      </div>
    </div>
  </div>
)
export default ImageProjectInfo