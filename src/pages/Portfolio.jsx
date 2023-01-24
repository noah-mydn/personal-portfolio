import styled from '@emotion/styled'
import { Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import anime from 'animejs';
import React from 'react'
import { PROJECTS } from '../data/projects';
import { theme } from '../style/theme';
import { motion } from 'framer-motion';

export const Portfolio = ({isMobile}) => {

    // const [isLoading_one, setIsLoading_one] = React.useState(true);
    // const [isLoading_two, setIsLoading_two] = React.useState(true);
  
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

   const LanguageBox = styled(Box)({
     width: 'auto',
     height: 'auto',
     padding: '0.3em 1em',
     border: `1px solid ${theme.palette.primary.main}`,
     color: theme.palette.text.main,
     fontFamily: 'Changa',
     borderRadius:'2em',
     background: theme.palette.primary.main,
     margin:'0.5em',

     [theme.breakpoints.down('sm')] : {
        fontSize:14,
        margin:'0.5em 0.3em'
     }
   });

    const ImageContainer = styled(Box) ({
        position:'relative',
        transition: 'transform 0.3s ease-in-out',
        '&:hover' : {
            transform: 'translateX(20px) scale(1.1)',
          },

          [theme.breakpoints.down('sm')] : {
            '&:hover' : {
                transform: 'translateX(-5px) scale(1.1)',
              },
          }
    })

    const ProjectCard = styled(Card)({
        padding:'0.2em',
        borderRadius:'20px',
        maxWidth:'700px',
        height:'100%',
        background: 'rgb(25, 28, 43)',
        margin:'2em auto',

    })

    const StyledButton = styled(Button)({
        padding:'0.7em 1em',
        border:'1px solid #fff',
        textAlign:'center',
        color:'white',
        margin:'0.2em auto',
        width:'25%',
        transition: 'background .5s ease-in-out',
        '&:hover': {
            background: theme.palette.secondary.main,
          },
          [theme.breakpoints.down('sm')] : {
            width:'50%'
         }
    })

  
  

  return (
        <motion.div id='portfolio' 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}>
                <Box width='100%' id='portfolio' minHeight='100vh' mt={3} my={2} pt={8}>
                <Box
                    display='block'
                    width='100%'
                    height='100%'
                >

                    <Typography variant={isMobile? 'h4' :'h3'} color={theme.palette.text.main} textAlign='center' className='ml1'>
                        <span class="text-wrapper">
                            <span class="line line1"></span>
                            <span class="letters">Portfolio</span>
                            <span class="line line2"></span>
                        </span>
                                
                    </Typography>
                    

                    <Box display='flex' 
                    alignItems='center' px={1}
                    flexWrap='wrap'>
                        {PROJECTS.map((project)=>(
                            <ProjectCard elevation={4}>
                                <CardContent>
                                    <ImageContainer>
                                            <div class="image_stack_bottom">
                                            <LazyLoadImage
                                                alt={project.title}
                                                src={project.desktop_image} 
                                                effect='blur'
                                                delayTime='1000'
                                                className='bottom_img' />
                                                {/* <img src={project.desktop_image} alt={project.title} loading='lazy'/> */}
                                            </div>
                                            <div class="image_stack_top">
                                            <LazyLoadImage
                                                alt={project.title}
                                                src={project.phone_image} 
                                                effect='blur'
                                                delayTime='1000'
                                                className='top_img'
                                                width={isMobile ? '50%' : '80%'} />
                                               {/* <img src={project.phone_image} alt={project.title} loading='lazy'/>  */}
                                            </div>
                                    </ImageContainer>
                                    <Typography variant='h6' color={theme.palette.text.main} 
                                    textAlign='center' gutterBottom pt={4}>
                                        {project.title}
                                    </Typography>
                                    <Box display='flex' justifyContent='center' width='100%'>
                                        <LanguageBox>{project.codeLang}</LanguageBox>
                                        <LanguageBox>{project.framework[0]}</LanguageBox>
                                        {project.framework[1] && <LanguageBox>{project.framework[1]}</LanguageBox>}
                                        {project.framework[2] && <LanguageBox>{project.framework[2]}</LanguageBox>}
                                        {project.api && <LanguageBox>{project.api}</LanguageBox>}
                                    </Box>
                                </CardContent> 
                                <CardActionArea>
                                    <Box sx={{width:'100%'}} display='flex' justifyContent='center' my={1}>
                                        <StyledButton href={project.demoLink}>
                                                View Demo
                                        </StyledButton> 
                                    </Box>
                                </CardActionArea>                  
                            </ProjectCard>    
                        ))}
                    </Box>
                </Box>
                </Box>
        </motion.div>

  );
};
