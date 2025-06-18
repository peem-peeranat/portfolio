"use client"
import { useState, useEffect, useRef } from 'react';
import {
  AppBar, Box, CssBaseline, Drawer, IconButton, Toolbar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NAV_ITEMS } from './components/constants';
import { LogoText } from './components/LogoText';
import { DesktopNav } from './components/DesktopNav';
import { MobileDrawer } from './components/MobileDrawer';

export default function LuxuryHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home-section');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const buttonsRef = useRef({});
  const navContainerRef = useRef(null);

  const handleNavClick = (id) => {
    setActiveItem(id);
    setMobileOpen(false);
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const updateActiveSection = () => {
    if (typeof window === 'undefined') return;

    const scrollPosition = window.scrollY + 100;

    NAV_ITEMS.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveItem(item.id);
          // Update indicator position
          const button = buttonsRef.current[item.id];
          if (button && navContainerRef.current) {
            const buttonRect = button.getBoundingClientRect();
            const containerRect = navContainerRef.current.getBoundingClientRect();

            setIndicatorStyle({
              left: buttonRect.left - containerRect.left,
              width: buttonRect.width,
              opacity: 1
            });
          }
        }
      }
    });
  };

  useEffect(() => {
    // Only run this on client side
    if (typeof window === 'undefined') return;

    // Initialize indicator position
    const firstButton = buttonsRef.current['home-section'];
    if (firstButton && navContainerRef.current) {
      const buttonRect = firstButton.getBoundingClientRect();
      const containerRect = navContainerRef.current.getBoundingClientRect();

      setIndicatorStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
        opacity: 1
      });
    }

    window.addEventListener('scroll', updateActiveSection);
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(10, 10, 26, 0.8)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <Toolbar sx={{
          maxWidth: '1200px',
          width: '100%',
          mx: 'auto',
          px: { xs: 2, md: 4 },
        }}>
          <Box sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <LogoText
              variant="h6"
              onClick={() => handleNavClick('home-section')}
            >
              Peem Peeranat
            </LogoText>

            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <DesktopNav
              NAV_ITEMS={NAV_ITEMS}
              activeItem={activeItem}
              handleNavClick={handleNavClick}
              buttonsRef={buttonsRef}
              navContainerRef={navContainerRef}
              indicatorStyle={indicatorStyle}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: '#0a0a1a',
            borderRight: '1px solid rgba(255, 255, 255, 0.05)'
          },
        }}
      >
        <MobileDrawer
          NAV_ITEMS={NAV_ITEMS}
          activeItem={activeItem}
          handleNavClick={handleNavClick}
        />
      </Drawer>
    </>
  );
}