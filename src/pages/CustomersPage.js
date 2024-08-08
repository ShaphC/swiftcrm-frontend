import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CustomerCard from '../components/CustomerCard';

const mockCustomers = [
  { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
];

function CustomersPage() {
  return (
    <Container>
      <Grid container spacing={3}>
        {mockCustomers.map((customer, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CustomerCard customer={customer} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CustomersPage;
