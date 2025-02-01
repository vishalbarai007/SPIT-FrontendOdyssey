'use client'

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHeartbeat, FaUserMd, FaDumbbell, FaSpa } from 'react-icons/fa'
import { GiMeditation, GiWeightLiftingUp, GiFruitBowl } from 'react-icons/gi'
import { BiPulse } from 'react-icons/bi'

const useLoading = (duration: number = 4000): boolean => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  return isLoading
}

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="text-[#4CAF50] text-5xl md:text-6xl lg:text-8xl m-4"
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 1, delay: Math.random() * 0.5 }}
  >
    {children}
  </motion.div>
)

export default function SplashScreen() {
  const navigate = useNavigate()
  const isLoading = useLoading(4000)

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => navigate('/profile'), 5000)
      return () => clearTimeout(timer)
    }
  }, [isLoading, navigate])

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-gray-800 flex flex-col items-center justify-center">
      {isLoading ? (
        <motion.div
          className="flex flex-wrap justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <IconWrapper><FaHeartbeat /></IconWrapper>
          <IconWrapper><FaUserMd /></IconWrapper>
          <IconWrapper><GiMeditation /></IconWrapper>
          <IconWrapper><FaDumbbell /></IconWrapper>
          <IconWrapper><GiWeightLiftingUp /></IconWrapper>
          <IconWrapper><GiFruitBowl /></IconWrapper>
          <IconWrapper><FaSpa /></IconWrapper>
          <IconWrapper><BiPulse /></IconWrapper>
          <motion.h1
            className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-8 text-[#2196F3]"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            FitSync
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mt-4 text-gray-700"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Your Personal Health & Community Care Platform
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[#4CAF50] mb-4">Welcome to FitSync</h1>
          <p className="text-xl text-gray-800">Your journey to better health starts here!</p>
        </motion.div>
      )}
    </div>
  )
}
