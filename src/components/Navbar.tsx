'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  SportsEsports as GamepadIcon,
  Search as SearchIcon,
  AccountCircle as UserCircleIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Phone as PhoneIcon,
  Newspaper as NewsIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Strona Główna', icon: <HomeIcon sx={{ fontSize: 22 }} />, href: '/' },
  { label: 'Aktualności', icon: <NewsIcon sx={{ fontSize: 22 }} />, href: '/news' },
  { label: 'Nasze Gry', icon: <GamepadIcon sx={{ fontSize: 22 }} />, href: '/games' },
  { label: 'O Nas', icon: <InfoIcon sx={{ fontSize: 22 }} />, href: '/about' },
  { label: 'Kontakt', icon: <PhoneIcon sx={{ fontSize: 22 }} />, href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ bgcolor: 'rgba(10, 15, 29, 0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, px: { xs: 0, sm: 2 } }}>
          {/* Logo */}
          <Stack
            component={Link}
            href="/"
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
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

          {/* Desktop Navigation Links */}
          <Stack direction="row" spacing={3.5} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
              const navContent = (
                <Stack
                  direction="row"
                  spacing={0.8}
                  alignItems="center"
                  sx={{
                    color: isActive ? 'text.primary' : 'text.secondary',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: isActive ? 'primary.main' : 'text.primary' },
                  }}
                >
                  {item.icon}
                  <Typography variant="body2" sx={{ fontWeight: isActive ? 600 : 500 }}>
                    {item.label}
                  </Typography>
                </Stack>
              );

              return (
                <Box key={item.label} component={Link} href={item.href} sx={{ textDecoration: 'none' }}>
                  {navContent}
                </Box>
              );
            })}
          </Stack>

          {/* Right Actions & Hamburger Button */}
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
              sx={{ px: 2.5, py: 0.8, fontSize: '0.9rem', fontWeight: 600, display: { xs: 'none', sm: 'inline-flex' } }}
            >
              Logowanie
            </Button>

            {/* Mobile Hamburger Toggle Button */}
            <IconButton
              color="inherit"
              aria-label="Otwórz menu"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: 'none' },
                color: 'text.primary',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                p: '8px',
                '&:hover': {
                  borderColor: 'rgba(90, 130, 173, 0.4)',
                  bgcolor: 'rgba(90, 130, 173, 0.08)',
                },
              }}
            >
              {mobileOpen ? <CloseIcon sx={{ fontSize: 24 }} /> : <MenuIcon sx={{ fontSize: 24 }} />}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      {/* Dropdown Menu below sticky Navbar */}
      <Collapse in={mobileOpen} timeout="auto" unmountOnExit sx={{ display: { md: 'none' } }}>
        <Box
          sx={{
            bgcolor: '#111827',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.5)',
            py: 2,
            px: { xs: 2, sm: 3 },
            maxHeight: 'calc(80vh - 60px)',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#374151',
              borderRadius: '3px',
            },
          }}
        >
          <Container maxWidth="lg" disableGutters>
            <List disablePadding>
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
                return (
                  <ListItem key={item.label} disablePadding sx={{ mb: 0.8 }}>
                    <ListItemButton
                      component={Link}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      sx={{
                        borderRadius: 2,
                        color: isActive ? 'primary.main' : 'text.secondary',
                        bgcolor: isActive ? 'rgba(90, 130, 173, 0.12)' : 'transparent',
                        '&:hover': { bgcolor: 'rgba(90, 130, 173, 0.15)', color: 'text.primary' },
                      }}
                    >
                      <ListItemIcon sx={{ color: 'inherit', minWidth: 38 }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{ fontWeight: isActive ? 700 : 500, fontSize: '0.95rem' }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>

            <Box sx={{ pt: 1.5 }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<UserCircleIcon />}
                onClick={() => setMobileOpen(false)}
                sx={{ py: 1, fontWeight: 600 }}
              >
                Logowanie
              </Button>
            </Box>
          </Container>
        </Box>
      </Collapse>
    </AppBar>
  );
}
