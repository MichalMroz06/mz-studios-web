'use client';

import * as React from 'react';
import { Box, Typography, Paper, Grid, Avatar, Chip, Stack } from '@mui/material';
import {
  Person as PersonIcon,
  Code as CodeIcon,
  SportsEsports as GamepadIcon,
  Terminal as TerminalIcon,
  AutoAwesome as QualityIcon,
} from '@mui/icons-material';

const HIGHLIGHTS = [
  {
    icon: <GamepadIcon sx={{ fontSize: 24, color: '#5A82AD' }} />,
    title: 'Gry Wideo & Game Dev',
    description: 'Tworzenie innowacyjnych gier na silniku Godot Engine 4 z dopracowanymi mechanikami i oprawą visual.',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 24, color: '#5B9A9C' }} />,
    title: 'Software House & Aplikacje',
    description: 'Projektowanie i wdrażanie nowoczesnego oprogramowania, dedykowanych aplikacji oraz systemów.',
  },
  {
    icon: <QualityIcon sx={{ fontSize: 24, color: '#8A7BB0' }} />,
    title: 'Pełne Zaangażowanie 1:1',
    description: 'Bezpośredni kontakt, brak zbędnej biurokracji i 100% dbałości o jakość dostarczanych rozwiązań.',
  },
];

export default function AboutSolo() {
  return (
    <Box sx={{ mb: { xs: 8, md: 10 } }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3.5, sm: 5 },
          borderRadius: 4,
          bgcolor: 'rgba(17, 24, 39, 0.6)',
          border: '1px solid rgba(90, 130, 173, 0.25)',
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(90, 130, 173, 0.08) 100%)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent={{ xs: 'center', md: 'flex-start' }} sx={{ mb: 2 }}>
              <Chip
                icon={<PersonIcon sx={{ fontSize: '18px !important' }} />}
                label="JEDNOOSOBOWA DZIAŁALNOŚĆ"
                color="primary"
                size="small"
                sx={{ fontWeight: 700, px: 1, py: 0.5, bgcolor: 'rgba(90, 130, 173, 0.15)' }}
              />
            </Stack>

            <Typography variant="h4" component="h2" sx={{ fontWeight: 800, mb: 2, color: 'text.primary' }}>
              Jedna Osoba, Wiele Możliwości
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}>
              Cała działalność <strong>MZ Studios</strong> jest prowadzona i rozwijana przez jedną osobę.
              Łącząc kompetencje z zakresu <strong>Game Developmentu</strong> oraz <strong>tworzenia oprogramowania</strong> (Software House),
              dostarczam spójne, przemyślane i dopracowane projekty od pomysłu po finalne wdrożenie.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              {HIGHLIGHTS.map((item) => (
                <Paper
                  key={item.title}
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    bgcolor: 'rgba(10, 15, 29, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    transition: 'border-color 0.2s ease',
                    '&:hover': {
                      borderColor: 'rgba(90, 130, 173, 0.3)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.05rem', color: 'text.primary', mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
