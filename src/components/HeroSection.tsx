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
  RocketLaunch as RocketIcon,
  Code as CodeIcon,
} from '@mui/icons-material';

export default function HeroSection() {
  return (
    <Box sx={{ textAlign: 'center', pt: 4, pb: 8, px: { xs: 2, md: 8 } }}>
      <Chip
        label="Design System & MUI Theme Foundation"
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
          fontSize: { xs: '2.25rem', sm: '3.5rem', md: '4rem' },
          lineHeight: 1.15,
          mb: 2.5,
          background: 'linear-gradient(135deg, #FFFFFF 0%, #B0C4DE 50%, #5A82AD 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Stonowany Ciemny Motyw
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: 'text.secondary',
          fontWeight: 400,
          maxWidth: '680px',
          mx: 'auto',
          mb: 4,
          fontSize: { xs: '1rem', sm: '1.15rem' },
          lineHeight: 1.6,
        }}
      >
        Spójny, stonowany i przyjemny dla oczu motyw Material-UI w odcieniach przygaszonego stalowego błękitem.
        Zmniejszony jaskrawy kontrast i wyważone mikro-interakcje.
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<RocketIcon />}
          sx={{ px: 3.5, py: 1.25, fontSize: '1rem' }}
        >
          Przeglądaj Komponenty
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<CodeIcon />}
          sx={{ px: 3.5, py: 1.25, fontSize: '1rem' }}
        >
          Dokumentacja Stylów
        </Button>
      </Stack>
    </Box>
  );
}
