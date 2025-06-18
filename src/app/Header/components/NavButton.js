"use client"
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const HeaderButton = styled(Button)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.8)',
  padding: '8px 16px',
  margin: '0 4px',
  fontSize: '0.85rem',
  fontWeight: 400,
  letterSpacing: '1px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: '2px',
    backgroundColor: '#b18aff',
    transition: 'width 0.3s ease, left 0.3s ease',
  },
  '&:hover': {
    color: '#ffffff',
    backgroundColor: 'transparent',
    '&::after': {
      width: '70%',
    }
  },
  '&.active': {
    color: '#ffffff',
    '&::after': {
      width: '100%',
      backgroundColor: '#b18aff',
    }
  }
}));