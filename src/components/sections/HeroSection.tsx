import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Zap, Star } from 'lucide-react'

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  const blobVariants = {
    animate: {
      scale: [1, 1.2, 0.8, 1],
      rotate: [0, 180, 360],
      borderRadius: [
        "60% 40% 30% 70%",
        "30% 60% 70% 40%", 
        "70% 30% 40% 60%",
        "60% 40% 30% 70%"
      ],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const floatingElements = [
    { icon: Sparkles, delay: 0, x: 100, y: 50 },
    { icon: Zap, delay: 2, x: -80, y: 100 },
    { icon: Star, delay: 4, x: 150, y: -50 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      {/* Animated Background Blob */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-playful-blue/20 via-playful-purple/20 to-playful-yellow/20 blur-3xl"
      />

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, element.x, 0],
            y: [0, element.y, 0],
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute text-playful-blue/30"
        >
          <element.icon className="w-8 h-8" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Greeting */}
          <motion.div
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="space-y-2"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-playful-blue/10 to-playful-purple/10 rounded-full text-sm font-medium text-playful-blue border border-playful-blue/20"
            >
              ✨ Selamat Datang di Era Digital
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold font-sora leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-900 via-playful-blue to-playful-purple bg-clip-text text-transparent">
              Website Modern
            </span>
            <br />
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-playful-yellow via-playful-pink to-playful-blue bg-clip-text text-transparent bg-300% animate-gradient-x"
            >
              & Interaktif
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Template website yang menggabungkan desain elegan dengan{' '}
            <motion.span
              whileHover={{ color: '#3B82F6' }}
              className="font-medium cursor-pointer"
            >
              interaksi playful
            </motion.span>
            {' '}untuk pengalaman pengguna yang tak terlupakan
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
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
              <span className="relative z-10 flex items-center space-x-2">
                <span>Jelajahi Fitur</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-playful-blue text-playful-blue font-semibold rounded-full hover:bg-playful-blue/5 transition-all duration-300"
            >
              Lihat Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-8 pt-16 max-w-md mx-auto"
          >
            {[
              { number: "100%", label: "Responsive" },
              { number: "60fps", label: "Smooth Animation" },
              { number: "∞", label: "Possibilities" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <motion.div
                  className="text-2xl font-bold text-playful-blue"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: index * 0.5, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-gray-400 hover:text-playful-blue transition-colors cursor-pointer"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
