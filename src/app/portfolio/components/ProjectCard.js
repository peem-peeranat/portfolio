'use client';
import { Card, CardMedia, CardContent, Typography, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import GitHubIcon from '@mui/icons-material/GitHub'

export default function ProjectCard({ project }) {
  const router = useRouter();

  const handleCardClick = (e) => {
    // อย่าเปิดลิงก์ถ้าผู้ใช้คลิกที่ปุ่มหรือ chip
    if (e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a')) {
      return;
    }
    if (project.demo) {
      window.open(project.demo, '_blank');
    }
  };

  return (
    <Card
      component={motion.div}
      whileHover={{ y: -5 }}
      onClick={handleCardClick}
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        cursor: project.demo ? 'pointer' : 'default',
        '&:hover': {
          boxShadow: '0 10px 30px rgba(121, 40, 202, 0.3)',
          borderColor: 'rgba(121, 40, 202, 0.5)'
        }
      }}
    >
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
        sx={{
          height: 180,
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, flexGrow: 1 }}>
          {project.description}
        </Typography>

        <Stack direction="row" sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
          {project.tech.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                background: 'rgba(121, 40, 202, 0.2)',
                color: 'white',
                border: '1px solid rgba(121, 40, 202, 0.5)',
                pointerEvents: 'none'
              }}
            />
          ))}
        </Stack>

        <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
          {project.github && (
            <Button
              size="small"
              variant="outlined"
              href={project.github}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              sx={{
                color: 'white',
                borderColor: 'rgba(255,255,255,0.3)',
                minWidth: 'auto',
                padding: '6px 12px', // ปรับ padding ให้มีพื้นที่ด้านข้างมากขึ้น
                gap: '8px', // เพิ่มระยะห่างระหว่างไอคอนกับข้อความ
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)'
                }
              }}
            >
              <GitHubIcon fontSize="small" />
              GitHub
            </Button>
          )}
          {project.demo && (
            <Button
              size="small"
              variant="contained"
              href={project.demo}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              sx={{
                background: 'linear-gradient(90deg, #7928ca, #ff0080)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #8a3ffb, #ff1a8c)'
                }
              }}
            >
              Visit Site
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}