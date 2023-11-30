import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  }
] as const;

export const experiencesData = [
  {
    title: "IT Support Technician II",
    location: "Etna, OH",
    description:
      "I have worked in IT for Amazon full-time as I was going through college and full-stack software engineer training. " +
      "Now, with my degree and skills, I am looking for full-time software development engineer opportunities.",
    icon: React.createElement(FaReact),
    date: "2019 - present",
  },
  {
    title: "Full-stack Software Engineering Trainee",
    location: "Remote",
    description:
      "I trained as a full-stack software engineer trainee at Flatiron Schools.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Graduated College",
    location: "Columbus, OH",
    description:
      "I graduated from Western Governors University with a bachelor's degree in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  }
] as const;

export const projectsData = [
  {
    title: "Dog-Cat Image Recognition",
    description:
      "An image recognition program that allows users to submit a photo of a dog or a cat, and the ML model will predict what it is.",
    tags: ["Python", "Tensorflow", "AI/ML", "Neural Networks"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Career Chatbot",
    description:
      "A chatbot that asks a series of questions to determine a sufficient computing job based on a user's given answer choices.",
    tags: ["Pandorabots", "AIML", "Supervised Learning"],
    imageUrl: rmtdevImg,
  },
  {
    title: "TSP Shortest Path",
    description:
      "A program that uses the Nearest Neighbor algorithm to determine the shortest path from one node to another based on a set of requirements.",
    tags: ["Python", "Nearest Neighbor", "Algorithms", "Data Structures", "Traveling Salesman Problem"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Fitness Tracker",
    description:
      "A full-stack web application for the gym junkies that allows for tracking workout and meal schedules, as well as traking your BMI.",
    tags: ["React/Redux", "Ruby on Rails", "SQLite", "Graph.js"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Apollo",
  "PostgreSQL",
  "MS SQL Server",
  "MongoDB",
  "Python",
  "C#",
  ".NET Core",
  "Java",
  "Spring",
  "Azure",
  "AWS",
  "Git",
] as const;