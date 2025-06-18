import React from 'react'
import { Button } from '@mui/material'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import Swal from 'sweetalert2'

const SubmitButton = ({ form, errors, touched, setErrors, setTouched, setForm }) => {
  const buttonStyles = {
    root: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      py: 1.5,
      px: 6,
      fontWeight: 600,
      fontSize: '1rem',
      borderRadius: '12px',
      textTransform: 'none',
      minWidth: '220px',
      '&:hover': {
        background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
      },
      position: 'relative',
      overflow: 'hidden',
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '-50%',
        right: '-50%',
        bottom: '-50%',
        left: '-50%',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0))',
        transform: 'rotateZ(60deg) translate(-5em, 7.5em)',
      },
      '&:hover::after': {
        animation: 'sheen 1s forwards',
        '@keyframes sheen': {
          '100%': { transform: 'rotateZ(60deg) translate(1em, -9em)' }
        }
      }
    }
  }

  const validateForm = () => {
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const newErrors = {
      name: !form.name.trim(),
      email: !validateEmail(form.email),
      message: !form.message.trim()
    }

    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      message: true
    })

    return !Object.values(newErrors).some(error => error)
  }

  const showValidationError = (errors) => {
    return Swal.fire({
      icon: 'error',
      title: 'Form Incomplete',
      html: `
        <div style="text-align: left; margin-top: 1rem;">
          ${errors.name ? '<p>• Please enter your name</p>' : ''}
          ${errors.email ? '<p>• Please enter a valid email</p>' : ''}
          ${errors.message ? '<p>• Please enter your message</p>' : ''}
        </div>
      `,
      confirmButtonColor: '#6366f1',
      background: '#0f172a',
      color: 'white',
      confirmButtonText: 'Got it',
      customClass: {
        popup: 'border-2 border-indigo-500/20'
      }
    })
  }

  const showLoading = async () => {
    Swal.fire({
      title: 'Sending your message',
      html: 'Please wait while we process your request',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
      background: '#0f172a',
      color: 'white',
      customClass: {
        popup: 'border-2 border-indigo-500/20'
      }
    })

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    const result = await Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for contacting us. We will respond shortly.',
      confirmButtonColor: '#10b981',
      background: '#0f172a',
      color: 'white',
      confirmButtonText: 'Close',
      customClass: {
        popup: 'border-2 border-emerald-500/20'
      }
    })

    return result.isConfirmed
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      showValidationError(errors)
      return
    }

    const success = await showLoading()

    if (success) {
      // Reset form
      setForm({ name: '', email: '', message: '' })
      setErrors({ name: false, email: false, message: false })
      setTouched({ name: false, email: false, message: false })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      style={{ textAlign: 'center', paddingTop: '1rem' }}
    >
      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<FiSend />}
        onClick={handleSubmit}
        sx={buttonStyles.root}
        component={motion.button}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </Button>
    </motion.div>
  )
}

export default SubmitButton