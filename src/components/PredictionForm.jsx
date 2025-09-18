import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Thermometer, Wind, Droplets, BarChart3, MapPin, Layers } from 'lucide-react'

const PredictionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    Temperature: '',
    RH: '',
    Ws: '',
    Rain: '',
    FFMC: '',
    DMC: '',
    ISI: '',
    Classes: '',
    Region: ''
  })

  const [errors, setErrors] = useState({})

  const formFields = [
    { 
      name: 'Temperature', 
      label: 'Temperature (°C)', 
      placeholder: 'e.g., 25.5',
      icon: Thermometer,
      type: 'number',
      step: '0.1',
      description: 'Air temperature in Celsius'
    },
    { 
      name: 'RH', 
      label: 'Relative Humidity (%)', 
      placeholder: 'e.g., 65',
      icon: Droplets,
      type: 'number',
      step: '0.1',
      min: '0',
      max: '100',
      description: 'Relative humidity percentage'
    },
    { 
      name: 'Ws', 
      label: 'Wind Speed (km/h)', 
      placeholder: 'e.g., 15.2',
      icon: Wind,
      type: 'number',
      step: '0.1',
      description: 'Wind speed in kilometers per hour'
    },
    { 
      name: 'Rain', 
      label: 'Rainfall (mm)', 
      placeholder: 'e.g., 0.5',
      icon: Droplets,
      type: 'number',
      step: '0.1',
      description: 'Rainfall amount in millimeters'
    },
    { 
      name: 'FFMC', 
      label: 'Fine Fuel Moisture Code', 
      placeholder: 'e.g., 85.5',
      icon: BarChart3,
      type: 'number',
      step: '0.1',
      description: 'Fine fuel moisture content indicator'
    },
    { 
      name: 'DMC', 
      label: 'Duff Moisture Code', 
      placeholder: 'e.g., 26.2',
      icon: BarChart3,
      type: 'number',
      step: '0.1',
      description: 'Duff layer moisture content indicator'
    },
    { 
      name: 'ISI', 
      label: 'Initial Spread Index', 
      placeholder: 'e.g., 5.2',
      icon: BarChart3,
      type: 'number',
      step: '0.1',
      description: 'Fire spread rate indicator'
    },
    { 
      name: 'Classes', 
      label: 'Fire Classes', 
      placeholder: 'e.g., 3',
      icon: Layers,
      type: 'number',
      description: 'Fire classification level'
    },
    { 
      name: 'Region', 
      label: 'Region Code', 
      placeholder: 'e.g., 1',
      icon: MapPin,
      type: 'number',
      description: 'Geographic region identifier'
    }
  ]

  const validateForm = () => {
    const newErrors = {}
    
    formFields.forEach(field => {
      if (!formData[field.name] || formData[field.name].trim() === '') {
        newErrors[field.name] = `${field.label} is required`
      } else if (isNaN(formData[field.name])) {
        newErrors[field.name] = `${field.label} must be a valid number`
      }
    })

    // Additional validations
    if (formData.RH && (parseFloat(formData.RH) < 0 || parseFloat(formData.RH) > 100)) {
      newErrors.RH = 'Relative Humidity must be between 0 and 100'
    }
    
    if (formData.Rain && parseFloat(formData.Rain) < 0) {
      newErrors.Rain = 'Rainfall cannot be negative'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {formFields.map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="space-y-2"
          >
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
              <field.icon className="h-4 w-4 text-gray-500" />
              <span>{field.label}</span>
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              step={field.step}
              min={field.min}
              max={field.max}
              className={`input-field ${errors[field.name] ? 'border-red-300 focus:ring-red-400' : ''}`}
            />
            {field.description && (
              <p className="text-xs text-gray-500">{field.description}</p>
            )}
            {errors[field.name] && (
              <p className="text-sm text-red-600">{errors[field.name]}</p>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="flex justify-center pt-6"
      >
        <button
          type="submit"
          className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
        >
          <Calculator className="h-5 w-5" />
          <span>Calculate FWI</span>
        </button>
      </motion.div>
    </form>
  )
}

export default PredictionForm
