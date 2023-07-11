import { Box, Container, Stack } from "@mui/material";
import "./App.css";
import { NavBar } from "./components/NavBar";

import { MainRoutes } from "./MainRoutes";
function App() {
  return (
    <>
      
        <Box>
          <NavBar />
          <MainRoutes />
        </Box>
      
    </>
  );
}

export default App;
