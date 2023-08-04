import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useContext } from "react";
import { InfoContext } from "@/context/InfoProvider";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion"

export default function Template() {
  const { setTemplate } = useContext(InfoContext);
  const [previewImg, setPreviewImg] = useState("1");

  const handleChangeColor = (color, num="3") => {
    document.documentElement.style.setProperty("--theme-color", color);
    setPreviewImg(num);
  };

  return (
    <>
      <div className="template-page-container">
        <Navbar />
        <div className="template-page-container-theme">
          <h2 className="template-page-container-theme-title">
            What do you want your <span style={{
              fontWeight:"1000",
              
            }}>resume</span> to look like?
          </h2>
          <p className="template-page-container-theme-subtitle">
            Select a theme and a template to get started.
          </p>
          <div className="template-page-container-theme-list">
            <motion.button
              className="red"
              onClick={() => handleChangeColor("#fe151524", "1")}
              initial={{opacity:0,x:-20}}
              animate={{opacity:1,x:0}}
              transition={{
                opacity: { duration: 1, ease: "linear" },
                layout: { duration: 0.3 }
    
              }}


            ></motion.button>
            <motion.button
             initial={{opacity:0,x:-20}}
             animate={{opacity:1,x:0}}
             transition={{
               opacity: { duration: 1, ease: "linear" },
               layout: { duration: 0.3 },
               delay:.2
   
             }}

            
              className="green"
              onClick={() => handleChangeColor("#abd66268", "2")}
            ></motion.button>
            <motion.button
            initial={{opacity:0,x:-20}}
            animate={{opacity:1,x:0}}
            transition={{
              opacity: { duration: 1, ease: "linear" },
              layout: { duration: 0.3 },
              delay:.3
  
            }}

              className="blue"
              onClick={() => handleChangeColor("#4a4adc55", "3")}
            ></motion.button>
            <motion.button
            initial={{opacity:0,x:-20}}
            animate={{opacity:1,x:0}}
            transition={{
              opacity: { duration: 1, ease: "linear" },
              layout: { duration: 0.3 },
              delay:.4
  
            }}

              className="yellow"
              onClick={() => handleChangeColor("#eed058b2", "4")}
            ></motion.button>

            <motion.button
            initial={{opacity:0,x:-20}}
            animate={{opacity:1,x:0}}
            transition={{
              opacity: { duration: 1, ease: "linear" },
              layout: { duration: 0.3 },
              delay:.5
  
            }}

              className="grey"
              onClick={() => handleChangeColor("#e0e0e0", "5")}
            ></motion.button>
          </div>

          <div className="template-page-container-title"></div>

          <div className="template-page-container-buttons">
            <button>
              <Link href="/information" onClick={() => setTemplate("first")}>
                <Image
                  alt="template 1"
                  width={250}
                  height={400}
                  src={`/temp1${previewImg}.jpg`}
                ></Image>
              </Link>
            </button>
            <button>
              <Link href="/information" onClick={() => setTemplate("second")}>
                <Image
                  alt="template 1"
                  width={250}
                  height={400}
                  src={`/temp2${previewImg}.jpg`}
                ></Image>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
