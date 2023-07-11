import { Box, Container, IconButton, Typography } from '@mui/material'
import React from 'react'
import { buttonIcon } from '../utils/Data'

export const Footer = () => {
  return (
    <Box 
    sx={{
        background: "#10101A",
        padding: "48px 0px",
      }}>
        <Container maxWidth="md" sx={{display: "flex", flexDirection: "column", gap: "24px"}}>
            <Typography variant="h3">
            Let’s be friends!👋
            </Typography>
            <Typography variant="body1">
            Connect with me and let’s have a chit chat online.
            </Typography>
            <Box >
          {buttonIcon.map((item) => (
            <IconButton color= "primary" sx={{marginRight: '24px'}}>
              {item.icon}
            </IconButton>
          ))}
        </Box>
        </Container>
    </Box>
  )
}
