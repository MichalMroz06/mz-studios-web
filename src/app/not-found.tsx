'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import {
  Home as HomeIcon,
  SportsEsports as GamepadIcon,
} from '@mui/icons-material';

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 }, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, sm: 6 },
          width: '100%',
          textAlign: 'center',
          borderRadius: 4,
          background: 'linear-gradient(135deg, rgba(90, 130, 173, 0.1) 0%, rgba(17, 24, 39, 0.95) 100%)',
          border: '1px solid rgba(90, 130, 173, 0.25)',
          boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '6rem', sm: '8rem', md: '9rem' },
            fontWeight: 900,
            lineHeight: 1,
            mb: 1,
            background: 'linear-gradient(135deg, #FFFFFF 0%, #B0C4DE 50%, #5A82AD 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.04em',
          }}
        >
          404
        </Typography>

        <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>
          Strona Nie Została Znaleziona
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 480, mx: 'auto', mb: 4, lineHeight: 1.6 }}>
          Przepraszamy! Strona, której szukasz nie istnieje, została usunięta lub wpisany adres jest niepoprawny.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            component={Link}
            href="/"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<HomeIcon />}
            sx={{ px: 4, py: 1.25, fontSize: '1rem', fontWeight: 600 }}
          >
            Wróć na Stronę Główną
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
