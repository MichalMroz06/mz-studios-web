'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Avatar,
  Divider,
  IconButton,
} from '@mui/material';
import {
  Palette as PaletteIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        pt: 6,
        pb: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Brand Column */}
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
              <Avatar
                sx={{
                  bgcolor: 'primary.main',
                  boxShadow: '0 0 16px rgba(90, 130, 173, 0.4)',
                  width: 36,
                  height: 36,
                }}
              >
                <PaletteIcon sx={{ fontSize: 20 }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                MZ <Box component="span" sx={{ color: 'primary.main' }}>Studios</Box>
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, maxWidth: 320 }}>
              Nowoczesne aplikacje internetowe i systemy designu stworzone w oparciu o Next.js i Material-UI.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={4} md={2.5}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
              Nawigacja
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                Strona Główna
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                Komponenty UI
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                O Nas
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                Kontakt
              </Typography>
            </Stack>
          </Grid>

          {/* Resources */}
          <Grid item xs={6} sm={4} md={2.5}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
              Zasoby
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                Dokumentacja
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                System Designu
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                GitHub Repository
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                Changelog
              </Typography>
            </Stack>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
              Dołącz do nas
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                <EmailIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            MZ Studios © {new Date().getFullYear()} • Wszelkie prawa zastrzeżone.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Stworzono z Next.js 15 & Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
