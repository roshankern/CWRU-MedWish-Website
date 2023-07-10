// NavBar.js
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Divider = () => <Box borderRight={1} borderColor="black" mx={2} />;

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" justifyContent="left" flexGrow={1}>
                    <Button color="secondary" component={RouterLink} to="/">Home</Button>
                </Box>
                <Box display="flex" justifyContent="center" flexGrow={1}>
                    <Button color="secondary" component={RouterLink} to="/about" sx={{ textTransform: 'none' }}>About</Button>
                    <Divider />
                    <Button color="secondary" component={RouterLink} to="/projects" sx={{ textTransform: 'none' }}>Projects</Button>
                    <Divider />
                    <Button color="secondary" component={RouterLink} to="/events" sx={{ textTransform: 'none' }}>Events</Button>
                    <Divider />
                    <Button color="secondary" component={RouterLink} to="/team" sx={{ textTransform: 'none' }}>Team</Button>
                </Box>
                <Box display="flex" justifyContent="right" flexGrow={1}>
                    <Button color="secondary" component="a" href="https://community.case.edu/MedWish/club_signup" target="_blank" rel="noopener noreferrer">Join</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
