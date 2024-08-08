import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function CustomerCard({ customer }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {customer.name}
        </Typography>
        <Typography color="textSecondary">
          {customer.email}
        </Typography>
        <Typography color="textSecondary">
          {customer.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}

export default CustomerCard;
