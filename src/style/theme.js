import {createTheme} from '@mui/material';

export const theme= createTheme({
    palette: {
        primary:{
            main:'#6200ee'
        },

        secondary: {
            main:'#b00020'
        },

        text: {
            main:'#efefef'
        },

        background:{
            main:'#696880'
        },
    },

    typography: {
        fontFamily:"'Changa','LogoFont'", 
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
    }

})