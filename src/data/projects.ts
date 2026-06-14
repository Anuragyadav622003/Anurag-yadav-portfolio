// src/data/projects.ts
import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'test-studio-mozark',
    title: 'Test Studio @ Mozark',
    description:
      'Full-stack automation testing platform for mobile and web — NestJS APIs, Next.js workspace UI, and Appium Inspector workflows (work project, sanitized case study).',
    category: 'work',
    company: 'Mozark',
    confidential: true,
    technologies: ['Next.js', 'NestJS', 'Prisma', 'TypeScript', 'Appium', 'Appium Inspector', 'Zustand', 'Python'],
    featured: true,
    metrics: {
      Scope: 'Mobile + Web',
      Stack: 'NestJS + Next.js',
      Role: 'SDE1 Full-Stack',
      Status: 'In Production',
    },
    images: [],
    longDescription:
      'At Mozark, I contribute to Test Studio — a production automation testing platform used for mobile and web quality workflows. My work spans NestJS REST APIs, Next.js/React workspace UI, Prisma-backed services, and Appium Inspector integrations for real-device testing. This is a confidential work project; details are shared at a high level without proprietary internals.',
    challenges: [
      'Cross-platform test execution reliability across mobile and web environments',
      'Synchronizing device preview, workspace state, and backend services',
      'Building a scalable full-stack workspace for test operations teams',
    ],
    solutions: [
      'Developed NestJS APIs and Next.js UI for unified mobile + web testing workflows',
      'Implemented three-pane workspace (test workspace, device preview, execution)',
      'Improved execution reliability by fixing overlay, sync, and API edge cases',
    ],
    status: 'in-progress',
  },
  {
    id: 'centralized-auth-microservices',
    title: 'Centralized Auth & Reminder Microservices',
    description:
      'Distributed microservices system with NestJS, Prisma, JWT access control, TCP communication, Redis, and Dockerized deployment',
    category: 'backend',
    technologies: ['NestJS', 'Prisma', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'JWT', 'TCP'],
    codeUrl: 'https://github.com/Anuragyadav622003/centralized-auth-reminder-microservices',
    featured: true,
    metrics: {
      Services: 'Multi-service',
      Communication: 'TCP + Redis',
      Auth: 'JWT-based',
      Deployment: 'Dockerized',
    },
    images: [],
    longDescription:
      'A production-grade distributed microservices architecture featuring centralized authentication, reminder scheduling, and inter-service communication via TCP and Redis. Includes an API Gateway for reliable, loosely coupled backend design.',
    challenges: [
      'Loosely coupled service communication across multiple databases',
      'JWT-based access control across distributed services',
      'Reliable cron scheduling and reminder delivery at scale',
    ],
    solutions: [
      'Implemented TCP inter-service communication with Redis pub/sub',
      'Built centralized auth service with Prisma ORM and JWT tokens',
      'Dockerized all services with API Gateway for unified routing',
    ],
    status: 'completed',
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
      Uptime: '99.9%',
    },
    images: [],
    longDescription:
      'A production-grade expense tracking system with advanced features like category-based budgeting, spending trends, and financial insights.',
    challenges: [
      'Real-time data synchronization',
      'Database performance with large datasets',
      'Secure authentication and authorization',
    ],
    solutions: [
      'Implemented WebSocket for real-time updates',
      'Used database indexing and query optimization',
      'JWT-based auth with refresh token rotation',
    ],
    status: 'completed',
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
      'Course Completion': '75% rate',
    },
    images: [],
    longDescription:
      'A comprehensive learning platform that provides interactive courses, real-time progress tracking, and collaborative learning features.',
    challenges: [
      'State management complexity',
      'Real-time progress synchronization',
      'File upload and management for course materials',
    ],
    solutions: [
      'Implemented Redux with middleware for state management',
      'Used Socket.io for real-time updates',
      'Integrated cloud storage with progress tracking',
    ],
    status: 'completed',
  },
  {
    id: 'accident-severity-predictor',
    title: 'Accident Severity Predictor',
    description: 'Machine Learning model to predict accident severity with 87% accuracy using Random Forest',
    category: 'ml',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Matplotlib'],
    demoUrl: 'https://anuragyadav622003-accident-severity-ml-project-app-7vr64j.streamlit.app/',
    codeUrl: 'https://github.com/Anuragyadav622003/accident-severity-ml-project',
    featured: false,
    metrics: {
      accuracy: '87%',
      precision: '85%',
      recall: '82%',
      f1: '83%',
    },
    images: [],
    longDescription:
      'A comprehensive machine learning solution that analyzes various factors to predict the severity of road accidents.',
    challenges: [
      'Imbalanced dataset with rare severe accidents',
      'Feature engineering with categorical variables',
      'Model interpretability for stakeholders',
    ],
    solutions: [
      'Implemented SMOTE for data balancing',
      'Used feature importance analysis with SHAP',
      'Created interactive visualizations for model explainability',
    ],
    status: 'completed',
  },
]
