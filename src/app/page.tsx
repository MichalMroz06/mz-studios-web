import * as React from 'react';
import Container from '@mui/material/Container';
import HeroSection from '@/components/HeroSection';
import GamesSection from '@/components/GamesSection';
import GameTechSection from '@/components/GameTechSection';
import ContactBanner from '@/components/ContactBanner';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ pt: 2, pb: 6 }}>
      <HeroSection />
      <GamesSection />
      <GameTechSection />
      <ContactBanner />
    </Container>
  );
}
