import { Stack, TextField } from '@mui/material'
import React from 'react'

const Password = () => {
    return (
        <>
            <div className='p-2 py-5'>
                <div className='md:w-4/5 w-full'>
                    <Stack spacing={3}>
                        <div>
                            <p className='text-gray-400'>You can change your password by filling the form</p>
                        </div>
                        <div className='space-y-3'>
                            <p>Old Password</p>
                            <TextField variant='outlined' className='md:w-4/5 w-full  outline-none bg-gray-100' placeholder='Enter password' />
                        </div>
                        <div className='space-y-3'>
                            <p>New Password</p>
                            <TextField variant='outlined' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Enter confirm password' />
                        </div>
                        <div className='space-y-3'>
                            <p>Confirm New Password</p>
                            <TextField variant='outlined' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Enter confirm password' />
                        </div>
                        <div className='space-y-3'>
                            <button className="bg-[#E51B48] rounded-lg md:w-4/5 w-full py-2 px-3 rounded- text-white" >Submit</button>
                        </div>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default Password