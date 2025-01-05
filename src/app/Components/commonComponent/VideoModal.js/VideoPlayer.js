import React from 'react';
import ReactPlayer from 'react-player/lazy';
const VideoPlayer = ({videoPostLength}) => {
  return (
    <>
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://cdn.pixabay.com/video/2023/11/19/189813-887078786_large.mp4"
        controls={true}
      />
    </>
  );
}
export {VideoPlayer}