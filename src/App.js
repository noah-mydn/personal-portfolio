import React from "react";
import './App.css'
import {theme} from './style/theme'
import Navbar from "./components/Navbar";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { SnackbarProvider } from "notistack";
import { AnimatePresence } from "framer-motion";

function App() {

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={2}>
        <div>
          <Navbar isMobile={isMobile}/>
          <AnimatePresence>
              <Home isMobile={isMobile} isTablet={isTablet}/>
              <About isMobile={isMobile} isTablet={isTablet}/>
              <Portfolio isMobile={isMobile} />
              <Contact isMobile={isMobile} />
          </AnimatePresence>
          <Footer/>
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
