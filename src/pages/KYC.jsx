import { CircularProgress, IconButton, Stack, TextField } from '@mui/material'
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import KycDialog from '../components/KycDialog';
import axiosJwt from '../components/utils';
const KYC = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const [id_type, setIdType] = React.useState('');
    const [startDate, setStartDate] = useState(new Date());
    const handleChanges = (event) => {
        setIdType(event.target.value);
    };
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const inputRef = useRef()
    const [images, setImages] = useState()
    const [id_document, setDocument] = useState()
    const [loading, setLoading] = useState(false)
    const [upload, setUpload] = useState(false)
    const handleImage = () => {
        inputRef.current.click()
    }
    // const handleChange = (e) => {
    //     setImages(e.target.files[0])
    //     setDocument(e.target.files[0])
    //     console.log(e.target.files[0])
    //     handleOpen()
    // }
    // console.log(id_document)



    useEffect(() => {
        setImages(images)
    }, [images])

    const [state, setState] = useState({
        name: '',
        date_of_birth: startDate.toISOString(),
        nationality: '',
        country_of_resident: '',
        city: '',
        phone: '',
        id_number: ''
    })

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        try {
            console.log('Processing......')
            console.log({ ...state, id_document })
            console.log(id_document)
            const formdata = new FormData()
            formdata.append('name',state.name)
            formdata.append('date_of_birth',state.date_of_birth)
            formdata.append('nationality',state.nationality)
            formdata.append('country_of_resident',state.country_of_resident)
            formdata.append('city',state.city)
            formdata.append('phone',state.phone)
            formdata.append('id_type',id_type)
            formdata.append('id_number',state.id_number)
            formdata.append('id_document',id_document)
            const response = await axiosJwt.post(`https://azany-affiliate.urbantour.org/public/api/auth/kyc_update`, formdata)
            console.log(response.data)
            toast.success('Account Successfully Updated', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.response)
        }
        // console.log({ id_document, ...state, id_type })
    }

    return (
        <>
            <div className='p-2 py-5'>
                <div className='md:w-4/5 w-full'>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3}>

                            <div>
                                <p className='text-gray-400'>Please verify your identity</p>
                            </div>
                            <div className='space-y-3'>
                                <p>Full Name</p>
                                <TextField variant='outlined' name='name' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Enter Fullname' required onChange={onChange} />
                            </div>
                            <div className='space-y-3'>
                                <p>Date of Birth</p>
                                {/* <TextField variant='outlined' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Enter Date of Birth' /> */}
                                <DatePicker selected={startDate} className='md:w-4/5 w-full outline-none p-3 bg-gray-100' onChange={(date) => setStartDate(date)} />
                            </div>
                            <div className='space-y-3'>
                                <p>Nationality</p>
                                <TextField name='nationality' variant='outlined' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Enter Nationality' required onChange={onChange} />
                            </div>
                            <div className='space-y-3'>
                                <p>Country of Residence</p>
                                <TextField variant='outlined' name="country_of_resident" className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Source' required onChange={onChange} />
                            </div>
                            <div className='space-y-3'>
                                <p>City</p>
                                <TextField variant='outlined' name="city" onChange={onChange} className='md:w-4/5 w-full outline-none bg-gray-100' required placeholder='Enter City' />
                            </div>
                            <div className='space-y-3'>
                                <p>Phone Number</p>
                                <TextField variant='outlined' name="phone" onChange={onChange} className='md:w-4/5 w-full outline-none bg-gray-100' required placeholder='Enter Phone Number' />
                            </div>
                            <div className='space-y-3'>
                                <p>Document Number</p>
                                <TextField variant='outlined' name='id_number' className='md:w-4/5 w-full outline-none bg-gray-100' placeholder='Enter Document Number' required onChange={onChange} />
                            </div>
                            <div className='space-y-3'>
                                <FormControl className='md:w-4/5 w-full mx-auto'>
                                    <InputLabel id="demo-simple-select-label">Document Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={id_type}
                                        label="Document Type"
                                        onChange={(e) => {
                                            setIdType(e.target.value)
                                            console.log(e.target.value)
                                        }
                                        }
                                        required
                                    >
                                        <MenuItem value="PVC">PVC</MenuItem>
                                        <MenuItem value="NIN">NIN</MenuItem>
                                        <MenuItem value="Drivers Licence">Drivers Licence</MenuItem>
                                        <MenuItem value="National Id">National Id</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                            <div className='space-y-3'>
                                {upload && images ? (
                                    <>
                                        <div className='p-2 border-2 border-[#E51B48] border-dotted w-3/5'>
                                            <img onChange={(e) => console.log(e.target.files[0])} src={URL.createObjectURL(images)} className="h-44 w-full" />
                                        </div>
                                        {/* Replace Button */}
                                        {/* <div>
                                       <button className='py-2 px-4 bg-[#E51B48] rounded-md text-white' onClick={handleImage}>Replace</button>
                                   </div> */}
                                    </>

                                ) : (
                                    <div className='h-40 md:w-3/5 w-full flex justify-center items-center border-2 border-[#E51B48] border-dotted cursor-pointer' onClick={handleImage}>
                                        <div className='space-y-3 flex justify-center items-center flex-col'>
                                            <input type="file" ref={inputRef} className="hidden" onChange={(e) => {
                                                // handleChange()
                                                setImages(e.target.files[0])
                                                setDocument(e.target.files[0])
                                                handleClickOpen()
                                            }} />
                                            <IconButton>
                                                <FileUploadIcon className='text-[#E51B48]' />
                                            </IconButton>
                                            <p className='text-gray-400'>Click to Upload</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='space-y-3'>
                                <button type='submit' className={loading ? `text-white w-full rounded-md bg-[#74454f] py-2 px-4` : `text-white bg-[#E51B48] w-full rounded-md  py-2 px-4`} >
                                    {loading ? (
                                        <div className='flex items-center justify-center'>
                                            <CircularProgress className='text-green-500' />
                                        </div>
                                    ) : (
                                        <p>Submit</p>
                                    )}
                                </button>
                            </div>
                            {/* <KycModal open={open} handleClose={handleClose} handleOpen={handleOpen} image={images} setUpload={setUpload} upload={upload} /> */}
                            <KycDialog open={open} handleClose={handleClose} handleClickOpen ={handleClickOpen} image={images} setUpload={setUpload} upload={upload}/>
                        </Stack>
                    </form>

                </div>
            </div>
        </>
    )
}

export default KYC