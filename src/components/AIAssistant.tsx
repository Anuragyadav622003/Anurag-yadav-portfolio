'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Brain, Sparkles } from 'lucide-react'
import { personalInfo, leetCode, socialLinks } from '@/data/portfolio'

interface Message {
  id: string
  text: string
  sender: 'user' | 'assistant'
  timestamp: Date
}

function buildResponses() {
  const linkedIn = socialLinks.find((s) => s.label === 'LinkedIn')?.href ?? ''
  const github = socialLinks.find((s) => s.label === 'GitHub')?.href ?? ''

  return {
    greeting: `Hey there 👋 I'm ${personalInfo.name}'s AI assistant. He's an ${personalInfo.title} currently at Mozark. Ask me about his skills, experience, projects, LeetCode (${leetCode.totalSolved}+ solved), or how to reach him!`,

    about: `${personalInfo.name} is an ${personalInfo.title} based in ${personalInfo.location}. ${personalInfo.summary}`,

    skills:
      'Anurag\'s core stack:\n\n• Backend: NestJS, Node.js, Express, REST APIs, Prisma, Microservices, Redis, TCP\n• Frontend: React, Next.js, TypeScript, Zustand, TailwindCSS, Redux Toolkit\n• Databases: PostgreSQL, MongoDB, MySQL, SQLite\n• Tools: Git, Docker, Jest, Postman, Appium\n• System Design: API Design, Microservices, Scalable Architecture, Distributed Systems (foundational — SDE1 level, growing)',

    projects:
      `Featured projects:\n\n🚀 Centralized Auth & Reminder Microservices — NestJS, Prisma, PostgreSQL, MongoDB, Redis, Docker, TCP\n💰 Smart Expense Tracker — NestJS + React + Prisma (live on Vercel)\n📚 E-Learning Platform — MERN stack with real-time features\n\nAt Mozark he's building Test Studio — automation testing for mobile & web with NestJS, Next.js, and Appium Inspector.`,

    experience:
      `Career timeline:\n\n🎯 SDE1 @ Mozark (Apr 2026–Present) — Test Studio: mobile & web automation testing, NestJS/Next.js full-stack, Appium Inspector\n⚡ Software Engineer @ SoftxAI (May–Oct 2025) — 40% faster APIs, 85%+ Jest coverage, 300K+ batch processing\n🏢 Intern @ RegisterKaro (Feb–May 2025) — Next.js UIs with 80%+ Lighthouse, 95%+ SEO`,

    leetcode: `Anurag has solved ${leetCode.totalSolved}+ problems on his active LeetCode profile (@${leetCode.username}). He practices DSA daily — arrays, trees, graphs, DP, and system design.\n\nProfile: ${leetCode.profileUrl}`,

    mozark:
      `At Mozark as SDE1, Anurag builds Test Studio — automation testing for mobile & web:\n\n• NestJS APIs and Next.js workspace UI for the Test Studio platform\n• Appium Inspector for iOS/Android mobile testing workflows\n• Mobile and web test automation inside the Test Studio product\n• Three-pane UI — test workspace, device preview, execution\n• End-to-end debugging across frontend and backend services`,

    achievements:
      `Key milestones:\n\n🏆 Appointed as SDE1 @ Mozark\n✅ 85%+ Jest test coverage at SoftxAI\n⚡ 40% API performance improvement (Python → NestJS migration)\n📊 300K+ records batch processing in 10–30 seconds\n🧩 150+ LeetCode problems on active profile`,

    contact: `Reach Anurag:\n\n📧 ${personalInfo.email}\n📱 ${personalInfo.phone}\n📍 ${personalInfo.location}\n\n🔗 GitHub: ${github}\n🔗 LinkedIn: ${linkedIn}\n🔗 LeetCode: ${leetCode.profileUrl}`,

    faq: 'Common questions:\n\n• Open to: Full-Stack, Backend, SDE roles\n• Current focus: Test Studio @ Mozark — mobile/web automation, NestJS, Next.js, Appium\n• Stack: NestJS, Next.js, Appium, PostgreSQL, Prisma, System Design (foundational)\n• Location: Gurgaon — open to remote/hybrid/relocation\n• Contact: anuragyadav622003@gmail.com\n\nScroll to the FAQ section for more!',

    resume: `You can download Anurag's resume from the hero section. He's open to full-stack engineering roles and collaborations!`,

    default:
      "I'm not sure about that 🤔 Try asking about:\n• Skills & tech stack\n• Experience & Mozark\n• Projects\n• LeetCode (150+)\n• Achievements\n• Contact info\n\nTip: Press ⌘K anywhere to quick-navigate!",
  }
}

