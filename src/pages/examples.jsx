import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useContext } from "react";
import { InfoContext } from "@/context/InfoProvider";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
export default function examples() {
  return (
    <div className="resume-examples">
      <Navbar />
      <h2 className="resume-examples-title">Exemplary Resumes</h2>
      <div className="resume-examples-list">
        <motion.div
          className="resume-example"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            opacity: {
              duration: 1,
              ease: "linear"
            },
            y:{
                duration: 1,
                
            }
          }}
        >
          <Image
            alt="Example Resume 1"
            width={250}
            height={400}
            src={`/temp11.jpg`}
          />
        </motion.div>
        <motion.div
          className="resume-example "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            opacity: {
              duration: 1,
              ease: "linear"
            },
            y:{
                duration: 1,
                
            },
            delay:1
          }}
        >
          <Image
            alt="Example Resume 2"
            width={250}
            height={400}
            src={`/temp12.jpg`}
          />
        </motion.div>
        <motion.div className="resume-example"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           opacity: {
             duration: 1,
             ease: "linear"
           },
           y:{
               duration: 1,
               
           }
         }}>
          <Image
            alt="Example Resume 3"
            width={250}
            height={400}
            src={`/temp13.jpg`}
          />
        </motion.div>
        <motion.div className="resume-example"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           opacity: {
             duration: 1,
             ease: "linear"
           },
           y:{
               duration: 1,
               
           },
           delay:1
         }}>
          <Image
            alt="Example Resume 4"
            width={250}
            height={400}
            src={`/temp14.jpg`}
          />
        </motion.div>
        <motion.div className="resume-example"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           opacity: {
             duration: 1,
             ease: "linear"
           },
           y:{
               duration: 1,
               
           }
         }}>
          <Image
            alt="Example Resume 5"
            width={250}
            height={400}
            src={`/temp15.jpg`}
          />
        </motion.div>
        <motion.div className="resume-example"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           opacity: {
             duration: 1,
             ease: "linear"
           },
           y:{
               duration: 1,
               
           },
           delay:1
         }}>
          <Image
            alt="Example Resume 6"
            width={250}
            height={400}
            src={`/temp21.jpg`}
          />
        </motion.div>
        <motion.div className="resume-example" initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           opacity: {
             duration: 1,
             ease: "linear"
           },
           y:{
               duration: 1,
               
           },
          
         }}>
          <Image
            alt="Example Resume 7"
            width={250}
            height={400}
            src={`/temp22.jpg`}
          />
        </motion.div>
        <motion.div className="resume-example"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           opacity: {
             duration: 1,
             ease: "linear"
           },
           y:{
               duration: 1,
               
           },
           delay:1
         }}>
          <Image
            alt="Example Resume 8"
            width={250}
            height={400}
            src={`/temp23.jpg`}
          />
        </motion.div>
        <motion.div className="resume-example"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           opacity: {
             duration: 1,
             ease: "linear"
           },
           y:{
               duration: 1,
               
           },
   
         }}>
          <Image
            alt="Example Resume 9"
            width={250}
            height={400}
            src={`/temp24.jpg`}
          />
        </motion.div>
        <motion.div className="resume-example"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           opacity: {
             duration: 1,
             ease: "linear"
           },
           y:{
               duration: 1,
               
           }
         }}>
          <Image
            alt="Example Resume 10"
            width={250}
            height={400}
            src={`/temp25.jpg`}
          />
        </motion.div>
      </div>
    </div>
  );
}
