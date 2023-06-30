import FilterButton from './FilterButton';
import videoData from "../../public/leadster-yt-database";
import { useEffect, useState } from "react";
import { Filters } from "@/types/filterTypes";
import { compareCategories } from '@/utils/compare';

function Filters() {
  const [categories, setCategories] = useState<Filters[]>([]);

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(videoData.map((video) => video.category)));
    const sortedCategories = [...uniqueCategories, 'Todos'].sort(compareCategories) as Filters[];
    setCategories(sortedCategories);
  }, []);

  return (
    <div className={`
      flex gap-5 flex-wrap w-[70%]
      phone:justify-evenly phone:gap-2
      tablet-portrait:gap-3 tablet-portrait:justify-center
      tablet-landscape:
      desktop:
      big-desktop:
      `}>
      {categories.map((category) => (
        <FilterButton text={category} key={category} />
      ))}
    </div>
  );
}

export default Filters;
