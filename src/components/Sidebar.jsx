import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Sidebar = () => {
   const navigate = useNavigate()
   const token = JSON.parse(localStorage.getItem('token'))
   const LogOut = async () => {

      const headers = {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
      }
      try {
          const response = await axios.post(`https://azany-affiliate.urbantour.org/public/api/auth/logout`, {}, { headers: headers })
          console.log(response.data)
          localStorage.removeItem('token')
          navigate('/')
      } catch (error) {
          console.log(error.response)
      }


      console.log('processing....')
  }

   return (
      <>
         <div className="min-h-screen shadow-sm bg-white w-[25%]  fixed">
            <div className='min-h-screen flex justify-center items-center w-4/5 mx-auto'>
               <div className='w-full flex flex-col justify-center items-center'>
                  <div className="space-y-2 w-full flex flex-col items-center justify-center">
                     <img alt="" src="/images/dashboard.png" className='object-cover' />
                     <h2 className='font-bold text-center'>Damola Spencer</h2>
                  </div>
                  <div className='space-y-2 p-2 w-full'>
                     {/* <Link to="/dashboard"> */}
                     <div className='w-full'>
                        <Link to="/dashboard">
                           <div className='py-3 px-2 flex items-center justify-between space-x-3 cursor-pointer text-gray-400 hover:shadow-sm mx-auto  hover:bg-white  w-3/5 hover:text-pink-500'>
                              <DashboardIcon />
                              <h2 className='flex-1 text-center'>Dashboard</h2>
                           </div>
                        </Link>

                     </div>

                     {/* </Link> */}
                     {/* <Link to="/payments"> */}

                     <div className="w-full">
                        <Link to="/payments">
                           <div className='py-3 px-2 flex items-center justify-between  space-x-6 cursor-pointer text-gray-400 hover:shadow-sm hover:bg-white w-3/5 mx-auto hover:text-pink-500'>
                              <AccountBalanceWalletIcon />
                              <h2 className='flex-1 text-center'>Payment</h2>
                           </div>
                        </Link>
                     </div>



                     {/* </Link> */}
                     {/* <Link to="/settings"> */}
                     <div className='w-full'>
                        <Link to="/settings">
                           <div className='py-3 px-2 flex items-center space-x-6 justify-between cursor-pointer text-gray-400 hover:shadow-sm  hover:bg-white w-3/5 mx-auto hover:text-pink-500'>
                              <SettingsIcon />
                              <h2 className='flex-1 text-center'>Settings</h2>
                           </div>
                        </Link>

                     </div>

                     {/* </Link> */}
                     {/* <Link to="/profile"> */}
                     <div className='w-full'>
                        <Link to="/profile">
                           <div className='py-3 px-2 flex items-center justify-between space-x-3 cursor-pointer text-gray-400  w-3/5 hover:text-pink-500 mx-auto  hover:shadow-sm'>
                              <AccountCircleIcon />
                              <h2 className='flex-1 text-center'>Profile</h2>
                           </div>
                        </Link>

                     </div>

                     {/* </Link> */}
                     <div onClick={LogOut} className='py-3 px-2 mx-auto flex items-center justify-between space-x-3 cursor-pointer text-gray-400  w-3/5 hover:text-pink-500 hover:shadow-sm'>
                        <LogoutIcon />
                        <h2 className='flex-1 text-center'>Log Out</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Sidebar;