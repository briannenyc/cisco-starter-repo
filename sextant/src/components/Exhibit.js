//Create an exhibit component that displays a heading and any child components. 
// This component will wrap the components we create in the following tasks.
// Think of it as a pretty container to logically separate different data points.


import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Exhibit Component
      </Typography>
      <Typography variant="h5" component="div">
        Data Heading
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        child
      </Typography>
      <Typography variant="body2">
        additional info about data
        <br />
        {'more info'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Button</Button>
    </CardActions>
  </React.Fragment>
);

export default function Exhibit() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
