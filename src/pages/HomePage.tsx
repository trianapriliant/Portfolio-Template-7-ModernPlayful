import { motion } from 'framer-motion'
import HeroSection from '../components/sections/HeroSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import TimelineSection from '../components/sections/TimelineSection'

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden"
    >
      <HeroSection />
      <FeaturesSection />
      <TimelineSection />
    </motion.div>
  )
}

export default HomePage
