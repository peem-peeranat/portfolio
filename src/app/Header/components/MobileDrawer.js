"use client"
import { Box } from '@mui/material';
import { HeaderButton } from './NavButton';
import { LogoText } from './LogoText';

export const MobileDrawer = ({
  NAV_ITEMS,
  activeItem,
  handleNavClick
}) => {
  return (
    <Box sx={{
      backgroundColor: '#0a0a1a',
      color: 'white',
      height: '100%',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <LogoText variant="h6" onClick={() => handleNavClick('home-section')} sx={{ mb: 3 }}>
        Peeranat
      </LogoText>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {NAV_ITEMS.map(item => (
          <HeaderButton
            key={item.id}
            className={activeItem === item.id ? 'active' : ''}
            onClick={() => handleNavClick(item.id)}
            sx={{
              justifyContent: 'flex-start',
              '&::after': { left: 0, transform: 'none' }
            }}
          >
            {item.name}
          </HeaderButton>
        ))}
      </Box>
    </Box>
  );
};