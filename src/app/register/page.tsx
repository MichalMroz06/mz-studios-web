import type { Metadata } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import RegisterHeader from '@/components/register/RegisterHeader';
import RegisterCards from '@/components/register/RegisterCards';
import RegisterActions from '@/components/register/RegisterActions';

export const metadata: Metadata = {
  title: 'Informacje o Rejestracji | MZ Studios',
  description: 'Informacje na temat zarządzania kontami użytkowników i dostępu do systemu MZ Studios.',
};

export default function RegisterPage() {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: { xs: 6, md: 10 },
        minHeight: 'calc(100vh - 160px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '100%' }}>
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
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <RegisterHeader />
            <Divider sx={{ mb: 4, borderColor: 'rgba(255, 255, 255, 0.08)' }} />
            <RegisterCards />
            <RegisterActions />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
