import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  Building, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader,
  Heart
} from 'lucide-react'

import { contactSchema, ContactFormData } from '../lib/validations/contact'

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange'
  })

  const watchedFields = watch()

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@modernweb.com",
      description: "Response dalam 24 jam",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Telepon",
      value: "+62 812-3456-7890",
      description: "Senin - Jumat, 9AM - 6PM",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: MapPin,
      title: "Lokasi",
      value: "Jakarta, Indonesia",
      description: "Remote-friendly workspace",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  const getFieldIcon = (fieldName: keyof ContactFormData) => {
    const isActive = dirtyFields[fieldName] || false
    const hasError = errors[fieldName] !== undefined
    const hasValue = watchedFields[fieldName]

    if (hasError) return <AlertCircle className="w-5 h-5 text-red-500" />
    if (hasValue && !hasError) return <CheckCircle className="w-5 h-5 text-green-500" />
    if (isActive) return <Loader className="w-5 h-5 text-blue-500 animate-spin" />
    
    return null
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      {/* Hero Section */}
      <section className="py-16">
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
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-playful-blue to-playful-purple rounded-full flex items-center justify-center shadow-lg"
            >
              <MessageSquare className="w-12 h-12 text-white" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold font-sora mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-playful-blue to-playful-purple bg-clip-text text-transparent">
                Mari Terhubung
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Punya project menarik atau ingin berkolaborasi? Jangan ragu untuk reach out! 
              Setiap message akan direspon dengan 
              <motion.span
                whileHover={{ color: '#3B82F6' }}
                className="font-medium cursor-pointer"
              >
                {' '}perhatian penuh{' '}
              </motion.span>
              dan antusiasme tinggi.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold font-sora text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Ready to bring your ideas to life? Let's discuss how we can 
                  create something amazing together.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    x: 5
                  }}
                  className="group"
                >
                  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center shadow-md`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-playful-blue transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-gray-800 font-medium">{info.value}</p>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative overflow-hidden"
            >
              {/* Background decoration */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-playful-blue/5 to-playful-purple/5 rounded-full blur-xl"
              />

              <div className="relative z-10">
                <h2 className="text-2xl font-bold font-sora text-gray-900 mb-6">
                  Send Message
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <div className="relative">
                        <input
                          {...register('name')}
                          type="text"
                          className={`w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-playful-blue/20 focus:border-playful-blue transition-all duration-300 ${
                            errors.name ? 'border-red-300' : 'border-gray-200'
                          }`}
                          placeholder="John Doe"
                        />
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <AnimatePresence>
                          {getFieldIcon('name') && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2"
                            >
                              {getFieldIcon('name')}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.name.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Perusahaan
                      </label>
                      <div className="relative">
                        <input
                          {...register('company')}
                          type="text"
                          className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-playful-blue/20 focus:border-playful-blue transition-all duration-300"
                          placeholder="Company Inc."
                        />
                        <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <input
                          {...register('email')}
                          type="email"
                          className={`w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-playful-blue/20 focus:border-playful-blue transition-all duration-300 ${
                            errors.email ? 'border-red-300' : 'border-gray-200'
                          }`}
                          placeholder="john@example.com"
                        />
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <AnimatePresence>
                          {getFieldIcon('email') && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2"
                            >
                              {getFieldIcon('email')}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.email.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <div className="relative">
                        <input
                          {...register('phone')}
                          type="tel"
                          className={`w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-playful-blue/20 focus:border-playful-blue transition-all duration-300 ${
                            errors.phone ? 'border-red-300' : 'border-gray-200'
                          }`}
                          placeholder="+62 812-3456-7890"
                        />
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <AnimatePresence>
                          {getFieldIcon('phone') && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2"
                            >
                              {getFieldIcon('phone')}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <AnimatePresence>
                        {errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.phone.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  {/* Subject */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <input
                        {...register('subject')}
                        type="text"
                        className={`w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-playful-blue/20 focus:border-playful-blue transition-all duration-300 ${
                          errors.subject ? 'border-red-300' : 'border-gray-200'
                        }`}
                        placeholder="Project Discussion"
                      />
                      <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <AnimatePresence>
                        {getFieldIcon('subject') && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2"
                          >
                            {getFieldIcon('subject')}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <AnimatePresence>
                      {errors.subject && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.subject.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <div className="relative">
                      <textarea
                        {...register('message')}
                        rows={6}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-playful-blue/20 focus:border-playful-blue transition-all duration-300 resize-none ${
                          errors.message ? 'border-red-300' : 'border-gray-200'
                        }`}
                        placeholder="Ceritakan tentang project atau ide yang ingin kita wujudkan bersama..."
                      />
                      <AnimatePresence>
                        {getFieldIcon('message') && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute right-4 top-4"
                          >
                            {getFieldIcon('message')}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.message.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    whileHover={isValid && !isSubmitting ? { 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                    } : {}}
                    whileTap={isValid && !isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                      isValid && !isSubmitting
                        ? 'bg-gradient-to-r from-playful-blue to-playful-purple hover:shadow-lg'
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          <span>Mengirim...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Kirim Pesan</span>
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>

                {/* Success/Error States */}
                <AnimatePresence>
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`mt-6 p-4 rounded-xl flex items-center space-x-3 ${
                        submitStatus === 'success' 
                          ? 'bg-green-50 text-green-800 border border-green-200' 
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Pesan berhasil dikirim! Terima kasih sudah menghubungi kami.</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-5 h-5" />
                          <span>Terjadi kesalahan. Silakan coba lagi.</span>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-red-500 fill-current" />
            </motion.div>
            <span>for the developer community</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
