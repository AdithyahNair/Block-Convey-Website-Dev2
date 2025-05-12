import React from "react";
import logo from "../../../assets/logo.png";
import { scrollToFeature } from "../../../utils/scroll";
import { useNavigate } from "react-router-dom";

export const NavLogo: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    const [route, hash] = path.split("#");
    // Navigate to the page first
    navigate(route);
    // If there's a hash, scroll to the section
    if (hash) {
      scrollToFeature(hash);
    }
  };

  return (
    <div
      onClick={() => handleClick("/#main")}
      className="flex items-center cursor-pointer select-none"
      style={{ minWidth: 240 }}
    >
      <img
        src={logo}
        className="h-28 w-auto mr-4"
        style={{ maxHeight: 128 }}
      />
    </div>
  );
};
