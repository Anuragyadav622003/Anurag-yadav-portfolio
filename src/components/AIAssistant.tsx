// // src/components/AIAssistant.tsx
// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { MessageCircle, X, Send, Brain } from 'lucide-react'

// interface Message {
//   id: string
//   text: string
//   sender: 'user' | 'assistant'
//   timestamp: Date
// }

// const predefinedResponses = {
//   greeting: "Hello! I'm Anurag's AI assistant. I can tell you about his skills, projects, and experience. What would you like to know?",
//   skills: "Anurag specializes in Full Stack Development (React, Node.js, TypeScript), Machine Learning (Python, TensorFlow, Scikit-learn), and System Architecture. He has 3+ years of experience building scalable applications.",
//   projects: "Key projects include: AI Accident Severity Predictor (87% accuracy), Smart Expense Analytics Platform, and an AI-Powered Learning Management System. All feature modern tech stacks and production-ready architecture.",
//   experience: "Anurag has worked as a Full Stack Developer at Tech Startup Inc. and as a Machine Learning Intern at AI Research Lab. He's also solved 500+ LeetCode problems and maintains a 167-day GitHub streak.",
//   contact: "You can reach Anurag through LinkedIn, GitHub, or email. He's always open to discussing new opportunities and collaborations!"
// }

// export default function AIAssistant() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: '1',
//       text: predefinedResponses.greeting,
//       sender: 'assistant',
//       timestamp: new Date()
//     }
//   ])
//   const [input, setInput] = useState('')
//   const messagesEndRef = useRef<HTMLDivElement>(null)

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
//   }

//   useEffect(() => {
//     scrollToBottom()
//   }, [messages])

//   const handleSend = () => {
//     if (!input.trim()) return

//     // Add user message
//     const userMessage: Message = {
//       id: Date.now().toString(),
//       text: input,
//       sender: 'user',
//       timestamp: new Date()
//     }

//     setMessages(prev => [...prev, userMessage])
//     setInput('')

//     // Simulate AI response
//     setTimeout(() => {
//       const response = generateResponse(input.toLowerCase())
//       const assistantMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         text: response,
//         sender: 'assistant',
//         timestamp: new Date()
//       }
//       setMessages(prev => [...prev, assistantMessage])
//     }, 1000)
//   }

//   const generateResponse = (input: string): string => {
//     if (input.includes('hello') || input.includes('hi')) return predefinedResponses.greeting
//     if (input.includes('skill') || input.includes('tech')) return predefinedResponses.skills
//     if (input.includes('project') || input.includes('work')) return predefinedResponses.projects
//     if (input.includes('experience') || input.includes('background')) return predefinedResponses.experience
//     if (input.includes('contact') || input.includes('reach')) return predefinedResponses.contact
    
//     return "I'm not sure I understand. You can ask me about Anurag's skills, projects, experience, or how to contact him!"
//   }

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault()
//       handleSend()
//     }
//   }

//   return (
//     <>
//       {/* Floating Action Button */}
//       <motion.button
//         initial={{ scale: 0, rotate: -180 }}
//         animate={{ scale: 1, rotate: 0 }}
//         whileHover={{ scale: 1.1, rotate: 5 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center group"
//       >
//         <motion.div
//           animate={{ rotate: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <Brain className="w-6 h-6 text-black" />
//         </motion.div>
        
//         {/* Pulsing ring */}
//         <motion.div
//           animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute inset-0 border-2 border-primary rounded-full"
//         />
//       </motion.button>

//       {/* Chat Modal */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.8, y: 20 }}
//             className="fixed bottom-24 right-8 z-50 w-96 h-96 bg-card rounded-2xl shadow-2xl border border-gray-800 flex flex-col"
//           >
//             {/* Header */}
//             <div className="flex items-center justify-between p-4 border-b border-gray-800">
//               <div className="flex items-center gap-3">
//                 <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
//                 <span className="text-white font-semibold">AI Assistant</span>
//               </div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Messages */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-4">
//               {messages.map((message) => (
//                 <motion.div
//                   key={message.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div
//                     className={`max-w-[80%] rounded-2xl p-3 ${
//                       message.sender === 'user'
//                         ? 'bg-gradient-to-r from-primary to-secondary text-black'
//                         : 'glass-effect text-white border border-gray-700'
//                     }`}
//                   >
//                     {message.text}
//                   </div>
//                 </motion.div>
//               ))}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Input */}
//             <div className="p-4 border-t border-gray-800">
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Ask about skills, projects..."
//                   className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={handleSend}
//                   disabled={!input.trim()}
//                   className="bg-primary text-black p-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <Send className="w-5 h-5" />
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }





