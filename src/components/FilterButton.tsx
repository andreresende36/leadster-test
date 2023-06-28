import { useFilterContext } from "@/context/FilterContext";
import { useEffect, useState } from "react";

function FilterButton({text}: {text: string}) {
  const { selectedFilter, setSelectedFilter } = useFilterContext();
  const [active, setActive] = useState(false);

  useEffect(() => {
    selectedFilter === text ? setActive(true) : setActive(false);
  }, [selectedFilter, text]);

  const handleClick = () => {
    setActive(true);
    setSelectedFilter(text);
  }

  return <button 
    className={`
      btn normal-case rounded-full px-5 py-2 w-fit h-fit whitespace-nowrap transition duration-200
      border-[0.1rem] font-semibold text-[0.98rem]
      ${ active 
        ? 'bg-[#007EFF] border-[#007EFF] font-extrabold text-[#FFFFFF] hover:bg-[#007EFF] hover:text-[#FFFFFF] hover:border-[#007EFF]' 
        : 'hover:border-[#007EFF] hover:text-[#007EFF] border-[#21465e]'}
    `}
    onClick={handleClick}>
      {text}
    </button>;
}

export default FilterButton;
