// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
// import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import python from "./assets/techstack/python.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
// import projectImage4 from "./assets/projects/project4.jpg";
// import projectImage5 from "./assets/projects/project5.jpg";
// import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
   name: "Nirwan Rasyid Ridlo",
  tagline: "Programmer | Fullstack Developer | Tech Enthusiast",
  img: profile, // ganti dengan path/gambar profil kamu
  about: `Passionate about contributing to the advancement of technology, a Software Developer specializing in Frontend Development with over a year of experience in personal and team projects. Skilled in React.js, Next.js, Node.js, Laravel, and Android Studio, with focus on creating innovative, user-friendly, and high-performance solutions. Enthusiastic about leveraging AI tools to optimize workflows and eager to contribute in a dynamic environment.`
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/nirwan-rasyid-88b97a233/",
  github: "https://github.com/Syidwan",
  // twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/nirwan_rasyid/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Counter Staff & Electronics Repair Technician",
    Company: "Raffid Cellular",
    Location: "Bandung, Indonesia",
    Type: "Full Time",
    Duration: "Jan 2024 – Feb 2024",
  },
];


// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Informatics Engineering Student",
    Company: "UIN Sunan Gunung Djati Bandung",
    Location: "Bandung, Indonesia",
    Type: "Full Time",
    Duration: "Aug 2022 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  python: python,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Digital Invitation – Website",
    image: projectImage1, // ganti dengan path/gambar project kamu
    description: `Digital Invitation adalah website untuk membuat undangan pernikahan interaktif dengan animasi dan berbagai template yang dapat dikustomisasi.`,
    techstack: "React.js, Next.js, Tailwind CSS, Prisma, DaisyUI, Shadcn-UI, Framer Motion",
    previewLink: "https://insite-beta.vercel.app/",
    githubLink: "https://github.com/Alfthrpy/insite",
  },
    {
    title: "Project Assistant Web – Website",
    image: projectImage2,
    description: `Aplikasi manajemen proyek berbasis kanban untuk individu maupun tim, memungkinkan drag-and-drop task antar kolom untuk memantau progres secara real-time.`,
    techstack: "Next.js, React.js, Prisma ORM, Clerk-Provider",
    previewLink: "https://www.paw.my.id/",
    githubLink: "", 
  },
  {
    title: "AnonTweet – Mobile App",
    image: projectImage3, 
    description: `AnonTweet adalah platform media sosial anonim yang memungkinkan pengguna berbagi pemikiran, cerita, dan opini tanpa mengungkap identitas. `,
    techstack: "Flutter, Firebase",
    previewLink: "https://play.google.com/store/apps/details?id=com.ifuinbandung.anontweet", 
    githubLink: "https://github.com/Alfthrpy/AnonTweet",  
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "nirwanrasyidridlo@gmail.com",
  phone: "+62 895 2734 0406",
};
