'use client';

import * as React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
} from '@mui/material';
import {
  Psychology as AiIcon,
  Favorite as PassionIcon,
  SportsEsports as EngineIcon,
} from '@mui/icons-material';

export default function GameTechSection() {
  return (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
          Nasza Technologia i Warsztat Game Dev
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 620, mx: 'auto' }}>
          Wykorzystujemy najnowocześniejsze narzędzia i autorskie rozwiązanie programistyczne, aby dostarczać gry najwyższej jakości.
        </Typography>
      </Box>

      <Grid container spacing={3}>
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
                <EngineIcon sx={{ fontSize: 28 }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                Godot Engine 4
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Zwracamy szczególną uwagę na estetykę 2D, płynną fizykę oraz nowoczesny rendering w czasie rzeczywistym.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

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
                <AiIcon sx={{ fontSize: 28 }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                Realistyczne AI
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Projektujemy realistyczne systemy zachowań przeciwników, zaawansowaną sztuczną inteligencję oraz precyzyjne mechaniki walki.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

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
                <PassionIcon sx={{ fontSize: 28 }} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                Pasja i zaangażowanie
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Tworzymy gry z pasją, stawiając na zaangażowanie i doświadczenia graczy.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
