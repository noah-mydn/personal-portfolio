import { Box, Button, Link, TextField, Typography, Zoom } from '@mui/material';
import React from 'react'
import { FORMFIELD, SOCIALS } from '../data/contact';
import { theme } from '../style/theme';
import emailjs from '@emailjs/browser';
import styled from '@emotion/styled';
import { useSnackbar } from 'notistack';
import { motion } from 'framer-motion';

export const Contact = ({isMobile}) => {

    const [formData, setFormData]= React.useState({
        firstName:'',
        lastName:'',
        user_email:'',
        message:''
    });

    const { enqueueSnackbar } = useSnackbar()

    const contactFormData = React.useRef();

    function handleFormOnChange(event) {
        const {name, value} = event.target;
        setFormData(prevFormData => 
            ({...prevFormData, [name]: value}));
    }
    

    function sendEmail(e) {
        
        e.preventDefault();

        const isFormValid = Object.values(formData).every(value => value !== '');
        const isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.user_email);
    
        if (!isFormValid) {
            enqueueSnackbar('Please fill all the form fields!', { variant: 'error',
            autoHideDuration:3000, });
        } else if (!isEmailValid) {
            enqueueSnackbar('Please enter a valid email address!', { variant: 'error',
            autoHideDuration:3000, });
        } else {
        
            emailjs.sendForm('service_f8zngqe', 'noah_emailTemplate', contactFormData.current, 'aIlqBCghO9tJsXoQE')
              .then((result) => {
                  if(result.text!== null) {
                     enqueueSnackbar('Your message is sent successfully', 
                     {TransitionComponent: Zoom,
                      variant:'success',
                      autoHideDuration:3000,})
                    }
              });

              setFormData({firstName:'',lastName:'',user_email:'',message:''});

            }
    }

    const StyledButton = styled(Button) ({
            padding:'0.5em 1em',
            border:'1px solid transparent',
            background:theme.palette.primary.light,
            color:theme.palette.text.main,
            textAlign:'center',
            margin:'2em 0',

            '&:hover' : {
                background:'none',
                border:`1px solid ${theme.palette.primary.light}`
            }
    })

    

  return ( 
        <motion.div id='contact' 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}>
                <Box py={3} my={4}>
                        <Typography variant={isMobile ? 'h4' : 'h3'} color={theme.palette.text.main} pt={6}
                        textAlign='center'>
                            Get in touch!
                        </Typography>

                        <Box py={2} my={2} display='flex' width='100%' justifyContent='center'>
                            {SOCIALS.map((social)=> (
                                <Link href={social.link} key={social.id}
                                color={theme.palette.background.main}
                                sx={{
                                    textDecoration:'none',
                                    margin:"0.2em 0.3em",
                                    fontSize:20,      
                                    transistion:' transform 0.7s ease-in-out infinite',
                                    '&:hover' : {
                                    transform:'scale(1.3)',
                                    animation:'rotation 0.7s ease-in-out infinite'
                                    },

                                    '@keyframes rotation' : {
                                        from :{
                                            transform: 'rotate(0deg)',
                                        },
                                        to : {
                                            transform:' rotate(360deg)',
                                        },
                                    }
                                
                                }}>
                                    {social.icon}
                                </Link>
                            ))}
                        </Box>

                        <form onSubmit={sendEmail} ref={contactFormData} style={{
                            margin: '1em auto',
                            maxWidth:isMobile ? '330px' :'550px',
                            borderRadius:'1.5em',
                            width:'auto',
                            height:'auto',
                            background:'rgb(25, 28, 43)',
                            padding: isMobile ? '1.5em 1em' : '1.5em',
                            
                        }}>

                            {FORMFIELD.map((form_field)=> (
                                <Box px={3} py={2} width='100%' key={form_field.id}>
                                    <label for = {form_field.name} style={{
                                        fontSize:20,
                                        color:theme.palette.text.main,
                                        letterSpacing:'0.08em',
                                        padding:'.3em 0',
                                        display:'block',
                                        fontFamily:'Changa',
                                    }}>
                                        {form_field.label}
                                    </label>
                                    <TextField multiline={form_field.multiline}
                                    name={form_field.name} type={form_field.type}
                                    id={form_field.name} 
                                    key={form_field.name}
                                    hiddenlabel rows={form_field.rows}
                                    onChange={(e)=>{handleFormOnChange(e)}}
                                    value={formData[form_field.name]}
                                    size={isMobile ? 'small' : 'large'}
                                    sx={{
                                        width:'90%',

                                        "& .MuiInputBase-root" : {
                                            color:theme.palette.text.main,
                                            fontSize:18,
                                        },

                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                            borderColor: theme.palette.primary.light,
                                            },
                                            '&:hover fieldset': {
                                            borderColor: theme.palette.primary.dark,
                                            },
                                        }
                                    }}/>

                                </Box>
                            ))}

                            <Box width='100%' display='flex' justifyContent='center'>
                                <StyledButton type='submit' size={isMobile ? 'medium' : 'large'}>Send Message</StyledButton>
                            </Box>
                            
                        </form>
                </Box>
        </motion.div>
  )
}
