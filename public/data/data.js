import dp from "../assets/dp.JPG";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaEye } from "react-icons/fa";
import tcslogo from "../assets/tcs.png";
import accenturelogo from "../assets/accenture.png";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { PiBookOpenThin } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa";
import Connect from "../assets/Connect.png";
import NikeStore from "../assets/NikeStore.png";
import UrlPerformanceTracker from "../assets/UrlPerformanceTracker.png";
import VisionPro from "../assets/VisionPro.png";
import Lr from "../assets/Lr.jpg";
import Er from "../assets/Er.jpg";
import Ps from "../assets/Ps.jpg";
import wr from "../assets/Water.png";
import NodeCr from "../assets/Node.png";
import DatabaseCr from "../assets/Database.png";
import JavaCr from "../assets/Java.png";
import LinuxCr from "../assets/Linux.png";
import LinkedinProfile from "../assets/LinkedinProfile.png";
import LeetcodeProfile from "../assets/LeetcodeProfile.png";
import GithubProfile from "../assets/GithubProfile.png";
import GFGProfile from "../assets/GFGProfile.png";
import InstaProfile from "../assets/InstaProfile.png";
import { SiTata } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import SoftwareDeveloperIcon from "../assets/SoftwareDeveloper.svg";
import AIIcon from "../assets/AI.svg";
import CodingIcon from "../assets/Coding.svg";
import WebDeveloperIcon from "../assets/WebDeveloper.svg";
export const profileData = {
  image: dp,
  name: "Mohit Verma",
  workingAt: "Innovating at TCS",
  companyLogo: <SiTata />,
  details: [
    {
      name: "Email",
      icon: <MdOutlineMailOutline />,
      link: "mailto:mohit41verma@gmail.com",
      comment: "mohit41verma@gmail.com",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mohit-verma-231b66257/",
      comment: "View",
      target: "_blank",
    },
    {
      name: "Resume",
      icon: <IoIosDocument />,
      link: "/assets/Resume.pdf",
      comment: "View / Download",
      download: true,
    },
    {
      name: "Location",
      icon: <IoLocationOutline />,
      link: "",
      comment: "Haryana,India",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/M0hitverma",
      comment: "View",
      target: "_blank",
    },
    {
      name: "leetcode",
      icon: <SiLeetcode />,
      link: "https://leetcode.com/u/Mr_mv/",
      comment: "Check it out",
      target: "_blank",
    },
    {
      name: "certificates",
      icon: <LiaCertificateSolid />,
      link: "https://drive.google.com/drive/folders/1g9-bw6EUO8r85o1Z9cYWbm1Z2opIq_BT?usp=share_link",
      comment: "Take a look",
      target: "_blank",
    },
    {
      name: "Whatsapp",
      icon: <FaWhatsapp />,
      link: "https://api.whatsapp.com/send?phone=919541930799&text=Hi,%20Mohit",
      comment: "Drop me a message",
    },
  ],
};

