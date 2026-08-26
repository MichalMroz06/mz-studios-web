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
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  SportsEsports as GamepadIcon,
  Search as SearchIcon,
  AccountCircle as UserCircleIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Phone as PhoneIcon,
  Newspaper as NewsIcon,
} from '@mui/icons-material';

export default function Navbar() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, px: { xs: 0, sm: 2 } }}>
          {/* Logo */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar
              sx={{
                bgcolor: 'primary.main',
                boxShadow: '0 0 16px rgba(90, 130, 173, 0.4)',
                width: 42,
                height: 42,
              }}
            >
              <GamepadIcon sx={{ fontSize: 26 }} />
            </Avatar>
            <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'text.primary', letterSpacing: '-0.01em' }}>
              MZ <Box component="span" sx={{ color: 'primary.main' }}>Studios</Box>
            </Typography>
          </Stack>

          {/* Navigation Links with Icons */}
          <Stack direction="row" spacing={3.5} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Stack
              direction="row"
              spacing={0.8}
              alignItems="center"
              sx={{
                color: 'text.primary',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <HomeIcon sx={{ fontSize: 22 }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Strona Główna
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={0.8}
              alignItems="center"
              sx={{
                color: 'text.secondary',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                '&:hover': { color: 'text.primary' },
              }}
            >
              <NewsIcon sx={{ fontSize: 22 }} />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                Aktualności
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={0.8}
              alignItems="center"
              sx={{
                color: 'text.secondary',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                '&:hover': { color: 'text.primary' },
              }}
            >
              <GamepadIcon sx={{ fontSize: 22 }} />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                Nasze Gry
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={0.8}
              alignItems="center"
              sx={{
                color: 'text.secondary',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                '&:hover': { color: 'text.primary' },
              }}
            >
              <InfoIcon sx={{ fontSize: 22 }} />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                O Nas
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={0.8}
              alignItems="center"
              sx={{
                color: 'text.secondary',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                '&:hover': { color: 'text.primary' },
              }}
            >
              <PhoneIcon sx={{ fontSize: 22 }} />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                Kontakt
              </Typography>
            </Stack>
          </Stack>

          {/* Right Action Icons & Login */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Tooltip title="Szukaj na stronie">
              <IconButton
                size="medium"
                aria-label="Szukaj na stronie"
                sx={{
                  color: 'text.secondary',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  p: '8px',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: 'primary.main',
                    borderColor: 'rgba(90, 130, 173, 0.4)',
                    bgcolor: 'rgba(90, 130, 173, 0.08)',
                  },
                }}
              >
                <SearchIcon sx={{ fontSize: 22 }} />
              </IconButton>
            </Tooltip>

            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<UserCircleIcon sx={{ fontSize: '22px !important' }} />}
              sx={{ px: 2.5, py: 0.8, fontSize: '0.9rem', fontWeight: 600 }}
            >
              Logowanie
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
