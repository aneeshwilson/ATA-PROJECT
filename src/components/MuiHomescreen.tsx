import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

export const MuiHomescreen = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column", // Stack elements vertically
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full height to center vertically
        paddingY: 4, // Adds padding on top and bottom
      }}
    >
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>
          Jeremiah 29:11
        </Typography>
        <Typography variant="h6" color="inherit">
          "For I know the plans I have for you," declares the Lord, "plans to
          prosper you and not to harm you, plans to give you hope and a future."
        </Typography>
      </Box>
      
      {/* Box for buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Stack buttons vertically
          width: "100%",
          maxWidth: "400px", // Limit max width for better aesthetics
          marginTop: "20px",
        }}
      >
        <a>
          <Button
            sx={{
              width: "100%", // Make the button full width
              marginBottom: "10px", // Space between the buttons
            }}
            variant="contained" // Add some button styling
          >
            Join in Membership
          </Button>
        </a>
        <a>
          <Button
            sx={{
              width: "100%", // Make the button full width
            }}
            variant="contained" // Add some button styling
          >
            Apply for Accreditation
          </Button>
        </a>
      </Box>
    </Container>
  );
};

export default MuiHomescreen;
