import React, { useState, MouseEvent } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Menu,
  MenuList,
  MenuItem,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Brightness4, Brightness7 } from "@mui/icons-material";

// Custom Link Wrapper to apply styles to links globally
const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} style={{ textDecoration: "none", color: "inherit" }}>
    {children}
  </a>
);

function MuiNavbar() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const openMenu = (event: MouseEvent<HTMLElement>) =>
    setAnchorNav(event.currentTarget);
  const closeMenu = () => setAnchorNav(null);
  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  // Create a theme based on the current mode
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          {/* Logo - Desktop */}
          <ExternalLink href="https://ybcbta.com/">
            <IconButton
              color="inherit"
              size="large"
              edge="start"
              aria-label="logo"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              ATA
            </IconButton>
          </ExternalLink>

          {/* Buttons - Desktop */}
          <Box sx={{ marginLeft: "auto", display: { xs: "none", md: "flex" } }}>
            <ExternalLink href="https://mui.com/material-ui/getting-started/">
              <Button color="inherit">Home</Button>
            </ExternalLink>
            <Button color="inherit">Contact US</Button>
            <Button color="inherit">About US</Button>
            <Button color="inherit">Login</Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton color="inherit" size="large" onClick={openMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorNav}
              open={Boolean(anchorNav)}
              onClose={closeMenu}
            >
              <MenuList>
                <ExternalLink href="https://mui.com/material-ui/getting-started/">
                  <MenuItem onClick={closeMenu}>Home</MenuItem>
                </ExternalLink>
                <MenuItem onClick={closeMenu}>Contact US</MenuItem>
                <MenuItem onClick={closeMenu}>About Us</MenuItem>
                <MenuItem onClick={closeMenu}>Login</MenuItem>
              </MenuList>
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <ExternalLink href="https://ybcbta.com/">
            <IconButton
              color="inherit"
              size="large"
              aria-label="logo"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              ATA
            </IconButton>
          </ExternalLink>

          {/* Dark Mode Toggle */}
          <IconButton
            sx={{ marginLeft: "auto", color: "inherit" }}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default MuiNavbar;
