import { Grid, IconButton, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { downlines, Transactions } from '../components/data';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SwipeableTemporaryDrawer from '../components/drawer';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
const Dashboard = () => {

  const {dispatch,state:user} = useContext(UserContext)
  const token = JSON.parse(localStorage.getItem('token'))
  const [loading,setLoading] = useState(false)
  const [details,setDetails] = useState('')
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
  const fetchApi = async()=>{
    setLoading(true)
    const headers={
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    }
    try {
      const response = await axios.get(`https://azany-affiliate.urbantour.org/public/api/auth/fetch_profile_info`,{headers:headers})
      console.log(response.data.data.values[0].profile[0])
      setDetails(response.data.data.values[0].profile[0])
      dispatch({type:"USER_CREATED",payload:response.data.data.values[0].profile[0]})
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.response)
    }
 
  }
  useEffect(()=>{
       fetchApi()
  },[])

  return (
    <>
      <div>
        <Layout>
          <div className='bg-gray-50 block md:hidden shadow-2xl p-3 w-full'>
            <div className='w-4/5'>
              <IconButton onClick={toggleDrawer("left", true)}>
                <MenuIcon />
              </IconButton>
            </div>
          </div>
          <div className="w-full bg-gray-50 min-h-screen overflow-hidden pt-10">
            <Stack spacing={2}>
              <div className='p-5 rounded-md md:w-[90%] w-[90%]  mx-auto bg-white'>
                <div className="space-y-3">
                  {loading? <Skeleton variant="text" sx={{ fontSize: '1rem' }} />:  <h2 className="text-gray-400">WELCOME {details.name}</h2>}
                
                  <h2 className="text-2xl font-bold">Have a good day!</h2>
                </div>
              </div>
              <div className="w-full">
                <div className='p-2 hidden md:block md:w-[90%] rounded-md w-4/5 mx-auto bg-white'>
                  <Grid container spacing={2}>
                    <Grid item md={3}>
                      <div className='flex bg-[#f1f1fd] p-6 rounded-lg justify-center items-center'>
                        <div className="text-center">
                          <h2 className="text-center">Total Income</h2>
                          <h2 className="font-bold text-xl">50,000</h2>
                        </div>
                      </div>
                    </Grid>
                    <Grid item md={3}>
                      <div className=' bg-[#fff3f4] p-6 rounded-lg justify-center items-center'>
                        <div className="text-center">
                          <h2 className="text-center">Total Withdrawal</h2>
                          <h2 className="font-bold text-xl">30,000</h2>
                        </div>
                      </div>
                    </Grid>
                    <Grid item md={3}>
                      <div className='flex bg-[#eaf4ff] p-6 rounded-lg justify-center items-center'>
                        <div className="text-center">
                          <h2 className="text-center">Available Balance</h2>
                          <h2 className="font-bold text-xl">20,000</h2>
                        </div>
                      </div>
                    </Grid>
                    <Grid item md={3}>
                      <div className='flex bg-[#fff2d2] p-6 rounded-lg justify-center items-center'>
                        <div className="text-center">
                          <h2 className="text-center">No of Referral</h2>
                          <h2 className="font-bold text-xl">150</h2>
                        </div>
                      </div>
                    </Grid>
                  </Grid>

                </div>
                <div className="w-[90%] flex flex-nowrap space-x-2 overflow-x-scroll mx-auto md:hidden">
                  <div className='flex min-w-[90%] mx-auto bg-[#f1f1fd] p-6 rounded-lg justify-center items-center'>
                    <div className="text-center space-y-2">
                      <IconButton>
                        <AccountBalanceIcon className="text-blue-400" />
                      </IconButton>
                      <h2 className="text-center text-gray-400 font-semibold">Total Income</h2>
                      <h2 className="font-bold text-2xl">0</h2>
                    </div>
                  </div>
                  <div className=' bg-[#fff3f4] min-w-[90%] mx-auto p-6 rounded-lg justify-center items-center'>
                    <div className="text-center">
                      <IconButton>
                        <AccountBalanceIcon className="text-blue-400" />
                      </IconButton>
                      <h2 className="text-center text-gray-400 font-semibold">Total Withdrawal</h2>
                      <h2 className="font-bold text-xl">0</h2>
                    </div>
                  </div>
                  <div className=' bg-[#eaf4ff] min-w-[90%] mx-auto p-6 rounded-lg justify-center items-center'>
                    <div className="text-center">
                      <IconButton>
                        <AccountBalanceIcon className="text-blue-400" />
                      </IconButton>
                      <h2 className="text-center text-gray-400 font-semibold">Available Balance</h2>
                      <h2 className="font-bold text-xl">0</h2>
                    </div>
                  </div>
                  <div className=' bg-[#fff2d2] min-w-[90%] mx-auto p-6 rounded-lg justify-center items-center'>
                    <div className="text-center">
                      <IconButton>
                        <AccountBalanceIcon className="text-blue-400" />
                      </IconButton>
                      <h2 className="text-center text-gray-400 font-semibold">No of Referree</h2>
                      <h2 className="font-bold text-xl">0</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className='w-[95%] md-w-4/5 mx-auto p-2'>
                  <Grid container spacing={3} justifyContent="space-between">
                    <Grid item xs={12} md={7}>
                      <img src="/images/rename.png" className="object-contain" />
                      <div className="py-4 mt-2 w-full bg-white shadow-md">
                        <div className="p-4 w-full mx-auto">
                          <div className='w-full flex justify-between items-center'>
                            <h2 className="text-bold md:text-xl text-[16px]">Recent Transactions</h2>
                            <Link to="/dashboard/transactions"><p className="text-pink-400 cursor-pointer">View all</p></Link>
                          </div>
                          {Transactions && (
                            Transactions.slice(0, 4).map((transaction) => (
                              <div key={transaction.amount} className="px-2 py-4">
                                <div className='flex justify-between items-center text-center'>
                                  <div>
                                    <p>Withdrawal</p>
                                  </div>
                                  <div className='space-y-1'>
                                    <p className="text-gray-400">Date</p>
                                    <p>{transaction.date}</p>
                                  </div>
                                  <div className='space-y-1'>
                                    <p className="text-gray-400">Time</p>
                                    <p>{transaction.time}</p>
                                  </div>
                                  <div className='space-y-1'>
                                    <p className="text-gray-400">Amount</p>
                                    <p>{transaction.amount}</p>
                                  </div>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <div className="p-3 bg-white rounded-md w-full">
                        <div className="w-full mx-auto py-4">
                          <div>
                            <input className="bg-gray-100 w-full rounded-md py-2 px-2" placeholder='Search' />
                          </div>
                          <div className="py-4">
                            <div className="flex w-full items-center justify-between">
                              <h2 className='font-bold'>Downlines</h2>
                              <Link to="/dashboard/downlines">
                                <h2 className="text-pink-400 cursor-pointer">View all</h2>
                              </Link>
                            </div>
                            {downlines && (
                              downlines.map((downline) => (
                                <div key={downline.date} className='flex py-4 mt-3 w-full mx-auto items-center justify-between'>
                                  <div>
                                    <img src={downline.images} />
                                  </div>
                                  <div>
                                    <h2>{downline.name}</h2>
                                  </div>
                                  <div>
                                    <h2>{downline.price}</h2>
                                  </div>
                                  <div>
                                    <h2 className='text-gray-300'>{downline.time}</h2>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
              <div className="p-2  w-full mx-auto">
                <div className="px-3 py-4 w-full md:w-[95%] mx-auto bg-blue-500 rounded-lg">
                  <div className="w-[95%] mx-auto">
                    <Stack spacing={2}>
                      <p className="text-white">Referral Code</p>
                      <div className='flex md:flex-row flex-col items-center space-y-3 md:space-y-0 md:space-x-3 w-full'>
                        <div className='p-4 rounded-[20px] space-x-0 bg-white w-full md:w-3/5 flex justify-between items-center'>
                          <p className='text-gray-400 text-[10px] break-all'>https://www.shopazany.com/spencer244</p>
                          <div className='space-x-3 flex items-center'>
                            <p className='text-pink-400'>Copy</p>
                            <ContentCopyIcon className='text-pink-400' />
                          </div>
                        </div>
                        <div className='p-4 rounded-[20px bg-white md:w-2/5 w-full flex justify-between items-center'>
                          <div className="w-4/5 mx-auto flex justify-between items-center">
                            <WhatsAppIcon className="text-green-400" />
                            <FacebookIcon className="text-blue-400" />
                            <InstagramIcon className="text-pink-300" />
                            <TwitterIcon className="text-blue-300" />
                          </div>
                        </div>
                      </div>
                    </Stack>

                  </div>
                </div>
              </div>
              <SwipeableTemporaryDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
            </Stack>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default Dashboard;