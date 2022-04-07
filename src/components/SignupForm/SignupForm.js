import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Typography, Button, Grid } from '@mui/material';

import TextFieldInput from '../form_components/TextFieldInput/TextFieldInput';
import TextAreaInput from '../form_components/TextAreaInput/TextAreaInput';
import './SignupForm.css';

const SignupForm = () => {

    const {handleSubmit, control, reset} = useForm();

    const onSubmit = (data) => {
        axios.get('https://hack-tech-app-endpoint.herokuapp.com/test', {
            params: { ...data }
        }).then(result => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })

        reset();
    }

    return (
        <div className="SignupFormBody" onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='h4' marginBottom='25px'>
                Hack UCI Application
            </Typography>

            <form>
                <div className='SignupInput'>
                    <Typography variant='h6' style={{marginBottom: '10px', textAlign: 'left'}}>
                        Name
                    </Typography>
                    <TextFieldInput
                        name='name'
                        control={control}
                        label='Name'
                        value={/^.+$/}
                        required='Name required'
                    />
                </div>
                
                <div className='SignupInput'>
                    <Typography variant='h6' style={{marginBottom: '10px', textAlign: 'left'}}>
                        Email
                    </Typography>
                    <TextFieldInput
                        name='email'
                        control={control}
                        label='Email'
                        value={/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]))+$/}
                        required='Incomplete or invalid email address'
                    />
                </div>

                <div className='SignupInput'>
                    <Typography variant='h6' style={{marginBottom: '10px', textAlign: 'left'}}>
                        Fun Fact
                        </Typography>
                    <TextAreaInput
                        name='funfact'
                        control={control}
                        label='Fun Fact'
                        required='Fun fact required'
                        rows='3'
                    />
                </div>

                <div className='SignupButton'>
                    <Grid
                        container
                        direction='row-reverse'
                        justifyContent='flex-start'
                        alignItems='flex-start'
                    >
                        <Grid item xs='auto'>
                            <Button type="submit" variant="contained" color="primary" style={{
                                borderRadius: 20,
                                backgroundColor: '#ff7b5c',
                                color: 'white'
                            }}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;