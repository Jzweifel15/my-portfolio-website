"use client";

import Image from 'next/image';
import React from 'react';
import Me from "@/public/Me.jpeg";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "tween", duration: 0.2 }}>
                    <Image src={ Me } alt="A picture of myself." width="192" height="192" 
                        quality="95" priority={ true } 
                        className="h-24 w-24 rounded-full object-cover border-[0.35rem] 
                        border-white shadow-xl"/>
                </motion.div>
                <motion.span className="absolute bottom-0 right-0 text-4xl"
                                initial={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 125, 
                                    delay: 0.1, 
                                    duration: 0.7
                                }}>
                    👋
                </motion.span>
            </div>
        </div>
        <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
            <span className="font-bold">Hello, I'm Justin.</span> I'm an{" "}
            <span className="font-bold">aspiring software development engineer</span>. 
            I enjoy buliding <span className="italic"> full-stack sites & apps</span>. 
        </p>
    </section>
  );
}
