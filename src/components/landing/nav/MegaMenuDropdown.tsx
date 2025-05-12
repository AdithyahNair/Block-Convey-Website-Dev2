import React from "react";

interface Section {
  label: string;
  items: { title: string; description?: string }[];
}

interface MegaMenuDropdownProps {
  open: boolean;
  sections: Section[];
  activeSection?: string;
  onSectionHover?: (label: string) => void;
}

export const MegaMenuDropdown: React.FC<MegaMenuDropdownProps> = ({
  open,
  sections,
  activeSection,
  onSectionHover,
}) => {
  if (!open) return null;
  return (
    <div className="absolute left-0 top-full mt-3 w-[800px] bg-gray-50 rounded-2xl shadow-xl border border-gray-200 flex z-40 overflow-hidden">
      {sections.map((section, idx) => (
        <div
          key={section.label}
          className="flex-1 px-6 py-6 min-w-[220px] border-r last:border-r-0 border-gray-100 relative"
          onMouseEnter={() => onSectionHover && onSectionHover(section.label)}
        >
          <div className="absolute -top-6 left-0">
            {activeSection === section.label && (
              <div className="bg-purple-900 text-white px-4 py-1 rounded-b-lg text-xs font-bold tracking-wide shadow-md">
                {section.label}
              </div>
            )}
          </div>
          <div className="space-y-4">
            {section.items.map((item, i) => (
              <div key={i} className="mb-2">
                <div className="font-semibold text-gray-900 text-base leading-tight">{item.title}</div>
                {item.description && (
                  <div className="text-sm text-gray-600 leading-snug mt-1">{item.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}; 