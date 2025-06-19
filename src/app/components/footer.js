"use client";

import { Box, Container, Typography, Link, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';

const SocialIcon = styled(Link)(({ theme }) => ({
  transition: 'all 0.3s ease',
  margin: theme.spacing(0, 1),
  color: 'rgba(255, 255, 255, 0.8)',
  '&:hover': {
    transform: 'translateY(-3px)',
    color: '#b18aff !important'
  },
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0, 0.75),
  }
}));

export default function CustomFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 3, sm: 4, md: 6 },
        px: 2,
        minHeight: { xs: 'auto', sm: '120px' },
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(90deg, #0a0a1a 0%, #1a1a3a 100%)',
        color: 'white',
        borderTop: '1px solid rgba(177, 138, 255, 0.2)'
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 3, sm: 2 }}
          sx={{
            width: '100%'
          }}
        >
          {/* Copyright Section */}
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' },
              fontWeight: 300,
              letterSpacing: '0.5px',
              textAlign: { xs: 'center', sm: 'left' },
              order: { xs: 2, sm: 1 },
              lineHeight: 1.6
            }}
          >
            © 2025 Peeranat Rattanakulpermpoon
          </Typography>

          {/* Social Links */}
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 0.5 }}
            sx={{
              order: { xs: 1, sm: 2 },
              mb: { xs: 0, sm: 0 }
            }}
          >
            <SocialIcon href="https://www.facebook.com/peem.peeranat.588954/" target="_blank" aria-label="Facebook">
              <FacebookIcon fontSize="medium" />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/peanut.prn/" target="_blank" aria-label="Instagram">
              <InstagramIcon fontSize="medium" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/peeranat-rattanakulpermpoon-854141272/" target="_blank" aria-label="LinkedIn">
              <LinkedInIcon fontSize="medium" />
            </SocialIcon>
            <SocialIcon href="https://github.com/peem-peeranat" target="_blank" aria-label="GitHub">
              <GitHubIcon fontSize="medium" />
            </SocialIcon>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}