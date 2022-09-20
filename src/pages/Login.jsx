import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import axios from 'axios';
import { CircularProgress, IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            const res = await axios.post(`https://azany-affiliate.urbantour.org/public/api/auth/login`, { email, password })
            console.log(res.data)
            setLoading(false)
            navigate("/dashboard")
            window.localStorage.setItem("token", JSON.stringify(res.data.token))
        } catch (error) {
            setLoading(false)
            console.log(error.response)
            // toast.error(error.response.data.message, {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // });

        }
    }
    return (
        <>
            <div className="max-w-full min-h-screen">
                <div className="md:flex block items-center">
                    <div className="md:flex-1 hidden md:block">
                        <img src="/images/login2.png" className='h-screen object-cover w-full' />
                    </div>
                    <div className="md:flex-1 h-screen  flex flex-col justify-center w-4/5 mx-auto items-center">
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="py-2">
                                    <h2 className="font-bold text-2xl">Hello , Welcome Back!</h2>
                                    <p className="text-gray-400">Please create a password and start using your account</p>
                                </div>
                                <div className="py-3">
                                    <label className="mt-2">Email</label>
                                    <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" required placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="py-3">
                                    <label className="mt-2">Password</label>
                                    <div className='relative'>
                                        <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" required placeholder='Enter password' type="password" onChange={(e) => setPassword(e.target.value)} />
                                        {/* <IconButton className='absolute top-0'>
                                            <VisibilityOffIcon className='absolute right-2' />
                                        </IconButton> */}
                                    </div>

                                </div>
                                <div className='flex justify-end py-3 w-full text-right'>
                                    <Link to="/forgotpassword" className='cursor-pointer'><p className='text-right cursor-pointer'>Forgot Password?</p></Link>

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
                                    <p className='text-center'>Don't have an account ? <Link to="/register"><span className="text-[#E51B48] cursor-pointer">Sign Up</span></Link></p>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login