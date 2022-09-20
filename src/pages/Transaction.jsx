import React from 'react'
import { Transactions } from '../components/data'
import Layout from '../components/Layout'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom'
const Transaction = () => {
    return (
        <>
            <Layout>
                <div className="w-full bg-gray-50 min-h-screen md:py-10 md:px-4">
                    <div className="bg-white w-full mx-auto">
                        <div className="w-[90%] mx-auto">
                            <div className='py-3  space-x-4 flex items-center'>
                                <Link to="/dashboard">
                                    <IconButton>
                                        <KeyboardBackspaceIcon />
                                    </IconButton>
                                </Link>
                                <h2 className='font-semibold'>Recent Transactions</h2>
                            </div>
                            {Transactions && (
                                Transactions.map((transaction) => (
                                    <div key={transaction.type} className="px-2 py-4">
                                        <div className='flex justify-between items-center text-center'>
                                            <div>
                                                <p className='font-semibold'>Withdrawal</p>
                                            </div>
                                            <div className='space-y-2'>
                                                <p className="text-gray-400">Date</p>
                                                <p className='text-sm'>{transaction.date}</p>
                                            </div>
                                            <div className='space-y-2'>
                                                <p className="text-gray-400">Time</p>
                                                <p className='text-sm'>{transaction.time}</p>
                                            </div>
                                            <div className='space-y-2'>
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
            </Layout>
        </>
    )
}

export default Transaction