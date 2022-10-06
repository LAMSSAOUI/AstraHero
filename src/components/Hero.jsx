import { Container, Typography } from '@mui/material'
import React from 'react'
import heroImg from '/public/heroimg.png'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button';

const useStyles = makeStyles(() => {
    return {
    title : {
        textIndent:"435px",
        marginBottom:'10px'
    },
    subTitle : {
        textIndent:"240px",

    },
    Img : {
        width:'230px',
        height:'230px',
        marginLeft : '40%',
        marginTop : '10%',
        marginBottom:'10px'
    },
     btn : {
        marginTop:'20px',
        marginLeft:'500px'
     }
} 
})

const Hero = () => {
    const classes = useStyles()

  return (
    <Container className={classes.root}>
         <div>
            <img src={heroImg} alt='heroImg' className={classes.Img} />
        </div>
        <div> 
            <Typography
               
                variant='h4'
                
            >
                <div className={classes.title}>Lorem ipsum imen,</div>
            </Typography>
            <Typography
                className={classes.subTitle}
                >
                Lorem ipsum dolor sit amet, consectetur elit adipiscing elit, sed do eiusmod tempor incididunt
            </Typography>  
        </div>
       <div className={classes.btn}>
       <Button variant="outlined" >Get Started</Button>
       </div>

    </Container>
  )
}

export default Hero