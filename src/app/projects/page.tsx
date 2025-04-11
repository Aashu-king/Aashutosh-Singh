"use client"
import ProjectComponent from '@/components/component/ProjectCoponent';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Customer Relationship Management (CRM) System",
      description: "A CRM platform built with Angular and Node.js to streamline customer data management and enhance client interactions.",
      imageUrl: "/VarahiSoftTech-CRM-scaled.jpg",
      tags: ["Angular", "Node.js", "Express.js", "MSSQL", "Bootstrap"],
      details: {
        overview: "Designed and developed a CRM system to enhance business productivity and improve client relationships by automating key processes and centralizing data access.",
        features: [
          "Responsive front-end built with Angular, HTML, CSS, and Bootstrap",
          "RESTful API backend developed with Node.js and Express.js",
          "Secure MSSQL integration for customer data storage",
          "User authentication and role-based access control",
          "Real-time data updates and client interactions",
          "Automated lead tracking and contact management",
          "Detailed reporting for better business insights"
        ],
        technologies: [
          {
            name: "Angular",
            description: "Used for building a dynamic and responsive single-page front-end application."
          },
          {
            name: "Node.js",
            description: "Server-side JavaScript environment used to power the backend and REST APIs."
          },
          {
            name: "Express.js",
            description: "Simplified API development with clean routing and middleware architecture."
          },
          {
            name: "MSSQL",
            description: "Relational database used to securely store and retrieve structured customer data."
          },
          {
            name: "Bootstrap",
            description: "Provided a responsive UI design framework for consistent styling across the platform."
          }
        ],
        challenges: [
          "Ensuring secure and scalable access to customer data",
          "Implementing real-time updates and role-based permissions",
          "Creating an intuitive and responsive user interface"
        ],
        solutions: [
          "Used JWT and middleware for secure authentication and role management",
          "Integrated WebSocket-based solutions for real-time features",
          "Designed reusable Angular components and Bootstrap UI elements"
        ]
      }
    },
    {
      title: "FastAPI E-commerce Website",
      description: "A feature-rich e-commerce platform built with React and FastAPI, offering secure user experience, efficient API performance, and robust database integration.",
      imageUrl: "/Screenshotfrom2025-04-1110-21-17.png",
      tags: ["React", "FastAPI", "MySQL", "SQLAlchemy", "Pydantic"],
      details: {
        overview: "Developed a secure and scalable e-commerce platform that combines a dynamic React front-end with a powerful FastAPI back-end. Focused on performance, security, and user experience.",
        features: [
          "Product catalog with categories and search filters",
          "Shopping cart and order placement",
          "User registration and JWT-based login",
          "Admin interface for managing products and orders",
          "Payment gateway integration and order tracking",
          "Role-based access control for customers and admins"
        ],
        technologies: [
          {
            name: "React",
            description: "Built a responsive front-end with interactive components for a seamless user experience."
          },
          {
            name: "FastAPI",
            description: "Developed high-performance RESTful APIs to handle authentication, product management, and orders."
          },
          {
            name: "SQLAlchemy",
            description: "Used as the ORM for database operations, enabling clean and efficient model relationships and queries."
          },
          {
            name: "Pydantic",
            description: "Leveraged for request/response validation, ensuring data integrity and API schema consistency."
          },
          {
            name: "MySQL",
            description: "Served as the relational database for storing product, order, and user information."
          }
        ],
        challenges: [
          "Ensuring fast API response times under load",
          "Securing user data with proper authentication and authorization",
          "Structuring scalable database relationships and queries"
        ],
        solutions: [
          "Optimized API routes and added caching layers for key queries",
          "Implemented JWT authentication and role-based access logic",
          "Designed normalized database schema with SQLAlchemy ORM and modular Pydantic models"
        ]
      }
    },
    {
      title: "Task Management System",
      description: "A task tracking and productivity tool enabling teams to manage projects, assign tasks, and monitor progress in real-time.",
      imageUrl: "/VarahiSoftTech-CRM-scaled.jpg",
      tags: ["Angular", "Node.js", "MSSQL", "Express.js", "TypeScript"],
      details: {
        overview: "Designed and developed a comprehensive task management platform for teams and organizations. The system supports task assignments, status tracking, and collaborative features to enhance workflow efficiency.",
        features: [
          "Task creation, assignment, and tracking",
          "Project-based organization of tasks and milestones",
          "User authentication and role-based access control",
          "Notifications and real-time status updates",
          "Admin dashboard for team and project oversight"
        ],
        technologies: [
          {
            name: "Angular",
            description: "Created a responsive and user-friendly interface with Angular for seamless task navigation and filtering."
          },
          {
            name: "Node.js & Express.js",
            description: "Built the back-end with Express.js to handle business logic and RESTful API communication."
          },
          {
            name: "MSSQL",
            description: "Used as the database for storing user data, task details, and project hierarchies."
          },
          {
            name: "TypeScript",
            description: "Implemented throughout the stack for better type safety and code maintainability."
          }
        ],
        challenges: [
          "Designing a scalable system for concurrent user task updates",
          "Handling permission-based access across different roles",
          "Maintaining real-time UI feedback during task changes"
        ],
        solutions: [
          "Structured efficient MSSQL queries and indexing for quick task retrieval",
          "Implemented a modular RBAC system to secure task-level actions",
          "Used Angular reactive programming and WebSockets for real-time task updates"
        ]
      }
    },
    {
      title: "Developer Portfolio Website",
      description: "A personal portfolio built with Next.js to showcase projects, skills, and experiences with a modern, responsive design.",
      imageUrl: "/portfolio.png",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/Aashu-king/Aashutosh-Singh",
      details: {
        overview: "Designed and developed a high-performance, SEO-optimized portfolio using Next.js. The site serves as a digital resume, highlighting development work, technologies, and blog content.",
        features: [
          "Project showcase with animations",
          "Blog section powered by Markdown or CMS",
          "Dark/light mode toggle",
          "Contact form with email integration",
          "Mobile-responsive and fast loading"
        ],
        technologies: [
          {
            name: "Next.js",
            description: "Used for server-side rendering and static generation to ensure fast page loads and SEO."
          },
          {
            name: "Tailwind CSS",
            description: "Applied utility-first CSS for consistent, scalable, and responsive styling."
          },
          {
            name: "TypeScript",
            description: "Improved code reliability and maintainability through static typing."
          },
          {
            name: "Framer Motion",
            description: "Implemented for smooth animations and transitions."
          }
        ],
        challenges: [
          "Ensuring SEO optimization while using dynamic routes",
          "Integrating dark/light mode seamlessly",
          "Keeping performance high with animations and images"
        ],
        solutions: [
          "Used Next.js Head component for meta tags and structured data",
          "Implemented theme switching using Tailwind and localStorage",
          "Optimized images with Next.js Image component and lazy loading"
        ]
      }
    },
    {
      title: "Team PMC Website",
      description: "A dynamic business website developed for Team PMC to manage and showcase their services, team, and projects using Angular, Node.js, and Sequelize-TypeScript.",
      imageUrl: "/teampmc.png",
      tags: ["Angular", "Node.js", "Sequelize-TypeScript", "TypeScript", "MySQL"],
      liveUrl: "https://www.teampmc.in/",
      details: {
        overview: "Built a fully dynamic and interactive website for Team PMC, integrating an admin panel for real-time content management and dynamic project listings. The platform reflects the brand's professionalism and service offerings in project management and consultancy.",
        features: [
          "Admin dashboard for managing team and project data",
          "Dynamic project and team sections",
          "Contact form with real-time submission",
          "SEO-optimized content structure",
          "Responsive design for desktop and mobile devices"
        ],
        technologies: [
          {
            name: "Angular",
            description: "Used for building a responsive and interactive frontend with clean component-based structure."
          },
          {
            name: "Node.js",
            description: "Handled backend services and API routing efficiently."
          },
          {
            name: "Sequelize-TypeScript",
            description: "Implemented ORM for managing MySQL database models and performing CRUD operations."
          },
          {
            name: "TypeScript",
            description: "Used throughout both frontend and backend for strong typing and maintainability."
          }
        ],
        challenges: [
          "Allowing real-time updates of team and project data via an admin interface",
          "Maintaining consistent branding and dynamic content rendering",
          "Ensuring fast performance and scalability"
        ],
        solutions: [
          "Integrated a secure admin panel with full control over website content",
          "Used modular Angular components for scalable front-end logic",
          "Optimized APIs and database queries using Sequelize features"
        ]
      }
    },
    // {
    //   title: "Static Websites Collection",
    //   description: "A curated collection of static websites built using HTML, CSS, JavaScript, and responsive design principles.",
    //   imageUrl: "",
    //   tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    //   githubUrl: "https://github.com/yourusername/static-websites",
    //   liveUrl: "https://yourstaticshowcase.com",
    //   details: {
    //     overview: "Developed multiple static websites for various clients and personal projects, each focusing on clean UI/UX, performance, and accessibility.",
    //     websites: [
    //       {
    //         name: "Portfolio Website",
    //         url: "https://yourportfolio.com",
    //         description: "Personal portfolio built with HTML, CSS, and a touch of JavaScript for interactivity. Highlights skills, projects, and contact info."
    //       },
    //       {
    //         name: "Restaurant Landing Page",
    //         url: "https://yourrestaurantsite.com",
    //         description: "Landing page for a restaurant showcasing menu, location, and reservation options using a clean, modern design."
    //       },
    //       {
    //         name: "Event Promotion Site",
    //         url: "https://youreventsite.com",
    //         description: "Single-page site promoting a tech conference with schedules, speaker bios, and call-to-action buttons."
    //       },
    //       {
    //         name: "Photography Showcase",
    //         url: "https://yourphotography.com",
    //         description: "Gallery-style static website featuring high-res images, responsive layout, and minimal design."
    //       }
    //     ],
    //     features: [
    //       "Mobile-first responsive layouts",
    //       "Optimized image handling and lazy loading",
    //       "Cross-browser compatibility",
    //       "SEO-friendly markup"
    //     ],
    //     technologies: [
    //       {
    //         name: "HTML5 & CSS3",
    //         description: "Used for building semantic, responsive page structures and styling."
    //       },
    //       {
    //         name: "JavaScript",
    //         description: "Added interactivity like sliders, toggles, and smooth scrolling."
    //       },
    //       {
    //         name: "GitHub Pages / Vercel",
    //         description: "Hosted and deployed each site using GitHub Pages or Vercel for fast performance."
    //       }
    //     ],
    //     challenges: [
    //       "Ensuring consistency across different browsers and screen sizes",
    //       "Optimizing performance for static delivery",
    //       "Delivering SEO-friendly and accessible code"
    //     ],
    //     solutions: [
    //       "Used CSS Grid and Flexbox with media queries for responsive design",
    //       "Minified assets and used lazy loading",
    //       "Followed accessibility and semantic HTML best practices"
    //     ]
    //   }
    // },
    {
      title: "The Char Dham Travel Website",
      description: "A static website for a travel company offering affordable and quality Char Dham pilgrimage packages, built using HTML, CSS, and JavaScript.",
      imageUrl: "/chardhamwebsite-scaled.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://thechardham.com",
      details: {
        overview: "Created a fully responsive and SEO-friendly travel website for a company specializing in Char Dham pilgrimage tours. The website highlights various travel packages with engaging visuals and user-friendly navigation.",
        features: [
          "Informative pages for each Char Dham destination",
          "Travel package details with pricing and itinerary",
          "Responsive layout for mobile, tablet, and desktop",
          "Contact form for booking inquiries",
          "Smooth scrolling and basic animations"
        ],
        technologies: [
          {
            name: "HTML5",
            description: "Structured content and layout for SEO and accessibility."
          },
          {
            name: "CSS3",
            description: "Styled the website with modern layouts and responsive media queries."
          },
          {
            name: "JavaScript",
            description: "Added interactivity such as mobile menu toggling and form validation."
          }
        ],
        challenges: [
          "Presenting content in an engaging yet minimal design",
          "Ensuring the site performs well on all screen sizes",
          "Creating smooth user experience with limited interactivity"
        ],
        solutions: [
          "Used Flexbox and media queries for responsive layouts",
          "Compressed assets for fast loading speeds",
          "Implemented a clear and intuitive structure for travel packages and routes"
        ]
      }
    },
    {
      title: "The Oxygen Healthcare Website",
      description: "A static website for a healthcare company providing affordable and quality medical equipment, built using HTML, CSS, and JavaScript.",
      imageUrl: "/the-oxygen-scaled.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://theoxygenhealthcare.com",
      details: {
        overview: "Developed a clean and professional website for a healthcare company specializing in selling medical equipment at affordable prices. The website emphasizes trust, quality, and easy access to essential health products.",
        features: [
          "Product showcase with descriptions and images",
          "Company overview and mission section",
          "Responsive layout for all devices",
          "Contact form for inquiries",
          "Simple navigation and clean UI"
        ],
        technologies: [
          {
            name: "HTML5",
            description: "Used for structuring the site and ensuring semantic markup for SEO."
          },
          {
            name: "CSS3",
            description: "Styled the site with a modern and trustworthy look using responsive techniques."
          },
          {
            name: "JavaScript",
            description: "Enabled interactive components like mobile menu toggling and form validation."
          }
        ],
        challenges: [
          "Creating a healthcare-focused visual identity",
          "Ensuring accessibility and readability for all users",
          "Showcasing products without e-commerce complexity"
        ],
        solutions: [
          "Used a calm color palette and medical-themed design",
          "Structured content with accessibility in mind",
          "Kept the layout focused and easy to navigate for all age groups"
        ]
      }
    },
    {
      title: "Vastuchakra Construction Company Website",
      description: "A static website built for a construction company, showcasing their services, completed projects, and core values using HTML, CSS, and JavaScript.",
      imageUrl: "/vastuchakra.png",
      tags: ["HTML", "CSS", "JavaScript", "Construction", "Responsive Design"],
      liveUrl: "https://www.vhmpvtltd.com/",
      details: {
        overview: "Developed a professional static website for Vastuchakra, a construction company highlighting their building services, portfolio, and contact details. The site reflects their quality, experience, and dedication to excellence.",
        features: [
          "Company introduction and services section",
          "Portfolio of completed construction projects",
          "Contact form for client inquiries",
          "Responsive layout for all screen sizes",
          "Simple and user-friendly navigation"
        ],
        technologies: [
          {
            name: "HTML5",
            description: "Provided a semantic and structured layout for clear content organization."
          },
          {
            name: "CSS3",
            description: "Styled the website to align with the company’s brand and professionalism."
          },
          {
            name: "JavaScript",
            description: "Added interactivity like smooth scrolling and menu toggling."
          }
        ],
        challenges: [
          "Representing construction services in a visually appealing manner",
          "Showcasing large-scale projects with clarity and detail",
          "Ensuring performance on all devices"
        ],
        solutions: [
          "Used structured service sections and project image galleries",
          "Focused on clean, minimal design with strong visual hierarchy",
          "Optimized assets for quick load times"
        ]
      }
    } 
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 md:px-20 lg:px-32">
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <div className="w-24 h-1 bg-white mb-8"></div>
          <p className="text-gray-400 max-w-2xl text-lg mb-8">
            Here are some of my recent projects. Each one was an opportunity to solve interesting problems and learn new technologies.
          </p>
        </motion.div>
      </section>

      {projects.map((project, index) => (
        <ProjectComponent key={index} {...project} />
      ))}

      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">Want to see more?</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Check out my GitHub profile for more projects and code examples.
        </p>
        <a href="https://github.com/Aashu-king" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-white text-black hover:bg-black hover:text-white">
            <Github className="h-4 w-4 mr-2" />
            Visit My GitHub
          </Button>
        </a>
      </section>
    </main>
  );
};

export default ProjectsPage;