// src/data/projects.ts
import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'accident-severity-predictor',
    title: 'Accident Severity Predictor',
    description: 'Machine Learning model to predict accident severity with 87% accuracy using Random Forest',
    category: 'ml',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Matplotlib'],
    demoUrl: 'https://anuragyadav622003-accident-severity-ml-project-app-7vr64j.streamlit.app/',
    codeUrl: 'https://github.com/Anuragyadav622003/accident-severity-ml-project',
    featured: true,
    metrics: {
      accuracy: '87%',
      precision: '85%',
      recall: '82%',
      f1: '83%'
    },
    images: ['/projects/accident-predictor-1.jpg'],
    longDescription: 'A comprehensive machine learning solution that analyzes various factors to predict the severity of road accidents. The model helps in proactive safety measures and resource allocation.',
    challenges: [
      'Imbalanced dataset with rare severe accidents',
      'Feature engineering with categorical variables',
      'Model interpretability for stakeholders'
    ],
    solutions: [
      'Implemented SMOTE for data balancing',
      'Used feature importance analysis with SHAP',
      'Created interactive visualizations for model explainability'
    ],
    status: 'completed'
  },
  {
    id: 'expense-tracker',
    title: 'Smart Expense Tracker',
    description: 'Full-stack expense management application with real-time analytics and budgeting',
    category: 'fullstack',
    technologies: ['NestJS', 'PostgreSQL', 'Prisma', 'React', 'Tailwind CSS'],
    demoUrl: 'https://ledger-pulse-react.vercel.app/',
    codeUrl: 'https://github.com/Anuragyadav622003/ledger-pulse-react',
    featured: true,
    metrics: {
      'API Response Time': '<200ms',
      'Database Queries': 'Optimized with indexes',
      'Concurrent Users': '1000+',
      'Uptime': '99.9%'
    },
    images: ['/projects/expense-tracker-1.jpg'],
    longDescription: 'A production-grade expense tracking system with advanced features like category-based budgeting, spending trends, and financial insights.',
    challenges: [
      'Real-time data synchronization',
      'Database performance with large datasets',
      'Secure authentication and authorization'
    ],
    solutions: [
      'Implemented WebSocket for real-time updates',
      'Used database indexing and query optimization',
      'JWT-based auth with refresh token rotation'
    ],
    status: 'completed'
  },
  {
    id: 'e-learning-platform',
    title: 'E-Learning Platform',
    description: 'Modern learning management system with interactive courses and progress tracking',
    category: 'fullstack',
    technologies: ['MERN Stack', 'Redux', 'Socket.io', 'Tailwind CSS'],
    demoUrl: 'https://e-learning-plateform-six.vercel.app/',
    codeUrl: 'https://github.com/Anuragyadav622003/E-Learning-Plateform',
    featured: true,
    metrics: {
      'Page Load Time': '<2s',
      'Mobile Performance': '95+ Lighthouse',
      'User Engagement': '40% increase',
      'Course Completion': '75% rate'
    },
    images: ['/projects/e-learning-1.jpg'],
    longDescription: 'A comprehensive learning platform that provides interactive courses, real-time progress tracking, and collaborative learning features.',
    challenges: [
      'State management complexity',
      'Real-time progress synchronization',
      'File upload and management for course materials'
    ],
    solutions: [
      'Implemented Redux with middleware for state management',
      'Used Socket.io for real-time updates',
      'Integrated cloud storage with progress tracking'
    ],
    status: 'completed'
  }
]