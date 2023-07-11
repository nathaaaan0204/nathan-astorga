import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { navItems } from "../utils/Data";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";


export const NavBar = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <AppBar
          position="sticky"
          sx={{
            marginTop: "50px",
            background: "#212529",
            borderRadius: "10px",
            padding: "12px 24px",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <img
                src="/images/logo.png/"
                alt="Logo"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
              <Typography variant="body1">
                <Typewriter
                  sx={{ fontSize: "16px" }}
                  options={{
                    strings: ["Nathan", "Wonderful"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
            </Box>
            <Box>
              {navItems.map((item) => (
                <Button
                key={item} >
                  <Link style={{ color: "white" }} to={item.path}>{item.name}</Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};
