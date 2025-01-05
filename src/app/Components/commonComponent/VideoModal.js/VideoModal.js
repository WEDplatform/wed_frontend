import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { VideoPlayer } from './VideoPlayer';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50vw",
  height:"30vh",
  bgcolor: 'background.paper',
  boxShadow: 24,
  
};

export  function VideoModal({VideoModalOpen,setVideoModal,videoPostLength}) {
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
          <div className='w-[60vw] flex relative h-[80vh] bg-white'>
            <div className='w-[40%] bg-red-200 h-[100%]'>
              <VideoPlayer videoPostLength={videoPostLength} />
            </div>
            <div className='w-[60%] h-[100%]'>
            Content
            </div>
            <button onClick={()=>{setVideoModal(false)}} className=' bg-white px-2 absolute -top-6 -right-6'>x</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
