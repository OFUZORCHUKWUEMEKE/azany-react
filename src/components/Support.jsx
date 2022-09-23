import { Stack, TextareaAutosize, TextField } from '@mui/material'
import React from 'react'

const Support = () => {
    return (
        <>
            <div className='p-2 py-5'>
                <div className=' md:w-4/5 w-[90%]'>
                    <Stack spacing={3}>

                        <div className='space-y-3'>
                            <p>Support Ticket</p>
                            <TextField variant='outlined' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Support Ticket' />
                        </div>
                        <div className='space-y-3'>
                            <p>Message</p>
                            <TextField variant='outlined' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Type mesage' />
                            {/* <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Empty"
                                style={{ width: 200 }}
                                sx={{width:'80%',margin:'auto'}}
                            /> */}
                        </div>
                        <div className='space-y-3'>
                            <button className="bg-[#E51B48] w-4/5 py-2 px-3 rounded-lg text-white" >Submit</button>
                        </div>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default Support