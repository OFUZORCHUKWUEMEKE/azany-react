import React from 'react'
import { downlines, Transactions } from '../components/data'
import Layout from '../components/Layout'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom'

const Downlines = () => {
    return (
        <Layout>
            <div className="w-full md:bg-gray-50 bg-white min-h-screen  md:px-2">
                <div className="bg-white w-full mx-auto">
                    <div className="w-[95%] mx-auto">
                        <div className='py-3  space-x-4 flex items-center'>
                            <Link to="/dashboard">
                                <IconButton>
                                    <KeyboardBackspaceIcon />
                                </IconButton>
                            </Link>
                            <h2 className='font-semibold'>Downlines</h2>
                        </div>
                        {downlines && (
                            downlines.map((downline) => (
                                <div key={downline.date} className='flex py-4 mt-3 w-full mx-auto items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <img src={downline.images} />
                                        <h2>{downline.name}</h2>
                                    </div>
                                    <div>
                                        <h2>{downline.price}</h2>
                                    </div>
                                    <div>
                                        <h2 className='text-gray-300'>{downline.time}</h2>
                                    </div>
                                    <div>
                                        <h2>{downline.date}</h2>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Downlines