'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Divider,
  Grid,
} from '@mui/material';
import {
  Security as SecurityIcon,
  ContactSupport as SupportIcon,
  VpnKey as KeyIcon,
  Mail as MailIcon,
} from '@mui/icons-material';

export default function RegisterInfo() {
  return (
    <Box sx={{ width: '100%' }}>
      <Card
        elevation={0}
        sx={{
          bgcolor: 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 4,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
        }}
      >
        <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
          {/* Header */}
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 4 }}>
            <Box>
              <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
                Dostęp i Rejestracja Konta
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 580, mx: 'auto' }}>
                Samodzielna rejestracja użytkowników w systemie MZ Studios jest wyłączona. Wszystkie konta są tworzone oraz konfigurowane bezpośrednio przez administratora.
              </Typography>
            </Box>
          </Stack>

          <Divider sx={{ mb: 4, borderColor: 'rgba(255, 255, 255, 0.08)' }} />

          {/* Info grid */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <SecurityIcon sx={{ color: 'primary.main', fontSize: 30, mb: 1.5 }} />
                <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 600, mb: 1 }}>
                  Polityka Dostępowa
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dostęp do panelu przyznawany jest zweryfikowanym członkom zespołu oraz uprawnionym partnerom studio.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <MailIcon sx={{ color: 'primary.main', fontSize: 30, mb: 1.5 }} />
                <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 600, mb: 1 }}>
                  Wniosek o Konto
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Jeśli potrzebujesz dostępu do systemu, skontaktuj się z administratorem lub skorzystaj z formularza kontaktowego.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <KeyIcon sx={{ color: 'primary.main', fontSize: 30, mb: 1.5 }} />
                <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 600, mb: 1 }}>
                  Wsparcie Techniczne
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  W przypadku pytań dotyczących uprawnień lub odzyskiwania dostępu prosimy o zgłoszenie do działu IT.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Action buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              startIcon={<SupportIcon />}
              sx={{ py: 1.2, px: 3, width: { xs: '100%', sm: 'auto' } }}
            >
              Formularz kontaktowy
            </Button>
            <Button
              component={Link}
              href="/login"
              variant="outlined"
              size="large"
              sx={{ py: 1.2, px: 3, width: { xs: '100%', sm: 'auto' } }}
            >
              Przejdź do logowania
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
