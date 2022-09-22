import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CircularProgress } from '@mui/material';
import axios from 'axios';

const style = {

};

export default function BasicModal({ open, handleClose, handleOpen, setOpen }) {
    const [loading, setLoading] = React.useState(false)
    const [question, setQuestion] = React.useState()
    const [answer, setAnswer] = React.useState()
    const token = JSON.parse(localStorage.getItem('token'))
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('processing.......')
        setLoading(true)
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        try {
            const response = await axios.post(`https://azany-affiliate.urbantour.org/public/api/auth/set_security_question?question=${question}&answer=${answer}`, {}, { headers })
            console.log(response.data)
            setLoading(false)
            handleClose()
        } catch (error) {
            console.log(error.response)
            setLoading(false)
        }
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: {sm:400,md:400},
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <div className='w-4/5 mx-auto'>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="py-2">
                                    <h2 className='text-center font-bold'>Set 2FA</h2>
                                </div>
                                <div className="py-3">
                                    <label className="mt-2">Set 2FA Question</label>
                                    <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" required placeholder='Enter Question' onChange={(e) => setQuestion(e.target.value)} />
                                </div>
                                <div className="py-3">
                                    <label className="mt-2">Answer</label>
                                    <div className='relative'>
                                        <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" required placeholder='Enter answer' onChange={(e) => setAnswer(e.target.value)} />
                                        {/* <IconButton className='absolute top-0'>
                                            <VisibilityOffIcon className='absolute right-2' />
                                        </IconButton> */}
                                    </div>

                                </div>

                                <div className="w-full py-3">
                                    <button type='submit' className={loading ? `text-white w-full rounded-md bg-[#74454f] py-2 px-4` : `text-white bg-[#E51B48] w-full rounded-md  py-2 px-4`}>
                                        {loading ? (
                                            <div className='flex items-center justify-center'>
                                                <CircularProgress className='text-green-500' />
                                            </div>
                                        ) : (
                                            <p>Continue</p>
                                        )}
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
