import React from "react";
import Link from "next/link";

export const NavLogo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <img
        src="/images/logo.png"
        alt="Block Convey"
        className="h-16 w-32 object-contain"
        style={{
          transform: "scale(1.4)",
          transformOrigin: "left center",
        }}
      />
    </Link>
  );
};
