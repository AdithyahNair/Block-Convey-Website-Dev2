import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface DropdownTriggerProps {
  label: string;
  isOpen: boolean;
  onClick: () => void;
}

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  label,
  isOpen,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-1.5 text-gray-600 hover:text-brand font-medium py-2 px-3 rounded-lg transition-all"
    >
      {label}
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown
          className={`h-4 w-4 transition-colors ${
            isOpen ? "text-brand" : ""
          } group-hover:text-brand`}
        />
      </motion.div>
    </button>
  );
};
