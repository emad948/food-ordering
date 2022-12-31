import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';

import TestimonialCard from './components/testimonial-card';
import { testimonials } from './user-testimonials';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const moveForward = () => {
    if (activeIndex < testimonials.length - 3) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const moveBackward = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography color={'secondary'} mb={6} sx={{ fontSize: '35px', textAlign: 'center', lineHeight: '35px' }}>
        Was unsere Kunden sagen
      </Typography>

      <Grid container spacing={2}>
        {/* eslint-disable-next-line array-callback-return */}
        {testimonials.map((testimonial, index) => {
          if (index >= activeIndex && index < activeIndex + 3) {
            return (
              <Grid key={`testimonial${testimonial.name}`} item xs={12} md={6} lg={4}>
                <TestimonialCard
                  name={testimonial.name}
                  subtitle={testimonial.subtitle}
                  imageSrc={testimonial.imageSrc}
                />
              </Grid>
            );
          }
        })}
      </Grid>
      <Box display="flex" justifyContent="center">
        <IconButton onClick={() => moveBackward()} disabled={activeIndex === 0}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={() => moveForward()} disabled={activeIndex === testimonials.length - 3}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="center" mt={1}>
        <Button variant="contained" color="secondary">
          Mehr Feedback lesen
        </Button>
      </Box>
    </Container>
  );
};

export default Testimonials;
