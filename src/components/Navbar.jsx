import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { Close } from '@mui/icons-material';
import { theme } from '../style/theme';

const drawerWidth = '100%';
const navItems = [{name:'Home', id:'#home'},
                  {name:'About',id:'#about'}, 
                  {name:'Portfolio', id:'#portfolio'},
                  {name:'Contact', id:'#contact'}];

function Navbar(props,) {


  const { window } = props;
  const isMobile = props.isMobile;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerClose} sx={{ textAlign: 'center' }}>
        <Box display='flex' justifyContent='flex-end'>
            <IconButton onClick={()=> setMobileOpen(false)}>
                <Close color='background'/>
            </IconButton>
        </Box>
        <List>
            {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
                <ListItemButton LinkComponent='true'
                href={item.id}
                sx={{ textAlign: 'center', 
                fontSize:18, 
                fontFamily:'Changa',
                margin:'0.3em',
                borderRadius:'1em',
                border:'1px solid white',
                color:'#fff' }}>
                <ListItemText primary={item.name} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" 
      sx={{background:'linear-gradient(to top, rgb(25, 28, 43) 6.8%, rgb(24, 39, 46) 131%)', 
      }}
      elevation={0} py={1}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href='#home' sx={{textDecoration:'none',
          flexGrow: 1, display: 'flex',
          color:theme.palette.text.main,
          justifyContent:isMobile ? 'center' : 'flex-start',}}>
            <Typography
              variant="h4"
              component="div"
              sx={{ 
              fontFamily:'LogoFont' }}
            >
              Yadanar
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'flex' },
            width:'370px',
            marginRight:'auto',
            justifyContent:!isMobile ? 'space-between' : '' }}>
            {navItems.map((item) => (
              <Link underline='none' key={item.id} href={item.id}
              sx={{ color: '#fff', fontSize:18,
                    border:'1px solid transparent',
                    borderRadius:'10px', 
                    fontFamily:'Changa',
                    padding:'0.5em 1em',
                    transistion:'border 1s ease-in-out',
                    '&:hover': {
                        border:'1px solid white'
                        }
                   }}>
                {item.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          elevation={0}
          anchor='top'
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': 
            { boxSizing: 'border-box', 
            width: drawerWidth,
            height:300,
            background:'none',
            backdropFilter:'blur(2px)' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}


export default Navbar;