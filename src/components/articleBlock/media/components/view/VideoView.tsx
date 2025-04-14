import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'


type ReactPlayerState = {
  playerHeight: number | string;
  windowInnerWidth: number;
}

const ReactPlayerView = (props: { src: string, bgColor: string | null | undefined}) => {
  console.log('ReactPlayerView props: ')
  console.log(props)

  const { src, bgColor } = props
  const [state, setState] = useState<ReactPlayerState>({
    playerHeight: '100%',
    windowInnerWidth: 0,
  })

  useEffect(() => {
    const getPlayerHeight = (windowInnerWidth: number): number | string => {
      let playerHeight: number | string = 470
      if (windowInnerWidth < 1200) {
        playerHeight = '100%'
      }
      return playerHeight
    }

    // TODO: cant access updated state inside this method
    const handleResize = () => {
      const { innerWidth } = window

      setState({
        playerHeight: getPlayerHeight(innerWidth),
        windowInnerWidth: innerWidth,
      })
    }

    handleResize()

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // TODO: start to play when player loaded and inside user viewport
  return (
    <div className="video-c" style={{ backgroundColor: bgColor ?? '#efefef' }}>
      <div className="video-wrapper">
        <ReactPlayer url={src} controls={true} loop={true} volume={0} width={'auto'} height={state.playerHeight} />
      </div>
    </div>
  )
}
export default ReactPlayerView