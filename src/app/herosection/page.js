'use client';

import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = theme.breakpoints.down('sm');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 0,
        px: { xs: 0, sm: 0 },
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '150px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.5))',
          zIndex: 1
        }
      }}
      component="section"
    >
      {/* Premium Animated Background */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2 }}
        sx={{
          position: 'absolute',
          top: { xs: '-10%', sm: '10%' },
          right: { xs: '-20%', sm: '10%' },
          width: { xs: '300px', sm: '400px', md: '500px' },
          height: { xs: '300px', sm: '400px', md: '500px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(121, 40, 202, 0.6) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        sx={{
          position: 'absolute',
          bottom: { xs: '-15%', sm: '10%' },
          left: { xs: '-20%', sm: '10%' },
          width: { xs: '350px', sm: '300px', md: '400px' },
          height: { xs: '350px', sm: '300px', md: '400px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(41, 171, 226, 0.5) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      {/* Subtle particle effect */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none'
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          px: { xs: 3, sm: 3 },
          py: { xs: 8, sm: 0 }
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 600,
              fontSize: { xs: '3rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
              lineHeight: { xs: 1.1, sm: 1.2 },
              background: 'linear-gradient(90deg, #ffffff, #c9d6ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: { xs: 2, sm: 3 },
              letterSpacing: { xs: '0.02em', sm: '0.03em' },
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
          >
            Hi, I'm <Box component="span" sx={{ display: { xs: 'block', sm: 'inline' } }}>Peem</Box>
          </Typography>

          <Typography
            variant="subtitle1"
            component="p"
            gutterBottom
            sx={{
              fontWeight: 300,
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.7rem' },
              maxWidth: '700px',
              mx: 'auto',
              mb: { xs: 4, sm: 5 },
              opacity: 0.9,
              lineHeight: { xs: 1.5, sm: 1.6 },
              px: { xs: 0, sm: 0 },
              textShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}
          >
            Crafting exceptional digital experiences with passion and precision
          </Typography>

          <Box sx={{
            display: 'flex',
            gap: { xs: 2.5, sm: 3 },
            justifyContent: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            mt: { xs: 4, sm: 0 }
          }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: { xs: 6, sm: 6 },
                py: { xs: 1.5, sm: 1.8 },
                fontSize: { xs: '1.05rem', sm: '1.1rem' },
                fontWeight: 600,
                borderRadius: '50px',
                background: 'linear-gradient(90deg, #7928ca, #ff0080)',
                boxShadow: '0 4px 20px rgba(121, 40, 202, 0.5)',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 25px rgba(121, 40, 202, 0.7)',
                  background: 'linear-gradient(90deg, #8a3ffb, #ff1a8c)'
                },
                transition: 'all 0.3s ease',
                width: { xs: '100%', sm: 'auto' },
                maxWidth: { xs: '300px', sm: 'none' },
                minWidth: { xs: '220px', sm: 'none' }
              }}
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('portfolio-section')}
            >
              View My Work
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                px: { xs: 6, sm: 6 },
                py: { xs: 1.5, sm: 1.8 },
                fontSize: { xs: '1.05rem', sm: '1.1rem' },
                fontWeight: 600,
                borderRadius: '50px',
                border: '2px solid rgba(255,255,255,0.4)',
                color: 'white',
                backdropFilter: 'blur(5px)',
                backgroundColor: 'rgba(255,255,255,0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  border: '2px solid rgba(255,255,255,0.7)'
                },
                transition: 'all 0.3s ease',
                width: { xs: '100%', sm: 'auto' },
                maxWidth: { xs: '300px', sm: 'none' },
                minWidth: { xs: '220px', sm: 'none' }
              }}
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact-section')}
            >
              Contact Me
            </Button>
          </Box>

          {isMobile && (
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              sx={{
                mt: 6,
                display: 'flex',
                justifyContent: 'center',
                animation: 'bounce 2s infinite'
              }}
            >
              <Box
                component={motion.div}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                sx={{
                  width: '24px',
                  height: '40px',
                  border: '2px solid rgba(255,255,255,0.5)',
                  borderRadius: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingTop: '6px'
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  sx={{
                    width: '4px',
                    height: '8px',
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    borderRadius: '2px'
                  }}
                />
              </Box>
            </Box>
          )}
        </motion.div>
      </Container>
    </Box>
  );
}