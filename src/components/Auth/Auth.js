import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux'
import  LockOutlinedIcon  from '@material-ui/icons/LockOutlined'
import useStyles from './styles';
import Input from './Input';
import Icon from './icon';
import { AUTH } from '../../constants/actionTypes';

const Auth = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);

  const [isSignUp, setIsSignUp] = useState(false);

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  const changeMode = () => {
      setIsSignUp((prevIsSignUp) => !prevIsSignUp);
      handleShowPassword(false);
  }
  
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  }  

  const googleFailure = () => {
    console.log("Google Sign Up Failes. Try again later.")
  } 


  return (
    <Container component='main' maxWidth='sm'>
      <Paper className={classes.paper} elevation={3}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          { isSignUp && (
            <>
                <Input name='firstname' label='First Name' handleChange={handleChange} autoFocus half/>
                <Input name='lastname' label='Last Name' handleChange={handleChange}  half/>
            </>
          )}
          <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
          <Input name="password" label="Password" handleChange={handleChange} type={ showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
          { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
        </Grid>
        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
        <GoogleLogin 
          clientId='1091923164168-cmqfe0ktn3432jij0uf1vm351rabg375.apps.googleusercontent.com'
          render={(renderProps) => (
            <Button   className={classes.googleButton} color="primary"  fullWidth  onClick={renderProps.onClick}  disabled={renderProps.disabled}  startIcon={<Icon />}  variant="contained">
              Google Sign In
            </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={changeMode}>{ isSignUp ? "Already have an accout? Sign In" : "Don't have an account? Sign Up"}</Button>
            </Grid>
          </Grid>
      </form>
      </Paper>
    </Container>
  )
}

export default Auth;