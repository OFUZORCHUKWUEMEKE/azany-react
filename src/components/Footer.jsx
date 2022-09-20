import { IconButton, TextareaAutosize, TextField } from '@mui/material';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



const HomePagePro = () => {
  return (
    <>
      <div className='bg-[#0081FE] hidden min-h-[40vh] p-10 justify-center md:flex items-center'>
        <div className='relative'>
          <img src="/images/blob.png" className='w-[70%] mx-auto p-6' />
          <div className='absolute top-[35%] left-[20%] spacing-y-5'>
            <h2 className='text-2xl font-mono font-bold w-4/5 py-3'>Send us a message for more information</h2>
            <p className='py-2'>Sign up and enjoy all the advantages we offer you.</p>
            <div >
              <p>(470) 255-0365</p>
            </div>
            <div>
              <p>(470) 255-0365</p>
            </div>
          </div>
          <div className='absolute top-[-5%] left-[55%] spacing-y-5'>
            <div className='bg-white p-5 shadow-lg h-[68vh] w-[25vw] rounded-md'>
              <div className='w-[90%] mx-auto space-y-3 py-6'>
                <div className='space-y-3'>
                  <TextField variant='outlined' className='w-full mx-auto' placeholder='full name' />
                </div>
                <div className='space-y-3'>
                  <TextField variant='outlined' className='w-full mx-auto' placeholder='Enter Phone Number' />
                </div>
                <div className='space-y-3'>
                  <TextField variant='outlined' className='w-full mx-auto' placeholder='Enter Email Address' />
                </div>
                <div className='space-y-3'>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Minimum 3 rows"
                    className='w-full bg-gray-100 p-2'
                  />
                </div>
                <div className='py-4'>
                  <button className='bg-blue-600 text-white rounded-md py-2 px-4'>Submit</button>
                </div>
              </div>

            </div>
          </div>
          <div className='absolute bottom-[-7%] right-2 py-4'>
            <div className='flex items-center space-x-4'>
              <div className='bg-white h-50 rounded-full flex items-center justify-center'>
                <IconButton>
                  <WhatsAppIcon className="text-green-400" />
                </IconButton>
              </div>
              <div className='bg-white h-50 rounded-full flex items-center justify-center'>
                <IconButton>
                  <InstagramIcon className="text-red-400" />
                </IconButton>
              </div>
              <div className='bg-white h-50 rounded-full flex items-center justify-center'>
                <IconButton>
                  <FacebookIcon className="text-blue-400" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default HomePagePro;

const Foot = styled.div`
  height: 80vh;
  background: #0081FE;
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  
  position:relative;
  img {
    width: 80%;
    height: 60%;
    margin-top: 13rem;
    position: relative;
  }
`
const Absolute = styled.div`
  display: flex;
  position: absolute;
  align-items: flex-end;
  width: 60%;
  top: 10%;
  div{
    flex: 1;
    margin-bottom: 1rem;
    // h1 {
    //   font-size: 3.5rem;
    //   margin-bottom: 1.3rem;
    // }
    p {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`
const Forms = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 2rem;
  height: fit-content;
  border: 1px solid #e0e0e0;
  width: 30%;
  right: 15%;
  flex: 0.8;
  top: 13%;
  box-sizing: border-box;
  align-items: left;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
  }
  input {
    height: 3rem;
    top: 0;
    border-radius: 0.3rem;
    outline: none;
    border: 1px solid #0A142F;
  }
  textarea {
    border: 1px solid #0A142F;
    resize: none;
    outline: none;
    height: 15rem;
    border-radius: 0.3rem;
  }
  button {
    color: white;
    width: 8rem;
    height: 2.5rem;
    background: #0081FE;
    border-radius: 0.4rem;
    box-shadow: 0px 24px 34px rgba(32, 70, 100, 0.1);
    border: none;
    margin-top: 3rem;
  }
`;