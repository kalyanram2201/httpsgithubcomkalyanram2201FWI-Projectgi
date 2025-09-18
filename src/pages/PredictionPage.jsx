import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Thermometer, Wind, Droplets, BarChart3, MapPin, Layers, AlertCircle, CheckCircle, Loader } from 'lucide-react'
import PredictionForm from '../components/PredictionForm'
import PredictionResult from '../components/PredictionResult'

const PredictionPage = () => {
  const [prediction, setPrediction] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handlePrediction = async (formData) => {
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock prediction logic based on the form data
    const mockPrediction = {
      fwi: calculateMockFWI(formData),
      riskLevel: '',
      confidence: Math.random() * 0.2 + 0.8, // 80-100% confidence
      recommendations: []
    }
    
    // Determine risk level and recommendations
    if (mockPrediction.fwi < 5) {
      mockPrediction.riskLevel = 'Low'
      mockPrediction.recommendations = [
        'Normal fire safety precautions apply',
        'Outdoor activities can proceed as planned',
        'Monitor weather conditions regularly'
      ]
    } else if (mockPrediction.fwi < 15) {
      mockPrediction.riskLevel = 'Moderate'
      mockPrediction.recommendations = [
        'Increased awareness of fire conditions',
        'Avoid outdoor burning activities',
        'Keep fire suppression equipment nearby'
      ]
    } else if (mockPrediction.fwi < 30) {
      mockPrediction.riskLevel = 'High'
      mockPrediction.recommendations = [
        'Exercise extreme caution with fire',
        'Postpone non-essential outdoor burning',
        'Have emergency evacuation plans ready'
      ]
    } else {
      mockPrediction.riskLevel = 'Extreme'
      mockPrediction.recommendations = [
        'No outdoor burning permitted',
        'Prepare for potential evacuations',
        'Monitor emergency broadcasts closely'
      ]
    }
    
    setPrediction(mockPrediction)
    setIsLoading(false)
  }

  const calculateMockFWI = (data) => {
    // Simple mock calculation based on weather parameters
    const temp = parseFloat(data.Temperature) || 20
    const rh = parseFloat(data.RH) || 50
    const ws = parseFloat(data.Ws) || 10
    const rain = parseFloat(data.Rain) || 0
    const ffmc = parseFloat(data.FFMC) || 85
    const dmc = parseFloat(data.DMC) || 25
    const isi = parseFloat(data.ISI) || 5
    
    // Mock FWI calculation (simplified version)
    let fwi = (temp * 0.3) + (ws * 0.4) + (ffmc * 0.1) + (dmc * 0.2) + (isi * 0.5)
    fwi = fwi - (rh * 0.1) - (rain * 2)
    fwi = Math.max(0, Math.min(50, fwi)) // Clamp between 0-50
    
    return parseFloat(fwi.toFixed(2))
  }

  return (
    <div className="min-h-screen py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl">
              <Calculator className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            FWI Prediction
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter weather parameters below to get an accurate Fire Weather Index prediction
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Thermometer className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Temperature & Humidity</h3>
              </div>
              <p className="text-gray-600">
                Temperature and relative humidity are key factors in determining fire risk. Higher temperatures and lower humidity increase fire danger.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Wind className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Wind & Rain</h3>
              </div>
              <p className="text-gray-600">
                Wind speed affects fire spread rate, while rainfall provides moisture that reduces fire risk. Both are critical for accurate predictions.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Fire Indices</h3>
              </div>
              <p className="text-gray-600">
                FFMC, DMC, and ISI are specialized fire weather indices that measure different aspects of fuel moisture and fire behavior.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Weather Parameters</h2>
              
              {!prediction && !isLoading && (
                <PredictionForm onSubmit={handlePrediction} />
              )}
              
              {isLoading && (
                <div className="text-center py-12">
                  <Loader className="h-12 w-12 text-primary-500 animate-spin mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing Weather Data</h3>
                  <p className="text-gray-600">Processing your inputs through our ML model...</p>
                </div>
              )}
              
              {prediction && (
                <PredictionResult 
                  prediction={prediction} 
                  onNewPrediction={() => {
                    setPrediction(null)
                    setIsLoading(false)
                  }} 
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PredictionPage
