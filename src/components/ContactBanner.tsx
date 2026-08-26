'use client';

import * as React from 'react';
import {
  Paper,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import {
  Send as SendIcon,
  Groups as JobsIcon,
} from '@mui/icons-material';

export default function ContactBanner() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 4, sm: 6 },
        borderRadius: 4,
        background: 'linear-gradient(135deg, rgba(90, 130, 173, 0.12) 0%, rgba(17, 24, 39, 0.9) 100%)',
        border: '1px solid rgba(90, 130, 173, 0.25)',
        textAlign: 'center',
        mb: 6,
      }}
    >
      <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
        Chcesz dowiedzieć się więcej o nas lub naszych grach?
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 580, mx: 'auto', mb: 3.5, lineHeight: 1.6 }}>
        Jesteśmy otwarci na współpracę, bądź gotowi odpowiedzieć na ważne pytania! Skontaktuj się z nami!
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SendIcon />}
          sx={{ px: 4, py: 1.2 }}
        >
          Napisz do nas za pośrednictwem formularza!
        </Button>
      </Stack>
    </Paper>
  );
}
