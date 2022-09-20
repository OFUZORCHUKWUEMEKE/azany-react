import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import SwipeableTemporaryDrawer from './drawer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { gsap, Power3 } from 'gsap'
import { useEffect } from 'react';
const Hero = () => {
    let logoref = useRef(null)
    let register = useRef(null)
    let login = useRef(null)
    let earn = useRef(null)
    let manage = useRef(null)
    let referral = useRef(null)
    let image = useRef(null)
    const [age, setAge] = React.useState('');
    const t1 = gsap.timeline()
    const handleChange = (event) => {
        setAge(event.target.value);
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
    // useEffect(()=>{
    //     t1.from([logoref,register,login],{
    //         y:-10,
    //         opacity: 0,
    //         stagger:{
    //             amount:.4
    //         },
    //         ease:Power3.easeInOut()
    //     })
    //     t1.from([earn,referral,manage],{
    //         y:-10,
    //         opacity: 0,
    //         stagger:{
    //             amount:.4
    //         },
    //         ease:Power3.easeInOut()
    //     })
    //     t1.from(image,{
    //         scale: 1.4,
    //         opacity: 0,
    //         ease:Power3.easeInOut()
    //     })
    // },[])
    return (
        <>
            <div classNmae="relative">
                <nav className="w-4/5 mx-auto py-2">
                    <div className='flex justify-between items-center'>
                        <h2 className='text-pink-400 font-bold text-2xl font-mono'>Azany</h2>
                        <div className='block md:hidden'>
                            <IconButton onClick={toggleDrawer("left", true)}>
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <div className="md:flex hidden items-center justify-between space-x-6">
                            <div className=''>
                                <FormControl className='w-16 h-12'>
                                    <InputLabel id="demo-simple-select-label">EN</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                        className="w-20 h-12"
                                    >
                                        <MenuItem value={10}>EN</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <Link to="/register"><button className="bg-[#E51B48] py-2 px-6 rounded-md text-white" >Register</button></Link>
                            <Link to="/login"><button className='py-2 px-8 border border-[#E51B48] rounded-md text-[#E51B48]' >Login</button></Link>
                        </div>
                    </div>
                </nav>
                <div className='py-4 mt-2 space-y-3 w-full'>
                    <h1 className='mdtext-4xl text-2xl font-bold text-center' >Earn Money From Our Networking</h1>
                    <h1 className='md:text-4xl text-2xl font-bold text-center' >And Referral System</h1>
                </div>
                <p className='text-center text-gray-500 mt-2' >Manage multiple affiliate programs, track affiliate partner performance, assign commissions and issue payouts on one</p>
                <div className='flex justify-end w-full mt-6'>
                    <div className="flex justify-center  w-4/5  items-end bg-gray-200 rounded-l-[50px]">
                        <img src="/images/azany.png" className="md:w-[50%] w-full" />
                    </div>
                </div>
                <SwipeableTemporaryDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
            </div>
        </>
    )
}

export default Hero;