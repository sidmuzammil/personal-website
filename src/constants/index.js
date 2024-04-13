import {
    mobile,
    backend,
    creator,
    web,
    html,
    react,
    figma1,
    git,
    javascript,
    css,
    Threejs,
    framer,
    gsap,
    orebishopping,
    softwarecompany,
    chatApp,
    tourist,
    foodDelivery,
    dashboard,
 
  } from "../assets";
  
  export const navLinks = [
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "UI/UX Designer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Biker",
      icon: backend,
    },
    {
      title: "Gamer",
      icon: creator,
    },
  ];
  
  const experiences = [
    {
      title: "Html",
      icon: html,
      iconBg: "#f2ffff",
      level: "Advanced (95%)",
      points: [
        "Proficient in semantic HTML5 markup, ensuring accessibility and search engine optimization (SEO) best practices.",
        "Experienced in structuring responsive web layouts using HTML and CSS frameworks like Bootstrap or Tailwind CSS.",
        "Skilled in integrating multimedia elements such as images, videos, and audio using HTML5 tags and attributes.",
        "Knowledgeable in form creation and validation, utilizing HTML forms along with JavaScript for enhanced user interactions.",
      ],
    },
    {
      title: "css (tailwind css,sass)",
      icon: css,
      iconBg: "#ffffff",
      level: "advanced (85%)",
      points: [
        " Proficient in CSS fundamentals like selectors, properties, and styling techniques.",
        "Familiar with Tailwind CSS utility classes for rapid and scalable styling.",
        "Experienced in using Sass for advanced features like variables, mixins, and nesting, enhancing CSS organization and reusability.",
      ],
    },
    {
      title: "Java script",
      icon: javascript,
      iconBg: "#ffffff",
      level: "intermediate (68%)",
      points: [
        "Strong grasp of JavaScript fundamentals like variables, loops, and functions.",
        "Comfortable with DOM manipulation and handling user events.",
        "Understands asynchronous operations using promises/callbacks for non-blocking code.",
      ],
    },
    {
      title: "React js",
      icon: react,
      iconBg: "#ffffff",
      level: "advanced (80%)",
      points: [
        "Proficient in building complex React component hierarchies with reusable and maintainable code structures ",
        "Experienced in state management using tools like Redux or Context API, handling application-wide data and state transitions efficiently.",
        "Skilled in implementing routing and navigation using React Router or similar libraries, creating seamless multi-page experiences in single-page applications.",
        "Proficient in using React hooks like useState, useEffect, useContext, etc., for managing component state, side effects, and context within functional components.",
      ],
    },
    {
      title: "figma",
      icon: figma1,
      iconBg: "#fff2ff",
      level: "Intermediate (70%)",
      points: [
        "Intermediate skills in creating visually appealing layouts and organizing elements effectively.",
        " Proficient in basic prototyping and creating simple interactive designs.",
        " Comfortable with collaboration features like commenting, sharing, and basic version control within Figma.",
      ],
    },
    {
      title: "git and github",
      icon: git,
      iconBg: "#f2ffff",
      level: "Advanced (85%)",
      points: [
        "Advanced proficiency in using Git for version control, including branching, merging, rebasing, and resolving conflicts efficiently.",
        "Experienced in leveraging GitHub's features for collaborative development, such as pull requests, code reviews, issue tracking, and project management.",
        "Skilled in using advanced Git commands like cherry-picking, interactive rebase, stash, and git bisect for more complex version control tasks and troubleshooting.",
      ],
    },
    {
      title: "Three js",
      icon: Threejs,
      iconBg: "#f2ffff",
      level: "Basic Beginner (still learning))",
      points: [
        "Basic understanding of Three.js concepts like scenes, cameras, geometries, materials, and lighting.",
        "Familiarity with rendering 3D objects and scenes in the browser using Three.js.",
        "Basic knowledge of adding interactivity to 3D scenes, such as mouse interactions or basic animations.",
      ],
    },
    {
      title: "framer Motion",
      icon: framer,
      iconBg: "#f2ffff",
      level: "Intermediate (76%)",
      points: [
        "Proficient in creating complex animations using Framer Motion, including transitions, keyframes, and variants for UI elements.",
        "Skilled in adding interactive elements to animations, such as hover effects, click interactions, and drag gestures.",
        "Experienced in using variants to manage animation states and controls effectively, enhancing user experience and interface dynamics.",
      ],
    },
    {
      title: "gsap(greensock)",
      icon: gsap,
      iconBg: "#f2ffff",
      level: "beginner (50%)",
      points: [
        "Comfortable with tweening animations and creating timelines with GSAP for more complex animation sequences.",
        "Knowledgeable about using easing functions, control options, and callbacks in GSAP animations for smoother and controlled motion.",
        " Proficient in creating scroll-triggered animations using GSAP, enhancing user experience and adding interactivity based on scroll events.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Orebi shopping",
      description:
        "Our e-commerce web app offers a user-friendly platform for seamless browsing and purchasing. Users can explore a wide product range, manage accounts, and enjoy secure checkout. Responsive design ensures accessibility, providing a convenient shopping experience across devices.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind.css",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: orebishopping,
      figma_link: "https://www.figma.com/proto/phBth7woFMJrzD2xe8dLyY/VA-prototype?page-id=0%3A1&type=design&node-id=1-720&viewport=192%2C3037%2C0.17&t=LYnIpxbeAt08yCy6-1&scaling=min-zoom&starting-point-node-id=1%3A720&mode=design",
      github_link: "https://github.com/sidmuzammil/e-commerce",
      web_link: "https://e-commerce-eta-ochre.vercel.app/",
      isLogo:true,
      isWeb: true,
    },
    {
      name: "Software comapny",
      description:
        "Our e-commerce platform offers a seamless shopping experience with a diverse product range and intuitive navigation. Users can securely browse, purchase items, and manage their accounts effortlessly. Responsive design ensures accessibility on all devices, providing a convenient and enjoyable shopping journey.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind.css",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: softwarecompany,
      figma_link: "https://www.figma.com/proto/phBth7woFMJrzD2xe8dLyY/VA-prototype?page-id=0%3A1&type=design&node-id=1-720&viewport=192%2C3037%2C0.17&t=LYnIpxbeAt08yCy6-1&scaling=min-zoom&starting-point-node-id=1%3A720&mode=design",
      github_link: "https://github.com/sidmuzammil/software-company",
      web_link: "https://software-company-flax.vercel.app/",
      isLogo:true,
      isWeb: true,
    },
    {
      name: "Touris planner",
      description:
        "Our tourist planner website offers detailed itineraries, destination guides, and accommodation booking for seamless travel planning. Users can explore attractions, view interactive maps, and access local insights for informed decision-making. With weather forecasts and responsive design, the platform ensures a hassle-free and enjoyable travel experience across devices",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tourist,
      figma_link: "https://www.figma.com/proto/phBth7woFMJrzD2xe8dLyY/VA-prototype?page-id=0%3A1&type=design&node-id=1-720&viewport=192%2C3037%2C0.17&t=LYnIpxbeAt08yCy6-1&scaling=min-zoom&starting-point-node-id=1%3A720&mode=design",
      github_link: "https://github.com/sidmuzammil/Tourice-package-palaner",
      web_link: "https://tourist-planner-98e0e.web.app/",
      isLogo:true,
      isWeb: true,
    },
    {
      name: "chat application",
      description:
        "Our chat application facilitates real-time text messaging and communication for seamless conversations. Users can create chat rooms, send messages, and engage in group discussions with ease. The app offers a user-friendly interface and responsive design, ensuring smooth communication experiences across devices.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: chatApp,

      github_link: "https://github.com/sidmuzammil/chat-application",
      web_link: "https://origin-chat-app.web.app/",
      isLogo:true,
      isWeb: true,
    },
    {
      name: "food delivery app",
      description:
        "I've designed a food delivery app interface in Figma, featuring intuitive navigation, sleek visuals, and easy ordering options. Users can browse restaurants, view menus, customize orders, and track deliveries seamlessly. The design focuses on enhancing user experience with clear layouts and interactive elements for efficient food ordering and delivery management.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },

      ],
      image: foodDelivery,
      figma_link: "https://www.figma.com/file/jjng2vOQC7DQvn0y6qTDKT/food-delivery-app?type=design&node-id=14%3A423&mode=design&t=9i95K86LX68hmvxy-1",
      github_link: "https://github.com/kAOS6-9/gamerverse",
      web_link: "https://e-commerce-eta-ochre.vercel.app/",
      isFigma:true,
    },
    {
      name: "Dashboard",
      description:
        "'ve designed a Figma dashboard for tracking living expenses and money statistics. It offers detailed insights into income, expenses, savings, and budgeting, empowering users to manage their finances effectively. The dashboard features intuitive visualizations and interactive elements for monitoring financial health and making informed decisions about spending habits.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: dashboard,
      figma_link:"https://www.figma.com/file/9oapdvCcBAItJ3dkqhPnoL/project-management-app?type=design&node-id=3%3A2&mode=design&t=ZcPgCqmZyEY3dXDC-1",
      github_link: "https://github.com/kAOS6-9/gamerverse",
      web_link: "https://e-commerce-eta-ochre.vercel.app/",
      isFigma:true,
    },
    
  ];
  
  export { services, experiences, projects };