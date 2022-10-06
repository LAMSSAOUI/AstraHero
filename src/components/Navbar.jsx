import { AppBar , Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { makeStyles } from '@mui/styles'
import React from 'react'
 


const Navbar = () => {

  return (
      <AppBar 
        color='inherit'
        position='sticky'
        variant="fullWidth"
        >
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