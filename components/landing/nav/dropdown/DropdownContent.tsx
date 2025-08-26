import React from "react";
import { DropdownItem } from "./DropdownItem";

interface DropdownItem {
  title: string;
  description: string;
  path?: string;
  submenu?: Array<{
    title: string;
    description: string;
    path?: string;
  }>;
  isMainProduct?: boolean;
}

interface DropdownContentProps {
  items: DropdownItem[];
  onItemClick?: (path?: string) => void;
  dropdownLabel?: string;
}

export const DropdownContent: React.FC<DropdownContentProps> = ({
  items,
  onItemClick,
  dropdownLabel,
}) => {
  // Special layout for Product dropdown
  if (dropdownLabel === "Product") {
    const mainProduct = items.find((item) => item.isMainProduct);
    const features = items.find((item) => item.title === "Features");

    return (
      <div className="absolute left-0 right-0 w-full pt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#488B8F] border border-brand/20 rounded-xl shadow-xl p-6">
            <div className="grid grid-cols-2 gap-x-8">
              {/* Left Column - Main Product */}
              {mainProduct && (
                <div className="col-span-1">
                  <DropdownItem
                    item={mainProduct}
                    onSelect={onItemClick}
                    isMainProduct={true}
                  />
                </div>
              )}

              {/* Right Column - Features */}
              {features && (
                <div className="col-span-1">
                  <div className="space-y-4">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {features.title}
                      </h3>
                      <p className="text-sm text-brand-light">
                        {features.description}
                      </p>
                    </div>
                    {features.submenu?.map((subItem) => (
                      <DropdownItem
                        key={subItem.title}
                        item={subItem}
                        onSelect={onItemClick}
                        isFeature={true}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default layout for other dropdowns
  return (
    <div className="absolute left-0 right-0 w-full pt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#488B8F] border border-brand/20 rounded-xl shadow-xl p-6">
          <div
            className={`grid gap-x-8 gap-y-6 ${
              items.length === 1 ? "grid-cols-1" : "grid-cols-2"
            }`}
          >
            {items.map((item) => (
              <DropdownItem
                key={item.title}
                item={item}
                onSelect={onItemClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
