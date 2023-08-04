import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-container-left">
        <Link href="/"><Image height={45} width={100} src="/logo.png " alt="logo" /></Link>
      </div>
      <div className="navbar-container-right">
        <div><Link href="/examples" style={{
          textDecoration:"none",
          color:"black"
        }}>Resume Examples</Link></div>
      </div>
    </div>
  );
}
