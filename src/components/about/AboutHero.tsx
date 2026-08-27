'use client';

import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function AboutHero() {
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '2.2rem', sm: '3.2rem', md: '3.6rem' },
          lineHeight: 1.15,
          mb: 2.5,
          background: 'linear-gradient(135deg, #FFFFFF 0%, #B0C4DE 50%, #5A82AD 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Tworzymy Światy z Pasją i Precyzją
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: 'text.secondary',
          fontWeight: 400,
          maxWidth: '760px',
          mx: 'auto',
          fontSize: { xs: '1rem', sm: '1.15rem' },
          lineHeight: 1.65,
        }}
      >
        MZ Studios to niezależne studio game dev oraz Software House. Naszym celem jest dostarczanie gier wideo,
        które łączą wciągającą historię, zapamiętywalną oprawę graficzną oraz innowacyjne mechaniki rozgrywki.
        Ponad to zajmujemy się tworzeniem oprogramowania i aplikacji.
      </Typography>
    </Box>
  );
}
