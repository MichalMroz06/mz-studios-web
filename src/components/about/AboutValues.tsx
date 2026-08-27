'use client';

import * as React from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import {
  Favorite as PassionIcon,
  AutoAwesome as QualityIcon,
  Shield as HonestIcon,
  Lightbulb as CreativeIcon,
} from '@mui/icons-material';

const VALUES = [
  {
    title: 'Pasja Bez Kompromisów',
    description: 'Tworzymy gry, w które sami z dumą gramy. Każdy detali jest dopracowywany z sercem.',
    icon: <PassionIcon sx={{ fontSize: 28, color: '#E57373' }} />,
  },
  {
    title: 'Jakość i Optymalizacja',
    description: 'Dbamy o czystość kodu i płynność działania zarówno w grach, jak i dedykowanym oprogramowaniu.',
    icon: <QualityIcon sx={{ fontSize: 28, color: '#64B5F6' }} />,
  },
  {
    title: 'Uczciwość Wobec Graczy',
    description: 'Stawiamy na głęboką rozgrywkę i kompletnie dopracowaną zawartość zamiast mikrotransakcji.',
    icon: <HonestIcon sx={{ fontSize: 28, color: '#81C784' }} />,
  },
  {
    title: 'Kreatywna Wolność',
    description: 'Podczas pracy nad projektami staramy się dać z siebie 100% oraz niekonwencjonalnie podejść do wielu tematów.',
    icon: <CreativeIcon sx={{ fontSize: 28, color: '#FFB74D' }} />,
  },
];

export default function AboutValues() {
  return (
    <Box sx={{ mb: { xs: 8, md: 10 } }}>
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
          Wartości, Którymi Się Kierujemy
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 580, mx: 'auto' }}>
          Kultura naszej pracy przekłada się bezpośrednio na jakość naszych gier.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {VALUES.map((val) => (
          <Grid item xs={12} sm={6} key={val.title}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: 'rgba(17, 24, 39, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2.5,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  width: 48,
                  height: 48,
                  borderRadius: 2.5,
                  flexShrink: 0,
                }}
              >
                {val.icon}
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.8, color: 'text.primary' }}>
                  {val.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {val.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
