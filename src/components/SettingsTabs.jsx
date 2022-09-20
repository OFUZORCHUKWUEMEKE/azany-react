import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Password from './Password';
import Notifications from './Notifications';
import KYC from '../pages/KYC';
import Earnings from './Earnings';
import TwoFactor from './2FA';
import Support from './Support';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SettingsTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Password" {...a11yProps(0)} />
                    <Tab label="Notification" {...a11yProps(1)} />
                    <Tab label="KYC" {...a11yProps(2)} />
                    <Tab label="Earning Options" {...a11yProps(3)} />
                    <Tab label="Update 2FA" {...a11yProps(4)} />
                    <Tab label="Support" {...a11yProps(5)} />
                    {/* <Tab label="KYC" {...a11yProps(6)} /> */}
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Password/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Notifications/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <KYC/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Earnings/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <TwoFactor/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Support/>
            </TabPanel>
        </Box>
    );
}
