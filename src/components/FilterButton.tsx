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
  const buttonClass = `
    btn normal-case rounded-full
    whitespace-nowrap transition duration-200 border-[0.1rem] 
    font-semibold text-[0.98rem] ${active ? activeStyles : inactiveStyles}
    phone:w-[7.2rem] phone:min-h-0 phone:h-8 phone:text-[0.75rem]
    min-[0px]:max-[320px]:w-[6.3rem] min-[0px]:max-[320px]:text-[0.68rem]
    tablet-portrait:w-36 tablet-portrait:h-10 tablet-portrait:px-5 tablet-portrait:py-2 tablet-portrait:text-[0.9rem]
    tablet-landscape:w fit tablet-landscape:h-fit tablet-landscape:px-5 tablet-landscape:py-2 tablet-landscape:text-[0.98rem]
    desktop:w-fit desktop:h-fit desktop:px-5 desktop:py-2 desktop:text-[0.98rem]
    big-desktop:w-fit big-desktop:h-fit big-desktop:px-5 big-desktop:py-2 big-desktop:text-[0.98rem]
    `;

  return (
    <button className={buttonClass} onClick={handleClick}>
      {text}
    </button>
  );
}

export default FilterButton;
