import React from 'react';
import ReactPlayer from 'react-player/lazy';
const VideoPlayer = ({PostUrl}) => {
  return (
    <>
      <ReactPlayer
        width="100%"
        height="100%"
        url={PostUrl?.url}
        controls={true}
        light={PostUrl?.thumbnail}
       
      />
    </>
  );
}
export {VideoPlayer}