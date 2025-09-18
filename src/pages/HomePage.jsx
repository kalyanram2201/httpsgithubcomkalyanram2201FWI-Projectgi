import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, TrendingUp, AlertTriangle, CheckCircle, Thermometer, Wind, Droplets, BarChart3 } from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: Thermometer,
      title: 'Temperature Analysis',
      description: 'Advanced temperature monitoring and analysis for fire risk assessment'
    },
    {
      icon: Wind,
      title: 'Wind Speed Tracking',
      description: 'Real-time wind speed measurements crucial for fire behavior prediction'
    },
    {
      icon: Droplets,
      title: 'Humidity & Rain',
      description: 'Comprehensive moisture content analysis including relative humidity and precipitation'
    },
    {
      icon: BarChart3,
      title: 'Advanced Indices',
      description: 'FFMC, DMC, and ISI calculations for comprehensive fire weather assessment'
    }
  ]

  const benefits = [
    'Accurate ML-based predictions',
    'Real-time weather data processing',
    'User-friendly interface',
    'Comprehensive risk assessment',
    'Regional analysis support'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Fire Weather Index
                <span className="block text-gradient bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Prediction System
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Advanced machine learning system for accurate fire weather index prediction. 
                Assess fire danger levels using comprehensive weather data analysis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/predict"
                className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Start Prediction</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4">
                <Shield className="h-5 w-5" />
                <span>Learn More</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Weather Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our system analyzes multiple weather parameters to provide accurate fire weather index predictions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-primary-100 to-sage-100 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our FWI System?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Built with cutting-edge machine learning algorithms and designed for accuracy, 
                our system provides reliable fire weather predictions for better safety planning.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="card p-6 text-center">
                <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div className="card p-6 text-center">
                <AlertTriangle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Monitoring</div>
              </div>
              <div className="card p-6 text-center">
                <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Secure</div>
              </div>
              <div className="card p-6 text-center">
                <BarChart3 className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">9+</div>
                <div className="text-gray-600">Parameters</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-12 text-center bg-gradient-to-r from-primary-500 to-sage-500"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Predict Fire Weather?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get started with our advanced FWI prediction system and make informed decisions for fire safety.
            </p>
            <Link
              to="/predict"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 font-medium px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <span className="text-lg">Start Prediction Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
