import * as React from 'react';
import Container from '@mui/material/Container';
import HeroSection from '@/components/main-page/HeroSection';
import GamesSection from '@/components/main-page/GamesSection';
import GameTechSection from '@/components/main-page/GameTechSection';
import ContactBanner from '@/components/main-page/ContactBanner';

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
