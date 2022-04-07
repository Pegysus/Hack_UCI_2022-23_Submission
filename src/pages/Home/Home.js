import React from 'react';
import { Grid } from '@mui/material';
import petr from '../../petr.png';

import SignupForm from '../../components/SignupForm/SignupForm';
import './Home.css';

const Home = () => {


    return (
        <div className='HomePage'>
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    width = '70%'
                    spacing={2}
                    margin = 'auto'
                    className='HomePageBody'
                >

                    <Grid item sm={12} md={6}>
                        <SignupForm />
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <img className='PetrImage' src={petr} alt='' />
                    </Grid>

                </Grid>
        </div>
    );
};

export default Home;