import { AppBar , Tab, Tabs, makeStyles, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
 

 
const Navbar = () => {

  return (
      <AppBar 
        color='inherit'>
        <Container>
        <Toolbar>
          <Typography
            variant='h5'
            align='left'
            >
            Logo . 
          </Typography> 
        
          <Tabs
            textColor="inherit"
            sx={{marginLeft:'auto'}}
            >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
        </Container> 
      </AppBar>
     
  )
}

export default Navbar