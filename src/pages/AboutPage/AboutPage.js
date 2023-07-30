//AboutPage.js
import React from "react";
import { Card, CardMedia, Typography, Divider, Grid, Box, autocompleteClasses, useMediaQuery, useTheme } from '@mui/material';
import About from '../Images/About.png';
import Recover from '../Images/Recover.png';
import Repurpose from '../Images/Repurpose.png';
import Redistribute from '../Images/Redistribute.png';
import Hands from '../Images/Hands.png';
import WhatYouDo from '../Images/WhatYouDo.png';
import Equal from '../Images/Equal.png';
import Environment from '../Images/Environment.png';


function AboutPage() {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('xs'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.down('md'));

    return (
        // Overall container for page
        <Box sx={{ flexGrow: 1 }} boxShadow={"none"}>
            {/* Holds the About Header Image */}
            <Grid container direction="row" spacing={2} boxShadow={"none"}>
                <Grid xs={12} style={{ position: 'relative', marginTop: '17px', marginBottom: '12px' }}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="About Image"
                            image={About}
                            style={{ height: "auto" }}
                        />
                    </Card>
                </Grid>
                {/* Holds the First Dividing Line */}
                <Grid xs={12} marginRight={5}>
                    <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', color: 'white', position: "relative", left: "25px", right: "130px", marginLeft: "18px", marginRight: "10px", marginTop: "10px" }} />
                </Grid>
                {/* Holds the About Intro Paragraph */}
                <Grid xs={8} style={{ marginTop: "17px", marginBottom: "15px" }}>
                    <Typography variant="body1"
                        align='center'
                        style={{
                            position: 'relative',
                            right: '20%',
                            left: '30%',
                            fontFamily: 'Work Sans, sans-serif',
                            fontSize: "150%"
                        }}>
                        CWRU MedWish promotes healthcare equity on an international scale assisting MedWish International in processing medical devices. Our priority is to increase access to healthcare globally by repurposing locally donated medical equipment. CWRU MedWish assists in repairing and packaging priority medical devices for use in underserved regions. Our methods of device processing are based on a comprehensive and officially verified understanding of medical device guidelines.</Typography>
                </Grid>
                {/* Holds the Second Divider Line */}
                <Grid xs={12} marginRight={5}>
                    <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin: '10px 0', color: 'white', position: "relative", left: "25px", right: "130px", marginLeft: "18px", marginRight: "10px" }} />
                </Grid>
                {/* Holds the 3 Stickers for Recover, Repurpose, and Redistribute */}
                <Grid container direction="row" xs={12} justifyContent= "center" textAlign= "center" style={{ marginTop: "20px", maxWidth: "100%" }}>
                    {/* Holds the What We Do Text */}
                    <Grid xs={12} style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <Typography variant="h1"
                            align='center'
                            style={{
                                position: 'relative',
                                color: '#6599CC',
                                fontWeight: '800'
                            }}
                        >
                            WHAT WE DO
                        </Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <img src={Recover} height={170} width={160} style={{ position: 'relative', boxShadow: 'none', maxWidth: "100%" }} />
                    </Grid>
                    <Grid item xs={4}>
                        <img src={Repurpose} height={150} width={160} style={{ position: 'relative', top: "8%", boxShadow: 'none', maxWidth: "100%" }} />
                    </Grid>
                    <Grid item xs={4}>
                        <img src={Redistribute} height={150} width={170} style={{ position: 'relative', top: "11%", boxShadow: 'none', maxWidth: "100%" }} />
                    </Grid>
                </Grid>
                {/* Holds the What We Do Paragraph */}
                <Grid xs={10} style={{ marginBottom: "20px", marginTop: "4%" }}>
                    <Typography variant="body1"
                        align="center"
                        style={{
                            position: 'relative',
                            right: '20%',
                            left: '10%',
                            color: 'gray',
                            fontFamily: "Work Sans, sans-serif",
                            fontSize: "150%",
                            fontWeight: "450",
                        }}
                    >
                        MedWish bridges the gap between abundance and absence, surplus, and scarcity. Our
                        work improves access to quality healthcare while promoting enviromental
                        stewardship.
                    </Typography>
                </Grid>
                {/* Holds the Third Dividing Line*/}
                <Grid xs={12} marginRight={5} style={{ marginBottom: "2%" }}>
                    <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin: '5px 0', color: 'white', position: "relative", left: "25px", right: "130px", marginLeft: "18px", marginRight: "10px" }} />
                </Grid>

                {/*What You Can Do Section on Desktop */}
                {!isMobile && !isMedium && !isSmall && (
                    <>
                        {/* What You Can Do Text and Divider for Desktop */}
                        <Grid container direction="row" xs={12} style={{ marginTop: "20px" }}>
                            <Grid xs={3} marginBottom={4}>
                                <Typography variant="h1"
                                    style={{
                                        color: '#00355E',
                                        fontFamily: "Work Sans, sans-serif",
                                        position: 'relative',
                                        left: "15%",
                                        bottom: "10%",
                                        fontSize: "210%",
                                        fontWeight: "550"
                                    }}
                                >
                                    What You Can Do
                                </Typography>
                            </Grid>
                            <Grid xs={5}>
                                <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin: '12px 0', color: 'white', position: "relative", width: "180px", left: "0%", right: "200%", marginRight: "300%", marginLeft: "5%" }} />
                            </Grid>
                        </Grid>
                        {/*First Icon and Paragraph on Desktop */}
                        <Grid container direction="row" spacing={2} xs={7} marginBottom={1} marginTop={2} marginLeft= {2}>
                            <Grid xs={1}>
                                <img src={Hands} height={100} width={100} style={{ position: 'relative', marginLeft: "60%", marginBottom: "20%" }} />
                            </Grid>
                            <Grid xs={5} marginLeft="4%" >
                                <Typography variant="h1"
                                    align='center'
                                    style={{
                                        position: 'relative',
                                        left: "20%",
                                        right: "50%",
                                        align: 'center',
                                        color: 'black',
                                        fontFamily: "Work Sans, sans-serif",
                                        fontSize: "150%",
                                        fontWeight: "400",
                                    }}
                                >
                                    Get hands-on experience troubleshooting, repairing, and working with medical devices. We have a club workshop space in think[box] dedicated to device repair and modifications.
                                </Typography>
                            </Grid>
                        </Grid>

                        {/* Second Icon and Image for Desktop*/}
                        <Grid container direction="row" xs={7} marginTop={10} marginLeft= {2}>
                            <Grid xs={1} style={{ display: 'flex' }}>
                                <img src={Equal} height={90} width={95} style={{ position: 'relative', marginLeft: "65%", marginBottom: "20%" }} />
                            </Grid>
                            <Grid xs={5} marginLeft="4%">
                                <Typography variant="h1"
                                    align='center'
                                    style={{
                                        position: 'relative',
                                        left: "19%",
                                        right: "50%",
                                        align: 'center',
                                        color: 'black',
                                        fontFamily: "Work Sans, sans-serif",
                                        fontSize: "150%",
                                        fontWeight: "400",
                                    }}
                                >
                                    Help provide equal access to healthcare across the globe right here in Cleveland. Gain an in-depth understanding of medical device and the science behind their function.
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* Third Icon and Paragraph for Desktop */}
                        <Grid container direction="row" xs={7} marginTop={10} marginLeft= {2}>
                            <Grid xs={1}>
                                <img src={Environment} height={90} width={95} style={{ position: 'relative', marginLeft: "65%" }} />
                            </Grid>
                            <Grid xs={5} marginLeft="4%" marginBottom="4%">
                                <Typography variant="h1"
                                    align='center'
                                    style={{
                                        position: 'relative',
                                        left: "18%",
                                        right: "50%",
                                        align: 'center',
                                        color: 'black',
                                        fontFamily: "Work Sans, sans-serif",
                                        fontSize: "150%",
                                        fontWeight: "400",
                                    }}
                                >
                                    Protect the environment by repurposing medical devices and supplies, thus, reducing the harmful effects of medical waste.
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* Main What We Do Image for Desktop*/}
                        <Grid container direction="column" textAlign= "right" xs={5} marginLeft={20} marginRight={5} marginTop={8} height="80px" width="500px">
                            <img src={WhatYouDo} style={{ position: 'relative', left: "125%", bottom: "940%", height: "760px", width: "500px", borderRadius: '16px' }} />
                        </Grid>
                    </>
                )}

                {/* What You Can Do Section on Mobile */}
                {isMobile && (
                    <>
                        <Grid container direction="row" xs={12} alignItems="center" style={{ marginTop: "20px" }}>
                            <Grid item xs={12}>
                                <Typography variant="h1"
                                    style={{
                                        color: '#00355E',
                                        fontFamily: "Work Sans, sans-serif",
                                        fontSize: "210%",
                                        fontWeight: "550",
                                        textAlign: "center"
                                    }}
                                >
                                    What You Can Do
                                </Typography>
                            </Grid>
                            <Grid item xs={12} container justifyContent="center">
                                <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin: '8px 0', color: 'white', width: "270px", marginBottom: "8%", marginTop: "3%" }} />
                            </Grid>

                            {/* Main What You Can Do Image */}
                            <Grid item xs={12} style={{ textAlign: 'center' }}>
                                <img src={WhatYouDo} style={{ position: 'relative', height: "auto", width: "100%", borderRadius: '16px' }} alt="What You Do" />
                            </Grid>
                        </Grid>

                        {/* First Icon and Paragraph */}
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <img src={Hands} height={90} width={95} alt="Equal Access" style={{ maxWidth: '100%', textAlign: "center", marginRight: "3%" }} />
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Typography variant="h1" style={{
                                color: 'black',
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "120%",
                                fontWeight: "400",
                                textAlign: "center",
                                marginRight: "30%",
                                marginLeft: "30%",
                                margin: '0 10%'
                            }}>
                                Get hands-on experience troubleshooting, repairing, and working with medical devices. We have a club workshop space in think[box] dedicated to device repair and modifications.
                            </Typography>
                        </Grid>
                        {/* Second Icon and Paragraph */}
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <img src={Equal} height={90} width={95} alt="Equal Access" style={{ maxWidth: '100%' }} />
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Typography variant="h1" style={{
                                color: 'black',
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "120%",
                                fontWeight: "400",
                                textAlign: "center",
                                marginRight: "30%",
                                marginLeft: "30%",
                                margin: '0 10%'
                            }}>
                                Help provide equal access to healthcare across the globe right here in Cleveland. Gain an in-depth understanding of medical devices and the science behind their function.
                            </Typography>
                        </Grid>
                        {/* Third Icon and Paragraph */}
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <img src={Environment} height={90} width={95} alt="Environment" style={{ maxWidth: '100%', textAlign: "center" }} />
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Typography variant="h1" style={{
                                color: 'black',
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "120%",
                                fontWeight: "400",
                                textAlign: "center",
                                marginRight: "30%",
                                marginLeft: "30%",
                                margin: '0 10%'
                            }}>
                                Protect the environment by repurposing medical devices and supplies, thus, reducing the harmful effects of medical waste.
                            </Typography>
                        </Grid>
                    </>
                )}
                {/* Holds the Fourth Dividing Line */}
                <Grid xs={12} marginRight={5} style={{ marginBottom: "4%" }}>
                    <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin: '5px 0', color: 'white', position: "relative", left: "25px", right: "130px", marginLeft: "18px", marginRight: "10px" }} />
                </Grid>
            </Grid>
        </Box>
    )
};
export default AboutPage;