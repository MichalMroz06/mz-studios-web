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
} from '@mui/icons-material';

const GAMES = [
  {
    title: 'Grand Strife Civil War',
    genre: '2d Survival RPG Adventure',
    engine: 'Godot Engine 4.7.1',
    status: 'In development',
    statusIcon: <ComingSoonIcon fontSize="small" />,
    statusColor: 'primary' as const,
    platforms: ['PC / Itch.io'],
    description: 'Dark fantasy w pixelartowym klimacie z elementami survivalu, rozwoju postaci według własnych upodobań. Możesz zostać kim chcesz w tym ciężkim świecie, gdzie czycha na ciebie wiele niebezpieczeństw oraz pułapek.',
  }
]

export default function GamesSection() {
  return (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
          Nasze Gry i Projekty
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto' }}>
          Poznaj tytuły stworzone przez nasze studio – czyli RPG w klimacie fantasy tworzone z pasją.
        </Typography>
      </Box>

      <Grid container spacing={3.5} justifyContent="center" alignItems="stretch">
        {GAMES.map((game, index) => (
          <Grid
            item
            xs={12}
            sm={GAMES.length === 1 ? 8 : 6}
            md={GAMES.length === 1 ? 6 : GAMES.length === 2 ? 5 : 4}
            key={index}
          >
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
                  Dowiedz się więcej
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
