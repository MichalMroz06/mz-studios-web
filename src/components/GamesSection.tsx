'use client';

import * as React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
} from '@mui/material';
import {
  SportsEsports as GameIcon,
  PlayArrow as PlayIcon,
  Schedule as ComingSoonIcon,
  Star as ReleasedIcon,
} from '@mui/icons-material';

const GAMES = [
  {
    title: 'Aetheria Chronicles',
    genre: 'Sci-Fi Action RPG',
    engine: 'Unreal Engine 5',
    status: 'Premiera Q4 2026',
    statusIcon: <ComingSoonIcon fontSize="small" />,
    statusColor: 'primary' as const,
    platforms: ['Steam', 'PS5', 'Xbox Series X'],
    description: 'Epidemia kosmicznej materii zmienia losy odległej kolonii. Odkrywaj otwarty świat, modyfikuj pancerz bojowy i stawiaj czoła nieznanym formom życia.',
  },
  {
    title: 'Neon Overdrive',
    genre: 'Cyberpunk Cyber-Racer',
    engine: 'Unity 6',
    status: 'Dostępne na Steam',
    statusIcon: <ReleasedIcon fontSize="small" />,
    statusColor: 'success' as const,
    platforms: ['PC', 'Steam Deck'],
    description: 'Dynamiczny wyścigowiec w klimacie synthwave. Przetestuj swoje refleksy przy prędkościach naddźwiękowych na neonowych torach futurystycznego metropolii.',
  },
  {
    title: 'Shadows of Eldoria',
    genre: 'Dark Fantasy Roguelike',
    engine: 'Custom C++ Engine',
    status: 'Zamknięta Beta',
    statusIcon: <ComingSoonIcon fontSize="small" />,
    statusColor: 'warning' as const,
    platforms: ['PC / Steam'],
    description: 'Mroczny roguelike z taktycznym systemem walki i losowo generowanymi podziemiami. Każde podejście wymaga nowej strategii i unikalnego buildu postaci.',
  },
];

export default function GamesSection() {
  return (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
          Nasze Gry i Projekty
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto' }}>
          Poznaj tytuły stworzone przez nasze studio – od mrocznych gier roguelike po kinowe produkcje Sci-Fi.
        </Typography>
      </Box>

      <Grid container spacing={3.5}>
        {GAMES.map((game, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <CardContent sx={{ p: 3, flexGrow: 1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Chip
                    icon={game.statusIcon}
                    label={game.status}
                    color={game.statusColor}
                    size="small"
                    variant="filled"
                  />
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    {game.engine}
                  </Typography>
                </Stack>

                <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary' }}>
                  {game.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: 'primary.light', mb: 2, fontWeight: 600 }}>
                  {game.genre}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 3 }}>
                  {game.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 'auto' }}>
                  {game.platforms.map((platform, pIdx) => (
                    <Chip key={pIdx} label={platform} size="small" variant="outlined" sx={{ fontSize: '0.75rem' }} />
                  ))}
                </Stack>
              </CardContent>

              <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                <Button fullWidth variant="outlined" color="primary" startIcon={<PlayIcon />} size="small">
                  Karta Gry / Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
