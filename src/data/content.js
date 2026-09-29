// EDIT THIS FILE to update your portfolio. Anything in [square brackets] is a placeholder.
export const isSet = (v) => typeof v === 'string' && v.trim() !== '' && !v.startsWith('[')

export const site = {
  name: 'Dirghpal Suthar',
  role: 'Backend & Android Developer',
  tagline: 'I build REST APIs and user-centric mobile applications, with an eye for clean, responsive interfaces.',
  stack: ['Kotlin', 'Jetpack Compose', 'Python', 'FastAPI', 'Laravel', 'UI/UX'],
  email: 'dirghpal2@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dirghpal-suthar-5085b3207',
  linkedinHandle: '/dirghpal-suthar',
  github: 'https://github.com/dirghpal',
  githubHandle: '/dirghpal',
  resume: '/resume.pdf',
  // Sign up free at https://formspree.io, create a form that sends to dirghpal2@gmail.com,
  // then replace this with your form ID (the part after /f/ in your form's endpoint).
  formspreeId: '[Add Formspree Form ID]',
}

export const nav = [
  ['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience'], ['Backend', 'backend'], ['API', 'api'], ['Android', 'android'],
  ['Projects', 'projects'], ['Education', 'education'], ['Contact', 'contact'],
]

export const about = [
  "I'm a B.Tech Computer Science & Engineering student in my 7th semester, currently working as a Backend Developer at Kiwi Automation in Mumbai.",
  "I build REST APIs with Python, FastAPI, PHP and Laravel, and Android apps with Kotlin and Jetpack Compose. I'm also interested in UI/UX and in creating clean, responsive interfaces.",
  "I'm looking for backend and Android development internships, software development opportunities, UI/UX internships and freelance work.",
]
export const interests = ['Backend & REST APIs', 'Android development', 'Mobile applications', 'UI/UX design']

export const skills = [
  { title: 'UI/UX', items: ['UI Design', 'UX Design', 'Mobile App Design'] },
  { title: 'Android', items: ['Android Studio', 'Kotlin', 'Jetpack Compose', 'XML', 'Firebase'] },
  { title: 'Backend', items: ['Python', 'FastAPI', 'PHP', 'Laravel 11', 'REST API'] },
  { title: 'Programming', items: ['Java', 'Kotlin', 'Python', 'C', 'C++'] },
  { title: 'Web', items: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'Database', items: ['MySQL', 'MariaDB'] },
]

export const backend = {
  intro: 'I build backend APIs with Python and FastAPI, and with PHP and Laravel, backed by MySQL or MariaDB.',
  strengths: [
    ['REST APIs', 'CRUD APIs with authentication and standard API responses.'],
    ['Laravel 11', 'Models, controllers, routes and migrations, with Sanctum authentication.'],
    ['Python and FastAPI', 'Backend APIs written in Python with FastAPI.'],
  ],
  tools: ['Python', 'FastAPI', 'PHP', 'Laravel 11', 'REST API', 'Sanctum', 'MySQL', 'MariaDB'],
}

export const android = {
  intro: 'I build Android apps with Kotlin and Jetpack Compose, paying as much attention to how they look as to how they work.',
  points: [
    ['Jetpack Compose UI', 'Declarative, component-based screens for modern Android interfaces.'],
    ['Firebase and JSON', 'Connecting apps to data and backend services.'],
    ['Android Studio and Gradle', 'The everyday toolchain for building and debugging.'],
  ],
}

export const projects = [
  {
    title: 'CRM API', type: 'Backend / REST API',
    desc: 'Laravel 11 based Customer Relationship Management (CRM) backend API.',
    focus: ['Authentication with Laravel Sanctum', 'Lead, customer and follow-up management', 'Deals, quotations, invoices and payments', 'Dashboard reports and global search', 'Feature tests'],
    stack: ['PHP', 'Laravel 11', 'Sanctum', 'MySQL', 'REST API'],
    repo: 'https://github.com/dirghpal/Crm-api',
    docs: 'https://github.com/dirghpal/Crm-api/blob/main/API_DOCUMENTATION.md',
    image: 'https://github.com/dirghpal/Crm-api/raw/main/crm-api-banner.png', // or '/projects/crm.png'
  },
  {
    title: 'Bhajiwala Backend', type: 'Backend / REST API',
    desc: 'Grocery & vegetable e-commerce REST API backend built with Laravel 11 and PHP.',
    focus: ['Customer authentication with Sanctum', 'Products, categories, cart and wishlist', 'Orders with stock validation and automatic stock reduction', 'Admin APIs with role-based authorization and dashboard'],
    stack: ['PHP', 'Laravel 11', 'Sanctum', 'MySQL', 'REST API', 'Postman'],
    repo: 'https://github.com/dirghpal/Bhajiwala-backend',
    image: 'https://github.com/dirghpal/Bhajiwala-backend/raw/main/banner.png', // or '/projects/bhajiwala.png'
  },
  {
    title: 'Agri India (Farming App)', type: 'Android app',
    desc: 'A one-stop Android application for Indian farmers, bringing several everyday farming needs into a single app.',
    focus: ['Government Yojna awareness', 'E-commerce platform', 'Daily APMC price updates', 'Community network (social feed)', 'Category-based articles', 'Weather forecasting'],
    stack: ['Kotlin', 'Android Studio', 'Firebase', 'External APIs'],
    repo: 'https://github.com/dirghpal/farming-app',
    image: 'https://github.com/hetsuthar028/Farming-App/raw/master/Agri%20India.png',
  },
]

export const education = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    place: 'CLG Institute of Engineering and Technology, Sumerpur – Pali, Rajasthan',
    years: 'Aug 2023 – June 2027',
    chips: ['Currently in 7th semester', '6th semester CGPA: 8.25'],
  },
  { degree: 'Higher Secondary (12th), Rajasthan Board', place: 'Bharti V M Senior Secondary School, Bheetwara – Pali, Rajasthan', years: '2023' },
  { degree: 'Secondary (10th), Rajasthan Board', place: 'Mahaveer Public Senior Secondary School, Balrai – Pali, Rajasthan', years: '2021' },
]

export const experience = [
  {
    role: 'Backend Developer',
    org: 'Kiwi Automation',
    place: 'Mumbai · On-site',
    when: 'July 2026 – Present',
  },
]

export const internship = {
  title: 'Android Developer Intern (Virtual Internship)',
  org: 'CodSoft',
  when: 'Feb 2026 – Mar 2026',
  points: [
    'Completed a virtual internship focused on Android application development using Kotlin and Jetpack Compose.',
    'Worked on practical Android application development, interface design and development workflow.',
    'Focused on clean interface design, responsive UI and modern Android practices.',
  ],
}
