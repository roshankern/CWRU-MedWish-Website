import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function EventCard({ name, date, description, image }) {
  return (
    <Card>
      <CardMedia component="img" height="200" image={image} alt={name} />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}: {date}
        </Typography>
          <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default EventCard;
