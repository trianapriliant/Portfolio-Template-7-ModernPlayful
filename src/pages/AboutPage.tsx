import { motion } from 'framer-motion'
import { User, Coffee, Code, Heart, Star, Zap } from 'lucide-react'

const AboutPage = () => {
  const funFacts = [
    {
      icon: Coffee,
      front: "☕ Coffee Lover",
      back: "1000+ cups consumed during development",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Code,
      front: "💻 Lines of Code",
      back: "10,000+ lines written with passion",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Heart,
      front: "❤️ User Experience",
      back: "Every pixel crafted for delight",
      color: "from-pink-500 to-red-600"
    },
    {
      icon: Star,
      front: "⭐ Late Nights",
      back: "50+ midnight coding sessions",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: Zap,
      front: "⚡ Performance",
      back: "Optimized for 60fps smoothness",
      color: "from-yellow-500 to-amber-600"
    },
    {
      icon: User,
      front: "🎯 Focus",
      back: "Making web beautiful & functional",
      color: "from-green-500 to-teal-600"
    }
  ]

  const storySteps = [
    {
      title: "Dimulai dari Passion",
      description: "Semuanya berawal dari kecintaan terhadap web development dan keinginan menciptakan something beautiful yang bisa dinikmati banyak orang.",
      emoji: "🚀"
    },
    {
      title: "Learning & Experimenting", 
      description: "Mencoba berbagai teknologi modern, dari React hingga Framer Motion, untuk menemukan combination yang perfect untuk user experience.",
      emoji: "🧪"
    },
    {
      title: "Design Philosophy",
      description: "Mengembangkan pendekatan yang balance antara aesthetics dan functionality, dimana setiap element punya purpose yang jelas.",
      emoji: "🎨"
    },
    {
      title: "Community Impact",
      description: "Sharing knowledge dan tools dengan developer community di Indonesia untuk together memajukan ecosystem web development.",
      emoji: "🌟"
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      {/* Hero Section */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-32 h-32 mx-auto mb-8 relative"
            >
              <div className="w-full h-full bg-gradient-to-r from-playful-blue to-playful-purple rounded-full flex items-center justify-center shadow-2xl">
                <User className="w-16 h-16 text-white" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute -top-2 -right-2 w-8 h-8 bg-playful-yellow rounded-full flex items-center justify-center"
              >
                <span className="text-lg">👋</span>
              </motion.div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold font-sora mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-playful-blue to-playful-purple bg-clip-text text-transparent">
                Tentang Template Ini
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Cerita di balik pembuatan template website modern yang menggabungkan 
              <motion.span
                whileHover={{ color: '#3B82F6' }}
                className="font-medium cursor-pointer"
              >
                {' '}teknologi cutting-edge{' '}
              </motion.span>
              dengan design philosophy yang berfokus pada user experience
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Fun Facts Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4">
              Fun Facts & Numbers
            </h2>
            <p className="text-gray-600">Beberapa insights menarik dari proses development</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group perspective-1000"
              >
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                  className="relative w-full h-48 transform-style-preserve-3d cursor-pointer"
                >
                  {/* Front Side */}
                  <div className={`absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-r ${fact.color} p-6 flex flex-col items-center justify-center text-white shadow-lg`}>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <fact.icon className="w-12 h-12 mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-center">{fact.front}</h3>
                    <div className="mt-4 text-sm opacity-75">Hover untuk detail</div>
                  </div>

                  {/* Back Side */}
                  <div className={`absolute inset-0 backface-hidden rotateY-180 rounded-2xl bg-white border-2 border-gray-100 p-6 flex flex-col items-center justify-center shadow-lg`}>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${fact.color} flex items-center justify-center mb-4`}>
                      <fact.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-800 font-semibold text-center leading-relaxed">
                      {fact.back}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4">
              Journey & Philosophy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Setiap line of code ditulis dengan purpose dan setiap design decision 
              dibuat berdasarkan user research yang mendalam
            </p>
          </motion.div>

          <div className="space-y-12">
            {storySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block mb-4"
                  >
                    <span className="text-6xl">{step.emoji}</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold font-sora text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Visual Element */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 5 
                  }}
                  className="flex-1 max-w-md"
                >
                  <div className="relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      className="w-full h-32 bg-gradient-to-r from-playful-blue/20 via-playful-purple/20 to-playful-yellow/20 rounded-lg flex items-center justify-center"
                    >
                      <div className="text-4xl">{step.emoji}</div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-playful-blue/10 via-playful-purple/10 to-playful-yellow/10 rounded-3xl p-12 border border-white shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-playful-blue to-playful-purple rounded-full flex items-center justify-center"
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-3xl font-bold font-sora text-gray-900 mb-4">
              Mari Berkolaborasi!
            </h3>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Template ini adalah hasil dari passion dan dedication untuk web development community. 
              Jangan ragu untuk reach out jika ada questions atau ideas untuk improvement!
            </p>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-playful-blue to-playful-purple text-white font-semibold rounded-full shadow-lg"
            >
              Let's Connect 🤝
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
