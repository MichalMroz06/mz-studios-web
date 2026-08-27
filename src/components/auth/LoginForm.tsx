'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
  Stack,
  Avatar,
  Divider,
} from '@mui/material';
import {
  SportsEsports as GamepadIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';

export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');
  const [touchedEmail, setTouchedEmail] = React.useState(false);

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

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouchedEmail(true);
    const err = validateEmail(email);
    setEmailError(err);
    if (err) {
      return;
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 450, mx: 'auto' }}>
      {/* Back to home page */}
      <Button
        component={Link}
        href="/"
        startIcon={<ArrowBackIcon />}
        sx={{
          mb: 3,
          color: 'text.secondary',
          '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
        }}
      >
        Powrót do strony głównej
      </Button>

      <Card
        elevation={0}
        sx={{
          bgcolor: 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 4,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
        }}
      >
        <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
          {/* Header */}
          <Stack spacing={2} alignItems="center" sx={{ mb: 4, textCenter: 'center' }}>
            <Box textAlign="center">
              <Typography variant="h5" component="h1" sx={{ fontWeight: 700, mb: 0.5 }}>
                Witaj ponownie
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Zaloguj się do swojego konta w systemie MZ Studios
              </Typography>
            </Box>
          </Stack>

          {/* Login form */}
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
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
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

          <Divider sx={{ my: 3.5, borderColor: 'rgba(255, 255, 255, 0.08)' }} />

          {/* Registration link */}
          <Box textAlign="center">
            <Typography variant="body2" color="text.secondary">
              Nie posiadasz jeszcze konta?{' '}
              <Typography
                component={Link}
                href="#"
                onClick={(e) => e.preventDefault()}
                variant="body2"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Dowiedz się więcej
              </Typography>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
