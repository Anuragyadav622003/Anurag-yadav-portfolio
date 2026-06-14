export const personalInfo = {
  name: 'Anurag Yadav',
  title: 'SDE1 | Full-Stack Engineer',
  subtitle: 'Backend & Frontend',
  location: 'Gurgaon, Haryana, India',
  email: 'anuragyadav622003@gmail.com',
  phone: '+91 9115392172',
  summary:
    'Full-Stack SDE with production experience in startup environments, building microservices and customer-facing products. Strong in NestJS APIs, React/Next.js, system design fundamentals, and end-to-end feature ownership. Currently at Mozark building Test Studio — an automation testing platform for mobile and web apps with Appium Inspector for mobile testing and NestJS/Next.js full-stack development.',
  currentRole: 'SDE1 @ Mozark',
  resumePath: '/AnuragYadavResume.png',
  openToWork: true,
}

export const github = {
  username: 'Anuragyadav622003',
  profileUrl: 'https://github.com/Anuragyadav622003',
}

export const navSections = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'certifications', label: 'Certs', href: '#certifications' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Anuragyadav622003',
    icon: 'github' as const,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anurag-yadav-3704b1239/',
    icon: 'linkedin' as const,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/anuragyadav06-02-2003/',
    icon: 'leetcode' as const,
  },
  {
    label: 'Portfolio',
    href: 'https://anurag-yadav-portfolio.vercel.app',
    icon: 'portfolio' as const,
  },
]

export const heroRoles = [
  'Automation Testing',
  'Web & Mobile Testing',
  'NestJS REST APIs',
  'React & Next.js Apps',
  'Full-Stack Development',
  'System Design',
]

export const skillCategories = [
  {
    name: 'Languages',
    icon: 'code' as const,
    gradient: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'SQL', level: 88 },
    ],
  },
  {
    name: 'Backend',
    icon: 'server' as const,
    gradient: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'NestJS', level: 92 },
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 93 },
      { name: 'Prisma ORM', level: 87 },
      { name: 'Microservices', level: 90 },
      { name: 'Redis', level: 82 },
      { name: 'TCP', level: 78 },
    ],
  },
  {
    name: 'Frontend',
    icon: 'layout' as const,
    gradient: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 90 },
      { name: 'Zustand', level: 85 },
      { name: 'TailwindCSS', level: 93 },
      { name: 'Redux Toolkit', level: 80 },
    ],
  },
  {
    name: 'Databases',
    icon: 'database' as const,
    gradient: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'SQLite', level: 78 },
    ],
  },
  {
    name: 'System Design',
    icon: 'network' as const,
    gradient: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'API Design', level: 75 },
      { name: 'Microservices', level: 72 },
      { name: 'Scalable Architecture', level: 65 },
      { name: 'Distributed Systems', level: 60 },
    ],
  },
  {
    name: 'Test Automation',
    icon: 'tools' as const,
    gradient: 'from-rose-500 to-pink-500',
    skills: [
      { name: 'Appium', level: 82 },
      { name: 'Appium Inspector', level: 80 },
      { name: 'Web Testing', level: 85 },
      { name: 'Mobile Testing', level: 83 },
      { name: 'Test Workflows', level: 80 },
    ],
  },
  {
    name: 'Tools',
    icon: 'tools' as const,
    gradient: 'from-slate-500 to-zinc-400',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 85 },
      { name: 'Jest', level: 88 },
      { name: 'Postman', level: 90 },
      { name: 'Jira', level: 85 },
    ],
  },
]

