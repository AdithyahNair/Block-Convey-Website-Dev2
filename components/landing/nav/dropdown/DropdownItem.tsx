import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { scrollToFeature } from "../../../../utils/scroll";

interface DropdownItemProps {
  item: {
    title: string;
    description: string;
    path?: string;
    submenu?: Array<{
      title: string;
      description: string;
      path?: string;
    }>;
  };
  onSelect?: (path?: string) => void;
  isMainProduct?: boolean;
  isFeature?: boolean;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  item,
  onSelect,
  isMainProduct = false,
  isFeature = false,
}) => {
  const router = useRouter();
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleClick = () => {
    if (item.submenu) {
      setShowSubmenu(!showSubmenu);
      return;
    }

    if (item.path) {
      const [path, hash] = item.path.split("#");

      // Check if we're already on the target page
      const currentPath = window.location.pathname;
      const isCurrentPage = currentPath === path;

      if (isCurrentPage && hash) {
        // If we're on the same page, scroll immediately
        scrollToFeature(hash);
      } else {
        // Navigate to the page first
        router.push(path);

        // If there's a hash, scroll to the section after navigation
        if (hash) {
          // Use a longer delay for cross-page navigation
          setTimeout(() => {
            scrollToFeature(hash);
          }, 500);
        }
      }

      // Close the dropdown
      onSelect?.(path);
    }
  };

  const handleSubmenuItemClick = (path?: string) => {
    if (path) {
      const [route, hash] = path.split("#");

      // Check if we're already on the target page
      const currentPath = window.location.pathname;
      const isCurrentPage = currentPath === route;

      if (isCurrentPage && hash) {
        // If we're on the same page, scroll immediately
        scrollToFeature(hash);
      } else {
        // Navigate to the page first
        router.push(route);

        // If there's a hash, scroll to the section after navigation
        if (hash) {
          // Use a longer delay for cross-page navigation
          setTimeout(() => {
            scrollToFeature(hash);
          }, 500);
        }
      }

      // Close the dropdown
      onSelect?.(route);
    }
  };

  // Main Product styling (left column)
  if (isMainProduct) {
    return (
      <div className="w-full h-full">
        <button
          onClick={handleClick}
          className="w-full group flex flex-col p-6 rounded-lg hover:bg-brand transition-colors text-left h-full justify-between"
          role="menuitem"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">P</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white group-hover:text-brand-lightest">
                  {item.title}
                </span>
                <ArrowRight className="h-6 w-6 text-brand-light group-hover:text-brand-lightest" />
              </div>
            </div>
            <p className="text-lg text-brand-light group-hover:text-white/90 leading-relaxed mb-4">
              {item.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-brand-light group-hover:text-white/80">
                <span className="w-2 h-2 bg-brand-light rounded-full"></span>
                <span>AI Risk Assessment & Monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-light group-hover:text-white/80">
                <span className="w-2 h-2 bg-brand-light rounded-full"></span>
                <span>Compliance Automation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-light group-hover:text-white/80">
                <span className="w-2 h-2 bg-brand-light rounded-full"></span>
                <span>Real-time Governance</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <span className="text-sm text-brand-light group-hover:text-white/80">
              Learn more →
            </span>
          </div>
        </button>
      </div>
    );
  }

  // Feature styling (right column)
  if (isFeature) {
    return (
      <div className="w-full">
        <button
          onClick={handleClick}
          className="w-full group flex flex-col p-4 rounded-lg hover:bg-brand transition-colors text-left"
          role="menuitem"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-semibold text-white group-hover:text-brand-lightest">
              {item.title}
            </span>
            <ArrowRight className="h-5 w-5 text-brand-light group-hover:text-brand-lightest" />
          </div>
          <p className="text-sm text-brand-light group-hover:text-white/90 leading-relaxed">
            {item.description}
          </p>
        </button>
      </div>
    );
  }

  // Default styling for other items
  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className="w-full group flex flex-col p-4 rounded-lg hover:bg-brand transition-colors text-left"
        role="menuitem"
      >
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-white group-hover:text-brand-lightest">
              {item.title}
            </span>
            {!item.submenu && (
              <ArrowRight className="h-4 w-4 text-brand-light group-hover:text-brand-lightest" />
            )}
          </div>
          {item.submenu && (
            <ChevronDown
              className={`h-4 w-4 text-brand-light group-hover:text-brand-lightest transition-transform ${
                showSubmenu ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
        <p className="text-sm text-brand-light group-hover:text-white/90">
          {item.description}
        </p>
      </button>

      {item.submenu && showSubmenu && (
        <div className="ml-4 mt-2 border-l-2 border-brand-light/30 pl-4">
          {item.submenu.map((subItem) => (
            <button
              key={subItem.title}
              onClick={() => handleSubmenuItemClick(subItem.path)}
              className="w-full group flex flex-col p-3 rounded-lg hover:bg-brand transition-colors text-left mb-2"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-white group-hover:text-brand-lightest">
                  {subItem.title}
                </span>
                <ArrowRight className="h-3 w-3 text-brand-light group-hover:text-brand-lightest" />
              </div>
              <p className="text-xs text-brand-light group-hover:text-white/90">
                {subItem.description}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
