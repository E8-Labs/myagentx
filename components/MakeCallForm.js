'use client'
import React, { useState } from 'react'
import PhoneNumberInput from './PhoneNumberInput'
import { Alert, CircularProgress, Slide, Snackbar, TextField } from '@mui/material'
import axios from 'axios'

const MakeCallForm = ({ closeForm }) => {

    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [loading, setLoading] = useState(false);
    const [snackMessage, setSnackMessage] = useState(false);

    const getPhoneNumber = (number) => {
        setPhoneNumber(number);
        console.log('Phone number recieved is', number);
    }

    //code for apicall
    const handleTalktoBlandy = async () => {
        setLoading(true);

        setTimeout(() => {
            closeForm()
        }, 5000);

        try {
            const axios = require('axios');
            let data = JSON.stringify({
                "name": userName,
                "lastName": userLastName,
                "email": userEmail,
                "phone": phoneNumber,
                "model": "1712788242190x897503015435501600"
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://fine-tuner.ai/api/1.1/wf/v2_voice_agent_call',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 1716566901317x213622515056508930'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.error('Error occured is :', error);
        } finally {
            setLoading(false);
            closeForm()
            console.log('Response is true');
        }
    }

    return (
        <div>
            <div>
                <div className='text-center' style={{ fontSize: 30, fontWeight: "600" }}>
                    Tristan.ai
                </div>
                <div className='mt-4'>
                    <TextField className='w-full'
                        autofill='off'
                        id="filled-basic"
                        label="First name" variant="outlined"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder='Enter first name'
                        sx={{
                            '& label.Mui-focused': {
                                color: '#050A0890',
                            },
                            '& .MuiFilledInput-root': {
                                // color: '#050A0860',
                                fontSize: 13,
                                fontWeight: '400'
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00000080',
                                },
                            },
                        }} />
                </div>
                <div className='mt-4'>
                    <TextField className='w-full'
                        autofill='off'
                        id="filled-basic"
                        label="Last name" variant="outlined"
                        value={userLastName}
                        onChange={(e) => setUserLastName(e.target.value)}
                        placeholder='Enter last name'
                        sx={{
                            '& label.Mui-focused': {
                                color: '#050A0890',
                            },
                            '& .MuiFilledInput-root': {
                                // color: '#050A0860',
                                fontSize: 13,
                                fontWeight: '400'
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#00000080',
                                },
                            },
                        }} />
                </div>
                <div className='mt-4'>
                    <TextField className='w-full'
                        autofill='off'
                        id="filled-basic"
                        label="Email" variant="outlined"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder='Enter email'
                        sx={{
                            '& label.Mui-focused': {
                                color: '#050A0890',
                            },
                            '& .MuiFilledInput-root': {
                                // color: '#050A0860',
                                fontSize: 13,
                                fontWeight: '400'
                            },//MuiOutlinedInput-rootMui-focused fieldset
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: "#00000080"
                                }
                            }
                        }} />
                </div>
                <div className='mt-4'>
                    <PhoneNumberInput phonenumber={getPhoneNumber} />
                </div>
                {
                    userName && userEmail && phoneNumber ?
                        <button
                            onClick={handleTalktoBlandy}
                            className='mt-4 bg-purple text-white hover:bg-purple2 w-full rounded py-2'>
                            {
                                loading ?
                                    <CircularProgress size={25} /> :
                                    <div style={{ fontSize: 15 }}>
                                        Make Call
                                    </div>
                            }
                        </button> :
                        <button
                            disabled
                            className='mt-4 bg-lightBlue bg-light-blue text-white w-full rounded py-2'
                            style={{ fontSize: 15 }}>
                            Make Call
                        </button>
                }

            </div>
        </div>
    )
}

export default MakeCallForm
