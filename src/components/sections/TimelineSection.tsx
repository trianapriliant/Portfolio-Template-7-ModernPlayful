import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Award, Lightbulb, Target, Users, Trophy } from 'lucide-react'

const TimelineSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const timelineItems = [
    {
      year: "2024",
      quarter: "Q1",
      icon: Lightbulb,
      title: "Konsep & Ideation",
      description: "Merancang konsep website modern dengan fokus pada user experience yang exceptional dan design system yang consistent",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      year: "2024",
      quarter: "Q2", 
      icon: Target,
      title: "Development Phase",
      description: "Implementasi fitur-fitur interaktif menggunakan React, TypeScript, dan Framer Motion untuk animasi yang smooth",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      year: "2024",
      quarter: "Q3",
      icon: Users,
      title: "Testing & Refinement",
      description: "Extensive testing pada berbagai device dan browser, serta optimisasi performance untuk pengalaman yang optimal",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50"
    },
    {
      year: "2024",
      quarter: "Q4",
      icon: Trophy,
      title: "Launch & Beyond",
      description: "Template siap digunakan dengan dokumentasi lengkap dan continuous improvement berdasarkan feedback community",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50"
    }
  ]

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-playful-blue/5 to-playful-purple/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-playful-yellow/5 to-playful-pink/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-playful-blue/10 to-playful-purple/10 rounded-full text-sm font-medium text-playful-blue border border-playful-blue/20 mb-4"
          >
            📅 Journey Timeline
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-playful-blue to-playful-purple bg-clip-text text-transparent">
              Perjalanan Development
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dari konsep hingga implementasi, setiap tahap dirancang dengan perhatian detail 
            untuk menghasilkan template yang berkualitas tinggi
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full">
            <motion.div
              style={{ height: lineProgress }}
              className="w-full bg-gradient-to-b from-playful-blue via-playful-purple to-playful-yellow rounded-full"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: isEven ? 5 : -5,
                      z: 20
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className={`w-5/12 ${isEven ? 'mr-auto' : 'ml-auto'}`}
                  >
                    <div className={`relative p-6 rounded-2xl ${item.bgColor} border border-white shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                      {/* Hover Background Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                      />

                      {/* Year Badge */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center space-x-2 mb-4"
                      >
                        <span className={`px-3 py-1 bg-gradient-to-r ${item.color} text-white text-sm font-bold rounded-full shadow-md`}>
                          {item.year}
                        </span>
                        <span className="text-gray-500 font-medium">{item.quarter}</span>
                      </motion.div>

                      {/* Content */}
                      <div className="relative z-10">
                        <motion.h3
                          whileHover={{ x: isEven ? 5 : -5 }}
                          className="text-xl font-bold font-sora text-gray-900 mb-3"
                        >
                          {item.title}
                        </motion.h3>
                        
                        <motion.p
                          whileHover={{ x: isEven ? 5 : -5 }}
                          transition={{ delay: 0.1 }}
                          className="text-gray-600 leading-relaxed"
                        >
                          {item.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Center Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                    }}
                    viewport={{ once: true }}
                    className="absolute left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg border-4 border-white`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Spacer for opposite side */}
                  <div className="w-5/12" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-md mx-auto">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mb-6"
            >
              <Award className="w-16 h-16 text-playful-blue mx-auto" />
            </motion.div>
            
            <h3 className="text-2xl font-bold font-sora text-gray-900 mb-4">
              Siap Memulai Project Impian?
            </h3>
            
            <p className="text-gray-600 mb-6">
              Template ini sudah ready untuk digunakan dan di-customize sesuai kebutuhan project Anda
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-playful-blue to-playful-purple text-white font-semibold rounded-full shadow-lg"
            >
              Download Template
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TimelineSection
