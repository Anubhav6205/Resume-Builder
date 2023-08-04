import React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion"
export default function Navbar() {
  return (
    <div className="navbar-container">
      <motion.div className="navbar-container-left"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}>
        <Link href="/"><Image height={70} width={70} src="/logo.png" alt="logo" /></Link>
      </motion.div>
      <div className="navbar-container-right">
        <div><Link href="/examples" style={{
          textDecoration:"none",
          color:"black"
        }}>Resume Examples</Link></div>
      </div>
    </div>
  );
}
