export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Print - Ecommerce Website',
    desc: 'An ecommerce website where users can shop by different categories of products like clothes, watches, shoes and many more.',
    subdesc:
      'The web application is built using Reactjs, Nodejs, MongoDB, and Expressjs. The styling part of whole application is purely made with CSS',
    href: 'https://print-ecommerce.onrender.com/',
    texture: '/textures/project/print.mp4',
    logo: '/assets/print-logo.png',
    logowidth: 10,
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Nodejs',
        path: 'assets/nodejs.svg',
      },
      {
        id: 3,
        name: 'Express',
        path: 'assets/express.png'
      },
      {
        id: 4,
        name: 'Mongodb',
        path: 'assets/mongodb.svg'
      }
    ],
  },
  {
    title: 'VoyageVista - Trip Planner',
    desc: 'An Ai trip planner which enables users to create trips and view hotels and places with all the details.',
    subdesc:
      'The web application is built using Reactjs, Firestore, Gemini model, Shadcn, tailwind css.',
    href: 'https://trip-planner-4h7v.onrender.com/',
    texture: '/textures/project/trip-planner.mp4',
    logo: '/assets/trip-planner-logo.png',
    logowidth: 20,
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Firebase',
        path: 'assets/firebase.svg',
      },
      {
        id: 3,
        name: 'Shadcn',
        path: 'assets/shadcn.png'
      },
      {
        id: 4,
        name: 'Tailwind',
        path: 'assets/tailwindcss.png'
      }
    ],
  }
];

export const workExperiences = [
  {
    id: 1,
    name: 'Cognizant',
    pos: 'Programmer Analyst',
    duration: 'September 2023 - Present',
    title: "Utilized the provided library to create modular and efficient React components, ensuring they are reusable across various parts of the application.This approach enhanced code maintainability and consistency throughout the project.",
      icon: '/assets/cognizant.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Cognizant',
    pos: 'Intern',
    duration: 'January 2023 - June 2023',
    title: "Successfully completed minor and major projects, demonstrating a strong grasp of full-stack development using the MERN stack, including user authentication, realtime datasynchronization, and responsive UI design.",
    icon: '/assets/cognizant.svg',
    animation: 'clapping',
  }
];
