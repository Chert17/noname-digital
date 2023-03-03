import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ModalInfo = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <Box
      width={400}
      height={150}
      borderRadius={4}
      padding={2}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{ backgroundColor: '#fff' }}
    >
      <Typography variant="h5" textAlign="center">
        To add an item to your cart, you need to log in
      </Typography>
      <Box margin="0 auto" display="flex" gap={4}>
        <Button onClick={() => navigate('/auth')} variant="outlined">
          Go to login
        </Button>
        <Button onClick={onClose} variant="outlined" color="error">
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ModalInfo;
