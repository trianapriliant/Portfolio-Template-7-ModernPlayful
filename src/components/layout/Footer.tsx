import { motion } from 'framer-motion'
import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  const funMessages = [
    "Thanks for scrolling this far 🚀",
    "You made it to the bottom! 🎉",
    "Hope you enjoyed the journey ✨",
    "Scroll back up for more magic 🪄",
    "Built with love and lots of coffee ☕",
  ]

  const randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-gray-50 via-white to-playful-pink/20 py-16"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-playful-blue/10 to-playful-purple/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-playful-yellow/10 to-playful-pink/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Fun message */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-center mb-12"
        >
          <motion.p
            className="text-2xl font-sora font-medium text-gray-700 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            {randomMessage}
          </motion.p>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Heart className="w-6 h-6 text-red-500 fill-current" />
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-600 hover:text-playful-blue"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
            <span>© {currentYear} ModernWeb Template</span>
            <motion.span
              whileHover={{ color: '#3B82F6' }}
              className="cursor-pointer"
            >
              Dibuat dengan React & Framer Motion
            </motion.span>
          </div>
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="flex justify-center items-center space-x-2 text-xs text-gray-400"
          >
            <span>Designed for Indonesian developers</span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🇮🇩
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Interactive quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <motion.blockquote
            whileHover={{ scale: 1.02 }}
            className="italic text-gray-500 max-w-md mx-auto"
          >
            "The best websites are the ones that feel alive"
          </motion.blockquote>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
