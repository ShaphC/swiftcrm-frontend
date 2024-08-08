import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function HomePage() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to SwiftCRM
      </Typography>
      <Typography variant="body1">
        Manage your customers efficiently and effectively.
      </Typography>
    </Container>
  );
}

export default HomePage;
