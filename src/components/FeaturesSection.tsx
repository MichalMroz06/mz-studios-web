'use client';

import * as React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import {
  Palette as PaletteIcon,
  Layers as LayersIcon,
  Shield as SecurityIcon,
} from '@mui/icons-material';

export default function FeaturesSection() {
  return (
    <Grid container spacing={3} sx={{ mb: 8 }}>
      <Grid item xs={12} md={4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ p: 3, flexGrow: 1 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                bgcolor: 'rgba(90, 130, 173, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'primary.main',
                mb: 2,
              }}
            >
              <PaletteIcon />
            </Box>
            <Typography variant="h6" sx={{ color: 'text.primary', mb: 1, fontWeight: 700 }}>
              Paleta Barw & Kontrast
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
              Głębokie tło (#0A0F1D) połączone ze stonowanym, eleganckim stalowym błękitem (#5A82AD) i łagodnymi akcentami.
            </Typography>
          </CardContent>
          <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
            <Chip label="Dark Mode" size="small" color="primary" variant="filled" />
            <Chip label="#5A82AD" size="small" variant="outlined" />
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ p: 3, flexGrow: 1 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                bgcolor: 'rgba(91, 154, 156, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'secondary.main',
                mb: 2,
              }}
            >
              <LayersIcon />
            </Box>
            <Typography variant="h6" sx={{ color: 'text.primary', mb: 1, fontWeight: 700 }}>
              Next.js App Router SSR
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
              Integracja przez AppRouterCacheProvider zapewnia brak migotania stylów przy ładowaniu strony (FOUC).
            </Typography>
          </CardContent>
          <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
            <Chip label="SSR Ready" size="small" color="secondary" variant="filled" />
            <Chip label="Emotion Cache" size="small" variant="outlined" />
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ p: 3, flexGrow: 1 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                bgcolor: 'rgba(90, 130, 173, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'primary.main',
                mb: 2,
              }}
            >
              <SecurityIcon />
            </Box>
            <Typography variant="h6" sx={{ color: 'text.primary', mb: 1, fontWeight: 700 }}>
              Gotowe Nadpisania MUI
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
              Zaokrąglone krawędzie, płynne przejścia, mikro-interakcje hover oraz spójna typografia Geist/Inter.
            </Typography>
          </CardContent>
          <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
            <Chip label="Component Overrides" size="small" color="primary" variant="filled" />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
