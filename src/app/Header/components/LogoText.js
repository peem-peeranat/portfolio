"use client"
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const LogoText = styled(Typography)({
  background: 'linear-gradient(45deg, #b18aff, #ffffff)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  fontWeight: 600,
  letterSpacing: '2px',
  cursor: 'pointer'
});