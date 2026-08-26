'use client';

import * as React from 'react';
import {
  Paper,
  Typography,
  Grid,
  Stack,
  TextField,
  InputAdornment,
  FormControlLabel,
  Switch,
  Badge,
  Button,
  Divider,
  Chip,
} from '@mui/material';
import {
  Search as SearchIcon,
  Dashboard as DashboardIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';

export default function ShowcaseSection() {
  const [toggleState, setToggleState] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <Paper sx={{ p: { xs: 3, sm: 5 }, borderRadius: 4, mb: 6 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
        Prezentacja Elementów UI
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
        Przetestuj zdefiniowane style przycisków, pól tekstowych, kontrolek oraz odznak.
      </Typography>

      <Grid container spacing={4}>
        {/* Input & Form Controls */}
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Typography variant="subtitle2" sx={{ color: 'primary.light', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>
              Formularze & Pola Wprowadzania
            </Typography>

            <TextField
              fullWidth
              placeholder="Szukaj w projekcie..."
              value={searchValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'text.secondary' }} />
                  </InputAdornment>
                ),
              }}
            />

            <Stack direction="row" spacing={2} alignItems="center">
              <FormControlLabel
                control={
                  <Switch
                    checked={toggleState}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setToggleState(e.target.checked)}
                    color="primary"
                  />
                }
                label="Powiadomienia aktywne"
              />
              <Badge color="primary" variant="dot" invisible={!toggleState}>
                <DashboardIcon sx={{ color: 'text.secondary' }} />
              </Badge>
            </Stack>
          </Stack>
        </Grid>

        {/* Buttons & Chips */}
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Typography variant="subtitle2" sx={{ color: 'primary.light', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>
              Przyciski & Odznaki
            </Typography>

            <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
              <Button variant="contained" color="primary">
                Primary Button
              </Button>
              <Button variant="outlined" color="primary">
                Outlined Blue
              </Button>
              <Button variant="text" color="primary">
                Text Link
              </Button>
            </Stack>

            <Divider sx={{ my: 1 }} />

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip icon={<CheckIcon />} label="Sukces" color="success" size="small" />
              <Chip label="Główny Akcent" color="primary" size="small" />
              <Chip label="Morski Accent" color="secondary" size="small" />
              <Chip label="Zwykły Tag" variant="outlined" size="small" />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}
