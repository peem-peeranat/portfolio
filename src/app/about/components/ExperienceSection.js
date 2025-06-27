'use client';

import { Typography, Stack, Button, Box } from "@mui/material";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import { ExpandMore } from '@mui/icons-material';


export default function ExperienceSection() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "ADOP Thailand Co., Ltd.",
      duration: "Fulltime (10 months)",
      description: "Developed and maintained web applications using Wordpress, Google Tag Manager, and Google Analytics 4 ",
      icon: (
        <Box
          component="img"
          src="/logos/adop.jpg"
          alt="Company Logo"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '4px' // optional
          }}
        />
      ),
      tags: ["React", "Next.js", "TypeScript"]
    },
    {
      title: "Frontend Developer Intern",
      company: "foxbith",
      duration: "Internship (5 months)",
      description: "Collaborated on UI development and implemented responsive designs using React, Next.js, Webflow, Strapi, MUI, and TypeScript",
      icon: (
        <Box
          component="img"
          src="/logos/foxbith.jpg"
          alt="Company Logo"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '4px' // optional
          }}
        />
      ),
      tags: ["React", "Styled Components"]
    },
    {
      title: "Frontend Developer Intern",
      company: "Phuket Innovative Development",
      duration: "Internship (3 months)",
      description: "Assisted in building user interfaces and fixing frontend bugs using React, And design, Bootstrap, Firebase",
      icon: (
        <Box
          component="img"
          src="/logos/pkdev.jpg"
          alt="Company Logo"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '4px' // optional
          }}
        />
      ),
      tags: ["JavaScript", "CSS"]
    },
    {
      title: "Video Editor",
      company: "Dr.Orn Medical Hair Center",
      duration: "2022-2023",
      description: "Created promotional videos and social media content",
      icon: (
        <Box
          component="img"
          src="/logos/dr_orn.jpg"
          alt="Company Logo"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '4px' // optional
          }}
        />
      ),
      tags: ["Premiere Pro", "After Effects"]
    },
    {
      title: "Compositing Animator",
      company: "Boxx Music - Serious Copter [Official MV]",
      duration: "Freelance Project",
      description: "Created visual effects and compositing for music video",
      icon: (
        <Box
          component="img"
          src="/logos/box_music.png"
          alt="Company Logo"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '4px' // optional
          }}
        />
      ),
      tags: ["After Effects", "Compositing"]
    },
    {
      title: "Motion Graphics Designer",
      company: "SET Thailand - Gen Z The Series",
      duration: "Project - Velcurve",
      description: "Designed motion graphics for television series",
      icon: (
        <Box
          component="img"
          src="/logos/set_thailand.jpg"
          alt="Company Logo"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '4px' // optional
          }}
        />
      ),
      tags: ["Motion Graphics", "After Effects"]
    },
    {
      title: "Video Editor Intern",
      company: "Velcurve",
      duration: "Internship (4 months) HBD Volvo",
      description: "Edited video content for various clients",
      icon: (
        <Box
          component="img"
          src="/logos/velcurve.png"
          alt="Company Logo"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '4px' // optional
          }}
        />
      ),
      tags: ["Video Editing", "Color Grading"]
    }
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const showMore = async () => {
    setIsLoading(true);

    // Simulate loading delay for smoother animation
    await new Promise(resolve => setTimeout(resolve, 600));

    setVisibleCount(prev => prev + 4);
    setIsLoading(false);
  };

  // Animation variants for new cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      filter: "blur(10px)"
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  // Button animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 },
    loading: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Loading spinner animation
  const spinnerVariants = {
    spin: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-20%" }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 700,
          mt: 8,
          mb: 6,
          background: 'linear-gradient(90deg, #ffffff, #a7c4ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -12,
            left: 0,
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #a7c4ff, transparent)',
            borderRadius: 2,
          }
        }}
      >
        Experience
      </Typography>

      <Stack spacing={4} sx={{ mb: 4 }}>
        <AnimatePresence mode="sync">
          {experiences.slice(0, visibleCount).map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              variants={cardVariants}
              initial={index >= 4 ? "hidden" : false}
              animate="visible"
              custom={index >= 4 ? index - 4 : 0}
            >
              <ExperienceCard exp={exp} />
            </motion.div>
          ))}
        </AnimatePresence>
      </Stack>

      <AnimatePresence>
        {visibleCount < experiences.length && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -20,
              transition: { duration: 0.3 }
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}
          >
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover={!isLoading ? "hover" : "loading"}
              whileTap={!isLoading ? "tap" : {}}
              animate={isLoading ? "loading" : "initial"}
            >
              <Button
                variant="outlined"
                onClick={showMore}
                disabled={isLoading}
                startIcon={
                  isLoading ? (
                    <motion.div
                      variants={spinnerVariants}
                      animate="spin"
                      style={{
                        width: 16,
                        height: 16,
                        border: '2px solid rgba(169, 196, 255, 0.3)',
                        borderTop: '2px solid rgba(169, 196, 255, 0.9)',
                        borderRadius: '50%'
                      }}
                    />
                  ) : (
                    <motion.div
                      animate={{ rotate: isLoading ? 180 : 0 }}
                      transition={{ duration: 0.3 }}

                    >
                      <Box sx={{ display: 'flex' }}>

                        <ExpandMore />
                      </Box>
                    </motion.div>
                  )
                }
                sx={{
                  color: 'rgba(169, 196, 255, 0.9)',
                  borderColor: 'rgba(169, 196, 255, 0.3)',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    borderColor: 'rgba(169, 196, 255, 0.6)',
                    backgroundColor: 'rgba(169, 196, 255, 0.1)',
                    boxShadow: '0 4px 20px rgba(169, 196, 255, 0.2)'
                  },
                  '&:disabled': {
                    color: 'rgba(169, 196, 255, 0.5)',
                    borderColor: 'rgba(169, 196, 255, 0.2)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(169, 196, 255, 0.1), transparent)',
                    transition: 'left 0.5s ease-in-out'
                  },
                  '&:hover::before': {
                    left: '100%'
                  }
                }}
              >
                {isLoading ? 'Loading...' : 'Load More'}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress indicator */}
      {visibleCount < experiences.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            marginTop: '1rem'
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(169, 196, 255, 0.7)' }}>
            Showing {visibleCount} of {experiences.length}
          </Typography>
          <div style={{
            width: '100px',
            height: '4px',
            backgroundColor: 'rgba(169, 196, 255, 0.2)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${(visibleCount / experiences.length) * 100}%`
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #a7c4ff, #ffffff)',
                borderRadius: '2px'
              }}
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}