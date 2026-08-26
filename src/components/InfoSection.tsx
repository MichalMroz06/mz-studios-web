'use client';

import * as React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Avatar,
} from '@mui/material';
import {
  Code as CodeIcon,
  Brush as BrushIcon,
  Speed as SpeedIcon,
  Groups as GroupsIcon,
} from '@mui/icons-material';

export default function InfoSection() {
  return (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
          O Nas i Naszych Usługach
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
          Podstawowe informacje o tym, czym się zajmujemy i jak pomagamy naszym klientom rozwijać ich cyfrowe produkty.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Card 1 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1 }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Avatar
                sx={{
                  bgcolor: 'rgba(90, 130, 173, 0.15)',
                  color: 'primary.main',
                  width: 52,
                  height: 52,
                  borderRadius: 3,
                  mb: 2.5,
                }}
              >
                <CodeIcon sx={{ fontSize: 28 }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                Aplikacje Webowe
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Projektujemy i wdrażamy skalowalne serwisy internetowe oraz aplikacje biznesowe przy użyciu technologii Next.js, React i TypeScript.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1 }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Avatar
                sx={{
                  bgcolor: 'rgba(91, 154, 156, 0.15)',
                  color: 'secondary.main',
                  width: 52,
                  height: 52,
                  borderRadius: 3,
                  mb: 2.5,
                }}
              >
                <BrushIcon sx={{ fontSize: 28 }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                Design UI/UX & Branding
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Tworzymy dopracowane systemy designu, prototypy oraz intuicyjne interfejsy użytkownika, które wciągają i zachwycają odbiorców.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1 }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Avatar
                sx={{
                  bgcolor: 'rgba(90, 130, 173, 0.15)',
                  color: 'primary.main',
                  width: 52,
                  height: 52,
                  borderRadius: 3,
                  mb: 2.5,
                }}
              >
                <SpeedIcon sx={{ fontSize: 28 }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                Wydajność & Dostępność
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Dbamy o błyskawiczne czas ładowania stron, pełną optymalizację pod kątem SEO oraz przestrzeganie standardów dostępności (WCAG).
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
