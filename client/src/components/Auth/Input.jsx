import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({name, handleShowPassword, handleChange, label, type, autoFocus, half }) => (
  <Grid item xs={12} xm={6} sm={half ? 6 : 12}>
    <TextField 
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      InputProps={ name === 'password' ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {type === 'password' ? <Visibility/> : <VisibilityOff/>}
            </IconButton>
          </InputAdornment>
        )
      } : null }
    />
  </Grid>


);

export default Input