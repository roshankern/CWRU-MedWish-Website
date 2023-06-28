// Footer.js
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Footer() {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      bgcolor="primary.main" 
      color="primary.contrastText" 
      py={2}
      borderTop={1}
      borderBottom={1}
      borderColor="black"
    >
      <Typography variant="body1" component="span" mx={2}>Instagram</Typography>
      <Divider orientation="vertical" flexItem sx={{ borderColor: 'black' }} />
      <Typography variant="body1" component="span" mx={2}>CampusGroups</Typography>
      <Divider orientation="vertical" flexItem sx={{ borderColor: 'black' }} />
      <Typography variant="body1" component="span" mx={2}>Facebook</Typography>
    </Box>
  );
}

export default Footer;
