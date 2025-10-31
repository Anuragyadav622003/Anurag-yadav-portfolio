// // src/components/Experience.tsx - WITHOUT VERTICAL LINE
// 'use client'

// import { motion, useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { Calendar, MapPin, Award, Rocket, Code2, Brain } from 'lucide-react'

// const experiences = [
//   // ... your experiences data
// ]

// export default function Experience() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   return (
//     <section id="experience" className="py-32 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-900/10 to-background" />
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
//       <div ref={ref} className="container mx-auto px-6 relative z-10">
//         {/* Enhanced Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <motion.h2
//             initial={{ scale: 0.8 }}
//             animate={isInView ? { scale: 1 } : { scale: 0.8 }}
//             transition={{ delay: 0.2, type: "spring" }}
//             className="text-6xl md:text-7xl font-black gradient-text mb-6"
//           >
//             Career Journey
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ delay: 0.4 }}
//             className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
//           >
//             From building startups to enterprise systems – a journey of continuous learning and innovation
//           </motion.p>
//         </motion.div>

//         {/* Enhanced Timeline - WITHOUT VERTICAL LINE */}
//         <div className="max-w-6xl mx-auto relative">
//           {/* Timeline line REMOVED - Delete or comment out the next line */}
//           {/* <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" /> */}
          
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               transition={{ 
//                 delay: index * 0.3,
//                 duration: 0.8,
//                 type: "spring",
//                 bounce: 0.4
//               }}
//               className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start gap-8 mb-16 relative`}
//             >
//               {/* Timeline dot - You can also remove this if you want */}
//               <div className="absolute left-8 md:left-1/2 top-6 transform -translate-x-1/2 z-10">
//                 <motion.div
//                   whileHover={{ scale: 1.2 }}
//                   className={`w-6 h-6 rounded-full border-4 border-background ${
//                     exp.type === 'achievement' ? 'bg-warning' : 'bg-primary'
//                   }`}
//                 />
//               </div>

//               {/* Rest of your content remains the same */}
//               <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:pl-0 pl-16' : 'md:pl-16 md:pr-0 pr-16'}`}>
//                 <motion.div
//                   whileHover={{ scale: 1.02, y: -5 }}
//                   className="glass-effect rounded-3xl p-8 border border-gray-800 hover:border-primary/30 transition-all duration-500 group"
//                 >
//                   {/* ... rest of your card content */}
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Stats Summary */}
//         {/* ... rest of your component */}
//       </div>
//     </section>
//   )
// }



// src/components/EnhancedExperience.tsx
'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, MapPin, Award, Rocket, Code2, Brain, ChevronDown, ExternalLink, Star, TrendingUp, Users, Zap } from 'lucide-react'

const experiences = [
  {
    company: "TechCorp Solutions",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    location: "San Francisco, CA (Remote)",
    description: "Lead development of enterprise-scale applications serving 50,000+ users with 99.9% uptime",
    achievements: [
      "Architected microservices platform reducing latency by 40% and improving scalability",
      "Led team of 4 developers in implementing CI/CD pipelines cutting deployment time by 70%",
      "Implemented real-time analytics dashboard processing 1M+ events daily",
      "Mentored junior developers and established coding standards across 10+ projects"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Redis"],
    type: "work",
    icon: <Rocket className="w-6 h-6" />,
    metrics: [
      { icon: <Users className="w-4 h-4" />, value: "50K+", label: "Users" },
      { icon: <Zap className="w-4 h-4" />, value: "99.9%", label: "Uptime" },
      { icon: <TrendingUp className="w-4 h-4" />, value: "40%", label: "Performance" }
    ],
    color: "from-blue-500 to-cyan-500",
    companyLogo: "🚀"
  },
  {
    company: "AI Research Lab",
    role: "Machine Learning Engineer",
    period: "2021 - 2022", 
    location: "Boston, MA",
    description: "Developed and deployed ML models for predictive analytics and computer vision applications",
    achievements: [
      "Built ensemble models achieving 94% accuracy on complex classification tasks",
      "Reduced model inference time by 70% through optimization and quantization",
      "Published research paper on novel neural network architectures",
      "Implemented automated ML pipelines serving 10,000+ predictions daily"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Apache Spark"],
    type: "work",
    icon: <Brain className="w-6 h-6" />,
    metrics: [
      { icon: <Star className="w-4 h-4" />, value: "94%", label: "Accuracy" },
      { icon: <Zap className="w-4 h-4" />, value: "70%", label: "Faster" },
      { icon: <TrendingUp className="w-4 h-4" />, value: "10K", label: "Predictions/Day" }
    ],
    color: "from-purple-500 to-pink-500",
    companyLogo: "🧠"
  },
  {
    company: "Startup Accelerator",
    role: "Full Stack Developer",
    period: "2020 - 2021",
    location: "Austin, TX",
    description: "Built MVP products for 5+ startups, handling both frontend and backend development",
    achievements: [
      "Developed 3 production-ready applications from concept to deployment",
      "Implemented real-time features using WebSocket and Socket.io",
      "Optimized database queries improving performance by 60%",
      "Integrated third-party APIs and payment processing systems"
    ],
    technologies: ["JavaScript", "React", "Express.js", "MongoDB", "Firebase", "Stripe"],
    type: "work",
    icon: <Code2 className="w-6 h-6" />,
    metrics: [
      { icon: <Rocket className="w-4 h-4" />, value: "5+", label: "Startups" },
      { icon: <Zap className="w-4 h-4" />, value: "60%", label: "Performance" },
      { icon: <TrendingUp className="w-4 h-4" />, value: "3", label: "Products" }
    ],
    color: "from-green-500 to-emerald-500",
    companyLogo: "⚡"
  },
  {
    company: "LeetCode & Competitive Programming",
    role: "500+ Problems Solved • Top 5% Global",
    period: "2019 - Present",
    location: "Global",
    description: "Consistent practice in algorithms, data structures, and system design principles",
    achievements: [
      "350 Easy problems with optimal time/space complexity solutions",
      "100 Medium problems focusing on efficient algorithms and patterns", 
      "50 Hard problems demonstrating advanced problem-solving skills",
      "Participated in 30+ coding contests with consistent top 20% rankings"
    ],
    technologies: ["Algorithms", "Data Structures", "System Design", "OOP", "Databases"],
    type: "achievement",
    icon: <Award className="w-6 h-6" />,
    metrics: [
      { icon: <Star className="w-4 h-4" />, value: "500+", label: "Problems" },
      { icon: <TrendingUp className="w-4 h-4" />, value: "Top 5%", label: "Global Rank" },
      { icon: <Award className="w-4 h-4" />, value: "30+", label: "Contests" }
    ],
    color: "from-yellow-500 to-orange-500",
    companyLogo: "🏆"
  }
]

export default function EnhancedExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-900/10 to-background" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header with Interactive Elements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="w-2 h-12 bg-gradient-to-b from-primary to-secondary rounded-full" />
            <h2 className="text-6xl md:text-7xl font-black gradient-text">
              Career Journey
            </h2>
            <div className="w-2 h-12 bg-gradient-to-b from-secondary to-primary rounded-full" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            From building startups to enterprise systems – a journey of continuous learning and innovation
          </motion.p>

          {/* Interactive Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['All', 'Work', 'Achievements'].map((filter, index) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full glass-effect border border-gray-700 text-gray-300 hover:text-white hover:border-primary/50 transition-all duration-300 font-semibold"
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Timeline with Interactive Cards */}
        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.8,
                type: "spring",
                bounce: 0.3
              }}
              className="relative"
            >
              {/* Timeline Indicator */}
              <div className="absolute left-0 top-8 transform -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className={`w-4 h-4 rounded-full border-4 border-background bg-gradient-to-r ${exp.color}`}
                />
              </div>

              {/* Enhanced Experience Card */}
              <motion.div
                whileHover={{ scale: 1.01, y: -2 }}
                className="ml-8 cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div className="glass-effect rounded-3xl border border-gray-800 hover:border-primary/30 transition-all duration-500 overflow-hidden group">
                  {/* Card Header */}
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      {/* Left Section */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`p-4 rounded-2xl bg-gradient-to-r ${exp.color} text-white text-2xl`}
                          >
                            {exp.companyLogo}
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                {exp.role}
                              </h3>
                              {exp.type === 'achievement' && (
                                <span className="flex items-center gap-1 px-3 py-1 bg-warning/20 text-warning rounded-full text-sm">
                                  <Award className="w-3 h-3" />
                                  Achievement
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-gray-300 mb-3 flex-wrap">
                              <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                              </span>
                              <span className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </span>
                            </div>
                            <p className="text-primary font-semibold text-lg">{exp.company}</p>
                          </div>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        {/* Performance Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {exp.metrics.map((metric, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ delay: index * 0.2 + i * 0.1 }}
                              className="text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700"
                            >
                              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                                {metric.icon}
                                <span className="text-lg font-bold">{metric.value}</span>
                              </div>
                              <div className="text-xs text-gray-400 uppercase tracking-wider">
                                {metric.label}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Expand/Collapse Button */}
                      <motion.div
                        animate={{ rotate: expandedCard === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                      </motion.div>
                    </div>

                    {/* Technologies Preview */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 4).map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-primary/50"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {exp.technologies.length > 4 && (
                        <span className="px-3 py-2 bg-gray-800 rounded-lg text-sm text-gray-400 border border-gray-700">
                          +{exp.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-800 overflow-hidden"
                      >
                        <div className="p-8 bg-gray-900/50">
                          {/* Key Achievements */}
                          <div className="mb-8">
                            <h4 className="font-semibold text-white mb-6 text-xl flex items-center gap-3">
                              <Star className="w-5 h-5 text-yellow-500" />
                              Key Achievements
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {exp.achievements.map((achievement, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-primary/30 transition-colors"
                                >
                                  <div className={`w-2 h-2 rounded-full mt-2 ${
                                    exp.type === 'achievement' ? 'bg-warning' : 'bg-primary'
                                  }`} />
                                  <span className="text-gray-300 flex-1">{achievement}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Full Technologies List */}
                          <div>
                            <h4 className="font-semibold text-white mb-4 text-xl">Technologies Used</h4>
                            <div className="flex flex-wrap gap-3">
                              {exp.technologies.map((tech) => (
                                <motion.span
                                  key={tech}
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl text-gray-300 border border-gray-600 hover:border-primary/50 transition-all duration-300 font-medium"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1 }}
          className="glass-effect rounded-3xl p-12 border border-primary/20 mt-20 relative overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,217,255,0.1)_50%,transparent_75%)] bg-[length:50px_50px] animate-gradient-slow" />
          </div>

          <motion.h3
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ delay: 1.1 }}
            className="text-4xl font-black text-center text-white mb-12"
          >
            Career Highlights
          </motion.h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <EnhancedStat 
              number="3+" 
              label="Years Experience" 
              description="Building production systems"
              color="from-blue-500 to-cyan-500"
              delay={1.2}
            />
            <EnhancedStat 
              number="50+" 
              label="Projects Delivered" 
              description="From concept to production"
              color="from-green-500 to-emerald-500"
              delay={1.3}
            />
            <EnhancedStat 
              number="10k+" 
              label="Users Served" 
              description="Global user base"
              color="from-purple-500 to-pink-500"
              delay={1.4}
            />
            <EnhancedStat 
              number="99.9%" 
              label="System Uptime" 
              description="Production reliability"
              color="from-orange-500 to-red-500"
              delay={1.5}
            />
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.6 }}
            className="text-center mt-12 pt-8 border-t border-gray-800"
          >
            <p className="text-gray-300 text-lg mb-6">
              Ready to bring this level of expertise to your next project?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-black px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              Let's Build Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function EnhancedStat({ number, label, description, color, delay }: { 
  number: string; 
  label: string;
  description: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center group cursor-pointer p-6 rounded-2xl bg-gray-800/30 border border-gray-700 hover:border-primary/50 transition-all duration-300"
    >
      <div className={`text-4xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
        {number}
      </div>
      <div className="text-gray-300 text-lg font-semibold uppercase tracking-wider mb-2">
        {label}
      </div>
      <div className="text-gray-400 text-sm">
        {description}
      </div>
    </motion.div>
  )
}