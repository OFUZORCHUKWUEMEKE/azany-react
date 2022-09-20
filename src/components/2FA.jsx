import { Stack } from '@mui/material'
import React from 'react'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const TwoFactor = () => {
  return (
        <>
          <div className='p-2 py-5'>
                <div className='w-4/5'>
                    <Stack spacing={4}>
                        <div>
                            <h3 className='font-bold'>Set new Security question</h3>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h2  className='text-gray-400'>Set 2 Factor Authentication</h2>
                            <Switch {...label} defaultChecked />
                        </div>
                        <div className='flex justify-between items-center'>
                            <h2  className='text-gray-400'>Set Pin</h2>
                            <Switch {...label} defaultChecked />
                        </div>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default TwoFactor