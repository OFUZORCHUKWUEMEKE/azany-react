import { IconButton, Stack } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ResponsiveDatePickers from '../components/datePicker';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableTemporaryDrawer from '../components/drawer';
const DownlineSort = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (
        <>
            <Layout>
                <div className='bg-gray-50 block md:hidden shadow-2xl p-3 w-full'>
                    <div className='w-4/5'>
                        <IconButton onClick={toggleDrawer("left", true)}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="w-full bg-gray-50 min-h-screen md:py-10">
                    <div className="w-full bg-gray-50 min-h-screen md:py-3">
                        <Stack spacing={2}>
                            <div className='p-4 rounded-md md:w-4/5 min-h-screen w-full mx-auto bg-white'>
                                <div className="space-y-3 w-[90%] mx-auto">
                                    <div>
                                        <Link to="/profile/downline">
                                            <IconButton>
                                                <ArrowBackIcon />
                                            </IconButton>
                                        </Link>
                                    </div>
                                    <div className='p-3 space-y-3'>
                                        <div className="flex space-x-6 items-center">
                                            <p>Date From :</p>
                                            <ResponsiveDatePickers />
                                        </div>
                                        <div className="flex space-x-12 items-center">
                                            <p>Date To :</p>
                                            <ResponsiveDatePickers />
                                        </div>
                                    </div>
                                </div>
                                <div className='md:w-3/5 w-full mx-auto py-10'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex space-x-3 items-center'>
                                            <Checkbox
                                                checked={checked}
                                                onChange={handleChange}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                            <p>Current Week</p>
                                        </div>
                                        <div className='flex space-x-3 items-center'>
                                            <Checkbox
                                                checked={checked}
                                                onChange={handleChange}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                            <p>Yesterday</p>
                                        </div>
                                        <div className='flex space-x-3 items-center'>
                                            <Checkbox
                                                checked={checked}
                                                onChange={handleChange}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                            <p>Last Week</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-3/5 mx-auto py-4'>
                                    <div className='flex items-center'>
                                        <div className='flex space-x-3 items-center'>
                                            <Checkbox
                                                checked={checked}
                                                onChange={handleChange}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                            <p>Current Month</p>
                                        </div>
                                        <div className='flex space-x-3 items-center'>
                                            <Checkbox
                                                checked={checked}
                                                onChange={handleChange}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                            <p>Last Month</p>
                                        </div>

                                    </div>
                                    <SwipeableTemporaryDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
                                </div>
                            </div>
                        </Stack>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default DownlineSort