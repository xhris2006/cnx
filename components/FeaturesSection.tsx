'use client'

import { BookOpen, Download, MessageCircle, Award, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Past Exam Papers',
    description: 'Access thousands of past exam papers with detailed solutions and explanations.'
  },
  {
    icon: Download,
    title: 'Easy Downloads',
    description: 'Download course materials in PDF, DOC, and DOCX formats with one click.'
  },
  {
    icon: MessageCircle,
    title: 'Student Community',
    description: 'Connect with fellow students, ask questions, and share knowledge.'
  },
  {
    icon: Award,
    title: 'Premium Content',
    description: 'Get access to exclusive premium materials with detailed corrections.'
  },
  {
    icon: Shield,
    title: 'Verified Resources',
    description: 'All content is reviewed and verified by academic experts.'
  },
  {
    icon: Zap,
    title: 'Fast & Reliable',
    description: 'Optimized for African internet speeds with fast loading times.'
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Africa Edu Hub?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to succeed in your academic journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-800 transition-colors">
                <feature.icon className="w-6 h-6 text-primary-800 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}