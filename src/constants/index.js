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
  threejs,
  roadcall,
  treehouse,
  varsitytutor,
  stac,
  nyu,
  discrimination,
  FatEar,
  NYU_Int_Prep,
  ResumePic,
  Resume,
  CleaningService,
  earth,
  StackOverflow,
  kidzToPros,
  APCompTutor
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
    id: "projects",
    title: "Projects",
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
          "Academic Scholarship, Athletic Scholarship, Distinguished Dean’s List, Chi Alpha Sigma –Nu Chapter, Sigma Zeta.",
      },
      {
        title: "Extracurricular Activities",
        point:
          "Altar Server, Venture, College Soccer, College Track & Field, and more",
      },
    ],
  },
];

const experiences = [
  {
    title: "Lead Coding Instructor",
    company_name: "Brains & Motion Education",
    icon: kidzToPros,
    iconBg: "#383E56",
    date: "Jun 2024 - August 2024",
    points: [
      "Teach and manage camper groups of up to 12 students, delivering engaging curriculum and fostering a positive environment.",
      "Mentor instructors on innovative teaching strategies, such as gamification, resulting in a 25% increase in instructor confidence.",
      "Implement student-centered teaching strategies, including  real-time feedback, leading to a 20% increase in student participation.",
      "Introduce innovative teaching methods, such as coding  with Scratch with Code Crafters, to increase student engagement.",
    ],
  },
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
  {
    title: "Publications",
    company_name: "Ignite Committee at St. Thomas Aquinas College",
    icon: stac,
    iconBg: "#E6DEDD",
    date: "Sep 2021",
    points: [
      "The projects on display demonstrate the ongoing commitment of our faculty to supporting undergraduate research. As is true of the faculty advisors who support them, these students and their work hold the potential to contribute positively to the world. Each of these students has benefited from mentoring provided by exceptional faculty. We thank the faculty for their efforts on behalf of these students",
    ],
    link: "https://stac.edu/wp-content/uploads/2023/03/ignite2021_booklet-1.pdf",
  },
];

const projects = [
  {
    name: "APCompTutor.AI",
    description:
      "I developed an educational app using React and Node.js that generates practice exam questions with OpenAI models, converted exam questions from PDFs to JSONL format using GPT-4 to enhance data processing efficiency for the fine-tuned model, and implemented a compiler for starter code, enabling students to compile and test code under real exam conditions.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "FireBase",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI/GPT4",
        color: "pink-text-gradient",
      },
    ],
    image: APCompTutor,
    is_web: false,
    source_code_link: "",
  },
  {
    name: "Stack Overflow Big Data",
    description:
      "In this project, I analyzed a 100GB sample from StackOverflow's 8TB dataset to uncover insights using MongoDB and AWS DynamoDB. I built an interactive web dashboard to present the findings, overcoming challenges in data volume and query optimization through effective preprocessing and optimization strategies. This app showcases the potential of big data analytics in extracting meaningful insights from large datasets. Future work will explore expanding the dataset and incorporating machine learning for enhanced analysis.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "ECharts",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "orange-text-gradient",
      },
    ],
    image: StackOverflow,
    is_web: false,
    source_code_link: "https://github.com/makendym/StackOverflow-BigData",
  },
  {
    name: "NYU Interview Prep",
    description:
      "Developed a full-stack web application tailored to the needs of NYU students, alumni and faculty, providing a digital ecosystem for students with shared career interests to engage and collaborate. Leveraged advanced technologies to create a seamless platform that enables effective networking, knowledge sharing, and mentorship, fostering a supportive community for career-driven interactions. ",
    tags: [
      {
        name: "ReactJS",
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
        name: "AWS(EC2, S3, CLoudfront)",
        color: "orange-text-gradient",
      },
    ],
    image: NYU_Int_Prep,
    is_web: false,
    source_code_link:
      "https://github.com/makendym/NYU-Interview-Prep/tree/develop",
  },
  {
    name: "Cleaning Service",
    description:
      "Developed a comprehensive full-stack web application that facilitates seamless interaction between local business proprietors and prospective customers. The platform empowers clients to effortlessly reserve their preferred time slots, enhancing the overall experience for both parties involved.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
      {
        name: "AWS(S3, CLoudfront)",
        color: "orange-text-gradient",
      },
    ],
    image: CleaningService,
    is_web: true,
    source_code_link: "https://dapper-biscotti-c1d188.netlify.app/",
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
    is_web: false,
    source_code_link: "https://github.com/makendym/FatEar",
  },
];

const resume = [
  {
    name: "Resume",
    description:
      "Please download my resume! Contact me for more information. I would love to connect!",
    image: ResumePic,
    source_code_link: Resume,
  },
];

export {services, technologies, educations, experiences, projects, resume};
