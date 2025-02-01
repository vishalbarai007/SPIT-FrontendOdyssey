'use client'

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDumbbell } from 'react-icons/fa'
import { GiShinyApple, GiMeal} from 'react-icons/gi'
import { LuBicepsFlexed } from "react-icons/lu"

const useLoading = (duration: number = 3000): boolean => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  return isLoading
}

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="text-white text-4xl md:text-6xl lg:text-8xl m-4"
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 1, delay: Math.random() * 0.5 }}
  >
    {children}
  </motion.div>
)

export default function SplashScreen() {
  const navigate = useNavigate()
  const isLoading = useLoading(3000)
  const [showWelcome, setShowWelcome] = useState(false)
  const [exitAnimation, setExitAnimation] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (!isLoading) {
      timer = setTimeout(() => setShowWelcome(true), 500)
    }
    return () => clearTimeout(timer)
  }, [isLoading])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (showWelcome) {
      timer = setTimeout(() => {
        setExitAnimation(true)
      }, 2000)
    }
    return () => clearTimeout(timer)
  }, [showWelcome])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (exitAnimation) {
      timer = setTimeout(() => navigate('/login'), 1000)
    }
    return () => clearTimeout(timer)
  }, [exitAnimation, navigate])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            className="flex flex-wrap justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <IconWrapper><FaDumbbell /></IconWrapper>
            <IconWrapper><LuBicepsFlexed /></IconWrapper>
            <IconWrapper><GiShinyApple /></IconWrapper>
            <IconWrapper><GiMeal /></IconWrapper>

            <motion.h1
              className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-8"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              DietPlan
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mt-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Your journey to a healthier you starts here
            </motion.p>
          </motion.div>
        )}

        {showWelcome && (
          <motion.div
            key="welcome"
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Welcome to DIE-ATE Planner</h1>
            <p className="text-xl">Your personalized diet planner is ready!</p>
          </motion.div>
        )}

        {exitAnimation && (
          <motion.div
            key="exit"
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

