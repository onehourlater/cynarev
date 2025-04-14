type ImageStruct = {
  type: 'image',
  src: string;
  thumbnail: string;
}
type VideoStruct = {
  type: 'video';
  src: string;
  thumbnail: string;
}
type MediaStruct = ImageStruct | VideoStruct

type MediaProjectInfo = {
  id: number;
  name: string;
  url: string;
}

type MediaBlockProps = {
  data: {
    media: MediaStruct[];
    description: string;
    project: MediaProjectInfo;
  },
}

export type {
  MediaProjectInfo, 
  MediaBlockProps,
  MediaStruct,
}