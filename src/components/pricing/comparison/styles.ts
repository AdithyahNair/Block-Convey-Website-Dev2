export const styles = {
  table: "w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden",
  header: {
    row: "border-b border-brand-light/20 bg-white/95 sticky top-0 z-10",
    cell: {
      base: "py-6 px-4 overflow-hidden text-ellipsis align-bottom",
      feature: "text-left text-gray-700 font-medium",
      plan: "text-center",
      silver: "text-brand border-b-2 border-brand-light",
      gold: "text-brand border-b-2 border-brand",
      platinum: "text-brand-dark border-b-2 border-brand-dark",
    },
  },
  category: {
    row: "border-b border-brand-light/10 transition-colors duration-150",
    cell: "py-4 px-4",
    content: "flex items-center justify-between",
    title: "font-semibold text-gray-800",
    icon: "h-5 w-5 text-gray-400 transition-transform duration-200 ease-in-out",
  },
  item: {
    cell: {
      base: "py-4 px-4 overflow-hidden text-ellipsis",
      feature: "text-gray-600",
      value: "text-center",
      silver: "text-gray-600",
      gold: "text-brand",
      platinum: "text-brand-dark",
    },
    check: {
      silver: "text-brand-light",
      gold: "text-brand",
      platinum: "text-brand-dark",
    },
  },
};