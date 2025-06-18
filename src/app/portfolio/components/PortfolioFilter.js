'use client';
import { Stack, Chip, useMediaQuery, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

export default function PortfolioFilter({ categories, filter, setFilter }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const containerRef = useRef(null);

  const chipBaseStyles = {
    px: 2,
    py: 1.5,
    fontWeight: 500,
    fontSize: '0.9rem',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '& .MuiChip-label': { px: 0.5 },
    flexShrink: 0, // Prevent chips from shrinking in mobile carousel
  };

  const chipInactiveStyles = {
    color: 'rgba(255,255,255,0.8)',
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'transparent',
    '&:hover': {
      background: 'rgba(255,255,255,0.1)',
      color: 'white',
      borderColor: 'rgba(255,255,255,0.3)',
    },
  };

  const chipActiveStyles = {
    color: 'white',
    border: 'none',
    background: 'linear-gradient(135deg, #7928ca 0%, #ff0080 100%)',
    boxShadow: '0 4px 14px rgba(121, 40, 202, 0.4)',
    '&:hover': {
      background: 'linear-gradient(135deg, #8a3ffb 0%, #ff1a8c 100%)',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      style={{ marginLeft: 0, width: '100%' }}
    >
      <Stack
        ref={containerRef}
        direction="row"
        spacing={0}
        sx={{
          mb: 4,
          flexWrap: isMobile ? 'nowrap' : 'wrap',
          gap: { xs: 1, sm: 2 }, // Modified this line
          justifyContent: { xs: 'flex-start', sm: 'flex-start' },
          px: { xs: 1, sm: 0 },
          ml: 0,
          overflowX: isMobile ? 'auto' : 'visible',
          overflowY: 'hidden',
          scrollSnapType: isMobile ? 'x mandatory' : 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          WebkitOverflowScrolling: 'touch',
          width: '100%',
        }}
      >
        <AnimatePresence mode="popLayout">
          {categories.map((cat) => (
            <motion.div
              key={cat}
              layout
              initial={{ scale: 0.9, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: isMobile ? 1 : 0.95 }}
              style={{
                scrollSnapAlign: isMobile ? 'start' : 'none',
                flexShrink: 0,
              }}
            >
              <Chip
                label={cat}
                onClick={() => setFilter(cat)}
                clickable
                variant={filter === cat ? 'filled' : 'outlined'}
                sx={{
                  ...chipBaseStyles,
                  ...(filter === cat ? chipActiveStyles : chipInactiveStyles),
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  px: { xs: 1.5, sm: 2 },
                  py: { xs: 1, sm: 1.5 },
                  ml: 0,
                }}
                aria-label={`Filter by ${cat}`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </Stack>
    </motion.div>
  );
}