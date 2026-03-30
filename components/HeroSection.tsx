'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { GraduationCap, ArrowRight, BookOpen, Users, Trophy } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600">
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-repeat" />
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
              <span className="text-lg font-semibold text-white">Africa Edu Hub</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Empowering African Students Through <span className="text-yellow-400">Digital Education</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Access premium learning resources, past exam papers, and connect with fellow students across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="bg-white text-primary-800 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/courses"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-all inline-flex items-center justify-center"
              >
                Explore Courses
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white">Welcome to the online E-Learning App</h3>
                <p className="mt-2 text-white/80">Choose your path to academic excellence</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <BookOpen className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/80">Courses</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Users className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="text-sm text-white/80">Students</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <GraduationCap className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-white/80">Universities</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Trophy className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-sm text-white/80">Resources</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}