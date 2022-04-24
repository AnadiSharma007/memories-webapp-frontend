import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core';
import { LockOutlinedIcon } from '@material-ui/icons/LockOpenOutlined'
import useStyles from './styles';
import Input from './Input';

const Auth = () => {

  const classes = useStyles();

  const isSignUp = false;

  const handleSubmit = () => {

  }

  const handleChange = () => {

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
            <Grid xs={6} md={12}>
                <Input name='firstname' label='First Name' handleChange={handleChange} autoFocus half/>
                <Input name='lastname' label='Last Name' handleChange={handleChange} autoFocus half/>
            </Grid>
            </>
          )}
        </Grid>
      </form>
      </Paper>
    </Container>
  )
}

export default Auth;