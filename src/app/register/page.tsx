import type { Metadata } from 'next';
import Container from '@mui/material/Container';
import RegisterInfo from '@/components/auth/RegisterInfo';

export const metadata: Metadata = {
  title: 'Informacje o Rejestracji | MZ Studios',
  description: 'Informacje na temat zarządzania kontami użytkowników i dostępu do systemu MZ Studios.',
};

export default function RegisterInfoPage() {
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
      <RegisterInfo />
    </Container>
  );
}
