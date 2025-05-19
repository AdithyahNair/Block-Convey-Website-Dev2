import React, { useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { NavLinksProps } from "../../../types/blog";
import { ChevronDown } from "lucide-react";

export const NavLinks: React.FC<NavLinksProps> = ({ items }) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

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

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = (label: string) => {
    clearCloseTimeout();
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // Small delay to make interaction feel smoother
  };

  // Special product dropdown rendering for Credo AI style
  const renderProductDropdownContent = () => {
    const productItem = items.find((item) => item.label === "Product");
    if (!productItem) return null;

    return (
      <>
        {/* Left side - Platform */}
        <div className="w-1/2 p-6 border-r border-gray-100">
          <h3 className="text-lg font-medium mb-6">Platform</h3>
          <div className="flex items-start mb-4">
            <div className="mr-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-purple-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4.75a.75.75 0 00-.75.75v.75h1.5v-.75A.75.75 0 0012 4.75z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 18.25a.75.75 0 00.75-.75v-.75h-1.5v.75c0 .414.336.75.75.75z"
                    fill="currentColor"
                  />
                  <path
                    d="M18.5 12.75h.75a.75.75 0 000-1.5h-.75v1.5z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.5 11.25h-.75a.75.75 0 000 1.5h.75v-1.5z"
                    fill="currentColor"
                  />
                  <path
                    d="M6.08 6.08a.75.75 0 00-1.06 1.06l.53.53 1.06-1.06-.53-.53z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.92 17.92a.75.75 0 001.06-1.06l-.53-.53-1.06 1.06.53.53z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.92 6.08a.75.75 0 000 1.06l.53.53 1.06-1.06-.53-.53a.75.75 0 00-1.06 0z"
                    fill="currentColor"
                  />
                  <path
                    d="M6.08 17.92a.75.75 0 010-1.06l-.53-.53-1.06 1.06.53.53a.75.75 0 001.06 0z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 9a3 3 0 100 6 3 3 0 000-6zm-4.5 3a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-base font-semibold text-purple-900">
                AI Governance Platform
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                The AI governance platform that helps companies adopt, scale,
                and govern AI safely and effectively.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleItemClick("/solutions")}
            className="text-purple-700 text-sm font-medium flex items-center mt-4"
          >
            Learn more
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Right side - Features */}
        <div className="w-1/2 p-6">
          <h3 className="text-lg font-medium mb-6">Features</h3>
          <div className="grid grid-cols-1 gap-4">
            {productItem.subitems.map((subitem, idx) => (
              <div
                key={idx}
                className="flex items-start cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded-lg"
                onClick={() => handleItemClick(subitem.path)}
              >
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-purple-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d={
                          idx === 0
                            ? "M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 0v14h14V5H5z"
                            : "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 3a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 01-2 0v-4H7a1 1 0 110-2h4V8a1 1 0 011-1z"
                        }
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">
                    {subitem.title}
                  </h4>
                  {subitem.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {subitem.description.split(" - ")[0]}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
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
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
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

          {openDropdown === item.label && item.label === "Product" ? (
            <div
              id={`dropdown-${item.label}`}
              className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg p-0 min-w-[700px] z-30 flex"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {renderProductDropdownContent()}
            </div>
          ) : (
            openDropdown === item.label && (
              <div
                id={`dropdown-${item.label}`}
                className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px] z-30"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
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
            )
          )}
        </div>
      ))}
    </div>
  );
};
