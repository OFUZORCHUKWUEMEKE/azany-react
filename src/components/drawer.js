import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Link, redirect, useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
export default function SwipeableTemporaryDrawer({ toggleDrawer, state, setState }) {
    const {state:user,dispatch} = React.useContext(UserContext)
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
    console.log(user)
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Stack spacing={2}>
                {token ? (
                    <div className='p-2 w-full py-10 mb-6 space-y-4 flex flex-col  items-center min-h-screen'>
                        <div className='space-y-3'>
                            {/* <img alt="" src="/images/dashboard.png" className='object-cover' /> */}
                            <p className='font-bold'>{user?.name}</p>
                        </div>
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
                        <div onClick={LogOut} className='py-3 px-2 flex items-center justify-between space-x-3 cursor-pointer text-gray-400  w-3/5 hover:text-pink-500 hover:shadow-sm'>
                            <LogoutIcon />
                            <h2 className='flex-1 text-center'>Log Out</h2>
                        </div>
                    </div>
                ) : (
                    <div className='p-2 w-full py-10 mb-6 space-y-4 flex flex-col  items-center min-h-screen'>
                        <div className='space-y-6'>
                            <div>
                                <h2 className='text-xl font-bold text-pink-500'>Welcome To Azany</h2>
                            </div>
                            <Link to="/login" >
                                <div className='py-6 px-2 mt-8  flex items-center justify-between space-x-6 cursor-pointer hover:shadow-sm hover:bg-white w-3/5 hover:text-pink-500'>
                                    <LoginIcon />
                                    <h2 className='flex-1 text-center text-gray-500'>Login</h2>
                                </div>
                            </Link>
                            <Link to="register">
                                <div className='py-6 px-2 flex items-center justify-between space-x-6 cursor-pointer  hover:shadow-sm hover:bg-white w-3/5 hover:text-pink-500'>
                                    <AccountCircleIcon />
                                    <h2 className='flex-1 text-center text-gray-500'>Register</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                )}

            </Stack>
        </Box>
    );

    return (
        <div>
            {/* {['left', 'right', 'top', 'bottom'].map((anchor) => ( */}
            {/* // <React.Fragment key={anchor}> */}
            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <SwipeableDrawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
            >
                {list()}
            </SwipeableDrawer>
            {/* // </React.Fragment> */}
            {/* //   ))} */}
        </div>
    );
}
