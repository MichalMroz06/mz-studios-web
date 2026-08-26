'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Avatar,
  Divider,
  IconButton,
  Tooltip,
  SvgIcon,
} from '@mui/material';
import {
  SportsEsports as GamepadIcon,
  GitHub as GitHubIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';

function ItchIoIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M3.25 4.5A.75.75 0 0 0 2.5 5.25v2.338c0 .285.16.543.414.67l2.586 1.293V18a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V9.551l2.586-1.293a.75.75 0 0 0 .414-.67V5.25a.75.75 0 0 0-.75-.75h-17.5zM8 12.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm8 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      />
    </SvgIcon>
  );
}

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const GAMES_LINKS: FooterLink[] = [
  { label: 'Grand Strife Civil War', href: '/games' },
  { label: 'Strona na itch.io', href: 'https://itch.io', external: true },
];

const STUDIO_LINKS: FooterLink[] = [
  { label: 'O Nas', href: '/about' },
  { label: 'Kontakt', href: '/contact' },
];

const SOCIAL_LINKS = [
  { title: 'GitHub', icon: <GitHubIcon fontSize="small" />, href: 'https://github.com' },
  { title: 'YouTube', icon: <YouTubeIcon fontSize="small" />, href: 'https://youtube.com' },
  { title: 'itch.io', icon: <ItchIoIcon fontSize="small" />, href: 'https://itch.io' },
];

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
            <Stack
              component={Link}
              href="/"
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{ mb: 2, textDecoration: 'none', color: 'inherit', display: 'inline-flex' }}
            >
              <Avatar
                sx={{
                  bgcolor: 'primary.main',
                  boxShadow: '0 0 16px rgba(90, 130, 173, 0.4)',
                  width: 36,
                  height: 36,
                }}
              >
                <GamepadIcon sx={{ fontSize: 20 }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                MZ <Box component="span" sx={{ color: 'primary.main' }}>Studios</Box>
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, maxWidth: 320 }}>
              Niezależne studio game dev tworzące wciągające, klimatyczne gry wideo na PC.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={4} md={2.5}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
              Nasze Gry
            </Typography>
            <Stack spacing={1}>
              {GAMES_LINKS.map((link) => (
                <Typography
                  key={link.label}
                  component={link.external ? 'a' : Link}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Studio Links */}
          <Grid item xs={6} sm={4} md={2.5}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
              Studio & Press
            </Typography>
            <Stack spacing={1}>
              {STUDIO_LINKS.map((link) => (
                <Typography
                  key={link.label}
                  component={link.external ? 'a' : Link}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
              Społeczność & Social Media
            </Typography>
            <Stack direction="row" spacing={1}>
              {SOCIAL_LINKS.map((social) => (
                <Tooltip key={social.title} title={social.title}>
                  <IconButton
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    aria-label={social.title}
                    sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                  >
                    {social.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            MZ Studios © {new Date().getFullYear()} • Wszystkie prawa zastrzeżone.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
