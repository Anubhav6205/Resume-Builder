import Navbar from "@/components/Navbar";
import InfoProvider from "@/context/InfoProvider";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function index() {
  return (
    <div className="home-container">
      
      <Navbar />
      <div className="home-container-body">
        <div className="home-container-body-left">
          <h2>Make a Professional Resume for Free</h2>
          <h4>Free to use. Developed by <span style={{
            fontWeight:"bold"
          }}>Anubhav Gupta</span>.</h4>
          <p>
            Resume writing can be stressful, confusing, and time-consuming if
            you do it all on your own. With my Resume Maker, it’s quick,
            pain-free, and effective.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/template">Select a template</Link>
          </motion.button>
        </div>
        <div className="home-container-body-right">
          <motion.div className="home-container-body-right-image"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            opacity: { duration: 1, ease: "linear" },
            layout: { duration: 0.3 }

          }}
            >
            <Image
              width={500}
              height={500}
              src="/resume.png"
              alt="portfolio image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
