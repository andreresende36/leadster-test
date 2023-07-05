import FilterButton from './FilterButton';
import videoData from "../db/leadster-yt-database";
import { useEffect, useState } from "react";
import FilterTypes from "@/types/FilterTypes";
import { compareCategories } from '@/utils/compare';

function Filters() {
  const [categories, setCategories] = useState<FilterTypes[]>([]);

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(videoData.map((video) => video.category)));
    const sortedCategories = [...uniqueCategories, 'Todos'].sort(compareCategories) as FilterTypes[];
    setCategories(sortedCategories);
  }, []);

  return (
    <div className={`
      flex gap-3 flex-wrap w-[70%]
      phone:max-tablet-portrait:gap-2 phone:max-tablet-portrait:gap-x-6 phone:justify-center phone:max-tablet-portrait:w-fit
      desktop:w-[77%]
      big-desktop:justify-start big-desktop:gap-4
      `}>
      {categories.map((category) => (
        <FilterButton text={category} key={category} />
      ))}
    </div>
  );
}

export default Filters;
