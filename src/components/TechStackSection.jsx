import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { navItems, techStack } from "../utils/Data";
import Marquee from "react-fast-marquee";

export const TechStackSection = () => {
  return (
    <Box sx={{background: "#05080F", width: "100%", padding: "48px 0"}}>
      <Container maxWidth="md" sx={{}}>
        <Typography variant="h3">My Tech Stack</Typography>
        <Typography sx={{margin: "24px 48px"}}>
          The tech stack that allow me to deliver innovative and scalable
          solutions across various domains and platforms.
        </Typography>
      </Container>
      <Box>
     
      <Marquee autoFill="true" direction="right">
          {techStack.map((item) => (
            <Box sx={{padding: "24px 48px"}}>
            <Paper className="paper" sx={{backgroundColor: "#171E2F"}}>
              <Box sx={{display: "grid"}}>
              <Box className="techTitle">{item.title}</Box>
              <Box className="techDesc">{item.dsc}</Box>
              </Box>
              <Box>{item.icon}  </Box>
            </Paper>
            
            </Box>
            
          ))}
          
        </Marquee>
        <Marquee autoFill="true" direction="left">
          {techStack.map((item) => (
            <Box sx={{padding: "24px 48px"}}>
            <Paper className="paper" sx={{backgroundColor: "#171E2F"}}>
              <Box sx={{display: "grid"}}>
              <Box className="techTitle">{item.title}</Box>
              <Box className="techDesc">{item.dsc}</Box>
              </Box>
              <Box>{item.icon}  </Box>
            </Paper>
            
            </Box>
            
          ))}
          
        </Marquee>
        
      </Box>
    </Box>
  );
};
