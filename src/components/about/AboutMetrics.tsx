'use client';

import * as React from 'react';
import { Grid, Paper, Avatar, Typography } from '@mui/material';
import {
  CalendarMonth as CalendarIcon,
  Groups as CommunityIcon,
  RocketLaunch as LaunchIcon,
} from '@mui/icons-material';

const METRICS = [
  { value: '2026', label: 'Rok Założenia', icon: <CalendarIcon sx={{ fontSize: 28 }} /> },
  { value: '1', label: 'Członków Zespołu', icon: <CommunityIcon sx={{ fontSize: 28 }} /> },
  { value: '2', label: 'Projekty w Przygotowaniu', icon: <LaunchIcon sx={{ fontSize: 28 }} /> },
];

export default function AboutMetrics() {
  const count = METRICS.length;
  const colSize = count > 0 ? Math.max(3, Math.floor(12 / count)) : 12;

  return (
    <Grid container spacing={2.5} justifyContent="center" sx={{ mb: { xs: 8, md: 10 } }}>
      {METRICS.map((metric) => (
        <Grid item xs={12} sm={6} md={colSize} key={metric.label}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              textAlign: 'center',
              borderRadius: 3,
              bgcolor: 'rgba(17, 24, 39, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'rgba(90, 130, 173, 0.4)',
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: 'rgba(90, 130, 173, 0.15)',
                color: 'primary.main',
                width: 50,
                height: 50,
                mx: 'auto',
                mb: 1.5,
                borderRadius: 2.5,
              }}
            >
              {metric.icon}
            </Avatar>
            <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
              {metric.value}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              {metric.label}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
