//AboutPage.js
import React from "react";

import { KeyboardDoubleArrowDown, Refresh, KeyboardDoubleArrowUp } from '@mui/icons-material';
import { Card, CardMedia, Typography, Divider, Grid, Box, autocompleteClasses, useMediaQuery, useTheme } from '@mui/material';
import About from './images/About.png';
import Recover from './images/Recover.png';
import Repurpose from './images/Repurpose.png';
import Redistribute from './images/Redistribute.png';
import Hands from './images/Hands.png';
import WhatYouDo from './images/WhatYouDo.png';
import Equal from './images/Equal.png';
import Environment from './images/Environment.png';
import "./AboutPage.css";


const TextIcon = ({ icon, text }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
                backgroundColor: '#7294B6',
                borderRadius: '50%',
                width: '90px',
                height: '90px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {React.cloneElement(icon, { style: { fontSize: '80px', fontWeight: 'bold' } })}
            </div>
            <div style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '20px' }}>
                <span>{text}</span>
            </div>
        </div>
    );
};




function AboutPage() {
    const videoID = 'dBmMT5bFjwI'
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('xs'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className="AboutPage">
            <img src={About} className="header-image" alt="Header" />

            {/* Events Page Description */}
            <div className="spacer"></div>
            <div className="spacer-line"> </div>

            <div className="text">
                <p>CWRU MedWish promotes healthcare equity on an international scale assisting MedWish International in processing medical devices. Our priority is to increase access to healthcare globally by repurposing locally donated medical equipment. CWRU MedWish assists in repairing and packaging priority medical devices for use in underserved regions. Our methods of device processing are based on a comprehensive and officially verified understanding of medical device guidelines.</p>
            </div>

            <div className="spacer-line"> </div>
            <div className="spacer"></div>

            <Typography variant="h1" sx={{ fontWeight: 600, color: '#6599CC' }}>
                WHAT WE DO
            </Typography>


            <div className="spacer"></div>

            {/* Holds the 3 Stickers for Recover, Repurpose, and Redistribute */}
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <TextIcon icon={<KeyboardDoubleArrowDown />} text="RECOVER" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextIcon icon={<Refresh />} text="REPURPOSE" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextIcon icon={<KeyboardDoubleArrowUp />} text="REDISTRIBUTE" />
                </Grid>
            </Grid>

            {/* Holds the What We Do Paragraph */}
            <Typography variant="body1"
                align="center"
                style={{
                    color: 'gray',
                    fontSize: "150%",
                    fontWeight: "450",
                    padding: '20px'
                }}
            >
                MedWish bridges the gap between abundance and absence, surplus, and scarcity. Our
                work improves access to quality healthcare while promoting enviromental
                stewardship.
            </Typography>
            <div className="spacer"></div>

            <div className="spacer-line"> </div>

            <div className="grid-title-group">
                <div className="grid-title">
                    <p>What You Can Do</p>
                </div>
                <div className="grid-title-line"></div>
            </div>


            <Grid container spacing={3}>
                <Grid container item xs={12} spacing={3} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src={Hands} />
                    </Grid>
                    <Grid item xs={12} md={6} className="grid-text">
                        <p>Get hands-on experience troubleshooting, repairing, and working with medical devices. We have a club workshop space in think[box] dedicated to device repair and modifications.</p>
                    </Grid>
                </Grid>

                <Grid container item xs={12} spacing={3} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src={Equal} />
                    </Grid>
                    <Grid item xs={12} md={6} className="grid-text">
                        <p>Help provide equal access to healthcare across the globe right here in Cleveland. Gain an in-depth understanding of medical device and the science behind their function.</p>
                    </Grid>
                </Grid>

                <Grid container item xs={12} spacing={3} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src={Environment} />
                    </Grid>
                    <Grid item xs={12} md={6} className="grid-text">
                        <p>Protect the environment by repurposing medical devices and supplies, thus, reducing the harmful effects of medical waste.</p>
                    </Grid>
                </Grid>
            </Grid>


            <img src={WhatYouDo} style={{ borderRadius: '20px', width: '40%', height: 'auto' }} />

            <div className="spacer"></div>
            <div className="spacer-line"> </div>
            <div className="spacer"></div>

            <div className="grid-title-group">
                <div className="grid-title-line"></div>
                <div className="grid-title">
                    <p>MedWish International</p>
                </div>
            </div>

            {/* Holds the MedWish International Paragraph */}
            <Typography variant="body1"
                style={{
                    fontFamily: 'Work Sans, sans-serif',
                    fontSize: "150%",
                    padding: '20px'
                }}
            >
                We work with the MedWish International organization to help those in need around the world. Visit MedWish International here and watch their video below to see how we assist the larger community.
            </Typography>

            <div style={{ padding: '20px' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden' }}>
                    <iframe
                        title="MedWish International Video"
                        src={`https://www.youtube.com/embed/${videoID}`}
                        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                    >
                    </iframe>
                </div>
            </div>



            <div className="spacer"></div>


        </div>
    )
};
export default AboutPage;