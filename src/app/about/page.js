'use client';

import { Box, Container } from "@mui/material";
import AboutHeader from "./components/AboutHeader";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";


export default function AboutSection() {
  return (
    <Box
      component="section"
      sx={{
        py: 10,
        background: 'linear-gradient(to bottom, #24243e, #0f0c29)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(121, 40, 202, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)',
          filter: 'blur(30px)'
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <AboutHeader />
        <SkillsSection />
        <ExperienceSection />
      </Container>
    </Box>
  );
}