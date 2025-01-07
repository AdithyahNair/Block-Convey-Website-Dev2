// import React, { useState, useEffect } from "react";
// import { AnimatePresence } from "framer-motion";
// import { DropdownTrigger } from "./dropdown/DropdownTrigger";
// import { DropdownContent } from "./dropdown/DropdownContent";
// import { useNavigate } from "react-router-dom";

// interface NavDropdownProps {
//   label: string;
//   items: Array<{
//     title: string;
//     description: string;
//     path?: string;
//   }>;
//   isOpen: boolean;
//   onToggle: () => void;
//   onItemClick?: (path?: string) => void;
// }

// export const NavDropdown: React.FC<NavDropdownProps> = ({
//   label,
//   items,
//   isOpen,
//   onToggle,
//   onItemClick,
// }) => {
//   const navigate = useNavigate();
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (isHovered !== isOpen) {
//       onToggle();
//     }
//   }, [isHovered]);

//   const handleClick = () => {
//     // Get the first item's path as the default navigation path
//     const defaultPath = items[0]?.path?.split("#")[0];
//     if (defaultPath) {
//       navigate(defaultPath);
//     }
//   };

//   return (
//     <div
//       className="static"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <DropdownTrigger label={label} isOpen={isOpen} onClick={handleClick} />
//       <AnimatePresence>
//         {isOpen && <DropdownContent items={items} onItemClick={onItemClick} />}
//       </AnimatePresence>
//     </div>
//   );
// };

import React from "react";
import { AnimatePresence } from "framer-motion";
import { DropdownTrigger } from "./dropdown/DropdownTrigger";
import { DropdownContent } from "./dropdown/DropdownContent";
import { useNavigate } from "react-router-dom";

interface NavDropdownProps {
  label: string;
  items: Array<{
    title: string;
    description: string;
    path?: string;
  }>;
  isOpen: boolean;
  onToggle: () => void;
  onItemClick?: (path?: string) => void;
  mainPath: string; // Add mainPath prop for direct navigation
}

export const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  items,
  isOpen,
  onToggle,
  onItemClick,
  mainPath,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onToggle(); // Toggle dropdown
    navigate(mainPath); // Navigate to main path
  };

  return (
    <div className="static">
      <DropdownTrigger label={label} isOpen={isOpen} onClick={handleClick} />
      <AnimatePresence>
        {isOpen && <DropdownContent items={items} onItemClick={onItemClick} />}
      </AnimatePresence>
    </div>
  );
};
