import React from 'react'
import { Heart, Flame } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-60 border-t border-gray-200 border-opacity-20 mt-16" style={{ backdropFilter: 'blur(8px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg">
              <Flame className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-gray-800">FWI Predictor</span>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for fire safety prediction</span>
          </div>
          
          <div className="text-sm text-gray-500">
            © 2025 FWI Prediction System
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
