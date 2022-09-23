import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

export default function KycDialog({ open, handleClose, handleClickOpen , image ,setUpload,upload}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleUpload = ()=>{
        setUpload(true)
        handleClose()
    }

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <div className='md:w-4/5 w-full mx-auto'>
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
            </Dialog>
        </div>
    );
}
