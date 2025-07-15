import React from "react";
import Link from "next/link";

export const FooterLogo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <img src="/images/logo.svg" alt="Block Convey" className="h-8 w-auto" />
    </Link>
  );
};
