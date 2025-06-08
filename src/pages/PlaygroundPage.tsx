import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { 
  Shuffle, 
  RotateCcw, 
  Plus, 
  Trash2, 
  Play, 
  Square, 
  Circle, 
  Triangle,
  Star,
  Heart,
  Lightbulb
} from 'lucide-react'

interface Shape {
  id: string
  type: 'circle' | 'square' | 'triangle' | 'star' | 'heart'
  x: number
  y: number
  rotation: number
  scale: number
  color: string
}

const PlaygroundPage = () => {
  const [shapes, setShapes] = useState<Shape[]>([])
  const [selectedTool, setSelectedTool] = useState<Shape['type']>('circle')
  const [isAnimating, setIsAnimating] = useState(false)
  const [quote, setQuote] = useState(0)
  const constraintsRef = useRef(null)

  const colors = [
    '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444', 
    '#10B981', '#F97316', '#EC4899', '#6366F1'
  ]

  const quotes = [
    "Creativity is intelligence having fun 🎨",
    "Every expert was once a beginner 🚀",
    "Innovation distinguishes leaders 💡",
    "Design is thinking made visual ✨",
    "Simplicity is the ultimate sophistication 🎯"
  ]

  const shapeIcons = {
    circle: Circle,
    square: Square, 
    triangle: Triangle,
    star: Star,
    heart: Heart
  }

  const addShape = (e: React.MouseEvent) => {
    // Improved event handling to ensure shapes are added correctly
    const target = e.target as HTMLElement
    const currentTarget = e.currentTarget as HTMLElement
    
    // Allow clicking on the canvas or its immediate children (grid, empty state)
    if (target === currentTarget || currentTarget.contains(target)) {
      const rect = currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left - 25
      const y = e.clientY - rect.top - 25
      
      // Ensure coordinates are within canvas bounds
      const clampedX = Math.max(0, Math.min(x, rect.width - 50))
      const clampedY = Math.max(0, Math.min(y, rect.height - 50))
      
      const newShape: Shape = {
        id: `shape-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        type: selectedTool,
        x: clampedX,
        y: clampedY,
        rotation: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)]
      }
      
      setShapes(prev => [...prev, newShape])
    }
  }

  const removeShape = (id: string) => {
    setShapes(prev => prev.filter(shape => shape.id !== id))
  }

  const clearAll = () => {
    setShapes([])
  }

  const shuffleShapes = () => {
    if (shapes.length === 0) return
    
    setIsAnimating(true)
    setShapes(prev => prev.map(shape => ({
      ...shape,
      x: Math.random() * (constraintsRef.current ? (constraintsRef.current as HTMLElement).clientWidth - 50 : 600),
      y: Math.random() * (constraintsRef.current ? (constraintsRef.current as HTMLElement).clientHeight - 50 : 400),
      rotation: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)]
    })))
    setTimeout(() => setIsAnimating(false), 1000)
  }

  const animateAll = () => {
    if (shapes.length === 0) return
    
    setIsAnimating(true)
    
    // Add random movement to existing shapes
    setShapes(prev => prev.map(shape => ({
      ...shape,
      rotation: shape.rotation + (Math.random() - 0.5) * 180,
      scale: Math.max(0.5, Math.min(1.5, shape.scale + (Math.random() - 0.5) * 0.4))
    })))
    
    setTimeout(() => setIsAnimating(false), 2000)
  }

  const cycleQuote = () => {
    setQuote(prev => (prev + 1) % quotes.length)
  }

  const renderShape = (shape: Shape) => {
    const IconComponent = shapeIcons[shape.type]
    
    return (
      <motion.div
        key={shape.id}
        drag
        dragConstraints={constraintsRef.current ? constraintsRef : undefined}
        dragElastic={0.1}
        dragMomentum={false}
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ 
          scale: isAnimating ? [shape.scale, shape.scale * 1.5, shape.scale] : shape.scale,
          rotate: isAnimating ? shape.rotation + 360 : shape.rotation,
          opacity: 1,
          x: shape.x,
          y: shape.y
        }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: shape.scale * 1.1, zIndex: 10 }}
        whileDrag={{ scale: shape.scale * 1.2, zIndex: 20, cursor: 'grabbing' }}
        whileTap={{ scale: shape.scale * 0.9 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25,
          duration: isAnimating ? 0.8 : 0.3
        }}
        className="absolute cursor-grab active:cursor-grabbing group select-none"
        style={{ 
          left: shape.x, 
          top: shape.y,
          touchAction: 'none' // Prevents scrolling on mobile
        }}
        onDoubleClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          removeShape(shape.id)
        }}
      >
        <div className="relative pointer-events-auto">
          <IconComponent 
            className="w-12 h-12 drop-shadow-lg transition-all duration-300 pointer-events-none"
            style={{ color: shape.color }}
            fill={shape.color}
            strokeWidth={1.5}
          />
          
          {/* Delete button on hover */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1 }}
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              removeShape(shape.id)
            }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
            type="button"
          >
            <Trash2 className="w-3 h-3" />
          </motion.button>
        </div>
      </motion.div>
    )
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
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-playful-blue to-playful-purple rounded-full flex items-center justify-center shadow-lg"
            >
              <Lightbulb className="w-12 h-12 text-white" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold font-sora mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-playful-blue to-playful-purple bg-clip-text text-transparent">
                Interactive Playground
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Eksplorasi kemampuan Framer Motion dengan{' '}
              <motion.span
                whileHover={{ color: '#3B82F6' }}
                className="font-medium cursor-pointer"
              >
                drag, rotate, dan scale
              </motion.span>
              . Klik untuk menambah shapes, drag untuk memindahkan, double-click untuk menghapus!
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Shape Tools */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700 mr-3">Pilih Shape:</span>
              {Object.entries(shapeIcons).map(([type, Icon]) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedTool(type as Shape['type'])}
                  className={`p-3 rounded-xl transition-all duration-200 ${
                    selectedTool === type
                      ? 'bg-gradient-to-r from-playful-blue to-playful-purple text-white shadow-md'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={shapes.length > 0 ? { scale: 1.05 } : {}}
                whileTap={shapes.length > 0 ? { scale: 0.95 } : {}}
                onClick={shuffleShapes}
                disabled={shapes.length === 0 || isAnimating}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  shapes.length === 0 || isAnimating
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
                    : 'bg-gradient-to-r from-green-500 to-teal-500 text-white hover:shadow-lg'
                }`}
              >
                <Shuffle className={`w-4 h-4 ${isAnimating ? 'animate-spin' : ''}`} />
                <span>Shuffle</span>
              </motion.button>

              <motion.button
                whileHover={shapes.length > 0 ? { scale: 1.05 } : {}}
                whileTap={shapes.length > 0 ? { scale: 0.95 } : {}}
                onClick={animateAll}
                disabled={shapes.length === 0 || isAnimating}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  shapes.length === 0 || isAnimating
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg'
                }`}
              >
                <Play className={`w-4 h-4 ${isAnimating ? 'animate-pulse' : ''}`} />
                <span>{isAnimating ? 'Animating...' : 'Animate'}</span>
              </motion.button>

              <motion.button
                whileHover={shapes.length > 0 ? { scale: 1.05 } : {}}
                whileTap={shapes.length > 0 ? { scale: 0.95 } : {}}
                onClick={clearAll}
                disabled={shapes.length === 0}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  shapes.length === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
                    : 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:shadow-lg'
                }`}
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear</span>
              </motion.button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Shapes: <strong>{shapes.length}</strong></span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Tool: <strong className="capitalize">{selectedTool}</strong></span>
              </span>
            </div>
            <span className="text-xs text-gray-500">
              {isAnimating ? '🎭 Animating...' : '💡 Tip: Double-click untuk hapus shape'}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Canvas */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Interactive Canvas</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              <div
                ref={constraintsRef}
                onClick={addShape}
                onMouseDown={(e) => e.preventDefault()} // Prevent text selection
                className="relative h-96 lg:h-[500px] bg-gradient-to-br from-gray-50 to-blue-50/30 cursor-crosshair overflow-hidden select-none touch-none"
                style={{ 
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none'
                }}
              >
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Empty State */}
                <AnimatePresence>
                  {shapes.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <div className="text-center text-gray-400">
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Plus className="w-16 h-16 mx-auto mb-4" />
                        </motion.div>
                        <p className="text-lg font-medium">Klik untuk menambah shapes</p>
                        <p className="text-sm">Pilih shape tool di atas, lalu klik di mana saja</p>
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                          className="mt-4 text-xs text-gray-300"
                        >
                          Tool terpilih: <span className="font-semibold text-playful-blue">{selectedTool}</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Shapes */}
                <AnimatePresence>
                  {shapes.map(renderShape)}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Side Panel */}
          <div className="space-y-8">
            {/* Interactive Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-4">Daily Inspiration</h3>
              
              <motion.div
                key={quote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <p className="text-lg text-gray-700 mb-4 font-medium">
                  {quotes[quote]}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={cycleQuote}
                  className="px-4 py-2 bg-gradient-to-r from-playful-blue to-playful-purple text-white rounded-lg text-sm font-medium"
                >
                  Next Quote
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-4">How to Play</h3>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                  <p>Pilih shape tool dari toolbar di atas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                  <p>Klik di canvas untuk menambah shape</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                  <p>Drag shapes untuk memindahkan posisi</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                  <p>Double-click untuk menghapus shape</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</div>
                  <p>Gunakan action buttons untuk effects</p>
                </div>
              </div>
            </motion.div>

            {/* Physics Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-playful-blue/5 to-playful-purple/5 rounded-2xl border border-playful-blue/20 p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-4">✨ Framer Motion Features</h3>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-playful-blue rounded-full"></span>
                  <span>Drag constraints & momentum</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-playful-purple rounded-full"></span>
                  <span>Spring animations & physics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-playful-yellow rounded-full"></span>
                  <span>Gesture recognition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Layout animations</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaygroundPage
