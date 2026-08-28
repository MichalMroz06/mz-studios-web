'use client';

import * as React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  IconButton,
  Slide,
  Link as MuiLink,
} from '@mui/material';
import {
  Cookie as CookieIcon,
  Close as CloseIcon,
  Shield as ShieldIcon,
} from '@mui/icons-material';

const CONSENT_STORAGE_KEY = 'mz_cookie_consent';

export default function CookieConsentBanner() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!consent) {
      // Delay slightly for smooth page entrance
      const timer = setTimeout(() => {
        setOpen(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');
    setOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'essential_only');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Paper
        elevation={24}
        sx={{
          position: 'fixed',
          bottom: { xs: 12, sm: 24 },
          left: { xs: 12, sm: 24 },
          right: { xs: 12, sm: 'auto' },
          maxWidth: { sm: 540, md: 620 },
          zIndex: 1400,
          p: { xs: 2.5, sm: 3 },
          borderRadius: 3,
          bgcolor: 'rgba(15, 23, 42, 0.94)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(90, 130, 173, 0.3)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 20px rgba(90, 130, 173, 0.15)',
        }}
      >
        <Stack spacing={2}>
          {/* Header & Icon */}
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1.5}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  bgcolor: 'rgba(90, 130, 173, 0.15)',
                  color: 'primary.main',
                  border: '1px solid rgba(90, 130, 173, 0.3)',
                }}
              >
                <CookieIcon sx={{ fontSize: 24 }} />
              </Box>
              <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 700, color: 'text.primary' }}>
                Ta strona używa plików cookies 🍪
              </Typography>
            </Stack>
            <IconButton
              size="small"
              onClick={handleDecline}
              sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
              aria-label="Zamknij"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>

          {/* Description */}
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '0.875rem' }}>
            Używamy plików cookies (ciasteczek) oraz technologii sesji, aby zapamiętać Twój stan zalogowania,
            zapewnić bezpieczeństwo konta oraz poprawić jakość korzystania z serwisu MZ Studios.
          </Typography>

          {/* Action Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            justifyContent="flex-end"
            alignItems={{ xs: 'stretch', sm: 'center' }}
            sx={{ pt: 0.5 }}
          >
            <Button
              variant="text"
              size="small"
              onClick={handleDecline}
              sx={{
                color: 'text.secondary',
                fontSize: '0.825rem',
                justifyContent: { xs: 'center', sm: 'flex-start' },
                '&:hover': { color: 'text.primary', bgcolor: 'rgba(255, 255, 255, 0.05)' },
              }}
            >
              Tylko niezbędne
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleAccept}
              startIcon={<ShieldIcon sx={{ fontSize: '18px !important' }} />}
              sx={{
                px: 2.5,
                py: 1,
                fontWeight: 600,
                fontSize: '0.875rem',
                borderRadius: 2,
                boxShadow: '0 4px 14px rgba(90, 130, 173, 0.35)',
              }}
            >
              Akceptuję wszystkie
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Slide>
  );
}
