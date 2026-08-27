'use client';

import Link from 'next/link';
import { Stack, Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function LoginHeader() {
  return (
    <Box>
      {/* Back to home page */}
      <Button
        component={Link}
        href="/"
        startIcon={<ArrowBackIcon />}
        sx={{
          mb: 3,
          color: 'text.secondary',
          '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
        }}
      >
        Powrót do strony głównej
      </Button>

      <Stack spacing={2} alignItems="center" sx={{ mb: 4, textAlign: 'center' }}>
        <Box textAlign="center">
          <Typography variant="h5" component="h1" sx={{ fontWeight: 700, mb: 0.5 }}>
            Witaj ponownie
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Zaloguj się do swojego konta w systemie MZ Studios
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
