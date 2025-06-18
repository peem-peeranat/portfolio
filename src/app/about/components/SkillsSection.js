'use client';

import { Box, Typography, Stack, Paper } from "@mui/material";
import {
  Html, Css, Javascript, DataObject,
  Widgets, Web, Storage, Api,
  DataThresholding, Animation, Brush,
  Terminal, PhotoCamera, Code
} from "@mui/icons-material";
import { motion } from 'framer-motion';

export default function SkillsDisplay() {
  return (
    <Box sx={{ my: 10 }}>
      <Typography variant="h5" sx={{
        mb: 4,
        color: 'white',
        fontWeight: 600,
        textAlign: 'center',
        position: 'relative',
        '&:after': {
          content: '""',
          display: 'block',
          width: '80px',
          height: '4px',
          background: 'linear-gradient(90deg, #7928ca, #ff0080)',
          margin: '12px auto 0',
          borderRadius: '2px'
        }
      }}>
        Technical Skills
      </Typography>

      <Stack spacing={4}>
        {/* Frontend Development */}
        <SkillCategory title="Frontend Development">
          <SkillCard name="HTML" icon={<Html />} color="#E44D26" />
          <SkillCard name="CSS" icon={<Css />} color="#264DE4" />
          <SkillCard name="JavaScript" icon={<Javascript />} color="#F7DF1E" />
          <SkillCard name="React" icon={<DataObject />} color="#61DAFB" />
          <SkillCard name="Next.js" icon={<Code />} color="#000000" />
          <SkillCard name="TypeScript" icon={<DataObject />} color="#3178C6" />
          <SkillCard name="Material UI" icon={<Widgets />} color="#007FFF" />
          <SkillCard name="Bootstrap" icon={<Web />} color="#7952B3" />
        </SkillCategory>

        {/* Backend & Database */}
        <SkillCategory title="Backend & Database">
          <SkillCard name="Node.js" icon={<Terminal />} color="#339933" />
          <SkillCard name="Express.js" icon={<Terminal />} color="#000000" />
          <SkillCard name="MySQL" icon={<Storage />} color="#4479A1" />
          <SkillCard name="SQL" icon={<Storage />} color="#336791" />
          <SkillCard name="NoSQL" icon={<Storage />} color="#4DB33D" />
          <SkillCard name="Firebase" icon={<DataThresholding />} color="#FFCA28" />
        </SkillCategory>

        {/* API & CMS */}
        <SkillCategory title="API & CMS">
          <SkillCard name="RESTful API" icon={<Api />} color="#005A9C" />
          <SkillCard name="GraphQL" icon={<Api />} color="#E10098" />
          <SkillCard name="Wordpress" icon={<Web />} color="#21759B" />
          <SkillCard name="Webflow" icon={<Web />} color="#4353FF" />
          <SkillCard name="Strapi" icon={<Api />} color="#2F2E8B" />
        </SkillCategory>

        {/* Tools & Analytics */}
        <SkillCategory title="Tools & Analytics">
          <SkillCard name="Git & GitHub" icon={<Terminal />} color="#F05032" />
          <SkillCard name="Google Analytics 4" icon={<DataThresholding />} color="#FF6D01" />
          <SkillCard name="Google Tag Manager" icon={<DataThresholding />} color="#246FDB" />
        </SkillCategory>

        {/* Design & Video */}
        <SkillCategory title="Design & Video">
          <SkillCard name="Photoshop" icon={<Brush />} color="#31A8FF" />
          <SkillCard name="Premiere Pro" icon={<PhotoCamera />} color="#EA77FF" />
          <SkillCard name="After Effects" icon={<Animation />} color="#9999FF" />
          <SkillCard name="Davinci Resolve" icon={<PhotoCamera />} color="#1E1E1E" />
        </SkillCategory>
      </Stack>
    </Box>
  );
}

function SkillCategory({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Box>
        <Typography variant="h6" sx={{
          mb: 2,
          color: 'rgba(255,255,255,0.9)',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          '&:before': {
            content: '""',
            display: 'inline-block',
            width: '12px',
            height: '12px',
            backgroundColor: 'primary.main',
            borderRadius: '50%',
            marginRight: '12px'
          }
        }}>
          {title}
        </Typography>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 2
        }}>
          {children}
        </Box>
      </Box>
    </motion.div>
  );
}

function SkillCard({ name, icon, color }) {
  return (
    <Paper
      component={motion.div}
      whileHover={{ y: -5, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
      sx={{
        p: 2,
        borderRadius: '12px',
        background: `linear-gradient(135deg, ${color}30, ${color}10)`,
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '4px',
          height: '100%',
          backgroundColor: color
        }
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Box sx={{
          width: 40,
          height: 40,
          borderRadius: '8px',
          backgroundColor: `${color}20`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color
        }}>
          {icon}
        </Box>
        <Typography variant="subtitle1" sx={{
          color: 'white',
          fontWeight: 500
        }}>
          {name}
        </Typography>
      </Stack>
    </Paper>
  );
}