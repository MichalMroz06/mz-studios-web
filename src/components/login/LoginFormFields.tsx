'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useAuth } from '@/context/AuthContext';

export default function LoginFormFields() {
  const router = useRouter();
  const { setUser } = useAuth();

  const [showPassword, setShowPassword] = React.useState(false);
  const [identifier, setIdentifier] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [identifierError, setIdentifierError] = React.useState('');
  const [touchedIdentifier, setTouchedIdentifier] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState('');
  const [touchedPassword, setTouchedPassword] = React.useState(false);
  const [serverError, setServerError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const validateIdentifier = (val: string) => {
    if (!val.trim()) {
      return 'Adres e-mail lub login jest wymagany';
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

  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIdentifier(value);
    if (touchedIdentifier) {
      setIdentifierError(validateIdentifier(value));
    }
  };

  const handleIdentifierBlur = () => {
    setTouchedIdentifier(true);
    setIdentifierError(validateIdentifier(identifier));
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError('');
    setTouchedIdentifier(true);
    setTouchedPassword(true);

    const idErr = validateIdentifier(identifier);
    const passErr = validatePassword(password);
    setIdentifierError(idErr);
    setPasswordError(passErr);

    if (idErr || passErr) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: identifier.trim(), password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setServerError(data.error ?? 'Wystąpił błąd podczas logowania.');
        return;
      }

      if (data.user) {
        setUser(data.user);
      }

      router.push('/');
      router.refresh();
    } catch {
      setServerError('Błąd połączenia z serwerem. Sprawdź połączenie i spróbuj ponownie.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack spacing={2.5}>
        {/* Server-side error alert */}
        {serverError && (
          <Alert
            severity="error"
            sx={{
              bgcolor: 'rgba(224, 108, 117, 0.1)',
              color: '#e06c75',
              border: '1px solid rgba(224, 108, 117, 0.3)',
              '& .MuiAlert-icon': { color: '#e06c75' },
            }}
          >
            {serverError}
          </Alert>
        )}

        <TextField
          fullWidth
          id="identifier"
          name="identifier"
          label="Adres e-mail lub login"
          variant="outlined"
          autoComplete="username"
          value={identifier}
          onChange={handleIdentifierChange}
          onBlur={handleIdentifierBlur}
          error={Boolean(identifierError)}
          helperText={identifierError}
          placeholder="twoj.email@example.com lub login"
          disabled={isLoading}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: identifierError ? 'error.main' : 'text.secondary', fontSize: 20 }} />
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
          disabled={isLoading}
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
                    disabled={isLoading}
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
                disabled={isLoading}
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
          disabled={isLoading}
          sx={{
            py: 1.4,
            fontSize: '1rem',
            fontWeight: 600,
            mt: 1,
          }}
        >
          {isLoading ? (
            <CircularProgress size={22} sx={{ color: 'inherit' }} />
          ) : (
            'Zaloguj się'
          )}
        </Button>
      </Stack>
    </Box>
  );
}
