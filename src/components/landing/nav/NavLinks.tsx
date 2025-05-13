import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { NavLinksProps } from "../../../types/blog";
import { ChevronDown } from "lucide-react";

export const NavLinks: React.FC<NavLinksProps> = ({ items }) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleClose = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  const handleItemClick = (path?: string) => {
    if (path) {
      navigate(path);
      handleClose();
    }
  };

  const ref = useClickOutside(handleClose);

  const handleToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-6 relative"
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            onClick={() => handleToggle(item.label)}
            className={`flex items-center py-2 px-2 text-gray-700 hover:text-purple-700 focus:outline-none font-medium ${
              openDropdown === item.label ? "text-purple-700" : ""
            }`}
          >
            <span className="text-base font-semibold whitespace-nowrap">
              {item.label}
            </span>
            <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
          </button>

          {openDropdown === item.label && (
            <div className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px] z-30">
              {item.subitems.map((subitem, i) => (
                <div
                  key={i}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleItemClick(subitem.path)}
                >
                  <span className="block text-gray-800 text-sm font-medium">
                    {subitem.title}
                  </span>
                  {subitem.description && (
                    <span className="block text-xs text-gray-500 mt-1">
                      {subitem.description}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
