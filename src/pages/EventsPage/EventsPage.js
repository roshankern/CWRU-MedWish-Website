import React, { useState, useEffect } from "react";
import { Card, CardMedia, Typography, Divider, Box, IconButton, Grid, CardContent} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventImage from './images/EventImage.png';
import EventCard from './EventCard';


function EventsPage() {

  /**
   * Fetch events from Google Sheets
   */
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://sheetdb.io/api/v1/1y5oetslldbzr"
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  /**
   * Group events by month
   */
  const groupedEvents = events.reduce((acc, event) => {
    const eventMonth = new Date(event.date).toLocaleString('default', { month: 'long' });
    if (!acc[eventMonth]) {
      acc[eventMonth] = [];
    }
    acc[eventMonth].push(event);
    return acc;
  }, {});

  return (
    <div>
    {/* Events Image */}
      <Card>  
        <CardMedia 
        component= "img"
        alt= "Event Background Image"
        height= "500"   
        image= { EventImage }
        style = {{opacity: 1, zIndex: -1}}
        />
      </Card>
    {/* Events Page Description */}
    <Divider style= {{borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin:'30px 0', color: 'white' }}/>
    <Box m={4} style={{ margin: '0 auto', maxWidth: '60%' }}>
      <Typography variant="h6" align="center">
        CWRU MedWish is active year round! Check out some of our upcoming events below to see how you can help your community and the world. More information about upcoming events can be found at the CWRU MedWish CampusGroup page: https://community.case.edu/medwish/home
      </Typography>
    </Box>
      <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin: '30px 0', color: 'white' }} />

      {/* Add to Calendar Button */}
      <Box display="flex" justifyContent="center">
         <IconButton
          sx={{
            bgcolor: '#6599CC',
            color: 'white',
            borderRadius: '20px', // Adjust the value to control the roundness of the corners
            '&:hover': {
              bgcolor: '#478db8', // Adjust the hover color if needed
            },
          }}
          variant="contained"
          size="large"
        >
          <CalendarMonthIcon />
          <Typography variant="body1">ADD TO GOOGLE CALENDAR</Typography>
        </IconButton>
      </Box>

      {/* Events */}
      {Object.entries(groupedEvents).map(([month, monthEvents]) => (
        <Card key={month} sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h4">{month}</Typography>
            <Grid container spacing={2}>
              {monthEvents.map((event) => (
                <Grid item key={event.id} xs={12} sm={6} md={4}>
                  <EventCard
                    name={event.name}
                    date={event.date}
                    description={event.description}
                    image={event['image link']}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>

  );
}

export default EventsPage;
