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
export default function ResponsiveDialog({ open, handleClickOpen, handleClose, setOpen }) {
    const navigate = useNavigate()
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [loading, setLoading] = React.useState(false)
    const [question, setQuestion] = React.useState()
    const [answer, setAnswer] = React.useState()
    const token = JSON.parse(localStorage.getItem('token'))
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
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('processing.......')
        setLoading(true)
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        try {
            const response = await axiosJwt.post(`https://azany-affiliate.urbantour.org/public/api/auth/set_security_question?question=${question}&answer=${answer}`, {})
            console.log(response.data)
            setLoading(false)
            toast.success('Successful', {
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
            },2000)
         
        } catch (error) {
            console.log(error.response)
            setLoading(false)
        }
    }
    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <div className='w-4/5 mx-auto'>
                    <div className='relative'>
                        <IconButton onClick={handleClose} className='block md:hidden absolute top-2 left-0'>
                            <CancelIcon />
                        </IconButton>
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
            </Dialog>
        </div>
    );
}
