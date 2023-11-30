import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import DogCatImg from "@/public/dog-cat-recognition-img.png";
import ChatbotImg from "@/public/pandorabots-img.png";
import FitnessTrackerImg from "@/public/fitness-tracker-img.png";
import TopspeedImg from "@/public/topSpeed-img.png";

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
    title: "Eastland-Fairfield Technical Schools Student",
    location: "Groveport, OH",
    description:
      "I attended the Eastland-Fairfield Career Technical Schools my last two years of high school and graduated from the " +
      "Programming and Software Development program. This is where journey to code and build programs began.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2018",
  },
  {
    title: "Full-stack Software Engineering Trainee",
    location: "Remote",
    description:
      "I went through rigorous training from Flatiron Schools to learn how to develop and deploy full-stack web applications.",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "Western Governors University Student",
    location: "Columbus, OH",
    description:
      "I attended and graduated from Western Governors University with a bachelor's degree in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "IT Support Technician II",
    location: "Etna, OH",
    description:
      "I have worked in IT for Amazon full-time as I was going through college and full-stack software engineer training. " +
      "Now, with my degree and skills, I am looking for full-time software development engineer opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "Dog-Cat Image Recognition",
    description:
      "An image recognition program that allows users to submit a photo of a dog or a cat, and the ML model will predict what it is.",
    tags: ["Python", "Tensorflow", "AI/ML", "Neural Networks"],
    imageUrl: DogCatImg,
  },
  {
    title: "Career Chatbot",
    description:
      "A chatbot that asks a series of questions to determine a sufficient computing job based on a user's given answer choices.",
    tags: ["Pandorabots", "AIML", "Supervised Learning"],
    imageUrl: ChatbotImg,
  },
  {
    title: "Fitness Tracker",
    description:
      "A full-stack web application for the gym junkies that allows for tracking workout and meal schedules, as well as traking your BMI.",
    tags: ["React/Redux", "Ruby on Rails", "SQLite", "Graph.js"],
    imageUrl: FitnessTrackerImg,
  },
  {
    title: "Top Speed",
    description:
      "A Single-page web app (SPA) that allows a user to search for their favorite cars and add them to their \"garage\".",
    tags: ["HTML5/CSS3", "Vanilla JS", "Ruby on Rails", "SQLite", "SPA"],
    imageUrl: TopspeedImg,
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
  "PostgreSQL",
  "MS SQL Server",
  "MongoDB",
  "Python",
  "Ruby",
  "Ruby on Rails",
  "Java",
  "C#",
  ".NET Core",
  "Git",
  "Cloud",
] as const;