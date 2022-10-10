import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {

    const [showProfile, setProfile] = useState(false);
    const [showSidebar, setSidebar] = useState("none");

    const { pathname } = useLocation();
    
    const showSideBar = () => {
        if (showSidebar === "none") {
            setSidebar("visible")
        }
        else if (showSidebar === "visible") {
            setSidebar("none")
        }
    }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
             {pathname === "/" ||
                                    pathname === "/admin" ||
                                    pathname === "/signup" ?
                                    null :
                                    <MenuIcon
                                        onClick={showSideBar}
                                    />}
            </IconButton>
           
          </Toolbar>
         
        </AppBar>
      </Box>
    </>
  );
};
