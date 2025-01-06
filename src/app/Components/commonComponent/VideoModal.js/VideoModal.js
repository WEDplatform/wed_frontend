'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { VideoPlayer } from './VideoPlayer';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useRouter } from 'next/navigation';
import '@splidejs/react-splide/css/core';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50vw",
  height: "30vh",
  bgcolor: 'background.paper',
  boxShadow: 24,

};

export function VideoModal({ VideoModalOpen, setVideoModal, postCollection }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(VideoModalOpen);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={VideoModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box   sx={style}>
            <button onClick={()=>{setVideoModal(false)}}>x</button>
          
        </Box> */}
        <div className='w-[100%] relative h-[100%] flex items-center justify-center'>
          <Splide aria-label="" hasTrack={false} options={{ pagination: false,perPage:1,width:"100%",height:"100%"
            
           }}>
            <SplideTrack className="md:w-[60vw] w-[90vw] relative">

              {
                postCollection.map((item, index) => (
                  <SplideSlide className="w-[100%]" key={index}>
                    <div className='flex relative h-[90vh] md:h-[80vh] bg-white'>
                      <div className='md:w-[40%] w-[100%] relative bg-black h-[100%]'>
                        <VideoPlayer PostUrl={item?.videos?.large} />
                        <button onClick={() => { setVideoModal(false);router.back() }} className=' bg-white px-2 absolute top-3 right-3'>x</button>

                      </div>
                      <div className='w-[60%] hidden md:block h-[100%] relative'>
                      <button onClick={() => { setVideoModal(false);router.back() }} className=' bg-white px-2 absolute top-3 right-3'>x</button>
                        {index}
                      </div>
                    </div>
                  </SplideSlide>
                ))
              }
            </SplideTrack>
            <div className="splide__arrows  md:flex justify-between w-[110%] left-[-5%]  px-0 absolute top-[50%] transform -translate-y-1/2">
              <button className="splide__arrow hidden md:block splide__arrow--prev bg-white aspect-square rounded-full border-2 p-2 w-[2vw] h-[2vw]"><FaArrowLeft className="w-[100%] h-[100%] text-xl" /></button>
              <button className="splide__arrow hidden md:block splide__arrow--next bg-white aspect-square rounded-full border-2 p-2 w-[2vw] h-[2vw]"><FaArrowRight className="w-[100%] h-[100%] text-xl" /></button>
            </div>
          </Splide>
        </div>
      </Modal>
    </div>
  );
}
