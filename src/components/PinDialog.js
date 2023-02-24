import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { CircularProgress, IconButton } from '@mui/material';
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export default function PinDialog({ open, handleClickOpen, handleClose, setOpen }) {
    const navigate = useNavigate()

    const [loading, setLoading] = React.useState(false)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const token = JSON.parse(localStorage.getItem('token'))

    const [pin, setPin] = React.useState(false)
    const [pin_confirmation, setConfirm] = React.useState()




    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('processing.......')
        setLoading(true)
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        try {
            const response = await axiosJwt.post(`http://azany-affiliate.urbantour.org/api/auth/set_security_pin?pin=${pin}&pin_confirmation=${pin_confirmation}`, {})
            console.log(response.data)
            setLoading(false)
            handleClose()
        } catch (error) {
            console.log(error.response)
            setLoading(false)
            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(()=>{
                handleClose()
            },3500)
        }
    }
    const axiosJwt = axios.create()

    axiosJwt.interceptors.request.use(
        config => {
            let currentDate = new Date();
            const token = JSON.parse(localStorage.getItem('token'))
            const decodedToken = jwt_decode(token);
            console.log(decodedToken)
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                navigate('/login')
            } else {
                config.headers["authorization"] = "Bearer " + token
            }
            // config.headers['Content-Type'] = 'application/json';
            return config
        },
        (error) => {
            return Promise.reject(error);
        }
    )

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <div className='w-[95%] mx-auto p-4'>
                    <div className='relative'>
                        <IconButton onClick={handleClose} className='block md:hidden absolute top-2 left-0'>
                            <CancelIcon />
                        </IconButton>
                        <form onSubmit={handleSubmit}>
                            <div className="py-2">
                                <h2 className='text-center font-bold'>Set Pin</h2>
                            </div>
                            <div className="py-3">
                                <label className="mt-2">Pin</label>
                                <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" required placeholder='Enter Pin' onChange={(e) => setPin(e.target.value)} />
                            </div>
                            <div className="py-3">
                                <label className="mt-2">Confirm Pin</label>
                                <div className='relative'>
                                    <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" required placeholder='Confirm Pin' onChange={(e) => setConfirm(e.target.value)} />
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
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </form>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
