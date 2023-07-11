import React from "react";
import { Typography, IconButton, Container, Box, Button } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import { buttonIcon } from "../utils/Data";


const HomePage = () => {
  return (
    <Container maxWidth= "md">
      <Box
        sx={{
          marginTop: "120px",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            gap: "24px",
          }}
        >
          <Typography variant="h1" component="h1">
            I’M NATHAN WONDERFUL😎
          </Typography>
          <Typography variant="body1" component="p">
            Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with PROJECTS and lines of code, turning zeroes and
            ones into immersive, interactive experiences. 
            <br/>
            <br/>
            Bona fide photochromic
            LENS enthusiast - sunlight or indoors, I've got it covered. I tread
            the path of minimalism, finding beauty in simplicity and order. When
            I'm not crafting beautiful web experiences, you can find me reading
            ARTICLES or swaying to the rhythm of Pop Music & Jazz, losing myself
            in the captivating flow of melodies. anyways you can CONTACT ME
          </Typography>
        </Box>
        <Box>
          <Button endIcon={<EastIcon sx={{ marginLeft: '50px'}}/>} 
          >
                       See more about me
          </Button>
        </Box>
        <Box >
          {buttonIcon.map((item) => (
            <IconButton color= "primary" sx={{marginRight: '24px'}}>
              {item.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
  
    </Container>
     
  );
};

export default HomePage;
