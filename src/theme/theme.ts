import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const baseTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5a82ad', // Muted steel blue (stonowany błękit)
      light: '#84a7d0',
      dark: '#3a5980',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5b9a9c', // Soft slate teal accent
      light: '#82c0c2',
      dark: '#386e70',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a0f1d', // Deep obsidian dark background
      paper: '#111827', // Slate dark surface
    },
    text: {
      primary: '#f9fafb',
      secondary: '#9ca3af',
      disabled: '#6b7280',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
    error: {
      main: '#e06c75', // Stonowany, miękki koralowy róż (nie razi w oczy w dark mode)
      light: '#ea8a93',
      dark: '#b0525b',
      contrastText: '#ffffff',
    },
    action: {
      active: '#9ca3af',
      hover: 'rgba(90, 130, 173, 0.08)',
      selected: 'rgba(90, 130, 173, 0.16)',
      disabled: '#4b5563',
      disabledBackground: '#1f2937',
    },
  },
  typography: {
    fontFamily: [
      'var(--font-geist-sans)',
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0a0f1d',
          color: '#f9fafb',
          scrollbarColor: '#1f2937 #0a0f1d',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#0a0f1d',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#1f2937',
            borderRadius: '4px',
            '&:hover': {
              background: '#374151',
            },
          },
        },
        'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active': {
          WebkitBoxShadow: '0 0 0 1000px #111827 inset !important',
          WebkitTextFillColor: '#f9fafb !important',
          caretColor: '#f9fafb',
          transition: 'background-color 50000s ease-in-out 0s',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          fontWeight: 600,
          padding: '8px 20px',
          transition: 'all 0.2s ease-in-out',
        },
        containedPrimary: {
          backgroundColor: '#4c6e98',
          boxShadow: '0px 4px 14px rgba(76, 110, 152, 0.25)',
          '&:hover': {
            backgroundColor: '#5a82ad',
            boxShadow: '0px 6px 20px rgba(90, 130, 173, 0.35)',
            transform: 'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(90, 130, 173, 0.35)',
          '&:hover': {
            borderColor: '#5a82ad',
            backgroundColor: 'rgba(90, 130, 173, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#111827',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#111827',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            borderColor: 'rgba(90, 130, 173, 0.3)',
            boxShadow: '0 16px 36px -10px rgba(76, 110, 152, 0.15)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.12)',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(90, 130, 173, 0.5)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#5a82ad',
            borderWidth: '1px',
            boxShadow: '0 0 0 3px rgba(90, 130, 173, 0.2)',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(224, 108, 117, 0.6)',
          },
          '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e06c75',
            boxShadow: '0 0 0 3px rgba(224, 108, 117, 0.18)',
          },
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px #111827 inset !important',
            WebkitTextFillColor: '#f9fafb !important',
            caretColor: '#f9fafb',
            borderRadius: '0px',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: '6px',
          fontSize: '0.82rem',
          fontWeight: 500,
          '&.Mui-error': {
            color: '#e06c75',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 500,
        },
        filledPrimary: {
          backgroundColor: 'rgba(90, 130, 173, 0.15)',
          color: '#84a7d0',
          border: '1px solid rgba(90, 130, 173, 0.3)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 15, 29, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: 'none',
        },
      },
    },
  },
});

export const darkTheme = responsiveFontSizes(baseTheme);
export default darkTheme;
