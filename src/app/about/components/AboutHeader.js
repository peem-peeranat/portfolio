'use client';

import { Typography, useTheme, Box, Button, useMediaQuery, Stack } from "@mui/material";
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';

export default function AboutHeader() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
      viewport={{ once: true, margin: isMobile ? "-10%" : "-20%" }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems={isMobile ? "stretch" : "center"}
        mb={isMobile ? 2.5 : 4}
        spacing={isMobile ? 1.5 : 0}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
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

        <Box sx={{
          display: 'flex',
          justifyContent: isMobile ? 'flex-end' : 'center',
          width: isMobile ? '100%' : 'auto',
          marginTop: isMobile ? '24px !important' : '0px'
        }}>
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
              px: isMobile ? 2 : 3,
              py: isMobile ? 0.5 : 1,
              fontSize: isMobile ? '0.8125rem' : '0.95rem',
              minWidth: isMobile ? '120px' : 'initial',
              height: isMobile ? '36px' : 'auto',
              '& .MuiButton-startIcon': {
                mr: isMobile ? 0.5 : 1,
                '& > *:first-of-type': {
                  fontSize: isMobile ? '1rem' : '1.25rem'
                }
              }
            }}
          >
            {isMobile ? 'Download CV' : 'Download Resume'}
          </Button>
        </Box>
      </Stack>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="body1"
          sx={{
            mb: isMobile ? 2 : 3,
            opacity: 0.95,
            lineHeight: isMobile ? 1.7 : 1.9,
            fontSize: isMobile ? '1rem' : '1.1rem',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            position: 'relative',
            pl: isMobile ? 2 : 3,
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
            lineHeight: isMobile ? 1.7 : 1.9,
            fontSize: isMobile ? '1rem' : '1.1rem',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
          }}
        >
          I am driven to continuously improve my coding abilities and creative problem-solving skills, with the goal of becoming an expert in my field. I aspire to leverage this expertise to craft visually stunning and highly engaging web experiences.
        </Typography>
      </motion.div>
    </motion.div>
  );
}