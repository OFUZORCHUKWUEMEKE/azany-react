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
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
};

export default function KycModal({ open, handleClose, handleOpen, image ,setUpload,upload}) {
    const handleUpload = ()=>{
        setUpload(true)
        handleClose()
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='w-4/5 mx-auto'>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Upload a photo of your National ID (front)
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Ensure all information is readable and not blurry. Make sure that all corners of the document are visible. Your document may not be accepted if it cannot be read properly or all four corners are not visible. Only front of the ID (with photograph) required. The name of account should match name in ID.
                        </Typography>
                        <div className='p-2 border border-dotted border-[#E51B48] mt-2'>
                            <div className="py-2">
                                <img src={image ? URL.createObjectURL(image) : ''} alt="images" className="h-44 w-[95%] mx-auto object-cover" />
                            </div>
                        </div>
                        <div className='space-y-3 py-3'>
                            <button className="bg-[#E51B48] w-full py-2 px-3 rounded-lg text-white" onClick={handleUpload} >Submit</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
