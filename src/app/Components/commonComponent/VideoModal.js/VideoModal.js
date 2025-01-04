import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export  function VideoModal({VideoModalOpen,setVideoModal}) {
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
        <div className='w-[60vw] h-[30vh] transform m-auto bg-white relative'>
            <button onClick={()=>{setVideoModal(false)}} className='absolute top-5 right-5'>x</button>
        </div>
      </Modal>
    </div>
  );
}
