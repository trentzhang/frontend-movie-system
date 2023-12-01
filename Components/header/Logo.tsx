// Logo.jsx
import React from "react";
import Link from "next/link";

function Logo() {
  return (
    <span className="  sm:px-4 sm:py-2  text-2xl font-bold">
      <Link href={"/"}>🎥</Link>
    </span>
  );
}

export default Logo;
