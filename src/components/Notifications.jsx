import { Stack } from '@mui/material'
import React from 'react'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Notifications = () => {
    return (
        <>
            <div className='p-2 py-5'>
                <div className='md:w-4/5 w-full'>
                    <Stack spacing={4}>
                        <div>
                            <p className='text-gray-400'>You can turn on and off your notification</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h2>Email Notification</h2>
                            <Switch {...label} defaultChecked />
                        </div>
                        <div className='flex justify-between items-center'>
                            <h2>System Notification</h2>
                            <Switch {...label} defaultChecked />
                        </div>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default Notifications