import React from 'react'
import { Grid, TextField, InputAdornment, IconButton} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const Input = ({name, label, autoFocus, type, handleChange, half, handleShowPassword}) => {
  return (
    <Grid item xs={12} xm={half ? 6 : 12}>
        <TextField 
         name={name}
         onChange={handleChange}
         variant="outlined"
         required 
         fullWidth
         label={label}
         autoFocus={autoFocus}
         type={type}
         InputProps={name === 'password' && {
             endAdornment: (
                 <InputAdornment position='end'>
                     <IconButton onClick={handleShowPassword}>
                         {type === "password" ? <Visibility/> : <VisibilityOff/>}
                     </IconButton>
                 </InputAdornment>
             )
         }}        
        
        />
    </Grid> 
  )
}

export default Input