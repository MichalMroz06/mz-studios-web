'use client';

import { Grid, Box, Typography } from '@mui/material';
import {
  Security as SecurityIcon,
  Mail as MailIcon,
  VpnKey as KeyIcon,
} from '@mui/icons-material';

export default function RegisterCards() {
  return (
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
  );
}
