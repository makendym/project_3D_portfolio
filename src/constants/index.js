import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  roadcall,
  treehouse,
  varsitytutor,
  stac,
  nyu,
  discrimination,
  FatEar,
  NYU_Int_Prep
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "school",
    title: "School",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Computer Science Tutor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];
const educations = [
  {
    title: "New York University",
    company_name: "MS in Computer Science",
    icon: nyu,
    iconBg: "#383E56",
    date: "March 2023 - December 2024",
    points: [
      {
        title: "Program Focus",
        point:
          "Advanced computer science concepts and techniques, including data structures and algorithms.",
      },
      {
        title: "Course Includes",
        point:
          "Principles of Database Systems, Design & Analysis of Algorithms, Software Engineering, Big Data, and more",
      },
    ],
  },
  {
    title: "St. Thomas Aquinas College",
    company_name: "BS in Computer Science",
    icon: stac,
    iconBg: "#E6DEDD",
    date: "Sep 2018 - May 2022",
    points: [
      {
        title: "Honors & Awards",
        point:
          "Advanced computer science concepts and techniques, including data structures and algorithms.",
      },
      {
        title: "Extracurricular Activities",
        point:
          "Principles of Database Systems, Design & Analysis of Algorithms, Software Engineering, Big Data, and more",
      },
    ],
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Roadcall.co",
    icon: roadcall,
    iconBg: "#383E56",
    date: "Jun 2023 - Sep 2023",
    points: [
      "Developed an admin to driver  note feature using Redux and JavaScript within the React framework.",
      "Created tests for the web app UI and flows, resulting in fewer bugs.",
      "Helped investigate and resolve issues with the phone masking component using Typescript.",
      "Collaborated with other team members to provide support and bug fixes for various internal tools written in JavaScript ",
      "Worked in an Agile Scrum team and worked with Trello for sprint planning.",
      "Utilized BitBucket to store, manage and control changes in our code.",
    ],
  },
  {
    title: "Full Stack Intern",
    company_name: "Treehouse Strategy	",
    icon: treehouse,
    iconBg: "#E6DEDD",
    date: "May 2021 - Sep 2021",
    points: [
      "Created reusable React.js components, resulting in fewer bugs and improved code quality.",
      "Added a dynamic dashboard page for agency partnerships  using React to enhance client engagement.",
      "Implemented links on dashboard using React and MongoDB , to help functionality and optimize data entry in tables.",
      "Provided support and bug fixes for various internal tools written in C#.",
      "Worked in an Agile Scrum team and used Asana for sprint planning",
    ],
  },
  {
    title: "Computer Science Tutor",
    company_name: "Varsity Tutors",
    icon: varsitytutor,
    iconBg: "#383E56",
    date: "Sep 2020 - Present",
    points: [
      "Tutored over a 100 students at all levels, starting with middle school to graduate students.",
      "Delivered a series of technical Computer Science topics, such as Data Structures, Algorithms and OOP using Java .",
      "Increased students programming proficiency by a 95% pass rate on final exams.",
      "Collaborated with students in a well-organized, friendly, and progressive environment.",
    ],
  },
  {
    title: "Researcher",
    company_name: "St. Thomas Aquinas College",
    icon: stac,
    iconBg: "#E6DEDD",
    date: "Sept 2019 - May 2022",
    points: [
      "Implemented three dialogue systems using the Oculus VR headsets, Unity tools and C# to trigger the dialogue at close proximity.",
      "Worked in an Agile Scrum team and took part of the stand up meetings for sprint planning.",
      "Created several new animations using the Mo Cap Suit to improve the quality of the application.",
      "Presented this research in front of hundreds of educators  at the ISTE Live 2022  conference in New Orleans.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NYU Interview Prep",
    description:
      "Created a full-stack web application for NYU alumni and faculty to connect students pursuing similar careers ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Postgres",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
    ],
    image: NYU_Int_Prep,
    source_code_link: "https://github.com/makendym/NYU-Interview-Prep/tree/develop",
  },
  {
    name: "Combating Discrimination",
    description:
      "Worked on a study using Virtual Reality to investigate and treat discrimination in the daily life of college students.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Oculus VR headsets",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    image: discrimination,
    source_code_link: "https://github.com/taulantxhakli/Discrimination",
  },
  {
    name: "FatEar",
    description:
      "Built a full-stack web application using React and Flask to provide users with a music account. This allows users to make a post about their favorite artist or songs. They can even follow or send a friend request to other users.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: FatEar,
    source_code_link: "https://github.com/makendym/FatEar",
  },
];

export {
  services,
  technologies,
  educations,
  experiences,
  testimonials,
  projects,
};
