import * as React from 'react';
import Container from '@mui/material/Container';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ShowcaseSection from '@/components/ShowcaseSection';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ pt: 2, pb: 6 }}>
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
    </Container>
  );
}
