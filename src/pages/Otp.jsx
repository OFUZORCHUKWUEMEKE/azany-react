import React, { useContext } from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import MenuIcon from '@mui/icons-material/Menu';
import { CircularProgress, IconButton } from '@mui/material';
import SwipeableTemporaryDrawer from '../components/drawer';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Otp = () => {
  const [value, setValue] = React.useState('')
  const [loading, setLoading] = useState(false)
  const { state: { user_id, email,signup } } = useContext(AuthContext)
  const navigate = useNavigate()
  console.log({user_id,email})
  const handleChange = (newValue) => {
    setValue(newValue)
  }

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
    // console.log({ user_id, value })
    setLoading(true)
    e.preventDefault()
    console.log('processing.......')
    console.log(value)
    try {
          const response = await axios.post(`http://azany-affiliate.urbantour.org/api/auth/verify_email_code`, { user_id, code: parseInt(value) })
          console.log(response.data.data)
          toast('Successful', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate('/dashboard')
          setLoading(false)

    } catch (error) {
      setLoading(false)
      console.log(error.response.data.message)
      toast.error(error.response.data.message, {
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
  // console.log({email,user_id})
  console.log({ user_id, email })


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
        <div className="flex">
          <div className="flex-1 hidden md:block">
            <img src="/images/login2.png" className='h-screen object-cover w-full' />
          </div>
          <div className="flex-1 flex h-screen flex-col justify-center items-center">
            <div className="w-[75%] mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="py-2 space-y-2">
                  <h2 className="font-bold text-3xl text-center">Email Verification</h2>
                  {/* <p className="text-gray-400 text-center">Please enter the verification code sent to {email.substring(0, 5)}....@{email.slice(-9)}</p> */}
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
                <div className="py-3 w-full">
                  {/* <label className="mt-2">Email</label>
                <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" placeholder='Enter Email' /> */}
                  <MuiOtpInput display="flex" length={6} type="number" value={value} onChange={handleChange} className="w-full text-center" />
                </div>
                <div className="w-full py-3 mt-3">
                  <button className={loading ? `text-white w-full rounded-md bg-[#74454f] py-2 px-4` : `text-white bg-[#E51B48] w-full rounded-md  py-2 px-4`}>
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
              <SwipeableTemporaryDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Otp