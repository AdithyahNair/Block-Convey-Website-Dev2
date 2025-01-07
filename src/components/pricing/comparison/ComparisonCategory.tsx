import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ComparisonItem } from "./ComparisonItem";
import { styles } from "./styles";
import type { ComparisonCategory as CategoryType } from "../types";

interface ComparisonCategoryProps {
  category: CategoryType;
}

export const ComparisonCategory: React.FC<ComparisonCategoryProps> = ({
  category,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <tbody>
      <tr
        className={`${styles.category.row} bg-gray-100 hover:bg-gray-200 cursor-pointer`}
      >
        <td
          colSpan={4}
          className={`${styles.category.cell} py-4`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">
              {category.category}
            </span>
            <ChevronDown
              className={`${styles.category.icon} ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </td>
      </tr>
      {isExpanded &&
        category.items.map((item) => (
          <ComparisonItem key={item.name} item={item} />
        ))}
    </tbody>
  );
};
