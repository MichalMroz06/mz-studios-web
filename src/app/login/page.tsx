import type { Metadata } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import LoginHeader from '@/components/login/LoginHeader';
import LoginFormFields from '@/components/login/LoginFormFields';
import LoginFooter from '@/components/login/LoginFooter';

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
      <Box sx={{ width: '100%', maxWidth: 450, mx: 'auto' }}>
        <Card
          elevation={0}
          sx={{
            bgcolor: 'rgba(17, 24, 39, 0.8)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 4,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
            <LoginHeader />
            <LoginFormFields />
            <Divider sx={{ my: 3.5, borderColor: 'rgba(255, 255, 255, 0.08)' }} />
            <LoginFooter />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
