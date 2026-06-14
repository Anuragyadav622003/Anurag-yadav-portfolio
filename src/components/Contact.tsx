'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code2, CheckCircle, Copy } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data/portfolio'
import { showToast } from './Toast'

function copyText(text: string, label: string) {
  navigator.clipboard.writeText(text).then(() => showToast(`${label} copied!`))
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    leetcode: Code2,
    portfolio: Mail,
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-900/10 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4">Let&apos;s Connect</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Open to opportunities, collaborations, and interesting projects
          </p>
          <p className="text-sm text-success mt-3 font-medium">{personalInfo.availability}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed">
                I&apos;m currently working as SDE1 at Mozark on Test Studio — building automation testing for mobile and web apps with NestJS, Next.js, and Appium Inspector.
                Always happy to connect about full-stack engineering, system design, or new opportunities.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}`, copy: personalInfo.email, copyLabel: 'Email' },
                { icon: Phone, text: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}`, copy: personalInfo.phone, copyLabel: 'Phone' },
                { icon: MapPin, text: personalInfo.location },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group/item"
                >
                  <item.icon className="w-5 h-5 text-primary shrink-0" />
                  {item.href ? (
                    <a href={item.href} className="hover:text-primary transition-colors flex-1">
                      {item.text}
                    </a>
                  ) : (
                    <span className="flex-1">{item.text}</span>
                  )}
                  {item.copy && (
                    <button
                      onClick={() => copyText(item.copy!, item.copyLabel!)}
                      className="opacity-0 group-hover/item:opacity-100 p-1.5 rounded-lg hover:bg-gray-800 text-gray-500 hover:text-primary transition-all"
                      aria-label={`Copy ${item.copyLabel}`}
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Find Me Online</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = iconMap[social.icon]
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      className="flex items-center gap-2 px-4 py-2.5 glass-effect rounded-xl border border-gray-700 text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 border border-gray-800">
              <div className="space-y-5">
                {[
                  { id: 'name', label: 'Your Name', type: 'text', key: 'name' as const, placeholder: 'John Doe' },
                  { id: 'email', label: 'Email Address', type: 'email', key: 'email' as const, placeholder: 'john@example.com' },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-white font-medium mb-2 text-sm">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      value={formData[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder={field.placeholder}
                      required
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2 text-sm">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-black py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Opening Email Client...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
