// // src/components/LiveStats.tsx
// 'use client'

// import { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Code2, TrendingUp, Zap, Award } from 'lucide-react'

// interface LiveStats {
//   leetCodeSolved: number
//   githubStreak: number
//   activeProjects: number
//   codeHours: number
// }

// export default function LiveStats() {
//   const [stats, setStats] = useState<LiveStats>({
//     leetCodeSolved: 0,
//     githubStreak: 0,
//     activeProjects: 0,
//     codeHours: 0
//   })

//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     // Simulate real-time data updates
//     const interval = setInterval(() => {
//       setStats(prev => ({
//         leetCodeSolved: prev.leetCodeSolved + (Math.random() > 0.7 ? 1 : 0),
//         githubStreak: 167, // Current streak
//         activeProjects: 5 + Math.floor(Math.random() * 2),
//         codeHours: prev.codeHours + (Math.random() > 0.8 ? 1 : 0)
//       }))
//     }, 5000)

//     setIsVisible(true)

//     return () => clearInterval(interval)
//   }, [])

//   const statsData = [
//     {
//       icon: <Code2 className="w-6 h-6" />,
//       value: stats.leetCodeSolved,
//       label: 'LeetCode Solved',
//       color: 'from-green-500 to-emerald-500',
//       suffix: '+'
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       value: stats.githubStreak,
//       label: 'GitHub Streak',
//       color: 'from-orange-500 to-red-500',
//       suffix: ' days'
//     },
//     {
//       icon: <Zap className="w-6 h-6" />,
//       value: stats.activeProjects,
//       label: 'Active Projects',
//       color: 'from-blue-500 to-cyan-500',
//       suffix: ''
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       value: stats.codeHours,
//       label: 'Code Hours',
//       color: 'from-purple-500 to-pink-500',
//       suffix: '+'
//     }
//   ]

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
//     >
//       <AnimatePresence>
//         {statsData.map((stat, index) => (
//           <motion.div
//             key={stat.label}
//             initial={{ opacity: 0, scale: 0.8, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             whileHover={{ 
//               scale: 1.05,
//               y: -5,
//               transition: { type: "spring", stiffness: 300 }
//             }}
//             className="glass-effect rounded-2xl p-6 border border-gray-800 hover:border-primary/50 group cursor-pointer relative overflow-hidden"
//           >
//             {/* Animated background */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
//               style={{
//                 background: `linear-gradient(45deg, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})`
//               }}
//             />
            
//             <div className="relative z-10">
//               <motion.div
//                 animate={{ rotate: [0, 10, 0] }}
//                 transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
//                 className={`text-${stat.color.split('-')[1]} mb-4`}
//               >
//                 {stat.icon}
//               </motion.div>
              
//               <motion.div
//                 key={stat.value}
//                 initial={{ scale: 1.2 }}
//                 animate={{ scale: 1 }}
//                 className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
//               >
//                 {stat.value}
//                 {stat.suffix}
//               </motion.div>
              
//               <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">
//                 {stat.label}
//               </div>
//             </div>

//             {/* Live pulse indicator */}
//             <motion.div
//               animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
//               transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
//               className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r ${stat.color}`}
//             />
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </motion.div>
//   )
// }




// src/components/LiveStats.tsx - UPDATED WITH REAL DATA
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, TrendingUp, Zap, Award, Clock, Target, Rocket, Cpu } from 'lucide-react'

interface LiveStats {
  leetCodeSolved: number
  githubStreak: number
  activeProjects: number
  codeHours: number
}

