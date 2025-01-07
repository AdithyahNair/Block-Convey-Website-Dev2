import React from "react";
import { motion } from "framer-motion";
import { DropdownItem } from "./DropdownItem";

interface DropdownItem {
  title: string;
  description: string;
  path?: string;
}

interface DropdownContentProps {
  items: DropdownItem[];
  onItemClick?: (path?: string) => void;
}

export const DropdownContent: React.FC<DropdownContentProps> = ({
  items,
  onItemClick,
}) => {
  return (
    <motion.div
      className="absolute left-0 right-0 w-full pt-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="bg-[#488B8F] border border-brand/20 rounded-xl shadow-xl p-6"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <DropdownItem item={item} onSelect={onItemClick} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
