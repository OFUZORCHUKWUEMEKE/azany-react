import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { CircularProgress, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableTemporaryDrawer from '../components/drawer';
const Resetpassword = () => {
    const [password, setPassword] = useState()
    const [confirm_password, setConfirmPassword] = useState()
    const [loading, setLoading] = useState()
    const { state: { user_id, email, signup } } = useContext(AuthContext)
    const navigate = useNavigate()

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            setLoading(true)
            const response = await axios.post(`https://azany-affiliate.urbantour.org/public/api/auth/new_password_entry?user_id=${user_id}&password=${password}&password_confirmation=${confirm_password}`, {})

            console.log(response.data)
            setLoading(false)
            toast('Successful', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                navigate('/login')
            }, 1500)



        } catch (error) {
            console.log(error.response)
            setLoading(false)
        }
    }
    return (
        <>
            <div className="max-w-full min-h-screen">
                <div className='bg-gray-50 block md:hidden shadow-md p-3 w-full'>
                    <div className='w-4/5'>
                        <IconButton onClick={toggleDrawer("left", true)}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="md:flex block items-center">
                    <div className="md:flex-1 hidden md:block">
                        <img src="/images/login2.png" className='max-h-screen object-cover w-full' />
                    </div>
                    <div className="md:flex-1 h-screen flex flex-col justify-center w-4/5 mx-auto items-center">
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="py-2">
                                    <h2 className="font-bold text-2xl">Reset Password</h2>
                                    <p className="text-gray-400">please create a password and start using your accpunt</p>
                                </div>
                                <div className="py-3">
                                    <label className="mt-2">Password</label>
                                    <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                                </div>
                                <div className="py-3">
                                    <label className="mt-2">Confirm Password</label>
                                    <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Enter password' />
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
                            <SwipeableTemporaryDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resetpassword