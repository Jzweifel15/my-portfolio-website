"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {

const { ref, inView } = useInView();
const { setActiveSection } = useActiveSectionContext();

useEffect(() => {
  if (inView) {
    setActiveSection("About");
  }
}, [inView, setActiveSection]);

  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
                        initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.175 }}
                        id="about" ref={ ref }>
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
            Currently, I am an IT Support Technician II for Amazon and I'm looking to get into a{" "} 
            <span className="font-bold">software development/engineering position</span>. I have recently graduated with a{" "}
            <span className="font-bold">bachelor's degree in Computer Science</span>{" "} from Western Governors University. 
            I like to solve problems by buliding <span className="font-bold">full-stack web applications</span>, and all projects
            I've built have been from the ground up; from <span className="underline">requirements analysis and design</span>, 
            all the way to <span className="underline">testing and deployment</span>. Recently, I have found a knack for{" "}
            <span className="italic">artificial intelligence and machine learning</span> as I believe this is the future of 
            technology.
        </p>
        <p>
            <span className="italic">When I'm not coding or working</span>, I enjoy playing video games, watching tv shows and 
            movies, and working on my cars. Also, I enjoy spending time with my family and friends the most. On top of this, I 
            enjoy <span className="underline">learning new things</span>. Curretnly, I am trying to re-learn Spanish with the 
            idea of learning French next. 
        </p>
    </motion.section>
  );
}
