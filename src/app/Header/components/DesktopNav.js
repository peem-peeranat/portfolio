"use client"
import { Box } from '@mui/material';
import { HeaderButton } from './NavButton';

export const DesktopNav = ({
  NAV_ITEMS,
  activeItem,
  handleNavClick,
  buttonsRef,
  navContainerRef,
  indicatorStyle
}) => {
  return (
    <Box
      ref={navContainerRef}
      sx={{
        display: { xs: 'none', sm: 'flex' },
        position: 'relative',
      }}
    >
      {NAV_ITEMS.map(item => (
        <HeaderButton
          key={item.id}
          ref={el => buttonsRef.current[item.id] = el}
          className={activeItem === item.id ? 'active' : ''}
          onClick={() => handleNavClick(item.id)}
        >
          {item.name}
        </HeaderButton>
      ))}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        height: '2px',
        backgroundColor: '#b18aff',
        transition: 'all 0.3s ease',
        ...indicatorStyle
      }} />
    </Box>
  );
};