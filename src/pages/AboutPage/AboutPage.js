// AboutPage.js
import React from "react";
import { Card, CardMedia, Typography, Divider } from '@mui/material';
import About from '../Images/About.png';

function AboutPage() {
    return (
    <div>
        {/* holds the image and about text  */}
    <Card>
         {/* holds the header image */}
        <CardMedia 
        component= "img"
        alt= "About Background Image"
        height= "500"   
        image= {About}
        style = {{opacity: 1, zIndex: -1, filter: 'brightness(0.5)'}}
        />
        {/* holds the about text */}
        <Typography
        variant='h2'
        style= {{
            position: 'absolute',
            top: '35%',
            left: '45%',
            color: "white",
            fontWeight: '520'
            // fontFamily: 'Work Sans'
        }}
        >
        About
        </Typography>
    </Card>
    {/* the first dividing line */}
    <Divider style= {{borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin:'30px 0', color: 'white' }}/>
    {/* holds the text about Medwish */}
    <Typography variant= "h6"
    align= 'center'
     style= {{
        position: 'absolute',
        right: '20%',
        left: '20%',
        // fontFamily: 'Work Sans'
     }}
        >CWRU MedWish promotes healthcare equity on an international scale assisting MedWish International in processing medical devices. Our priority is to increase access to healthcare globally by repurposing locally donated medical equipment. CWRU MedWish assists in repairing and packaging priority medical devices for use in underserved regions. Our methods of device processing are based on a comprehensive and officially verified understanding of medical device guidelines.</Typography>
       {/* the second dividing line */}
      <Divider style= {{borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin:'255px 0', color: 'white' }}/>
      </div>
    );
}

export default AboutPage;
