import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import { Sidebar } from "../Sidebar/Sidebar";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

export const Navbar = () => {
  const [showProfile, setProfile] = useState(false);
  const [showSidebar, setSidebar] = useState("none");

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleProfileShow = () => {
    if (!showProfile) {
      setProfile(true);
    }
  };

  const handleProfileHide = () => {
    if (showProfile) {
      setProfile(false);
    }
  };
  const showSideBar = () => {
    if (showSidebar === "none") {
      setSidebar("visible");
    } else if (showSidebar === "visible") {
      setSidebar("none");
    }
  };
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
              pathname === "/signup" ? null : (
                <MenuIcon onClick={showSideBar} />
              )}
            </IconButton>
            <Sidebar showSidebar={showSidebar} showSideBar={showSideBar} />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Student Management
            </Typography>
            <Button color="inherit">
              {pathname !== "/" &&
              pathname !== "/admin" &&
              pathname !== "/signup" ? (
                <CircleNotificationsIcon />
              ) : null}
            </Button>
            <Button
              color="inherit"
              onMouseOver={handleProfileShow}
              onMouseOut={handleProfileHide}
            ></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
