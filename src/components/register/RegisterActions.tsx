'use client';

import Link from 'next/link';
import { Stack, Button } from '@mui/material';
import { ContactSupport as SupportIcon } from '@mui/icons-material';

export default function RegisterActions() {
  return (
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
  );
}
