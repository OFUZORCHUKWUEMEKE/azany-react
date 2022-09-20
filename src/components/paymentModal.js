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
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    // minHeight: '40vh',
    p: 8,
};

export default function PaymentModal({ open, handleClose, handleOpen }) {


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex justify-center items-center h-full'>
                        <h2 className='text-center font-bold text-2xl'>Withdrawal Request Successful</h2>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
