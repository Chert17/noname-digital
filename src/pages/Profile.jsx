import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, userSelector } from 'redux/auth-slice/auth-slice';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const { displayName, email, photoURL } = user;

  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        paddingTop={6}
        gap={2}
      >
        <Typography variant="subtitle1">
          Hi {displayName ? displayName : email ? email : ''}
        </Typography>
        <img
          src={
            photoURL
              ? photoURL
              : 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
          }
          alt="user"
          width={270}
          style={{ borderRadius: '50%' }}
        />
        <Button onClick={() => dispatch(logoutUser())} variant="outlined">
          logout
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
