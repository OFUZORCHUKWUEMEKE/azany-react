import { IconButton } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout'
import SettingsTabs from '../components/SettingsTabs'
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableTemporaryDrawer from '../components/drawer';
// import SettingsTabs from '../components/SettingsTab'

const Settings = () => {
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
        <div className='w-full bg-gray-50 min-h-screen md:py-10'>
          <div className='p-2 rounded-md md:w-4/5 w-full mx-auto min-h-screen bg-white'>
            <SettingsTabs />
          </div>
        </div>
        <SwipeableTemporaryDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
      </Layout>
    </>
  )
}
export default Settings