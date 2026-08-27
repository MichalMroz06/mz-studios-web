'use client';

import { Stack, Box, Typography } from '@mui/material';

export default function RegisterHeader() {
  return (
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
  );
}
