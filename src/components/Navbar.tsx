'use client';

import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Stack,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Palette as PaletteIcon,
  AutoAwesome as SparklesIcon,
  RocketLaunch as RocketIcon,
} from '@mui/icons-material';

export default function Navbar() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, px: { xs: 0, sm: 2 } }}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar
              sx={{
                bgcolor: 'primary.main',
                boxShadow: '0 0 16px rgba(90, 130, 173, 0.4)',
                width: 40,
                height: 40,
              }}
            >
              <PaletteIcon sx={{ fontSize: 24 }} />
            </Avatar>
            <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'text.primary', letterSpacing: '-0.01em' }}>
              MZ <Box component="span" sx={{ color: 'primary.main' }}>Studios</Box>
            </Typography>
          </Stack>

          <Stack direction="row" spacing={3} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
              Strona Główna
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'text.primary' } }}>
              Komponenty
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'text.primary' } }}>
              Usługi
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'text.primary' } }}>
              Kontakt
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1.5} alignItems="center">
            <Chip
              icon={<SparklesIcon sx={{ fontSize: '16px !important' }} />}
              label="Stonowany Motyw"
              color="primary"
              variant="filled"
              size="small"
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            />
            <Button variant="contained" color="primary" size="small" startIcon={<RocketIcon />}>
              Rozpocznij
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
