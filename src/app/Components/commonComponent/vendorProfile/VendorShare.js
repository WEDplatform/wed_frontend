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
  width: '30vw',
  height: '30vh',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export  function VendorShare({showModal,setModal}) {
  const [open, setOpen] = React.useState(showModal);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={showModal}
        onClose={setModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
        <div onClick={()=>{setModal(false)}} className='bg-white py-2 flex items-center justify-center' style={style}>
            <div className='w-[95%]'>
            <p>Copy link</p>
            <div className='flex'>
                <input className='bg-gray-100 px-2 py-2 text-gray-500 w-[100%] rounded-lg' type='text' value={`${window.location.href}`} readOnly/>
                <button className='bg-[#C94C73]  py-2 text-white font-normal px-5 rounded-lg'>Copy</button>
            </div>
            <p>Social</p>
            </div>
        </div>
      </Modal>
    </div>
  );
}
