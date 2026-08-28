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
  Menu,
  MenuItem,
  Divider,
  Chip,
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
  Logout as LogoutIcon,
  Person as PersonIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useAuth } from '@/context/AuthContext';

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
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleMenuClose();
    await logout();
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const userInitials = React.useMemo(() => {
    if (!user) return 'U';
    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    return user.username ? user.username[0].toUpperCase() : 'U';
  }, [user]);

  const displayName = React.useMemo(() => {
    if (!user) return '';
    if (user.firstName) return `${user.firstName} ${user.lastName ? user.lastName[0] + '.' : ''}`;
    return user.username;
  }, [user]);

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

          {/* Right Actions & Auth Button / User Profile */}
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

            {user ? (
              <>
                <Button
                  onClick={handleProfileMenuOpen}
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowDownIcon sx={{ fontSize: 20, transition: 'transform 0.2s', transform: isMenuOpen ? 'rotate(180deg)' : 'none' }} />}
                  startIcon={
                    <Box sx={{ position: 'relative', display: 'flex' }}>
                      <Avatar
                        sx={{
                          width: 34,
                          height: 34,
                          fontSize: '0.875rem',
                          fontWeight: 700,
                          bgcolor: 'primary.main',
                          color: '#fff',
                          boxShadow: '0 0 10px rgba(90, 130, 173, 0.4)',
                        }}
                      >
                        {userInitials}
                      </Avatar>
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          width: 9,
                          height: 9,
                          borderRadius: '50%',
                          bgcolor: '#10b981',
                          border: '2px solid #0a0f1d',
                        }}
                      />
                    </Box>
                  }
                  sx={{
                    px: 2.2,
                    py: 1,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    borderRadius: '12px',
                    borderColor: isMenuOpen ? 'primary.main' : 'rgba(90, 130, 173, 0.4)',
                    bgcolor: isMenuOpen ? 'rgba(90, 130, 173, 0.12)' : 'rgba(90, 130, 173, 0.05)',
                    transition: 'all 0.2s ease',
                    display: { xs: 'none', sm: 'inline-flex' },
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(90, 130, 173, 0.15)',
                    },
                  }}
                >
                  {displayName}
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  open={isMenuOpen}
                  onClose={handleMenuClose}
                  onClick={handleMenuClose}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  slotProps={{
                    paper: {
                      elevation: 16,
                      sx: {
                        mt: 1.5,
                        minWidth: 280,
                        bgcolor: 'rgba(15, 23, 42, 0.96)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(90, 130, 173, 0.3)',
                        borderRadius: 3,
                        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(90, 130, 173, 0.15)',
                        p: 0.5,
                        '& .MuiMenuItem-root': {
                          py: 1.4,
                          px: 2,
                          fontSize: '0.925rem',
                          fontWeight: 500,
                          borderRadius: 2,
                          mx: 0.5,
                          my: 0.3,
                          transition: 'all 0.15s ease',
                          '&:hover': {
                            bgcolor: 'rgba(90, 130, 173, 0.12)',
                          },
                        },
                      },
                    },
                  }}
                >
                  {/* Expanded User Profile Header */}
                  <Box sx={{ p: 2.2, bgcolor: 'rgba(90, 130, 173, 0.06)', borderRadius: 2, m: 0.5, mb: 1 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        sx={{
                          width: 46,
                          height: 46,
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          bgcolor: 'primary.main',
                          color: '#fff',
                          boxShadow: '0 0 12px rgba(90, 130, 173, 0.4)',
                        }}
                      >
                        {userInitials}
                      </Avatar>
                      <Box sx={{ overflow: 'hidden' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.2 }}>
                          {user.firstName ? `${user.firstName} ${user.lastName}` : user.username}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.825rem', mt: 0.3, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {user.email}
                        </Typography>
                        <Chip
                          label={`@${user.username}`}
                          size="small"
                          sx={{
                            mt: 0.8,
                            height: 20,
                            fontSize: '0.725rem',
                            fontWeight: 600,
                            bgcolor: 'rgba(90, 130, 173, 0.2)',
                            color: 'primary.light',
                            border: '1px solid rgba(90, 130, 173, 0.3)',
                          }}
                        />
                      </Box>
                    </Stack>
                  </Box>

                  <Divider sx={{ my: 0.8, borderColor: 'rgba(255, 255, 255, 0.08)' }} />

                  <MenuItem onClick={handleMenuClose} component={Link} href='/profile'>
                    <ListItemIcon sx={{ color: 'primary.main', minWidth: 36 }}>
                      <PersonIcon sx={{ fontSize: 22 }} />
                    </ListItemIcon>
                    Mój Profil
                  </MenuItem>

                  <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon sx={{ color: 'text.secondary', minWidth: 36 }}>
                      <SettingsIcon sx={{ fontSize: 22 }} />
                    </ListItemIcon>
                    Ustawienia konta
                  </MenuItem>

                  <Divider sx={{ my: 0.8, borderColor: 'rgba(255, 255, 255, 0.08)' }} />

                  <MenuItem onClick={handleLogout} sx={{ color: '#e06c75', '&:hover': { bgcolor: 'rgba(224, 108, 117, 0.12) !important' } }}>
                    <ListItemIcon sx={{ color: '#e06c75', minWidth: 36 }}>
                      <LogoutIcon sx={{ fontSize: 22 }} />
                    </ListItemIcon>
                    Wyloguj się
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                component={Link}
                href="/login"
                variant="contained"
                color="primary"
                size="small"
                startIcon={<UserCircleIcon sx={{ fontSize: '22px !important' }} />}
                sx={{ px: 2.5, py: 0.8, fontSize: '0.9rem', fontWeight: 600, display: { xs: 'none', sm: 'inline-flex' } }}
              >
                Logowanie
              </Button>
            )}

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
              {user ? (
                <Button
                  fullWidth
                  variant="outlined"
                  color="error"
                  startIcon={<LogoutIcon />}
                  onClick={handleLogout}
                  sx={{ py: 1.2, fontWeight: 600 }}
                >
                  Wyloguj się ({displayName})
                </Button>
              ) : (
                <Button
                  component={Link}
                  href="/login"
                  fullWidth
                  variant="contained"
                  color="primary"
                  startIcon={<UserCircleIcon />}
                  onClick={() => setMobileOpen(false)}
                  sx={{ py: 1, fontWeight: 600 }}
                >
                  Logowanie
                </Button>
              )}
            </Box>
          </Container>
        </Box>
      </Collapse>
    </AppBar>
  );
}
