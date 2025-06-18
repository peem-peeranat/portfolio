'use client'
import React, { useState } from 'react'
import { Box, Container, Typography, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import FormFields from './components/FormFields'
import SubmitButton from './components/SubmitButton'

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  })

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  })

  const pageStyles = {
    wrapper: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom, #0f0c29, #24243e)',
      color: 'white',
      py: 8,
      position: 'relative'
    }
  }

  const formContainerStyles = {
    root: {
      backgroundColor: 'rgba(30, 30, 60, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      padding: { xs: 3, md: 4 },
      backdropFilter: 'blur(8px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    },
    title: {
      mb: 3,
      textAlign: 'center',
      fontWeight: 600,
      color: '#e2e8f0',
      fontSize: { xs: '1.8rem', md: '2.2rem' },
      letterSpacing: '-0.025em'
    },
    subtitle: {
      textAlign: 'center',
      mb: 4,
      color: 'rgba(226, 232, 240, 0.7)',
      maxWidth: '600px',
      mx: 'auto',
      fontSize: '1rem',
      lineHeight: 1.6
    }
  }

  return (
    <Box sx={pageStyles.wrapper}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={formContainerStyles.root}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Typography variant="h3" sx={formContainerStyles.title}>
                Contact
              </Typography>

              <Typography variant="body1" sx={formContainerStyles.subtitle}>
                Have questions or want to get in touch? Fill out the form below and we'll respond as soon as possible.
              </Typography>
            </motion.div>

            <Stack spacing={3}>
              <FormFields
                form={form}
                errors={errors}
                touched={touched}
                setForm={setForm}
                setErrors={setErrors}
                setTouched={setTouched}
              />

              <SubmitButton
                form={form}
                errors={errors}
                touched={touched}
                setErrors={setErrors}
                setTouched={setTouched}
                setForm={setForm}
              />
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default ContactForm