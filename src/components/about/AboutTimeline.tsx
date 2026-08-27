'use client';

import * as React from 'react';
import { Box, Typography, Grid, Paper, Chip } from '@mui/material';

const TIMELINE = [
  {
    year: '2025',
    title: 'Powstanie MZ Studios',
    description: 'Rozpoczęcie działalności pod nazwą MZ Studios.',
  },
  {
    year: '2026',
    title: 'Start prac nad pierwszą grą',
    description: 'Rozpoczęcie prac nad pierwszą grą na silniku Godot 4.7.1.',
  },
  {
    year: '2026',
    title: 'Rozpoczęcie prac nad aplikacją spoleczną',
    description: 'Rozpoczęcie prac nad aplikacją społecznościową dla studentów.',
  }
];

export default function AboutTimeline() {
  const count = TIMELINE.length;
  const colSize = count > 0 ? Math.max(3, Math.floor(12 / count)) : 12;

  return (
    <Box sx={{ mb: { xs: 8, md: 10 } }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
          Nasza Droga i Kamienie Milowe
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
          Od pierwszych pomysłów po rozwój dojrzałego studia gier.
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {TIMELINE.map((item, idx) => (
          <Grid item xs={12} sm={6} md={colSize} key={`${item.year}-${idx}`}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 3,
                bgcolor: 'rgba(17, 24, 39, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  bgcolor: idx % 2 === 0 ? 'primary.main' : 'secondary.main',
                },
              }}
            >
              <Chip
                label={item.year}
                size="small"
                sx={{
                  fontWeight: 700,
                  bgcolor: 'rgba(90, 130, 173, 0.15)',
                  color: 'primary.main',
                  mb: 2,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1.05rem', color: 'text.primary' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
