// src/components/MLVisualizations.tsx
'use client'

import { motion } from 'framer-motion'
import { Brain, Cpu, Network, BarChart3 } from 'lucide-react'

const mlConcepts = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Neural Networks",
    description: "Deep learning architectures for complex pattern recognition",
    details: "Experience with CNNs, RNNs, and Transformers for various ML tasks"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Model Optimization", 
    description: "Hyperparameter tuning and performance optimization",
    details: "Grid search, Bayesian optimization, and model pruning techniques"
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Feature Engineering",
    description: "Data preprocessing and feature selection",
    details: "PCA, feature importance analysis, and automated feature generation"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Model Evaluation",
    description: "Comprehensive performance metrics and validation",
    details: "Cross-validation, ROC curves, confusion matrices, and A/B testing"
  }
]

export default function MLVisualizations() {
  return (
    <section id="ml-concepts" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-4">
            ML Concepts & Visualizations
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interactive demonstrations of machine learning principles and algorithms 
            that power intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mlConcepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-background rounded-2xl p-6 border border-gray-800 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {concept.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{concept.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{concept.description}</p>
              <p className="text-gray-400 text-xs">{concept.details}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Algorithm Performance Metrics
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <MetricCard value="87%" label="Accuracy" color="from-green-500 to-emerald-500" />
            <MetricCard value="85%" label="Precision" color="from-blue-500 to-cyan-500" />
            <MetricCard value="82%" label="Recall" color="from-purple-500 to-pink-500" />
            <MetricCard value="83%" label="F1-Score" color="from-orange-500 to-red-500" />
          </div>

          <div className="mt-8">
            <h4 className="text-white font-semibold mb-4">Model Training Progress</h4>
            <div className="space-y-4">
              {[
                { name: 'Data Preprocessing', progress: 100 },
                { name: 'Feature Engineering', progress: 100 },
                { name: 'Model Training', progress: 95 },
                { name: 'Hyperparameter Tuning', progress: 90 },
                { name: 'Model Deployment', progress: 85 }
              ].map((stage, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">{stage.name}</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stage.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                  <span className="text-primary text-sm font-bold w-8 text-right">
                    {stage.progress}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MetricCard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-card rounded-xl p-6 text-center border border-gray-800"
    >
      <div className={`text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}>
        {value}
      </div>
      <div className="text-gray-300 text-sm">
        {label}
      </div>
    </motion.div>
  )
}