import React, { useState, useEffect} from'react';
import { Link } from 'react-router-dom';
import {  AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';

import useStyle from './styles';
import memories from '../../images/memories.png';

const Navbar = () => {
  const classes = useStyle();
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    const clientId = user?.clientId;

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [user?.clientId])



  return(
  <AppBar className={classes.appBar} position="static" color="inherit">
    <div>
      <Typography component={ Link } to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
      <img className={classes.image} src={memories} alt="memories" height="60" />
    </div>
    <Toolbar className={classes.toolbar}>
      {user ? (
        <div className={classes.profile}>
          <Avatar className={classes.purple} alt={user.decoded.name} src={user.decoded.picture}>{user.decoded.name.charAt(0)}</Avatar>
          <Typography className={classes.userName} variant="h6" >{user.decoded.name}</Typography>
          <Button className={classes.logout} variant="contained" color="secondary">Logout</Button>
        </div>
      ) : (
        <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
      )}
    </Toolbar>
  </AppBar>
    
  );
};

export default Navbar;