export const navbarData = [
  {
    id: 0,
    name: "About",
  },
  {
    id: 1,
    name: "Resume",
  },
  {
    id: 2,
    name: "Projects",
  },
  {
    id: 3,
    name: "Certificates",
  },
  {
    id: 4,
    name: "Contact",
  },
];
export const aboutData = {
  heading: "About me",
  about:
    "I am a highly skilled and motivated Software Engineer with a strong background in Information Technology. I graduated with distinction from J.C. Bose University of Science and Technology, YMCA, Faridabad, achieving a CGPA of 9.08. Currently, I am working as a <strong>System Engineer</strong> at  <strong>Tata Consultancy Services (TCS)</strong>, where I contribute to developing innovative solutions and delivering  high-quality results for global clients. </p> </br> <p> My technical expertise includes modern technologies like <strong>React.js</strong>, <strong>Next.js</strong>,  <strong>Node.js</strong>, and <strong>MongoDB</strong>, coupled with strong programming skills in <strong>C++</strong>,  <strong>Java</strong>, and <strong>Python</strong>. I have successfully designed and developed web applications that prioritize performance, scalability, and user experience. My ability to debug, optimize, and innovate has been critical in solving complex challenges and delivering seamless applications. From building server-side APIs to implementing responsive frontends, I thrive in environments that demand creativity and technical precision. </p></br><p> Outside of work, I am passionate about problem-solving, having ranked in the top 7% on  <a href='https://leetcode.com/Mr_mv/' target='_blank'>LeetCode's Global Leaderboard</a>, and solved over 900 algorithmic  challenges. I enjoy diving deep into AI/ML innovations, experimenting with cutting-edge technologies, and exploring opportunities to integrate them into real-world solutions. Additionally, I have a keen interest in traveling, as it allows  me to experience new cultures, expand my perspective, and stay inspired in both personal and professional endeavors.",
  interest: {
    heading: "My Interests",
    details: [
      {
        icon: WebDeveloperIcon,
        title: "Web Development",
        desc: "I am passionate about building dynamic, responsive websites using modern technologies like React.js, Node.js, Express.js and Mongodb ",
      },
      {
        icon: SoftwareDeveloperIcon,
        title: "Software Development",
        desc: "I enjoy developing efficient, scalable software solutions and have experience with languages like C++, Java and JavaScript.",
      },
      {
        icon: CodingIcon,
        title: "Problem Solving",
        desc: "I thrive on tackling complex problems and continuously improve my skills through platforms like Leetcode and competitive coding.",
      },
      {
        icon: AIIcon,
        title: "Enthusiastic About New Technologies & AI/ML",
        desc: "I am excited to explore new technologies and how AI/ML can transform industries, actively working on projects that combine these fields with real-world applications.",
      },
    ],
  },
  experience: {
    heading: "Experience",
    companies: [
      {
        name: "TCS",
        image: tcslogo,
        url: "https://www.tcs.com/",
      },
    ],
  },
  offers: {
    heading: "Received offers from",
    companies: [
      {
        name: "Accenture",
        image: accenturelogo,
        url: "https://www.accenture.com/in-en",
      },
    ],
  },
};
export const resumeData = {
  heading: "Resume",
  viewResume: {
    icon: <FaEye />,
    content: "View Resume",
    url: "/assets/Resume.pdf",
  },
  fulltimeDetails: {
    heading: "Full-Time Experience",
    icon: <PiSuitcaseSimpleFill />,
    details: [
      {
        id: 1,
        title: "TCS",
        role: "System Engineer",
        from: "January 2025",
        to: "Present",
        desc: "Engaged in the development and optimization of enterprise applications, ensuring high performance, scalability, and adherence to best coding practices. </br>Collaborating with cross-functional teams to design and implement efficient software solutions while continuously enhancing technical expertise in emerging technologies.",
      },
    ],
  },
  internshipDetails: {
    heading: "Intership",
    icon: <PiSuitcaseSimpleThin />,
    details: [
      {
        id: 1,
        title: "Ayuvya Ayurveda House Private LTD",
        role: "Frontend Developer Intern",
        from: "March 2024",
        to: "May 2024",
        desc: "Contributed to the design, development, and optimization of an E-commerce Web Application using Next.js, achieving a 94% performance score. </br> Enhanced the cart and checkout process, reducing cart abandonment by 15% and improving user experience.</br>Implemented error handling mechanisms, increasing application reliability and reducing downtime.</br>Created new web pages for handling abandoned orders, incorrect addresses, and verification through WhatsApp functionality, improving customer service and order accuracy.</br>Introduced multiple new features, enhancing platform usability and boosting user retention by 20%.",
      },
    ],
  },
  educationDetails: {
    heading: "Education",
    icon: <PiBookOpenThin />,
    details: [
      {
        id: 1,
        title:
          "J.C Bose University of Science and Technology, Formly YMCA, Faridabad",
        from: "2020",
        to: "2024",
        desc: "",
        course: "Bachelor of Technology(B.Tech)",
        stream: "Information Technology",
        score: "9.08 CPGA",
      },
      {
        id: 2,
        title: "Maharaja Agrasen Public School",
        from: "2018",
        to: "2019",
        desc: "",
        course: "Class XII",
        stream: "",
        score: "91%",
      },
      {
        id: 3,
        title: "Maharaja Agrasen Public School",
        from: "2016",
        to: "2017",
        desc: "",
        course: "Class X",
        stream: "",
        score: "77%",
      },
    ],
  },
  skill: {
    heading: "My Skills",
    icon: "",
    Languages: {
      heading: "Languages",
      list: [
        {
          id: 0,
          name: "C++",
          percentage: 95,
        },
        {
          id: 1,
          name: "Java",
          percentage: 85,
        },
        {
          id: 2,
          name: "Python",
          percentage: 60,
        },
        {
          id: 3,
          name: "JavaScript",
          percentage: 95,
        },
        {
          id: 4,
          name: "SQL",
          percentage: 70,
        },
      ],
    },
    framework: {
      heading: "Framework",
      icon: "",
      list: [
        {
          id: 0,
          name: "React.js",
          percentage: 90,
        },
        {
          id: 1,
          name: "Node.js",
          percentage: 85,
        },
        {
          id: 3,
          name: "Sprintboot",
          percentage: 80,
        },
        {
          id: 4,
          name: "TailwindCSS",
          percentage: 90,
        },
      ],
    },
    otherskills: ["Github", "Express.js", "JWT", "Postman", "HTML", "CSS"],
  },
  coursework: {
    heading: "Coursework",
    icon: <FaBookOpen />,
    subjects: [
      "Data Structures and Algorithms",
      "Object Orientation Programming",
      "Operating System",
      "Database Management System",
      "Computer Networking",
      "Machine Learning",
    ],
  },
};
export const projects = [
  {
    id: 1,
    title: "Url Performance Tracker",
    subTitle: "Web Development",
    image: UrlPerformanceTracker,
    projectUrl: "https://url-shortener-frontend-sigma.vercel.app",
  },
  {
    id: 2,
    title: "Connect-Social Media",
    subTitle: "Web Development",
    image: Connect,
    projectUrl: "https://connect-frontend-three.vercel.app",
  },
  {
    id: 3,
    title: "Nike Store",
    subTitle: "Web Developmemt",
    image: NikeStore,
    projectUrl: "https://nike-store-frontend-flame.vercel.app",
  },
  {
    id: 4,
    title: "Vision Pro Clone",
    subTitle: "Frontend Development",
    image: VisionPro,
    projectUrl: "https://m0hitverma.github.io/Apple-Vision-Pro/",
  },
];
export const certificateData = [
  {
    id: 1,
    title: "Linkedin",
    subTitle: "Node.js",
    image: NodeCr,
    projectUrl:
      "https://drive.google.com/drive/folders/1RXB8IYgb11gppHJj5owu50rs15lkTprE?usp=sharing",
  },
  {
    id: 2,
    title: "Linkedin",
    subTitle: "Java",
    image: JavaCr,
    projectUrl:
      "https://drive.google.com/drive/folders/1kgKDvc8cv7zcM8DfoIA5IvQzEuoL3j-2?usp=sharing",
  },
  {
    id: 3,
    title: "Linkedin",
    subTitle: "Linux",
    image: LinuxCr,
    projectUrl:
      "https://drive.google.com/drive/folders/1eN4fSpiLhTWLdUv18QXVr28BnhSBrRIJ?usp=sharing",
  },
  {
    id: 4,
    title: "Linkedin",
    subTitle: "Database",
    image: DatabaseCr,
    projectUrl:
      "https://drive.google.com/drive/folders/10VrkTUWStC_WW65vU1ixruTx0DCk4XZn?usp=sharing",
  },
  {
    id: 5,
    title: "Indian Institute of Technology Roorkee",
    subTitle: "Leadership and Team Effectiveness",
    image: Lr,
    projectUrl:
      "https://drive.google.com/file/d/1OVkY4fXfLoxN09YI5F5t-qMt1xM6B51b/view?usp=sharing",
  },
  {
    id: 6,
    title: "Indian Institute of Technology Kharagpur",
    subTitle: "Water Economics and Governance",
    image: wr,
    projectUrl:
      "https://drive.google.com/file/d/1bsFzrmt3sY3LNKxNK1JBqOyujBGVYCNN/view?usp=share_link",
  },
  {
    id: 7,
    title: "Indian Institute of Technology Madras",
    subTitle: "Entrepreneurship",
    image: Er,
    projectUrl:
      "https://drive.google.com/file/d/1rlRx4n98hwshhP_D6VzKf45eAjRqz2T5/view?usp=sharing",
  },
  {
    id: 8,
    title: "Indian Institute of Technology Guwahati ",
    subTitle: "Psychology of Stress, Health and Well-being",
    image: Ps,
    projectUrl:
      "https://drive.google.com/file/d/1AIpIg9hTXLFLMhAuTVVvObEglYoRBK2e/view?usp=share_link",
  },
];
export const contactData = {
  info: {
    heading: "Let's connect",
    url: "",
    icon: <MdEmail />,
  },
  socialMediaHandles: {
    heading: "Also View",
    list: [
      {
        id: 1,
        title: "Linkedin",
        subTitle: "Mohit-Verma",
        image: LinkedinProfile,
        projectUrl: "https://www.linkedin.com/in/mohit-verma-231b66257/",
      },
      {
        id: 2,
        title: "Leetcode",
        subTitle: "Mr_mv",
        image: LeetcodeProfile,
        projectUrl: "https://leetcode.com/u/Mr_mv/",
      },
      {
        id: 3,
        title: "Github",
        subTitle: "M0hitverma",
        image: GithubProfile,
        projectUrl: "https://github.com/M0hitverma",
      },
      {
        id: 4,
        title: "GeeksForGeeks",
        subTitle: "mohitverma41",
        image: GFGProfile,
        projectUrl: "https://www.geeksforgeeks.org/user/mohitverma41/",
      },
      {
        id: 5,
        title: "Instagram",
        subTitle: "mr._mv_",
        image: InstaProfile,
        projectUrl: "",
      },
    ],
  },
};
