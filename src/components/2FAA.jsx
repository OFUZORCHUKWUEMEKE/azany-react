import { Stack, TextField } from '@mui/material'
import React from 'react'

const TwoFAA = () => {
    return (
        <>
            <div className='p-2 py-5'>
                <div className='w-4/5'>
                    <Stack spacing={3}>
                        <div className='space-y-2'>
                            <h2>Set new security question</h2>
                            <p className='text-gray-400'>Set new security question</p>
                        </div>

                        <div className='space-y-3'>
                            <p>Set a Personal Security question</p>
                            <TextField variant='outlined' className='w-4/5 outline-none bg-gray-100' placeholder='e.g where did you grow up' />
                        </div>
                        <div className='space-y-3'>
                            <p>Enter the answer</p>
                            <TextField variant='outlined' className='w-4/5 outline-none bg-gray-100' placeholder='eg somewhere' />
                        </div>
                        <div className='space-y-3'>
                            <p>Please enter generated OTP</p>
                            <TextField variant='outlined' className='w-4/5 outline-none bg-gray-100' placeholder='Please enter generated OTP' />
                        </div>
                        <div className='space-y-3'>
                            <p>Enter your password</p>
                            <TextField variant='outlined' className='w-4/5 outline-none bg-gray-100' placeholder='Enter confirm password' />
                        </div>
                        <div className='space-y-3'>
                            <button className="bg-[#E51B48] w-4/5 py-2 px-3 rounded- text-white" >Submit</button>
                        </div>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default TwoFAA