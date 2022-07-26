import React from'react';

const NavBar = () => {
  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
    </div>
  )
}