export default function LiveStats() {
  const [stats, setStats] = useState<LiveStats>({
    leetCodeSolved: 0, // Will animate to 500
    githubStreak: 0,   // Will animate to 7
    activeProjects: 0, // Will animate to 5
    codeHours: 0       // Will animate to 10
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Animate numbers to real values
    const animateNumbers = () => {
      const targetValues = {
        leetCodeSolved: 500,
        githubStreak: 7,
        activeProjects: 5,
        codeHours: 10
      }

      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      Object.keys(targetValues).forEach((key) => {
        const target = targetValues[key as keyof LiveStats]
        let currentStep = 0
        
        const interval = setInterval(() => {
          currentStep++
          const progress = currentStep / steps
          const currentValue = Math.floor(target * progress)
          
          setStats(prev => ({
            ...prev,
            [key]: currentValue
          }))

          if (currentStep >= steps) {
            clearInterval(interval)
            // Ensure final value is exact
            setStats(prev => ({
              ...prev,
              [key]: target
            }))
          }
        }, stepDuration)
      })
    }

    setIsVisible(true)
    const timer = setTimeout(animateNumbers, 500)

    return () => clearTimeout(timer)
  }, [])

  const statsData = [
    {
      icon: <Code2 className="w-6 h-6" />,
      value: stats.leetCodeSolved,
      label: 'LeetCode Solved',
      description: 'Problems Mastered',
      color: 'from-green-500 to-emerald-500',
      suffix: '+',
      delay: 0
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: stats.githubStreak,
      label: 'GitHub Streak',
      description: 'Max Streak Days',
      color: 'from-orange-500 to-red-500',
      suffix: ' days',
      delay: 0.1
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      value: stats.activeProjects,
      label: 'Active Projects',
      description: 'In Development',
      color: 'from-blue-500 to-cyan-500',
      suffix: '',
      delay: 0.2
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: stats.codeHours,
      label: 'Daily Coding',
      description: 'Hours Committed',
      color: 'from-purple-500 to-pink-500',
      suffix: '+ hrs',
      delay: 0.3
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
    >
      <AnimatePresence>
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: stat.delay }}
            whileHover={{ 
              scale: 1.05,
              y: -8,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            className="glass-effect rounded-3xl p-6 border border-gray-800 hover:border-primary/50 group cursor-pointer relative overflow-hidden"
          >
            {/* Animated gradient background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500"
              style={{
                background: `linear-gradient(45deg, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})`
              }}
            />
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow: `0 0 40px ${stat.color.split(' ')[1].replace('from-', '')}20`
              }}
            />

            <div className="relative z-10">
              {/* Animated Icon */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: index * 0.5 
                }}
                className={`mb-4 inline-flex p-3 rounded-2xl bg-gradient-to-r ${stat.color} bg-opacity-10`}
              >
                <div className={`text-${stat.color.split('-')[1]}`}>
                  {stat.icon}
                </div>
              </motion.div>
              
              {/* Animated Number */}
              <motion.div
                key={stat.value}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200,
                  damping: 15
                }}
                className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
              >
                {stat.value}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: stat.delay + 0.5 }}
                  className="text-lg"
                >
                  {stat.suffix}
                </motion.span>
              </motion.div>
              
              {/* Labels */}
              <div className="space-y-1">
                <div className="text-gray-300 text-lg font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  {stat.description}
                </div>
              </div>
            </div>

            {/* Live pulse indicator */}
            <motion.div
              animate={{ 
                scale: [1, 2, 1], 
                opacity: [0.6, 0, 0.6] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: index * 0.3 
              }}
              className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r ${stat.color}`}
            />

            {/* Corner accents */}
            <div className={`absolute top-0 left-0 w-2 h-2 bg-gradient-to-r ${stat.color} rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className={`absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-r ${stat.color} rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Achievement Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="col-span-2 lg:col-span-4 mt-8"
      >
        <div className="glass-effect rounded-3xl p-6 border border-warning/30 text-center">
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity 
            }}
            className="inline-flex items-center gap-3 text-warning mb-2"
          >
            <Award className="w-6 h-6" />
            <span className="text-lg font-semibold">Elite Developer Status</span>
            <Award className="w-6 h-6" />
          </motion.div>
          <p className="text-gray-300 text-sm">
            Consistently solving complex problems and building production-ready applications
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}