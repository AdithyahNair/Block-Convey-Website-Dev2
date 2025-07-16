import React from "react";
import Link from "next/link";
import logo from "../../../assets/logo.svg";

export const FooterLogo: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 hover:opacity-90 transition-opacity"
    >
      <img
        src={logo}
        alt="Block Convey"
        className="h-16 w-40 object-cover object-center transform"
        style={{
          transform: "scale(1.2)",
          objectPosition: "center",
        }}
      />
    </Link>
  );
};
