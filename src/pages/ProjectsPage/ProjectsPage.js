import React from "react";
import { Card, CardMedia, Typography, Divider, Grid, Box } from '@mui/material';
import ProjectImage from './images/ProjectImage.png';
import Biosensor from './images/Biosensor.png';
import Documentation from './images/Documentation.png';
import Placeholder1 from './images/Placeholder1.png';
import Placeholder2 from './images/Placeholder2.png';


function ProjectsPage() {
  return (
    <div>
    {/* Project Image */}
    <Card>
        <CardMedia 
        component= "img"
        alt= "Project Background Image"
        height= "500"   
        image= { ProjectImage }
        style = {{opacity: 1, zIndex: -1}}
        />
      </Card>
    {/* Project Page Description */}
    <Divider style= {{borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin:'30px 0', color: 'white' }}/>
    <Box m={4} style={{ margin: '0 auto', maxWidth: '60%' }}>
      <Typography variant="h6" align="center">
        Members of CWRU MedWish embark on ambitious projects which require the skills and experience they have acquired in class. These projects reinforce this information in an experiential way and allow members to practice planning, communication, and teamwork. Check out some of our current projects below!
      </Typography>
    </Box>
    <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin: '30px 0', color: 'white' }} />
      
      {/* Documentation */}
      {/* Image on left*/}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card style={{ padding: "76px", boxShadow : "none"}}>
            <CardMedia 
              component= "img"
              alt= "Documentation"
              image= { Documentation }
              style = {{opacity: 1, zIndex: -1}}
            />
            </Card>
        </Grid>
        {/* Text on right */}
        <Grid item xs={12} md={6}>
          <Card style={{ padding: "76px", boxShadow : "none"}}>
          <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="h1" component="div" style={{ color: "#22495F", fontWeight: "bold" }}>
              Documentation
            </Typography>
            <Divider flexItem style={{ flexGrow: 1, marginLeft: "16px", height: '50%', alignSelf: 'center', borderTopWidth: '2px', borderColor: "black"}} />
          </Box>
          <Typography variant="h5" component="div">
            <Box>The Boomerang Nebula, located roughly 5,000 light-years away from our solar system, has a temperature of 1 Kelvin (-272 °C or -460 °F) making it the coldest natural place in the universe humanity has discovered. First found in 1995 by astronomers in Chile, we have </Box>
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Biosensor */}
      {/* Text on left */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card style={{ padding: "76px", boxShadow : "none"}}>
          <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="h1" component="div" style={{ color: "#22495F", fontWeight: "bold" }}>
              Biosensor
            </Typography>
            <Divider flexItem style={{ flexGrow: 1, marginLeft: "16px", height: '50%', alignSelf: 'center', borderTopWidth: '2px', borderColor: "black"}} />
          </Box>
          <Typography variant="h5" component="div">
            <Box>The Boomerang Nebula, located roughly 5,000 light-years away from our solar system, has a temperature of 1 Kelvin (-272 °C or -460 °F) making it the coldest natural place in the universe humanity has discovered. First found in 1995 by astronomers in Chile, we have </Box>
            </Typography>
          </Card>
        </Grid>
        {/* Image on right */}
        <Grid item xs={12} md={6}>
          <Card style={{ padding: "76px", boxShadow : "none"}}>
            <CardMedia 
              component= "img"
              alt= "Biosensor"
              image= { Biosensor }
              style = {{opacity: 1, zIndex: -1}}
            />
            </Card>
        </Grid>
      </Grid>

      {/* Placeholder1 */}
      {/* Image on left*/}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card style={{ padding: "76px", boxShadow : "none"}}>
            <CardMedia 
              component= "img"
              alt= "Placeholder1"
              image= { Placeholder1 }
              style = {{opacity: 1, zIndex: -1}}
            />
            </Card>
        </Grid>
        {/* Text on right */}
        <Grid item xs={12} md={6}>
          <Card style={{ padding: "76px", boxShadow : "none"}}>
          <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="h1" component="div" style={{ color: "#22495F", fontWeight: "bold" }}>
              Placeholder1
            </Typography>
            <Divider flexItem style={{ flexGrow: 1, marginLeft: "16px", height: '50%', alignSelf: 'center', borderTopWidth: '2px', borderColor: "black"}} />
          </Box>
          <Typography variant="h5" component="div">
            <Box>The Boomerang Nebula, located roughly 5,000 light-years away from our solar system, has a temperature of 1 Kelvin (-272 °C or -460 °F) making it the coldest natural place in the universe humanity has discovered. First found in 1995 by astronomers in Chile, we have </Box>
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Placeholder2 */}
      {/* Text on left */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card style={{ padding: "76px", boxShadow : "none"}}>
          <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="h1" component="div" style={{ color: "#22495F", fontWeight: "bold" }}>
              Placeholder2
            </Typography>
            <Divider flexItem style={{ flexGrow: 1, marginLeft: "16px", height: '50%', alignSelf: 'center', borderTopWidth: '2px', borderColor: "black"}} />
          </Box>
          <Typography variant="h5" component="div">
            <Box>The Boomerang Nebula, located roughly 5,000 light-years away from our solar system, has a temperature of 1 Kelvin (-272 °C or -460 °F) making it the coldest natural place in the universe humanity has discovered. First found in 1995 by astronomers in Chile, we have </Box>
            </Typography>
          </Card>
        </Grid>
        {/* Image on right */}
        <Grid item xs={12} md={6}>
          <Card style={{ padding: "76px", boxShadow : "none"}}>
            <CardMedia 
              component= "img"
              alt= "Placeholder2" 
              image= { Placeholder2 }
              style = {{opacity: 1, zIndex: -1}}
            />
            </Card>
        </Grid>
      </Grid>
      </div>

  );
}

export default ProjectsPage;
