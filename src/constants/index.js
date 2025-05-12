import { g, path } from "framer-motion/client";

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
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
  {
    title: 'Surprise Me – Terminal‑Based ASCII Video Player',
    desc: 'CLI tool that streams MP4s as  ASCII art with perfectly synced audio.',
    subdesc:
      'Written in C. Uses FFmpeg to extract frames/audio and jp2a to convert frames to monochrome ASCII. Started as a “rick‑roll” prank; now a full-blown Video to ASCII converter.',
    href: 'https://github.com/RamatjyotSingh/surprise-me',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/sm-logo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0 0 60px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'C',           path: '/assets/c.svg' },

    ],
    externalLink: "github",
  },

  {
    title: 'UMATT Club Website',
    desc: 'Official site for the University of Manitoba Association of Tiny Tractors.',
    subdesc:
      'Vue 3 + Vite SPA hosted on AWS EC2. I redesigned the UI, containerized the app with Docker, and added a GitHub Actions pipeline for zero‑downtime deploys. Goal: boost student sign‑ups and attract new sponsors.',
    href: 'https://umatt.org',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/umatt-logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0 0 60px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Vue.js',        path: '/assets/vue.svg' },
      { id: 2, name: 'Docker',        path: '/assets/docker.svg' },
      { id: 3, name: 'AWS',           path: '/assets/aws.svg' },
    ],
    externalLink: "website",
  },

  {
    title: 'GymBuddy – Android Workout Builder',
    desc: 'Mobile app that lets users design, and track custom workouts.',
    subdesc:
      'Team of five. Built in Java (3-Tier) with HSQLDB. Features  Workout builder, searchable exercise library, and recorded sessions. Earned 92 % in Software Engineering course demo.',
    href: 'https://github.com/RamatjyotSingh/GymBuddyApp',
    texture: '/textures/project/gymbuddy-showcase.mp4',
    logo: '/assets/gymbuddy-logo.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg,#60F5A150,#60F5A150),linear-gradient(180deg,rgba(255,255,255,.9) 0%,rgba(208,213,221,.8) 100%)',
      border: '0.2px solid rgba(208,213,221,1)',
      boxShadow: '0 0 60px rgba(35,131,96,.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'Java',     path: '/assets/java.svg' },
      { id: 2, name: 'Android',  path: '/assets/android.svg' },
      { id: 3, name: 'SQL', path: '/assets/sql.svg' },
    ],

    externalLink: "github",
  },

  {
    title: 'Custom HTTP Chat Server',
    desc: 'Full‑stack chat app powered by a bare‑metal Python HTTP server.',
    subdesc:
      'Wrote an HTTP/1.1 request parser & router using raw TCP sockets. Front‑end is vanilla JS + HTML/CSS. Supports REST endpoints, long‑poll messaging, and basic authentication—demonstrating deep‑dive into network protocols.',
    href: 'https://youtu.be/VYh-Vg5VyDU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/chat-logo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0 0 60px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'Python',     path: '/assets/python.svg' },
      {id:2,name:"HTML",path: '/assets/html.svg'},
      { id: 3, name: 'CSS',        path: '/assets/css.svg' },
      { id: 4, name: 'JavaScript', path: '/assets/javascript.svg' },

    ],
    externalLink: "youtube",
  },

  // OPTIONAL: keep in a “Learning Projects” section
  {
    title: 'iPhone 15 Landing Page (Clone / Learning Project)',
    desc: 'Pixel‑perfect replica of Apple’s iPhone 15 hero page.',
    subdesc:
      'Built while following JavaScript Mastery tutorial—focus on GSAP scroll animations and Three.js model control. Helped me master advanced React + Tailwind layout techniques.',
    href: 'https://ramatjyotsingh.github.io/apple-iphone-clone/',
    texture: '/textures/project/iphone-showcase.mkv',
    logo: '/assets/iphone-logo.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0 0 60px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React',     path: '/assets/react.svg' },
      { id: 2, name: 'Tailwind',  path: '/assets/tailwindcss.png' },
      { id: 3, name: 'GSAP',      path: '/assets/gsap.svg' },
      { id: 4, name: 'Three.js',  path: '/assets/three-js.svg' },
    ],
    externalLink: "website",
  },

  {
    title: 'UNIX‑Style Shell (C)',
    desc: 'Interactive shell implementing job control, pipes, and I/O redirection.',
    subdesc:
      'Course project: wrote a Bash‑like shell from scratch to interface with a custom file‑system. Reinforced low‑level syscalls, signals, and inter‑process communication.',
    href: 'https://youtu.be/4xWzvLZsV2Y',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/nqp_shell-logo.png',
    logoStyle: {
      backgroundColor: '#12222F',
      border: '0.2px solid #193345',
      boxShadow: '0 0 60px #2794D34D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'C',       path: '/assets/c.svg' },
     
    ],
    externalLink: "youtube",
  },
];

  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'University of Manitoba Association of Tiny Tractors',
      pos: 'Volunteer Web Developer',
      duration: '2024 - Present',
      title: "As a volunteer web developer for UMATT, I am responsible for maintaining and enhancing the club's website. My role involves implementing new features, fixing bugs, and ensuring the site runs smoothly. I work closely with other members to gather feedback and make improvements.",
      icon: '/assets/umatt-logo.png',
      animation: 'hiphop1',
    },
    {
      id: 2,
      name: 'The Home Depot',
      pos: 'Tool Rental Associate',
      duration: '2022 - Present',
      title: "As a Tool Rental Associate at The Home Depot, I assist customers in selecting the right tools for their projects. I provide guidance on tool usage, maintenance, and safety protocols. My role also involves managing inventory and ensuring that rental equipment is in good working condition.",
      icon: '/assets/thd.svg',
      animation: 'hiphop2',
    },
    {
      id: 3,
      name: 'Asper School of Business',
      pos: 'Grader',
      duration: 'Fall 2024 ',
      title: "As a Grader at the Asper School of Business, I am responsible for evaluating student assignments and providing constructive feedback. My role requires attention to detail and a strong understanding of the course material. I work closely with professors to ensure grading consistency and fairness.",
      icon: '/assets/asper.jpg',
      animation: 'hiphop3',
    },
  ];

  export const techStack = [
    // Core languages with good experience
    {
      name: "Java",
      category: "Language",
      experienceYears: 3,
      proficiency: "Intermediate",
      logo: "/assets/java.svg"
    },
    {
      name: "Python",
      category: "Language",
      experienceYears: 3,
      proficiency: "Intermediate",
      logo: "/assets/python.svg"
    },
    {
      name: "C",
      category: "Language",
      experienceYears: 3,
      proficiency: "Intermediate",
      logo: "/assets/c.svg"
    },
    {
      name: "SQL",
      category: "Language",
      experienceYears: 1,
      proficiency: "Intermediate",
      logo: "/assets/sql.svg"
    },
    
    // Web technologies
    {
      name: "JavaScript",
      category: "Language",
      experienceYears: 1,
      proficiency: "Beginner",
      logo: "/assets/javascript.svg"
    },
    {
      name: "React",
      category: "Framework",
      experienceYears: 0.7,
      proficiency: "Beginner",
      logo: "/assets/react.svg"
    },
    
    // DevOps and tools
    {
      name: "Git",
      category: "Version Control",
      experienceYears: 2,
      proficiency: "Intermediate",
      logo: "/assets/git.svg"
    },
    {
      name: "Linux",
      category: "Operating System",
      experienceYears: 2,
      proficiency: "Intermediate",
      logo: "/assets/linux.svg"
    },
    {
      name: "Docker",
      category: "Containerization",
      experienceYears: 0.6,
      proficiency: "Beginner",
      logo: "/assets/docker.svg"
    },
    {
      name: "AWS",
      category: "Cloud Service",
      experienceYears: 0.6,
      proficiency: "Beginner",
      logo: "/assets/aws.svg"
    },
    
    // Other technologies
    {
      name: "Vue.js",
      category: "Framework",
      experienceYears: 0.5,
      proficiency: "Beginner",
      logo: "/assets/vue.svg"
    },
    {
      name: "C++",
      category: "Language",
      experienceYears: 0.6,
      proficiency: "Beginner",
      logo: "/assets/cpp.svg"
    },
    {
      name: "TailwindCSS",
      category: "CSS Framework",
      experienceYears: 0.6,
      proficiency: "Beginner",
      logo: "/assets/tailwindcss.png"
    },
    {
      name: "Android",
      category: "Platform",
      experienceYears: 0.5,
      proficiency: "Beginner",
      logo: "/assets/android.svg"
    },
    {
      name: "Flask",
      category: "Framework",
      experienceYears: 0.4,
      proficiency: "Beginner",
      logo: "/assets/flask.svg"
    }
];