const QUICK_REPLIES = ['About', 'Skills', 'Experience', 'Projects', 'LeetCode', 'FAQ', 'Contact'] as const

type Topic = keyof ReturnType<typeof buildResponses>

function matchTopic(text: string): Topic {
  const t = text.toLowerCase()

  if (t.includes('about') || t.includes('who') || t.includes('summary') || t.includes('introduce')) return 'about'
  if (t.includes('hello') || t.includes('hi') || t.includes('hey')) return 'greeting'
  if (t.includes('leetcode') || t.includes('dsa') || t.includes('coding') || t.includes('competitive')) return 'leetcode'
  if (t.includes('mozark') || t.includes('test studio') || t.includes('sde1') || t.includes('sde 1') || t.includes('appium') || t.includes('automation')) return 'mozark'
  if (t.includes('achievement') || t.includes('milestone') || t.includes('certif')) return 'achievements'
  if (t.includes('resume') || t.includes('cv') || t.includes('download')) return 'resume'
  if (t.includes('skill') || t.includes('tech') || t.includes('stack') || t.includes('nestjs') || t.includes('react')) return 'skills'
  if (t.includes('project') || t.includes('app') || t.includes('build') || t.includes('portfolio')) return 'projects'
  if (t.includes('experience') || t.includes('work') || t.includes('company') || t.includes('job') || t.includes('career')) return 'experience'
  if (t.includes('contact') || t.includes('reach') || t.includes('email') || t.includes('phone') || t.includes('hire')) return 'contact'
  if (t.includes('faq') || t.includes('remote') || t.includes('relocate') || t.includes('open to') || t.includes('role')) return 'faq'

  return 'default'
}

export default function AIAssistant() {
  const responses = buildResponses()

  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: responses.greeting,
      sender: 'assistant',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [lastTopic, setLastTopic] = useState<Topic | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const processUserInput = useCallback(
    (inputText: string) => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        sender: 'user',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, userMessage])
      setIsTyping(true)

      setTimeout(() => {
        let topic: Topic = matchTopic(inputText)

        if (inputText.toLowerCase().includes('more') && lastTopic && lastTopic !== 'default') {
          topic = lastTopic
        }

        const response = responses[topic]
        setLastTopic(topic)

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response,
          sender: 'assistant',
          timestamp: new Date(),
        }

        setIsTyping(false)
        setMessages((prev) => [...prev, assistantMessage])
      }, 900)
    },
    [lastTopic, responses]
  )

  const handleSend = () => {
    if (!input.trim() || isTyping) return
    processUserInput(input)
    setInput('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open AI assistant"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center"
      >
        <motion.div animate={{ rotate: [0, 15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <Brain className="w-6 h-6 text-black" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 border-2 border-primary rounded-full"
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-4 sm:right-8 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[500px] bg-gradient-to-b from-gray-950 to-gray-900 rounded-2xl shadow-2xl border border-gray-800 flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-black/30 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <Sparkles className="w-4 h-4 text-primary" />
                <div>
                  <span className="text-white font-semibold text-sm block">AI Assistant</span>
                  <span className="text-gray-500 text-[10px]">{personalInfo.currentRole}</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-primary to-secondary text-black'
                        : 'bg-gray-800/60 border border-gray-700 text-gray-100'
                    }`}
                  >
                    {msg.text}
                    <div className="text-[10px] mt-1.5 opacity-60">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-gray-400 text-xs"
                >
                  <span className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                      />
                    ))}
                  </span>
                  Typing...
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="px-3 pb-2 flex gap-1.5 overflow-x-auto custom-scrollbar">
              {QUICK_REPLIES.map((topic) => (
                <motion.button
                  key={topic}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => !isTyping && processUserInput(topic)}
                  disabled={isTyping}
                  className="px-3 py-1.5 bg-gray-800 text-gray-300 text-xs rounded-full hover:bg-primary/20 hover:text-primary transition-all whitespace-nowrap disabled:opacity-50"
                >
                  {topic}
                </motion.button>
              ))}
            </div>

            <div className="p-3 border-t border-gray-800 bg-black/40 backdrop-blur-md">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about skills, Mozark, LeetCode..."
                  disabled={isTyping}
                  className="flex-1 bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-primary text-black p-2 rounded-xl disabled:opacity-50"
                  aria-label="Send message"
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
