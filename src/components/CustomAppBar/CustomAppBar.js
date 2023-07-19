// CustomAppBar.js
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MedWishLogo from './CustomAppBar_MedWishLogo.png';

const Divider = () => <Box borderRight={1} borderColor="black" mx={2} />;

function CustomAppBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" justifyContent="left">
                    <Button color="secondary" component={RouterLink} to="/" startIcon={<img src={MedWishLogo} alt="MedWish Logo" style={{ height: "50px", objectFit: 'contain' }} />} />
                </Box>

                <Box display="flex" justifyContent="center" flexGrow={2}>
                    <Button color="secondary" component={RouterLink} to="/about" sx={{ textTransform: 'none' }}>About</Button>
                    <Divider />
                    <Button color="secondary" component={RouterLink} to="/projects" sx={{ textTransform: 'none' }}>Projects</Button>
                    <Divider />
                    <Button color="secondary" component={RouterLink} to="/events" sx={{ textTransform: 'none' }}>Events</Button>
                    <Divider />
                    <Button color="secondary" component={RouterLink} to="/team" sx={{ textTransform: 'none' }}>Team</Button>
                </Box>

                <a 
    href="https://community.case.edu/MedWish/club_signup"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}  // Removes underline from the link
>
    <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="#00355E"
        borderRadius="16px"
        px={2}
        py={1}
        width="100px"
        cursor="pointer"  // Changes the cursor to a hand when hovering over the box
    >
        <Button
            color="primary"
            sx={{ textTransform: 'none' }}  // No uppercasing of the text
        >
            Join
        </Button>
    </Box>
</a>
            </Toolbar>
        </AppBar>
    );
}

export default CustomAppBar;
