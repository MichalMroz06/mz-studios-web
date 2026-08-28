'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Container,
  Box,
  Typography,
  Paper,
  Stack,
  Avatar,
  Grid,
  Chip,
  Button,
  Divider,
  CircularProgress,
  IconButton,
  Tooltip,
  Alert,
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Badge as BadgeIcon,
  Key as KeyIcon,
  Security as ShieldIcon,
  Logout as LogoutIcon,
  ContentCopy as CopyIcon,
  Check as CheckIcon,
  Female as FemaleIcon,
  Male as MaleIcon,
  ArrowBack as ArrowBackIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import { useAuth } from '@/context/AuthContext';

export default function ProfilePage() {
  const router = useRouter();
  const { user, isLoading, isAuthenticated, logout } = useAuth();
  const [copiedId, setCopiedId] = React.useState(false);

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  const handleCopyId = () => {
    if (user?.id) {
      navigator.clipboard.writeText(user.id);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <CircularProgress size={44} color="primary" />
        <Typography variant="body2" color="text.secondary">
          Ładowanie informacji o koncie...
        </Typography>
      </Box>
    );
  }

  if (!user) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            textAlign: 'center',
            borderRadius: 3,
            bgcolor: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <Alert severity="warning" sx={{ mb: 3 }}>
            Dostęp zabroniony. Musisz się zalogować, aby zobaczyć tę stronę.
          </Alert>
          <Button
            component={Link}
            href="/login"
            variant="contained"
            color="primary"
            size="large"
          >
            Przejdź do logowania
          </Button>
        </Paper>
      </Container>
    );
  }

  const userInitials = user.firstName && user.lastName
    ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
    : user.username[0].toUpperCase();

  const genderLabel = user.gender === 'M' ? 'Mężczyzna' : user.gender === 'K' ? 'Kobieta' : 'Nie podano';

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="md">
        {/* Back Link */}
        <Button
          component={Link}
          href="/"
          startIcon={<ArrowBackIcon />}
          sx={{
            mb: 3,
            color: 'text.secondary',
            '&:hover': { color: 'text.primary' },
          }}
        >
          Powrót do strony głównej
        </Button>

        {/* Profile Hero Header */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 4,
            bgcolor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(90, 130, 173, 0.3)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(90, 130, 173, 0.15)',
            mb: 4,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: 'linear-gradient(90deg, #5a82ad 0%, #3b82f6 50%, #8b5cf6 100%)',
            },
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2.5, sm: 3.5 }}
            alignItems={{ xs: 'center', sm: 'flex-start' }}
            justifyContent="space-between"
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              alignItems={{ xs: 'center', sm: 'center' }}
            >
              <Box sx={{ position: 'relative' }}>
                <Avatar
                  sx={{
                    width: { xs: 80, sm: 96 },
                    height: { xs: 80, sm: 96 },
                    fontSize: { xs: '2rem', sm: '2.5rem' },
                    fontWeight: 700,
                    bgcolor: 'primary.main',
                    color: '#fff',
                    boxShadow: '0 0 24px rgba(90, 130, 173, 0.5)',
                    border: '3px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {userInitials}
                </Avatar>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 4,
                    right: 4,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    bgcolor: '#10b981',
                    border: '3px solid #0f172a',
                    boxShadow: '0 0 8px #10b981',
                  }}
                />
              </Box>

              <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: '-0.02em', mb: 0.5 }}>
                  {user.firstName ? `${user.firstName} ${user.lastName}` : user.username}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent={{ xs: 'center', sm: 'flex-start' }}
                  sx={{ mb: 1.5 }}
                >
                  <Chip
                    label={`@${user.username}`}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      bgcolor: 'rgba(90, 130, 173, 0.2)',
                      color: 'primary.light',
                      border: '1px solid rgba(90, 130, 173, 0.3)',
                    }}
                  />
                  <Chip
                    icon={<ShieldIcon sx={{ fontSize: '14px !important', color: '#10b981 !important' }} />}
                    label="Konto aktywne"
                    size="small"
                    sx={{
                      fontWeight: 600,
                      bgcolor: 'rgba(16, 185, 129, 0.12)',
                      color: '#10b981',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                    }}
                  />
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Zalogowany przez bezpieczną sesję JWT
                </Typography>
              </Box>
            </Stack>

            <Button
              variant="outlined"
              color="error"
              startIcon={<LogoutIcon />}
              onClick={logout}
              sx={{
                borderRadius: 2.5,
                px: 2.5,
                py: 1,
                fontWeight: 600,
                borderColor: 'rgba(224, 108, 117, 0.4)',
                '&:hover': {
                  borderColor: '#e06c75',
                  bgcolor: 'rgba(224, 108, 117, 0.1)',
                },
              }}
            >
              Wyloguj się
            </Button>
          </Stack>
        </Paper>

        {/* Profile Details Grid */}
        <Grid container spacing={3}>
          {/* Main Info Card */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                p: 3.5,
                borderRadius: 3,
                bgcolor: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                height: '100%',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'text.primary' }}>
                Dane konta
              </Typography>

              <Stack spacing={3} divider={<Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.06)' }} />}>
                {/* Full Name */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      bgcolor: 'rgba(90, 130, 173, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                    }}
                  >
                    <PersonIcon />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                      Imię i Nazwisko
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : 'Nie podano'}
                    </Typography>
                  </Box>
                </Stack>

                {/* Email Address */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      bgcolor: 'rgba(90, 130, 173, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                      Adres E-mail
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {user.email}
                    </Typography>
                  </Box>
                  <Chip label="Zweryfikowany" size="small" color="success" variant="outlined" sx={{ height: 22, fontSize: '0.7rem' }} />
                </Stack>

                {/* Username */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      bgcolor: 'rgba(90, 130, 173, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                    }}
                  >
                    <BadgeIcon />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                      Nazwa Użytkownika (Login)
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {user.username}
                    </Typography>
                  </Box>
                </Stack>

                {/* Gender */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      bgcolor: 'rgba(90, 130, 173, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                    }}
                  >
                    {user.gender === 'M' ? <MaleIcon /> : <FemaleIcon />}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                      Płeć
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {genderLabel}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Paper>
          </Grid>

          {/* Sidebar / Security Info Card */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'rgba(15, 23, 42, 0.8)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>
                  Bezpieczeństwo i ID
                </Typography>

                <Box sx={{ mb: 2.5 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>
                    ID Użytkownika (UUID)
                  </Typography>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 1.2,
                      mt: 0.8,
                      bgcolor: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: 2,
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: 'monospace',
                        color: 'primary.light',
                        wordBreak: 'break-all',
                        fontSize: '0.75rem',
                      }}
                    >
                      {user.id}
                    </Typography>
                    <Tooltip title={copiedId ? 'Skopiowano!' : 'Kopiuj ID'}>
                      <IconButton size="small" onClick={handleCopyId} sx={{ color: 'text.secondary', ml: 1 }}>
                        {copiedId ? <CheckIcon fontSize="small" color="success" /> : <CopyIcon fontSize="small" />}
                      </IconButton>
                    </Tooltip>
                  </Paper>
                </Box>

                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  startIcon={<KeyIcon />}
                  disabled
                  sx={{ borderRadius: 2, py: 1, textTransform: 'none', fontWeight: 600 }}
                >
                  Zmień hasło
                </Button>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
