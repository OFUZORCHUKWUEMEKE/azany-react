import { IconButton, Link, Stack } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NearMeIcon from '@mui/icons-material/NearMe';
import { Transactions } from '../components/data';
import MenuIcon from '@mui/icons-material/Menu';
import './Payments.css'
import SwipeableTemporaryDrawer from '../components/drawer';

const Payment = () => {
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
    return (
        <>
            <Layout>
                <div className='bg-gray-50 block md:hidden shadow-2xl p-3 w-full'>
                    <div className='w-4/5'>
                        <IconButton onClick={toggleDrawer("left", true)}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="w-full bg-gray-50 min-h-screen overflow-hidden md:py-10">
                    <Stack spacing={3}>
                        <div className='p-3 rounded-md md:w-[75%] w-full mx-auto bg-white'>
                            <div className='py-4 md:w-[90%] w-full mx-auto'>
                                <div className='flex items-center w-full flex-col md:flex-row justify-center md:space-x-6 space-y-4 md:space-y-0'>
                                    <div className='rounded-md p-2 flex justify-center items-center h-40 w-full md:w-[75%] imagesss'>
                                        <div className='w-full mx-auto py-4'>
                                            <div className='flex justify-center items-center md:w-full ml-5 md:ml-5'>
                                                <div className='md:w-full w-full  relative card_image mt-12'>
                                                    {/* <img src="/images/card.png" className='h-40 w-full relative'/> */}
                                                    <div className='absolute top-[40%] left-[10%] w-full text-white'>
                                                        <div className='w-full mx-auto'>
                                                            <p className='text-white font-bold text-xl'>50,000</p>
                                                            <p className='text-white  text-sm'>Available Balance</p>
                                                        </div>
                                                    </div>
                                                    <div className='absolute top-[40%] left-[60%] w-full text-white'>
                                                        <div className='p-3'>
                                                            <IconButton>
                                                                <VisibilityOffIcon className='text-white' />
                                                            </IconButton>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-1 border rounded-md border-pink-500 md:p-2 flex justify-center items-center cursor-pointer h-36 w-[80%] mx-auto md:w-[60%]'>
                                        <Link href="/payments/withdrawal" style={{ textDecoration: 'none' }}>
                                            <div className='w-4/5 mx-auto flex flex-col justify-center items-center cursor-pointer'>
                                                <div className='cursor-pointer flex flex-col justify-center items-center'>
                                                    <IconButton>
                                                        <NearMeIcon className='text-pink-600' />
                                                    </IconButton>
                                                    <p className='font-semi-bold text-black no-underline'>Withdraw</p>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </Stack>

                    <div className='p-3 md:w-[75%] w-full mx-auto bg-white mt-4'>
                        <div className="w-[90%] mx-auto">
                            <div className='py-3  space-x-4 flex items-center'>
                                <h2 className='font-bold'>Recent Transactions</h2>
                            </div>
                            {Transactions && (
                                Transactions.map((transaction) => (
                                    <div key={transaction.amount} className="px-2 py-4">
                                        <div className='flex justify-between items-center text-center'>
                                            <div>
                                                <p className='font-semibold'>Withdrawal</p>
                                            </div>
                                            <div className='space-y-1'>
                                                <p className="text-gray-400">Date</p>
                                                <p className='text-sm'>{transaction.date}</p>
                                            </div>
                                            <div className='space-y-1'>
                                                <p className="text-gray-400">Time</p>
                                                <p className='text-sm'>{transaction.time}</p>
                                            </div>
                                            <div className='space-y-1'>
                                                <p className="text-gray-400">Amount</p>
                                                <p className='text-sm'>{transaction.amount}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <SwipeableTemporaryDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} />

            </Layout>
        </>
    )
}

export default Payment