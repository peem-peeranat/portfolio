import React from 'react'
import { TextField, Box } from '@mui/material'
import { motion } from 'framer-motion'
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi'

const FormFields = ({ form, errors, touched, setForm, setErrors, setTouched }) => {
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))

    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: name === 'email'
          ? !validateEmail(value)
          : !value.trim()
      }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))

    setErrors(prev => ({
      ...prev,
      [name]: name === 'email'
        ? !validateEmail(value)
        : !value.trim()
    }))
  }

  const inputStyles = {
    root: {
      '& .MuiInputBase-input': {
        color: 'white',
        fontSize: '1rem',
        padding: '14px 14px 14px 0'
      },
      '& .MuiFormHelperText-root': {
        marginLeft: 0,
        fontSize: '0.8rem'
      }
    },
    inputRoot: {
      '& fieldset': {
        borderRadius: '12px',
        transition: 'all 0.3s ease'
      },
      '&:hover fieldset': {
        transition: 'all 0.3s ease'
      },
      '&.Mui-focused fieldset': {
        transition: 'all 0.3s ease'
      }
    }
  }

  const fields = [
    {
      name: 'name',
      label: 'Full Name',
      icon: <FiUser size={20} />,
      error: errors.name && touched.name,
      helperText: errors.name && touched.name ? 'Please enter your name' : ''
    },
    {
      name: 'email',
      label: 'Email Address',
      icon: <FiMail size={20} />,
      error: errors.email && touched.email,
      helperText: errors.email && touched.email
        ? !form.email.trim()
          ? 'Please enter your email'
          : 'Please enter a valid email address'
        : ''
    },
    {
      name: 'message',
      label: 'Your Message',
      icon: <FiMessageSquare size={20} />,
      error: errors.message && touched.message,
      helperText: errors.message && touched.message ? 'Please enter your message' : '',
      multiline: true,
      rows: 5
    }
  ]

  return (
    <>
      {fields.map((field, index) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + (index * 0.1) }}
        >
          <TextField
            label={field.label}
            name={field.name}
            value={form[field.name]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={field.error}
            helperText={field.helperText}
            fullWidth
            multiline={field.multiline}
            rows={field.rows}
            InputProps={{
              startAdornment: (
                <Box sx={{
                  mr: 1,
                  color: field.error ? '#ef4444' : '#a5b4fc',
                  ...(field.name === 'message' && { alignSelf: 'flex-start', pt: '10px' })
                }}>
                  {field.icon}
                </Box>
              )
            }}
            sx={{
              ...inputStyles.root,
              '& .MuiOutlinedInput-root': {
                ...inputStyles.inputRoot,
                '& fieldset': {
                  borderColor: field.error ? '#ef4444' : 'rgba(165, 180, 252, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: field.error ? '#ef4444' : 'rgba(165, 180, 252, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: field.error ? '#ef4444' : '#a5b4fc',
                  boxShadow: field.error
                    ? '0 0 0 3px rgba(239, 68, 68, 0.1)'
                    : '0 0 0 3px rgba(165, 180, 252, 0.1)'
                },
                ...(field.multiline && { alignItems: 'flex-start' })
              },
              '& .MuiInputLabel-root': {
                color: field.error ? '#ef4444' : 'rgba(165, 180, 252, 0.7)',
                '&.Mui-focused': {
                  color: field.error ? '#ef4444' : '#a5b4fc'
                }
              },
              '& .MuiFormHelperText-root': {
                color: field.error ? '#ef4444' : 'rgba(165, 180, 252, 0.6)',
              }
            }}
          />
        </motion.div>
      ))}
    </>
  )
}

export default FormFields