'use client';
import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import { motion } from 'framer-motion';
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioFilter from './components/PortfolioFilter';
import ProjectsGrid from './components/ProjectsGrid';
import { projects, categories } from './components/portfolioData';

export default function PortfolioSection() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

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
      {/* Background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-100px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(121, 40, 202, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <PortfolioHeader />

        <PortfolioFilter
          categories={categories}
          filter={filter}
          setFilter={setFilter}
        />

        <ProjectsGrid projects={filteredProjects} />
      </Container>
    </Box>
  );
}