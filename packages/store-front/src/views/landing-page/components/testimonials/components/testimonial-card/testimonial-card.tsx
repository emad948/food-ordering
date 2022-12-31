import { Box, SxProps, Typography } from '@mui/material';
import React from 'react';

export interface TestimonialCardProps {
  name: string;
  subtitle: string;
  imageSrc: string;
}

const cardStyle: SxProps = {
  backgroundColor: '#fff',
  margin: '30px 5px 15px',
  padding: '45px 20px 20px',
  height: '320px',
  boxShadow: '0 2px 10px rgb(50 50 93 / 10%)',
  overflow: 'visible',
  position: 'relative',
  borderTop: '4px solid #B81F40',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
};

const imageContainer: SxProps = {
  display: 'inline-block',
  borderRadius: '50%',
  overflow: 'hidden',
  flex: '0 0 auto',
  position: 'absolute',
  left: 'calc(50% - 30px)',
  top: '-30px',
  boxShadow: '0 3px 5px 0 rgb(0 0 0 / 40%)',
  backgroundColor: '#fff',
};

const feedbackText = {
  fontSize: '14px',
  lineHeight: '23px',
  textAlign: 'left',
  pr: 1.5,
};
const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
  return (
    <Box sx={cardStyle}>
      <Box sx={imageContainer}>
        <Box
          component={'img'}
          src={props.imageSrc}
          alt={`${props.name}`}
          sx={{
            width: '60px',
            display: 'block',
          }}
        />
      </Box>
      <Typography variant="h5" component="p" sx={{ textAlign: 'center', mb: 1 }} color="textSecondary">
        {props.name}
      </Typography>

      <Typography variant="body2" sx={feedbackText}>
        {props.subtitle}
      </Typography>
    </Box>
  );
};

export default TestimonialCard;
