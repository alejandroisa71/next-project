import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/services">Services</Link>
      </li>
    </ul>
  );
};

export default Navigation;
