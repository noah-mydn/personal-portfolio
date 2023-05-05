import { Box, Typography } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { theme } from "../style/theme";
import { motion } from "framer-motion";

export const Home = ({ isMobile, isTablet }) => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Box
        sx={{ minHeight: isMobile ? "65vh" : "80vh", height: "auto" }}
        pt={5}
        mt={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Typography
            variant="h4"
            component="h4"
            gutterBottom
            width="98%"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              alignItems: "center",
              justifyContent: "center",
            }}
            color={theme.palette.text.main}
          >
            Mingalarbar! &nbsp;
            <TypeAnimation
              sequence={["I'm May Yadanar", 2000, "I'm a Web Developer", 2000]}
              cursor="true"
              repeat={Infinity}
              style={{
                textAlign: "center",
                width: { sm: "90%", md: "85%" },
                color: theme.palette.primary.main,
                fontSize: isMobile ? "0.9em" : isTablet ? "1.5em" : "2em",
              }}
            />
          </Typography>
          <Typography
            variant="subtitle1"
            component="h6"
            textAlign="center"
            py={1}
            width="80%"
            color={theme.palette.background.main}
          >
            The one who fancies reading/watching Harry Potter and listening to
            Before You Exit
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};
