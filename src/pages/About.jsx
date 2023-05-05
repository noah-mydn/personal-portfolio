import styled from '@emotion/styled'
import { Box, Button, Typography, Link } from '@mui/material'
import anime from 'animejs/lib/anime.es.js'
import React from 'react'
import { theme } from '../style/theme'
import {motion} from 'framer-motion'

export const About = ({isMobile, isTablet}) => {

  const skills = ['HTML5', 'CSS3', 'JavaScript' , 'Jquery' , 'React', 'Bootstrap', 'MUI', 'Angular', 'MySQL', 'MongoDB', 'NodeJS', 'ExpressJS', 'Python']


  React.useEffect(()=>{


    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    //Create observer
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=> {
            if(entry.isIntersecting) {
                anime.timeline({loop:false})
                .add({
                    targets: '.ml1 .letter',
                    scale: [0.3,1],
                    opacity: [0,1],
                    translateZ: 0,
                    easing: "easeOutExpo",
                    duration: 600,
                    delay: (el, i) => 70 * (i+1)
                }).add({
                    targets: '.ml1 .line',
                    scaleX: [0,1],
                    opacity: [0.5,1],
                    easing: "easeOutExpo",
                    duration: 700,
                    offset: '-=875',
                    delay: (el, i, l) => 80 * (l - i)
                });
            }
        });
    });
        observer.observe(textWrapper);
        return () => observer.disconnect();
    
       },[])

  const OuterStyledBox = styled(Box) ({
    maxWidth:'780px',
    width:'auto',
    height:'auto',
    padding:'0.5em',

    [theme.breakpoints.down('md')] : {
      maxWidth:'600px',
    },

    [theme.breakpoints.down('sm')] : {
      maxWidth:'480px',
    }
  })

  const InnerStyledBox = styled(Box)({
    margin:'0 auto',
    padding:'0.5em',
    borderRadius:'50%',
    width:'180px',
    height:'180px',
    backgroundSize:'cover',
    backgroundImage:'url(../assets/yadanar.jpeg)',

    [theme.breakpoints.down('sm')]: {
      width:'150px',
      height:'150px',
    }
  })

  return (
      <motion.div id='about' 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}>
        <Box mb={4} 
            sx={{
            margin:'2em 0',
            display:'flex',
            alignItems:'center',
            minHeight:'100vh',
            width:'100%',
        }}>
          
            <Box display='block' margin='0 auto' pt={4}>
            <Typography variant={isMobile? 'h4' :'h3'} pt={4}
            color={theme.palette.text.main} textAlign='center' className='ml1' pb={1}>
                <span class="text-wrapper">
                    <span class="line line1"></span>
                    <span class="letters">About Me</span>
                    <span class="line line2"></span>
                </span>
                        
            </Typography>
              <OuterStyledBox my={3}>
                <InnerStyledBox  my={3}/>
                <Typography variant={isTablet ? 'body1' :'h6'} color={theme.palette.text.main}
                  lineHeight='1.4em' px={isMobile ? 1 : 0} py={2}
                  fontWeight='300' gutterBottom>
                  I am a highly motivated junior front-end web developer, mostly working with
                  JavaScript, specifically utilizing React libraries. Despite limited industry experience,
                  I have previously gained valuable skills and knowledge through my internship as a React developer. 
                  I am actively seeking full-time opportunities to further develop and apply my web 
                  programming abilities in a practical setting.

                  </Typography>
                  <Typography variant='h5' textAlign='left' gutterBottom color={theme.palette.text.main}>My Skills</Typography>
                  <Box display='flex' justifyContent='space-evenly' border='1px solid white'
                  flexWrap='wrap' px={2} py={4} mt={2}>
                    {skills.map((skill)=> (
                        <Box display='flex'  px={2} py={0.3} my={1} bgcolor={theme.palette.primary.dark}                
                        borderRadius='1em' flex={isMobile ? '0 0 18%' :'0 0 15%'} justifyContent='center'>
                          <Typography variant='body1' component='caption' color='#fff' textAlign='center'>
                            {skill}                  
                          </Typography> 
                        </Box>
                      
                    ))}
                  </Box>
                  <Box width='100%' py={2} mt={4} display='flex' justifyContent='center'>
                    <Link href='../assets/resume.pdf' download='May Yadanar Resume' sx={{
                      textDecoration:'none',
                    }}>
                      <Button mt={3} mb={2} size={isMobile ? 'small' : 'large'}
                      sx={{
                        padding:'0.3em 1.3em',
                        border:'1px solid transparent',
                        background:theme.palette.primary.dark,
                        color:theme.palette.text.main,
                        fontSize:18,

                        '&:hover' : {
                          background:'transparent',
                          border:`1px solid ${theme.palette.primary.dark}` 
                        }
                      }}>
                        Download Resume
                      </Button>
                    </Link>
                  </Box>
              </OuterStyledBox>
            </Box>

        </Box>
    </motion.div>
  )
}
