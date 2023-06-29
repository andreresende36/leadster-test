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
    <div className="w-[70%] flex gap-5 flex-wrap">
      {categories.map((category) => (
        <FilterButton text={category} key={category} />
      ))}
    </div>
  );
}

export default Filters;
