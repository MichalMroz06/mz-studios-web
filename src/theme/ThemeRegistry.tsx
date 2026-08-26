'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './theme';

export default function ThemeRegistry(props: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider {...props}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
