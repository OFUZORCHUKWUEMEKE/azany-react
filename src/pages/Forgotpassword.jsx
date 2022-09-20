import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Forgotpassword = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const {dispatch,state} = useContext(AuthContext)
     const navigate =  useNavigate()
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {           
            const response = await axios.post(`https://azany-affiliate.urbantour.org/public/api/auth/reset_password_email_entry?email=${email}`)
            setLoading(false)
            dispatch({type:"REGISTER",payload:{user_id:response.data.data.user[0].id,email:email,signup:true}})
            console.log(response.data.data.user[0].id)
            navigate('/forgetpassword/otp')

        } catch (error) {
            console.log(error.response)
            setLoading(false)
        }

    }
    return (
        <>
            <div className="max-w-full min-h-screen">
                <div className="flex">
                    <div className="flex-1 hidden md:block">
                        <img src="/images/login2.png" className='h-screen object-cover w-full' />
                    </div>
                    <div className="flex-1 min-h-screen flex flex-col justify-center md:justify-start mt-3 py-4  items-center">
                        <div className="w-4/5 md:w-3/5 mx-auto">
                            <form onSubmit={handleSubmit}>
                                <div className="py-2 space-y-2">
                                    <h2 className="font-bold text-2xl">Forgot Password</h2>
                                    <p className="text-gray-400">Enter your email or phone number and we will send you an OTP to reset your password</p>
                                </div>
                                <div className="py-3">
                                    <label className="mt-2">Email</label>
                                    <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="w-full py-3 mt-3">
                                    <button type='submit' className={loading ? `text-white w-full rounded-md bg-[#74454f] py-2 px-4` : `text-white bg-[#E51B48] w-full rounded-md  py-2 px-4`}>
                                        {loading ? (
                                            <div className='flex items-center justify-center'>
                                                <CircularProgress className='text-green-500' />
                                            </div>
                                        ) : (
                                            <p>Submit</p>
                                        )}
                                    </button>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Forgotpassword