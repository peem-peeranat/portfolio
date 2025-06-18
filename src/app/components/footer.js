"use client";

import { Box, Container, Typography, Link, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';

const SocialIcon = styled(Link)({
  transition: 'all 0.3s ease',
  margin: '0 12px',
  color: 'rgba(255, 255, 255, 0.8)',
  '&:hover': {
    transform: 'translateY(-3px)',
    color: '#b18aff !important'
  }
});

export default function CustomFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        minHeight: '120px',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(90deg, #0a0a1a 0%, #1a1a3a 100%)',
        color: 'white',
        borderTop: '1px solid rgba(177, 138, 255, 0.2)'
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          spacing={2}
        >
          {/* Copyright Section */}
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1rem',
              fontWeight: 300,
              letterSpacing: '0.5px'
            }}
          >
            © 2025 Peeranat Rattanakulpermpoon
          </Typography>

          {/* Social Links */}
          <Stack direction="row">
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