import { Box, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../style/theme'

export const Footer = () => {
  return (
    <Box width='100%'>
        <Box py={2}>
            <Typography variant='caption' component='h6' color={theme.palette.text.main}
            textAlign='center' fontFamily='Changa' fontWeight='normal'>
                Created by <a href='https://github.com/noah-mydn'
                style={{textDecoration:'none',
                        color:theme.palette.secondary.main,}}> May Yadanar </a>&copy; 2023 | All rights reserved.
            </Typography>
        </Box>
    </Box>
  )
}
