import { Stack } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
const Customer = () => {
  return (
    <>
      <div className="bg-[#f7f3f4] py-8 w-full">
        <div className='md:w-4/5 w-full mx-auto flex-col md:flex-row flex items-center justify-between'>
          <div className="flex-1">
            <Stack spacing={2}>
              <div className="md:w-4/5 w-[95%] mx-auto rounded-[40px] bg-white shadow-md py-4">
                <div className="sm:w-4/5 w-[90%] mx-auto">
                  <div className="flex justify-between items-center">
                    <div className="space-y-4 flex-1">
                      <p className="text-gray-400">Rating</p>
                      <Rating name="read-only" value={4} readOnly />
                    </div>
                    <div className="space-y-3 flex-1">
                      <p className="text-gray-400">Reviewed</p>
                      <p className='text-gray-500'>20,September 2022</p>
                    </div>
                  </div>
                  <div className="py-4">
                    <p className='hidden md:block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit rem quibusdam quaerat officia excepturi eos similique ipsam totam voluptate</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam illo nulla consequatur? Hic facilis culpa suscipit odio quam voluptate.</p>
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <div className="w-[90%] md:w-4/5flex-col-reverse md:flex-row mx-auto bg-white rounded-lg py-3">
                  <div className="w-3/5 mx-auto flex items-center justify-between">
                    <Avatar alt="Remy Sharp" src="/images/azany.png" />
                    <h2>Victory <span className="text-gray-400"> From Kenya</span></h2>
                  </div>
                </div>
              </div>

              <div>

              </div>
            </Stack>
          </div>
          <div className="space-y-6 w-[90%] mx-auto py-6 flex-1">
            <h1 className="text-4xl">Excellent Customer Support</h1>
            <p>Our five star customer success team is smart, friendly and quick to help you 24/7.</p>
            <button className='bg-[#E51B48] py-2 px-8 text-white rounded-md'>Register</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Customer;