export const experiences = [
  {
    company: 'Mozark',
    role: 'SDE1',
    period: 'Apr 2026 – Present',
    location: 'Gurgaon, Haryana',
    description:
      'Building Test Studio — a full-stack automation testing platform for mobile and web applications with Appium Inspector for mobile testing and NestJS/Next.js microservices architecture.',
    achievements: [
      'Developed automation testing application covering both mobile and web testing workflows with NestJS REST APIs, Next.js/React frontend, and Prisma-backed services.',
      'Run mobile and web test workflows inside Test Studio using Appium Inspector, device preview, and platform-aware testing tools.',
      'Implemented three-pane workspace UI (test workspace, device preview, execution/chat) with TypeScript, Zustand, and Tailwind CSS for cross-platform testing.',
      'Connected frontend and backend services for end-to-end test execution, debugging, and workspace sync across mobile and web environments.',
      'Resolved device overlay, coordinate scaling, workspace sync, and keyword API issues to improve execution reliability across mobile and web environments.',
    ],
    technologies: [
      'Next.js',
      'React',
      'NestJS',
      'Prisma',
      'TypeScript',
      'Appium',
      'Appium Inspector',
      'Zustand',
      'Tailwind CSS',
      'Python',
    ],
    type: 'work' as const,
    color: 'from-indigo-500 to-violet-500',
    companyLogo: '🎯',
    metrics: [
      { value: 'Mobile + Web', label: 'Test Automation' },
      { value: 'NestJS', label: 'Backend APIs' },
      { value: 'Appium', label: 'Mobile Testing' },
    ],
    current: true,
  },
  {
    company: 'SoftxAI Technology Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'May 2025 – Oct 2025',
    location: 'Hyderabad, India',
    description:
      'Developed scalable NestJS/Node.js/TypeScript APIs with PostgreSQL and microservices for modular, production-ready backend services.',
    achievements: [
      'Migrated legacy Python modules to NestJS, optimizing DB operations with raw SQL for 40% faster API response times.',
      'Designed cron-based batch processing for 300K+ records in batches of 200 with retries, completing runs in 10–30 seconds to avoid CPU overload.',
      'Maintained Jest unit and integration tests across controllers, services, and DB layers, achieving 85%+ coverage.',
      'Developed scalable APIs with PostgreSQL and microservices architecture for production-ready backend services.',
    ],
    technologies: ['NestJS', 'Node.js', 'TypeScript', 'PostgreSQL', 'Jest', 'Python', 'Microservices'],
    type: 'work' as const,
    color: 'from-blue-500 to-cyan-500',
    companyLogo: '⚡',
    metrics: [
      { value: '40%', label: 'Faster APIs' },
      { value: '85%+', label: 'Test Coverage' },
      { value: '300K+', label: 'Records/Batch' },
    ],
    current: false,
  },
  {
    company: 'RegisterKaro',
    role: 'Software Developer Intern',
    period: 'Feb 2025 – May 2025',
    location: 'Gurgaon, Haryana',
    description:
      'Built responsive Next.js/TypeScript/Tailwind CSS UIs with 80%+ Lighthouse performance and 95%+ SEO scores.',
    achievements: [
      'Built responsive Next.js/TypeScript/Tailwind CSS UIs with 80%+ Lighthouse performance and 95%+ SEO.',
      'Migrated Python services to Node.js/Express/MongoDB and optimized queries to reduce DB load and improve response times.',
      'Designed RESTful APIs for startup registration, payment, and compliance workflows.',
      'Contributed to production deployment and bug resolution during live rollout cycles.',
    ],
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'],
    type: 'work' as const,
    color: 'from-green-500 to-emerald-500',
    companyLogo: '🏢',
    metrics: [
      { value: '80%+', label: 'Lighthouse' },
      { value: '95%+', label: 'SEO Score' },
      { value: '40%', label: 'Faster APIs' },
    ],
    current: false,
  },
  {
    company: 'LeetCode & Competitive Programming',
    role: '150+ Problems Solved',
    period: '2025 – Present',
    location: 'Global',
    description:
      'Active LeetCode practice on new profile — sharpening algorithms, data structures, and system design with consistent daily problem-solving.',
    achievements: [
      '150+ problems solved across Easy, Medium, and Hard difficulty levels.',
      'Focused on optimal time/space complexity and pattern-based problem solving.',
      'Practicing arrays, trees, graphs, dynamic programming, and system design topics.',
      'Building consistency with daily LeetCode practice on active profile.',
    ],
    technologies: ['C++', 'Python', 'JavaScript', 'Data Structures', 'Algorithms', 'System Design'],
    type: 'achievement' as const,
    color: 'from-yellow-500 to-orange-500',
    companyLogo: '🏆',
    metrics: [
      { value: '150+', label: 'Problems' },
      { value: 'Active', label: 'New Profile' },
      { value: 'DSA', label: 'Daily Practice' },
    ],
    current: false,
  },
]

