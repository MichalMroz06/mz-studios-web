'use client';

import Link from 'next/link';
import { Box, Typography } from '@mui/material';

export default function LoginFooter() {
  return (
    <Box textAlign="center">
      <Typography variant="body2" color="text.secondary">
        Nie posiadasz jeszcze konta?{' '}
        <Typography
          component={Link}
          href="/register"
          variant="body2"
          sx={{
            color: 'primary.main',
            fontWeight: 600,
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          Dowiedz się więcej
        </Typography>
      </Typography>
    </Box>
  );
}
