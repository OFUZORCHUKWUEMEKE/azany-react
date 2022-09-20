import { Stack, TextField } from '@mui/material'
import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const Earnings = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <div className='p-2 py-5'>
                <div className='md:w-4/5 w-full'>
                    <Stack spacing={3}>
                        <div>
                            <p className='text-gray-400'>You can change your password by filling the form</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='space-y-2 flex-1'>
                                <h2>Bank Withdrawal</h2>
                                <p className='text-gray-400'>The cash value of your earnings would be sent directly to your registered bank account</p>
                            </div>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="male" control={<Radio />}/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='space-y-2 flex-1'>
                                <h2>Commission</h2>
                                <p className='text-gray-400'>The commission will be calculated based on the transaction that occurs on the vendors account</p>
                            </div>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="male" control={<Radio />}  />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='space-y-2 flex-1'>
                                <h2>Azany Virtual Card</h2>
                                <p className='text-gray-400'>The cash value will be sent to your  Azany Virtual card</p>
                            </div>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="male" control={<Radio />} />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default Earnings