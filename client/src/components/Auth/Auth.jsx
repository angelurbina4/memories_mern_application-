import React, { useState } from 'react';
import {Avatar, Button,Paper, Typography, Container, Grid, TextField, InputAdornment } from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOpenOutlined';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';
import Input from './Input';
import Calendly from '../Calendly/Calendly';

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = () => {

  };

  const handleChange = () => {

  };

  const switchMode = () => {
    setIsSignup((prevSignUp) => !prevSignUp);
    handleShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const decoded = jwt_decode(res.credential);
    const clientId = res?.clientId;
    console.log(decoded);
    console.log(decoded.picture);
    try {
      dispatch({ type: 'AUTH', data: { decoded, clientId} });
      
      navigate('/', {replace: true});
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try again later.");
  };
  
  
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutLinedIcon/>
        </Avatar> 
          <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              { isSignup && (
                  <>
                    <Input name='firstName' label="First Name" handleChange={handleChange}  autoFocus half />
                    <Input name='lastName' label="Last Name" handleChange={handleChange}  half />
                  </>
                )}
                <Input name='email' label="Email Address" handleChange={handleChange} type="email"/>
                <Input  name='password' label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
            <GoogleLogin
              buttonText="Login"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              inSignedIn={true}
            />
            <Grid container justifyContent='flex-end'>
              <Button onClick={switchMode} className={classes.changeModeButton}>
                { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </form>
      </Paper>
      <Grid item xs={12} sm={6}>
        <Calendly/>
      </Grid>
    </Container>
  );
};

export default Auth
