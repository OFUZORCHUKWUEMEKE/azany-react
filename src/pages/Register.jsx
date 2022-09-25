import React, { useState, useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { Button, ButtonGroup } from '@chakra-ui/react'
import MenuIcon from '@mui/icons-material/Menu';
import { CircularProgress, IconButton } from '@mui/material';
import SwipeableTemporaryDrawer from '../components/drawer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
const Register = () => {
    const { dispatch } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const emailRef = useRef()
    const nameRef = useRef()
    const passwordRef = useRef()
    const confirmRef = useRef()
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
    const [confirm, setConfirm] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        console.log('Processing.........')
        setLoading(true)
        e.preventDefault()
        try {
            const res = await axios.post(`https://azany-affiliate.urbantour.org/public/api/auth/register`, { name, email, password })
            console.log(res.data.data.user.id)
            setLoading(false)
            dispatch({ type: "REGISTER", payload: { user_id: res.data.data.user.id, email: email, signup: true } })
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
                navigate('/otp')
            }, 3000)
        } catch (error) {
            setLoading(false)
            console.log(error.response)
            // console.log(error.response.data.data.errors)
            // toast.error(error.response.data.da {
            //             position: "top-right",
            //             autoClose: 5000,
            //             hideProgressBar: false,
            //             closeOnClick: true,
            //             pauseOgable: true,
            //             prnHover: true,
            //             dragogress: undefined,
            //         });
            if (error.response.data.data.errors.length > 1) {
                error.response.data.data.errors.forEach((error) => {
                    toast.error(error, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
            } else {
                toast.error(error.response.data.data.errors[0], {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

        }

        console.log({ name, email, password, confirm })
    }
    return (
        <>
            <div className='bg-gray-50 block md:hidden shadow-md p-3 w-full'>
                <div className='w-4/5'>
                    <IconButton onClick={toggleDrawer("left", true)}>
                        <MenuIcon />
                    </IconButton>
                </div>
            </div>
            <div className=" w-4/5 mx-auto md:w-full min-h-screen">

                <div className="flex items-center">
                    <div className="flex-1 hidden md:block">
                        <img src="/images/login.png" className='h-screen object-cover w-full' />
                    </div>
                    <div className="flex-1 flex flex-col h-screen justify-center w-4/5 mx-auto  items-center">
                        <div>
                            <div className="py-2 space-y-2">
                                <h2 className="font-bold text-2xl">Get Started</h2>
                                <p className="text-gray-400">Please enter the details to create an account</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="py-3 space-y-2">
                                    <label className="mt-2">Full Name</label>
                                    <input className="w-full py-2 px-4  bg-gray-100  outline-none rounded-md" name="name" placeholder='Enter Full Name' ref={nameRef} required onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="py-3 space-y-2">
                                    <label className="mt-2">Email</label>
                                    <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" name="email" placeholder='Enter Email' ref={emailRef} required onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="py-3 space-y-2">
                                    <label className="mt-2">Password</label>
                                    <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" name="password" placeholder='Enter Password' ref={passwordRef} required type="password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="py-3 space-y-2">
                                    <label className="mt-2">Confirm Password</label>
                                    <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" placeholder='Enter Confirm Password' ref={confirmRef} required type="password" onChange={(e) => setConfirm(e.target.value)} />
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
                                <div className="mt-3 py-4">
                                    <p className='text-center'>Already have an account ? <Link className="cursor-pointer" to="/login"><span className="text-[#E51B48]  cursor-pointer">Login</span></Link></p>
                                </div>
                            </form>
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
                            <SwipeableTemporaryDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register