import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: '#8bbcff' }}
      position="fixed"
      bottom={0}
      component="footer"
      width="100%"
    >
      <Container maxWidth="xl">
        <Typography variant="caption">
          this is some information <br /> thank you for giving me the
          opportunity to prove myself in the test task)
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
