import React from "react";
import { scrollToFeature } from "../../../utils/scroll";
import { useRouter } from "next/navigation";

export const NavLogo: React.FC = () => {
  const router = useRouter();

  const handleClick = (path: string) => {
    const [route, hash] = path.split("#");
    // Navigate to the page first
    router.push(route);
    // If there's a hash, scroll to the section
    if (hash) {
      scrollToFeature(hash);
    }
  };

  return (
    <div
      onClick={() => handleClick("/#main")}
      className="flex items-center cursor-pointer transition-opacity hover:opacity-90"
    >
      <img
        src="/images/logo.png"
        alt="Block Convey"
        className="h-16 w-32 object-contain"
        style={{
          transform: "scale(1.4)",
          transformOrigin: "left center",
        }}
      />
    </div>
  );
};
