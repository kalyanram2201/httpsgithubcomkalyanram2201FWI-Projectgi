import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle, RefreshCw, TrendingUp, Shield, AlertCircle, XCircle } from 'lucide-react'

const PredictionResult = ({ prediction, onNewPrediction }) => {
  const getRiskColor = (level) => {
    switch (level.toLowerCase()) {
      case 'low':
        return 'text-green-600 bg-green-100'
      case 'moderate':
        return 'text-yellow-600 bg-yellow-100'
      case 'high':
        return 'text-orange-600 bg-orange-100'
      case 'extreme':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getRiskIcon = (level) => {
    switch (level.toLowerCase()) {
      case 'low':
        return CheckCircle
      case 'moderate':
        return Shield
      case 'high':
        return AlertCircle
      case 'extreme':
        return XCircle
      default:
        return AlertTriangle
    }
  }

  const getFWIDescription = (fwi) => {
    if (fwi < 5) return 'Very low fire danger conditions'
    if (fwi < 15) return 'Moderate fire danger conditions'
    if (fwi < 30) return 'High fire danger conditions'
    return 'Extreme fire danger conditions'
  }

  const RiskIcon = getRiskIcon(prediction.riskLevel)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Main Result */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-primary-100 to-sage-100 rounded-full mb-4">
            <span className="text-3xl font-bold text-primary-600">{prediction.fwi}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Fire Weather Index: {prediction.fwi}
          </h2>
          <p className="text-lg text-gray-600">{getFWIDescription(prediction.fwi)}</p>
        </motion.div>

        {/* Risk Level Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-lg ${getRiskColor(prediction.riskLevel)}`}>
            <RiskIcon className="h-6 w-6" />
            <span>{prediction.riskLevel} Risk</span>
          </div>
        </motion.div>
      </div>

      {/* Confidence Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-50 rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary-600" />
            <span className="font-semibold text-gray-900">Prediction Confidence</span>
          </div>
          <span className="text-2xl font-bold text-primary-600">
            {(prediction.confidence * 100).toFixed(1)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${prediction.confidence * 100}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full"
          />
        </div>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="space-y-4"
      >
        <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
          <AlertTriangle className="h-6 w-6 text-orange-500" />
          <span>Safety Recommendations</span>
        </h3>
        <div className="space-y-3">
          {prediction.recommendations.map((recommendation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl"
            >
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
              <p className="text-gray-700">{recommendation}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex justify-center pt-6"
      >
        <button
          onClick={onNewPrediction}
          className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
        >
          <RefreshCw className="h-5 w-5" />
          <span>New Prediction</span>
        </button>
      </motion.div>
    </motion.div>
  )
}

export default PredictionResult
