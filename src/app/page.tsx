'use client';

import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  TextField,
  InputAdornment,
  Stack,
  Avatar,
  Badge,
  Switch,
  FormControlLabel,
  Paper,
  Divider,
} from '@mui/material';
import {
  RocketLaunch as RocketIcon,
  AutoAwesome as SparklesIcon,
  Shield as SecurityIcon,
  Dashboard as DashboardIcon,
  Palette as PaletteIcon,
  Search as SearchIcon,
  CheckCircle as CheckIcon,
  Code as CodeIcon,
  Layers as LayersIcon,
} from '@mui/icons-material';

export default function Home() {
  const [toggleState, setToggleState] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      {/* Navigation Bar */}
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: { xs: 0, sm: 2 } }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Avatar
                sx={{
                  bgcolor: 'primary.main',
                  boxShadow: '0 0 16px rgba(90, 130, 173, 0.4)',
                  width: 38,
                  height: 38,
                }}
              >
                <PaletteIcon sx={{ fontSize: 22 }} />
              </Avatar>
              <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'text.primary' }}>
                MZ <Box component="span" sx={{ color: 'primary.main' }}>Studios</Box>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Chip
                icon={<SparklesIcon sx={{ fontSize: '16px !important' }} />}
                label="MUI Dark Theme Active"
                color="primary"
                variant="filled"
                size="small"
              />
              <Button variant="contained" color="primary" size="small" startIcon={<RocketIcon />}>
                Get Started
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content Container */}
      <Container maxWidth="lg" sx={{ pt: 8, pb: 10, flex: 1 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8, px: { xs: 2, md: 8 } }}>
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
            Spójny, stonowany i przyjemny dla oczu motyw Material-UI w odcieniach przygaszonego stalowego błękitu.
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

        {/* Feature Cards Grid */}
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

        {/* Live UI Component Showcase Paper */}
        <Paper sx={{ p: { xs: 3, sm: 5 }, borderRadius: 4, mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
            Prezentacja Elementów UI
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
            Przetestuj zdefiniowane style przycisków, pól tekstowych, kontrolek oraz odznak.
          </Typography>

          <Grid container spacing={4}>
            {/* Input & Form Controls */}
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Typography variant="subtitle2" sx={{ color: 'primary.light', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>
                  Formularze & Pola Wprowadzania
                </Typography>

                <TextField
                  fullWidth
                  placeholder="Szukaj w projekcie..."
                  value={searchValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
                />

                <Stack direction="row" spacing={2} alignItems="center">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={toggleState}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setToggleState(e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Powiadomienia aktywne"
                  />
                  <Badge color="primary" variant="dot" invisible={!toggleState}>
                    <DashboardIcon sx={{ color: 'text.secondary' }} />
                  </Badge>
                </Stack>
              </Stack>
            </Grid>

            {/* Buttons & Chips */}
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Typography variant="subtitle2" sx={{ color: 'primary.light', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>
                  Przyciski & Odznaki
                </Typography>

                <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                  <Button variant="contained" color="primary">
                    Primary Button
                  </Button>
                  <Button variant="outlined" color="primary">
                    Outlined Blue
                  </Button>
                  <Button variant="text" color="primary">
                    Text Link
                  </Button>
                </Stack>

                <Divider sx={{ my: 1 }} />

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip icon={<CheckIcon />} label="Sukces" color="success" size="small" />
                  <Chip label="Główny Akcent" color="primary" size="small" />
                  <Chip label="Cyjanowy Accent" color="secondary" size="small" />
                  <Chip label="Zwykły Tag" variant="outlined" size="small" />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ py: 3, px: 2, borderTop: '1px solid rgba(255, 255, 255, 0.08)', mt: 'auto', textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          MZ Studios © {new Date().getFullYear()} • Stworzono przy użyciu Material-UI & Next.js
        </Typography>
      </Box>
    </Box>
  );
}
