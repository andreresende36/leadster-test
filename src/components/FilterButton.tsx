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
    btn normal-case rounded-full w-fit h-fit
    whitespace-nowrap transition duration-200 border-[0.1rem] 
    font-semibold text-[0.98rem] ${active ? activeStyles : inactiveStyles}
    phone:max-tablet-landscape:w-[7.2rem] phone:max-tablet-landscape:min-h-0 phone:max-tablet-landscape:h-8 phone:max-tablet-landscape:text-[0.75rem]
    min-[0px]:max-[320px]:w-[6.3rem] min-[0px]:max-[320px]:text-[0.68rem]
    tablet-portrait:max-tablet-landscape:w-36 tablet-portrait:max-tablet-landscape:h-10 tablet-portrait:px-5 tablet-portrait:py-2 tablet-portrait:text-[0.9rem]
    tablet-landscape:px-5 tablet-landscape:py-2 tablet-landscape:text-[0.98rem]
    desktop:px-6 desktop:py-4 desktop:text-[1.05rem]
    big-desktop:h-fit big-desktop:px-5 big-desktop:py-2 big-desktop:text-[0.98rem]
    `;

  return (
    <button className={buttonClass} onClick={handleClick}>
      {text}
    </button>
  );
}

export default FilterButton;
