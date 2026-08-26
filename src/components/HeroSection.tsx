'use client';

import * as React from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import {
  SportsEsports as GamepadIcon,
  FolderZip as PressIcon,
} from '@mui/icons-material';

export default function HeroSection() {
  return (
    <Box sx={{ textAlign: 'center', pt: { xs: 4, md: 6 }, pb: { xs: 6, md: 8 }, px: { xs: 2, md: 8 } }}>
      <Chip
        label="MZ Games • Independent Game Studio"
        size="small"
        sx={{
          mb: 3,
          bgcolor: 'rgba(90, 130, 173, 0.12)',
          color: 'primary.light',
          border: '1px solid rgba(90, 130, 173, 0.3)',
          px: 1.5,
          py: 0.5,
          fontWeight: 600,
        }}
      />

      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '2.25rem', sm: '3.5rem', md: '3.75rem' },
          lineHeight: 1.15,
          mb: 2.5,
          background: 'linear-gradient(135deg, #FFFFFF 0%, #B0C4DE 50%, #5A82AD 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Tworzymy Niezapomniane Światy i Gry Wideo
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: 'text.secondary',
          fontWeight: 400,
          maxWidth: '720px',
          mx: 'auto',
          mb: 4,
          fontSize: { xs: '1rem', sm: '1.15rem' },
          lineHeight: 1.6,
        }}
      >
        Niezależne studio game dev specjalizujące się w unikalnych grach PC i konsolowych.
        Łączymy pasję do innowacyjnych mechanik rozgrywki z głęboką narracją i klimatyczną oprawą 3D.
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<GamepadIcon />}
          sx={{ px: 3.5, py: 1.25, fontSize: '1rem' }}
        >
          Zobacz Nasze Gry
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<PressIcon />}
          sx={{ px: 3.5, py: 1.25, fontSize: '1rem' }}
        >
          Pobierz Press Kit
        </Button>
      </Stack>
    </Box>
  );
}
