import React, { useState } from "react";

import MuiNavbar from "./components/MuiNavbar";
import MuiHomescreen from "./components/MuiHomescreen";
import MuiApplication from "./components/MuiApplication"; // Ensure this path is correct

import Box from "@mui/material/Box";

function App() {
  return (
    <Box>
      <MuiNavbar />

      <MuiHomescreen />
      <MuiApplication />
    </Box>
  );
}

export default App;