export const achievements = [
  {
    title: 'Mozark Offer Letter',
    subtitle: 'Appointed as SDE1',
    description:
      'Selected and appointed as Software Development Engineer 1 at Mozark, building automation testing platforms for mobile and web with NestJS, Next.js, and Appium.',
    icon: '🎯',
    color: 'from-indigo-500 to-violet-500',
    badge: 'Current Role',
    year: '2026',
  },
  {
    title: 'SoftxAI Internship',
    subtitle: 'Successfully Completed',
    description:
      'Completed full-time software engineering role with proven impact — 40% API performance gains and 85%+ test coverage.',
    icon: '⚡',
    color: 'from-blue-500 to-cyan-500',
    badge: 'Certified',
    year: '2025',
  },
  {
    title: '85%+ Test Coverage',
    subtitle: 'Production Quality',
    description:
      'Maintained comprehensive Jest unit and integration tests across controllers, services, and database layers.',
    icon: '✅',
    color: 'from-green-500 to-emerald-500',
    badge: 'Engineering',
    year: '2025',
  },
  {
    title: '300K+ Batch Processing',
    subtitle: 'Scalable Systems',
    description:
      'Designed cron-based batch processing handling 300K+ records with retries, completing in 10–30 seconds.',
    icon: '🚀',
    color: 'from-orange-500 to-red-500',
    badge: 'Backend',
    year: '2025',
  },
]

export const leetCode = {
  profileUrl: 'https://leetcode.com/u/anuragyadav06-02-2003/',
  username: 'anuragyadav06-02-2003',
  totalSolved: 150,
}

export const liveStats = {
  yearsExperience: 2,
  projectsDelivered: 10,
  testCoverage: 85,
}

export const techMarquee = [
  'NestJS',
  'Next.js',
  'React',
  'TypeScript',
  'PostgreSQL',
  'Prisma',
  'Microservices',
  'Redis',
  'Docker',
  'Zustand',
  'TailwindCSS',
  'Jest',
  'Appium',
  'Appium Inspector',
  'Web Testing',
  'Automation Testing',
  'Python',
  'MongoDB',
  'REST APIs',
  'Full-Stack',
  'System Design',
]

export const currentProject = {
  title: 'Test Studio',
  company: 'Mozark',
  role: 'SDE1 · Full-Stack',
  status: 'In Active Development',
  description:
    'Full-stack automation testing platform for mobile and web applications — with Appium Inspector for mobile element inspection, NestJS APIs, and a Next.js workspace UI with real-time device preview.',
  highlights: [
    'Mobile & web automation testing in a unified platform',
    'Appium Inspector integration for iOS/Android mobile testing',
    'NestJS + Next.js full-stack development for Test Studio',
    'Three-pane workspace — test workspace, device preview, execution',
  ],
  tech: ['Next.js', 'NestJS', 'Prisma', 'Appium', 'Appium Inspector', 'Zustand', 'Python', 'TypeScript'],
}

export const certifications = [
  {
    title: 'Mozark Offer Letter',
    issuer: 'Mozark',
    detail: 'Appointed as SDE1',
    year: '2026',
    icon: '🎯',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'SoftxAI Internship',
    issuer: 'SoftxAI Technology Pvt. Ltd.',
    detail: 'Software Engineer — Successfully Completed',
    year: '2025',
    icon: '⚡',
    color: 'from-blue-500 to-cyan-500',
  },
]

export const faqs = [
  {
    q: 'What roles are you open to?',
    a: 'Full-Stack Engineer, Backend Engineer (NestJS/Node.js), and SDE roles. Open to startup and product-focused teams building scalable systems.',
  },
  {
    q: 'What is your current focus at Mozark?',
    a: 'Building Test Studio — an automation testing platform for mobile and web apps. Working on NestJS/Next.js full-stack development, Appium Inspector for mobile testing, and automation workflows inside the Test Studio platform.',
  },
  {
    q: 'What is your strongest tech stack?',
    a: 'NestJS + PostgreSQL + Prisma on the backend, React/Next.js + TypeScript + Tailwind on the frontend, with experience in microservices, Redis, Docker, and foundational system design — growing steadily as an SDE1.',
  },
  {
    q: 'Are you open to remote or relocation?',
    a: 'Based in Gurgaon, India. Open to hybrid, remote-friendly, and relocation opportunities for the right role.',
  },
  {
    q: 'How can I reach you quickly?',
    a: 'Email at anuragyadav622003@gmail.com or connect on LinkedIn. You can also use the contact form on this site — it opens your email client directly.',
  },
]
