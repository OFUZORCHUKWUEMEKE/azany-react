import { Stack } from '@mui/material'
import React, { useState } from 'react'
import Switch from '@mui/material/Switch';
import BasicModal from './SecurityModal';
import ResponsiveDialog from './SecurityDialog';
import PinDialog from './PinDialog';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const TwoFactor = () => {
    const [open, setOpen] = React.useState(false);
    const [opened, setOpened] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClose = () => setOpen(false);
    const handleClickOpener = () => {
        setOpened(true);
      };
    const handleCloser = () => setOpened(false);
    const [checked, setChecked] = React.useState(false);
    const [pin,setPin] = useState(false)
    const handleTwoFA = async()=>{
        setChecked(true)
        setPin(false)
        handleClickOpen()
    }

    const handlePin = async()=>{
      setPin(true)
      setChecked(false)
      handleClickOpener()
    }
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
                            <Switch onClick={handleTwoFA} checked={checked} {...label} defaultChecked />
                        </div>
                        <div className='flex justify-between items-center'>
                            <h2  className='text-gray-400'>Set Pin</h2>
                            <Switch onClick={handlePin} {...label} checked={pin} />
                        </div>
                    </Stack>
                </div>
                {/* <BasicModal open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}/> */}
                <ResponsiveDialog open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
                <PinDialog open={opened} setOpen={setOpened} handleClickOpen={handleClickOpener} handleClose={handleCloser}/>
            </div>
        </>
    )
}

export default TwoFactor