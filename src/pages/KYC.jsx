import { IconButton, Stack, TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useEffect, useRef, useState } from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import KycModal from '../components/KycModal';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const KYC = () => {
    const [age, setAge] = React.useState('');
    const [startDate, setStartDate] = useState(new Date());
    const handleChanges = (event) => {
        setAge(event.target.value);
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const inputRef = useRef()
    const [images, setImages] = useState()

    const [upload, setUpload] = useState(false)
    const handleImage = () => {
        inputRef.current.click()
    }
    const handleChange = (e) => {
        setImages(e.target.files[0])
        handleOpen()
    }

    useEffect(() => {
        setImages(images)
    }, [images])

    return (
        <>
            <div className='p-2 py-5'>
                <div className='md:w-4/5 w-full'>
                    <Stack spacing={3}>
                        <div>
                            <p className='text-gray-400'>Please verify your identity</p>
                        </div>
                        <div className='space-y-3'>
                            <p>Full Name</p>
                            <TextField variant='outlined' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Enter Fullname' />
                        </div>
                        <div className='space-y-3'>
                            <p>Date of Birth</p>
                            {/* <TextField variant='outlined' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Enter Date of Birth' /> */}
                        </div>
                        <div className='space-y-3'>
                            <p>Nationality</p>
                            <TextField variant='outlined' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Enter Nationality' />
                        </div>
                        <div className='space-y-3'>
                            <p>Country of Residence</p>
                            <TextField variant='outlined' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Source' />
                        </div>
                        <div className='space-y-3'>
                            <p>City</p>
                            <TextField variant='outlined' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Enter City' />
                        </div>
                        <div className='space-y-3'>
                            <p>Phone Number</p>
                            <TextField variant='outlined' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Enter Phone Number' />
                        </div>
                        <div className='space-y-3'>
                            <p>Document Number</p>
                            <TextField variant='outlined' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Enter Document Number' />
                        </div>
                        <div className='space-y-3'>
                            <FormControl className='md:w-4/5 w-full mx-auto'>
                                <InputLabel id="demo-simple-select-label">Document Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Document Type"
                                    onChange={handleChanges}
                                >
                                    <MenuItem value={10}>PVC</MenuItem>
                                    <MenuItem value={20}>NIN</MenuItem>
                                    <MenuItem value={30}>Drivers Licence</MenuItem>
                                    <MenuItem value={30}>National Id</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='space-y-3'>
                            {upload && images ? (
                                <>
                                    <div className='p-2 border-2 border-[#E51B48] border-dotted w-3/5'>
                                        <img src={URL.createObjectURL(images)} className="h-44 w-full" />
                                    </div>
                                    {/* Replace Button */}
                                    {/* <div>
                                        <button className='py-2 px-4 bg-[#E51B48] rounded-md text-white' onClick={handleImage}>Replace</button>
                                    </div> */}
                                </>

                            ) : (
                                <div className='h-40 md:w-3/5 w-full flex justify-center items-center border-2 border-[#E51B48] border-dotted cursor-pointer' onClick={handleImage}>
                                    <div className='space-y-3 flex justify-center items-center flex-col'>
                                        <input type="file" ref={inputRef} className="hidden" onChange={handleChange} />
                                        <IconButton>
                                            <FileUploadIcon className='text-[#E51B48]' />
                                        </IconButton>
                                        <p className='text-gray-400'>Click to Upload</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='space-y-3'>
                            <button className="bg-[#E51B48] md:w-4/5 w-full py-2 px-3 rounded-lg text-white" >Submit</button>
                        </div>
                        <KycModal open={open} handleClose={handleClose} handleOpen={handleOpen} image={images} setUpload={setUpload} upload={upload} />
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default KYC