import { motion } from 'framer-motion'
import { Palette, Zap, Heart, Code, Smartphone, Rocket } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Palette,
      title: "Desain Elegan",
      description: "Interface yang bersih dan modern dengan tipografi yang lembut dan color scheme yang menenangkan mata",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Zap,
      title: "Performa Lightning",
      description: "Optimisasi penuh untuk kecepatan 60fps dengan lazy loading dan animasi yang smooth",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Heart,
      title: "User Experience",
      description: "Micro-interactions yang thoughtful dan navigation yang intuitive untuk pengalaman yang memorable",
      color: "from-pink-500 to-red-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Code,
      title: "Code Quality",
      description: "TypeScript, clean architecture, dan best practices untuk maintainability yang excellent",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Responsive design yang sempurna di semua device dengan touch-friendly interactions",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Rocket,
      title: "Future Ready",
      description: "Built dengan teknologi terdepan dan architecture yang scalable untuk growth jangka panjang",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            🚀 Fitur Unggulan
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-playful-blue to-playful-purple bg-clip-text text-transparent">
              Kenapa Memilih Template Ini?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kombinasi sempurna antara estetika modern dan fungsionalitas yang powerful untuk 
            menciptakan website yang tidak hanya indah, tapi juga engaging
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                z: 50
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative"
            >
              <div className={`relative p-8 rounded-2xl ${feature.bgColor} border border-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                {/* Hover Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Floating Background Decoration */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full blur-xl"
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    rotateY: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                  className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-xl font-bold font-sora text-gray-900 mb-3 group-hover:text-gray-800 transition-colors"
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p
                    whileHover={{ x: 5 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors"
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Interactive Corner */}
                <motion.div
                  whileHover={{ scale: 1.5, rotate: 45 }}
                  className="absolute bottom-4 right-4 w-3 h-3 bg-gradient-to-r from-playful-blue to-playful-purple rounded-full opacity-30"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-playful-blue to-playful-purple text-white font-semibold rounded-full overflow-hidden shadow-lg"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-playful-purple to-playful-blue"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">
              Mulai Eksplorasi 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block ml-2"
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
