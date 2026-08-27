import type { Metadata } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LoginForm from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Logowanie | MZ Studios',
  description: 'Strona logowania do panelu użytkownika MZ Studios.',
};

export default function LoginPage() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 6, md: 10 },
        minHeight: 'calc(100vh - 160px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <LoginForm />
      </Box>
    </Container>
  );
}
