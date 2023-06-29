import { useFilterContext } from "@/context/FilterContext";
import { useEffect, useState } from "react";
import { Filters } from "@/types/filterTypes";

function FilterButton({ text }: { text: Filters }) {
  const { selectedFilter, setSelectedFilter } = useFilterContext();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(selectedFilter === text);
  }, [selectedFilter, text]);

  const handleClick = () => {
    setActive(true);
    setSelectedFilter(text);
  };

  const activeStyles = `bg-[#007EFF] border-[#007EFF] font-extrabold text-[#FFFFFF] hover:bg-[#007EFF] hover:text-[#FFFFFF] hover:border-[#007EFF]`;
  const inactiveStyles = `hover:border-[#007EFF] hover:text-[#007EFF] border-[#21465e]`;
  const buttonClass = `btn normal-case rounded-full px-5 py-2 w-fit h-fit whitespace-nowrap transition duration-200 border-[0.1rem] font-semibold text-[0.98rem] ${active ? activeStyles : inactiveStyles}`;

  return (
    <button className={buttonClass} onClick={handleClick}>
      {text}
    </button>
  );
}

export default FilterButton;
