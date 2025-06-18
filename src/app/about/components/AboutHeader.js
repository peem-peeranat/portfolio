'use client';

import { Typography, useTheme, Box, Button } from "@mui/material";
import { motion } from 'framer-motion';
import { Roboto_Flex } from "next/font/google";
import DownloadIcon from '@mui/icons-material/Download';

export default function AboutHeader() {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
      viewport={{ once: true, margin: "-20%" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4
        }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 500,
            background: 'linear-gradient(90deg, #ffffff, #a7c4ff, #c9d6ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% auto',
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '100%',
              height: '3px',
              background: 'linear-gradient(90deg, rgba(169,201,255,0.8), rgba(169,201,255,0.2))',
              borderRadius: 2,
            }
          }}
        >
          About Me
        </Typography>
        <Button
          component="a"
          href="/documents/Resume_Peeranat.pdf"
          download="Peeranat_Resume.pdf"
          variant="outlined"
          startIcon={<DownloadIcon />}
          sx={{
            color: theme.palette.primary.light,
            borderColor: theme.palette.primary.light,
            '&:hover': {
              backgroundColor: 'rgba(169, 201, 255, 0.08)',
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
            },
            transition: 'all 0.3s ease',
            textTransform: 'none',
            borderRadius: 2,
            px: 3,
            py: 1,
            fontSize: '0.95rem'
          }}
        >
          Download Resume
        </Button>
      </Box>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            opacity: 0.95,
            lineHeight: 1.9,
            fontSize: '1.1rem',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            position: 'relative',
            pl: 3,
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '3px',
              background: theme.palette.primary.main,
              borderRadius: 3,
            }
          }}
        >
          Hello, I'm Peeranat, a Frontend Developer passionate about creating exceptional user experiences through websites and applications.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            opacity: 0.95,
            lineHeight: 1.9,
            fontSize: '1.1rem',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
          }}
        >
          I am driven to continuously improve my coding abilities and creative problem-solving skills, with the goal of becoming an expert in my field. I aspire to leverage this expertise to craft visually stunning and highly engaging web experiences.
        </Typography>
      </motion.div>
    </motion.div>
  );
}