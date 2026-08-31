interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full border px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm transition ${
            activeCategory === category
              ? "border-white bg-white text-black"
              : "border-white/10 text-neutral-500 hover:border-white/30 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}