'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Brain, Sparkles } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'assistant'
  timestamp: Date
}

const predefinedResponses = {
  greeting: "Hey there 👋, I’m Anurag’s personal AI assistant. Want to explore his skills, projects, or experience?",
  skills: "Anurag is skilled in Full Stack Development (React, Next.js, NestJS, Node.js, TypeScript), System Design, and Machine Learning using Python, Scikit-Learn, and TensorFlow.",
  projects: "Some of his top projects 🚀 include: QuickBite (Food Delivery App), FitFolio (Fitness Tracker), and AI Accident Severity Predictor (85% accuracy).",
  experience: "He has experience at SoftXAI/dotCompliance (US) as a Software Engineer and Safe Ledger Pvt. Ltd. as a Full Stack Developer Intern — serving 3M+ global users with 99.9% uptime.",
  contact: "You can contact Anurag via LinkedIn, GitHub, or email — all links are available below in the portfolio footer.",
  default: "I'm not sure I got that 🤔. Try asking about his *skills*, *projects*, *experience*, or *contact info*."
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: predefinedResponses.greeting,
      sender: 'assistant',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [lastTopic, setLastTopic] = useState<string | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    processUserInput(input)
    setInput('')
  }

  const processUserInput = (inputText: string) => {
    const text = inputText.toLowerCase()
    setIsTyping(true)

    setTimeout(() => {
      let response = predefinedResponses.default

      if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
        response = predefinedResponses.greeting
        setLastTopic('greeting')
      } else if (text.includes('skill') || text.includes('tech')) {
        response = predefinedResponses.skills
        setLastTopic('skills')
      } else if (text.includes('project') || text.includes('app') || text.includes('build')) {
        response = predefinedResponses.projects
        setLastTopic('projects')
      } else if (text.includes('experience') || text.includes('work') || text.includes('company')) {
        response = predefinedResponses.experience
        setLastTopic('experience')
      } else if (text.includes('contact') || text.includes('reach') || text.includes('email')) {
        response = predefinedResponses.contact
        setLastTopic('contact')
      } else if (text.includes('more') && lastTopic) {
        response = `Sure! Want to know more about Anurag’s ${lastTopic}?`
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'assistant',
        timestamp: new Date()
      }

      setIsTyping(false)
      setMessages(prev => [...prev, assistantMessage])
    }, 1200)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating AI Button */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center group"
      >
        <motion.div
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Brain className="w-6 h-6 text-black" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 border-2 border-primary rounded-full"
        />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-8 z-50 w-96 h-[480px] bg-gradient-to-b from-gray-950 to-gray-900 rounded-2xl shadow-2xl border border-gray-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-black/30 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-white font-semibold">Anurag's AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-primary to-secondary text-black'
                        : 'bg-gray-800/60 border border-gray-700 text-gray-100 backdrop-blur-sm'
                    }`}
                  >
                    {msg.text}
                    <div className="text-[10px] mt-1 opacity-70">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="text-gray-400 italic"
                >
                  Assistant is typing...
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto custom-scrollbar">
              {['Skills', 'Projects', 'Experience', 'Contact'].map((topic) => (
                <motion.button
                  key={topic}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => processUserInput(topic)}
                  className="px-3 py-1.5 bg-gray-800 text-gray-300 text-xs rounded-full hover:bg-primary/20 hover:text-primary transition-all"
                >
                  {topic}
                </motion.button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-800 bg-black/40 backdrop-blur-md">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Anurag’s skills or projects..."
                  className="flex-1 bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-primary text-black p-2 rounded-xl disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
