'use client';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function PortfolioHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(90deg, #ffffff, #c9d6ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 3
        }}
      >
        Portfolio
      </Typography>
    </motion.div>
  );
}