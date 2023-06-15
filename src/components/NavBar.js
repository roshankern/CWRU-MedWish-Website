// NavBar.js
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" justifyContent="left" flexGrow={1}>
                    <Button color="inherit" component={RouterLink} to="/">Home</Button>
                </Box>
                <Box display="flex" justifyContent="center" flexGrow={1}>
                    <Button color="inherit" component={RouterLink} to="/about">About</Button>
                    <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>
                    <Button color="inherit" component={RouterLink} to="/events">Events</Button>
                    <Button color="inherit" component={RouterLink} to="/teams">Teams</Button>
                </Box>
                <Box display="flex" justifyContent="right" flexGrow={1}>
                    <Button color="inherit" component="a" href="https://community.case.edu/MedWish/club_signup" target="_blank" rel="noopener noreferrer">Join</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
