'use client';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid({ projects }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {projects.length === 0 ? (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
            ไม่พบโปรเจกต์ในหมวดนี้
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: { xs: 2, sm: 3, md: 3 },
            mt: 0
          }}
        >
          <AnimatePresence mode="popLayout"> {/* เปลี่ยน mode เป็น popLayout เพื่อให้การเปลี่ยนฟิลเตอร์ลื่นสุดๆ */}
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout // ทำให้การจัดเรียงใหม่เป็นอนิเมชั่น
                initial={{ opacity: 0, y: 20, scale: 0.95 }} // เริ่มจากจางๆ และเลื่อนขึ้นเล็กน้อย
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    delay: index * 0.05, // ทำให้การแสดงผลแบบทยอยกัน
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                  }
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.9,
                  transition: { duration: 0.2 }
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.15 }
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>
      )}
    </motion.div>
  );
}