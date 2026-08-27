'use client';

import Container from '@mui/material/Container';
import AboutHero from '@/components/about/AboutHero';
import AboutMetrics from '@/components/about/AboutMetrics';
import AboutValues from '@/components/about/AboutValues';
import AboutSolo from '@/components/about/AboutSolo';
import AboutTimeline from '@/components/about/AboutTimeline';

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 5 }, pb: { xs: 8, md: 10 } }}>
      <AboutHero />
      <AboutMetrics />
      <AboutValues />
      <AboutSolo />
      <AboutTimeline />
    </Container>
  );
}