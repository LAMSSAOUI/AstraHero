import { Typography } from '@mui/material'
import React from 'react'
import heroImg from '/public/heroimg.png'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    title : {
        padding:'50px'
    },
    subTitle : {

    },
    Img : {
        width:'50px',
        height:'50px'
    }
})

const Hero = () => {
    const classes = useStyles()

  return (
    <div>
        <div>
            <Typography
                className={classes.title}
                variant='h3'
            >
                Lorem ipsum imen,
            </Typography>
            <Typography
                className={classes.subTitle}
                >
                Lorem ipsum dolor sit amet, consectetur elit adipiscing elit, sed do eiusmod tempor incididunt
            </Typography>  
        </div>
        <div >
            <img src={heroImg} alt='heroImg' className={classes.Img} />
        </div>
        

    </div>
  )
}

export default Hero