'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';

export default function LoginFormFields() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');
  const [touchedEmail, setTouchedEmail] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState('');
  const [touchedPassword, setTouchedPassword] = React.useState(false);

  const validateEmail = (val: string) => {
    if (!val.trim()) {
      return 'Adres e-mail jest wymagany';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
      return 'Wprowadź poprawny adres e-mail (np. nazwa@domena.pl)';
    }
    return '';
  };

  const validatePassword = (val: string) => {
    if (!val) {
      return 'Hasło jest wymagane';
    }
    if (val.length < 8) {
      return 'Hasło musi składać się z co najmniej 8 znaków';
    }
    return '';
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (touchedEmail) {
      setEmailError(validateEmail(value));
    }
  };

  const handleEmailBlur = () => {
    setTouchedEmail(true);
    setEmailError(validateEmail(email));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (touchedPassword) {
      setPasswordError(validatePassword(value));
    }
  };

  const handlePasswordBlur = () => {
    setTouchedPassword(true);
    setPasswordError(validatePassword(password));
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouchedEmail(true);
    setTouchedPassword(true);
    const emailErr = validateEmail(email);
    const passErr = validatePassword(password);
    setEmailError(emailErr);
    setPasswordError(passErr);
    if (emailErr || passErr) {
      return;
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack spacing={2.5}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Adres e-mail lub login"
          variant="outlined"
          autoComplete="username"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={Boolean(emailError)}
          helperText={emailError}
          placeholder="twoj.email@example.com"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: emailError ? 'error.main' : 'text.secondary', fontSize: 20 }} />
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Hasło"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={Boolean(passwordError)}
          helperText={passwordError}
          placeholder="••••••••"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: passwordError ? 'error.main' : 'text.secondary', fontSize: 20 }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    size="small"
                    sx={{ color: 'text.secondary' }}
                  >
                    {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ flexWrap: 'wrap', gap: 1 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                size="small"
                sx={{
                  color: 'text.secondary',
                  '&.Mui-checked': { color: 'primary.main' },
                }}
              />
            }
            label={
              <Typography variant="body2" color="text.secondary">
                Zapamiętaj mnie
              </Typography>
            }
          />
          <Typography
            component={Link}
            href="#"
            onClick={(e) => e.preventDefault()}
            variant="body2"
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 500,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Zapomniałeś hasła?
          </Typography>
        </Stack>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{
            py: 1.4,
            fontSize: '1rem',
            fontWeight: 600,
            mt: 1,
          }}
        >
          Zaloguj się
        </Button>
      </Stack>
    </Box>
  );
}
