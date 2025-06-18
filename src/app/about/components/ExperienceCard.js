'use client';

import { Card, CardContent, Stack, Typography, Divider, Chip } from "@mui/material";
import { motion } from 'framer-motion';

const ExperienceCard = ({ exp }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card
        variant="outlined"
        sx={{
          background: 'rgba(255,255,255,0.03)',
          borderColor: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
          borderRadius: '12px',
          transition: 'all 0.3s cubic-bezier(0.16, 0.77, 0.47, 0.97)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 16px 32px rgba(0,0,0,0.2)',
            borderColor: 'rgba(255,255,255,0.2)',
            background: 'rgba(255,255,255,0.06)'
          }
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Stack direction="row" spacing={2} alignItems="center" mb={1.5}>
            <div style={{
              padding: '8px',
              background: 'rgba(169, 196, 255, 0.1)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {exp.icon}
            </div>
            <div>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                {exp.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                {exp.company}
              </Typography>
            </div>
          </Stack>

          <Typography variant="body2" sx={{
            color: 'rgba(169, 196, 255, 0.9)',
            mb: 2,
            fontStyle: 'italic'
          }}>
            {exp.duration}
          </Typography>

          <Divider sx={{
            borderColor: 'rgba(255,255,255,0.1)',
            my: 2
          }} />

          <Typography variant="body1" sx={{
            color: 'rgba(255,255,255,0.85)',
            mb: 3,
            lineHeight: 1.7
          }}>
            {exp.description}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {exp.tags.map((tag, i) => (
              <Chip
                key={i}
                label={tag}
                size="small"
                sx={{
                  background: 'rgba(169, 196, 255, 0.1)',
                  color: 'rgba(169, 196, 255, 0.9)',
                  border: '1px solid rgba(169, 196, 255, 0.2)',
                  borderRadius: '4px'
                }}
              />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;