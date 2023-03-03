import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';

import { validEmail } from 'helpers/valid.email';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../firebase';

const AuthPage = () => {
  const { registerUser, loginUser, authWithGoogle } = useAuth();
  const [isReg, setIsReg] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = ({ email, password }) => {
    if (isReg) registerUser(email, password);
    else loginUser(email, password);

    reset();
  };

  return (
    <Box
      paddingTop={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" textAlign="center" marginBottom={2}>
        {isReg ? 'Register' : 'Login'}
      </Typography>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth={400}
      >
        <TextField
          {...register('email', {
            required: 'email',
            pattern: {
              value: validEmail,
              message: 'Please enter valid email',
            },
          })}
          name="email"
          type="email"
          variant="outlined"
          label="Email"
          color={errors.email ? 'error' : 'primary'}
          fullWidth
        />
        {errors?.email && (
          <Typography variant="caption" color="error" textAlign="center">
            {errors?.email?.message || 'Error!'}
          </Typography>
        )}

        <FormControl variant="outlined" sx={{ m: 1, width: '100%' }}>
          <InputLabel color={errors.password ? 'error' : 'primary'}>
            password
          </InputLabel>
          <OutlinedInput
            fullWidth
            {...register('password', {
              required: 'password',
              minLength: {
                value: 6,
                message: 'Password should be minimum 6 characters long',
              },
            })}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(show => !show)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="password"
            color={errors.password ? 'error' : 'primary'}
          />
          {errors.password && (
            <Typography variant="caption" color="error" textAlign="center">
              {errors.password.message}
            </Typography>
          )}
        </FormControl>

        <Button onClick={authWithGoogle}>
          <GoogleIcon htmlColor="#9b9797" />
          <Typography color="#9b9797" marginLeft={1}>
            with google
          </Typography>
        </Button>
        <Button
          type="submit"
          variant="outlined"
          disabled={!isValid}
          sx={{ m: 3 }}
        >
          Submit
        </Button>
      </Box>
      <Button onClick={() => setIsReg(!isReg)} sx={{ textTransform: 'none' }}>
        {isReg ? 'SignIn' : 'SignUp'}
      </Button>
    </Box>
  );
};

export default AuthPage;
