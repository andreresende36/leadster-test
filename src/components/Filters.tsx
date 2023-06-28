import FilterButton from './FilterButton';
import videoData from "../../public/leadster-yt-database";
import { useEffect, useState } from "react";
import { Filters } from "@/types/filterTypes";

function Filters() {

  const [categories, setCategories] = useState<Filters[]>([]);

  useEffect(() => {
    const set = new Set();
    videoData.forEach((video) => set.add(video.category));
    set.add('Todos');
    setCategories(Array.from(set).sort() as Filters[]);
  }, []);
  return (
    <div className='w-[70%] flex gap-5 flex-wrap'>
      {categories.map((category) => (
        <FilterButton text={category} key={category} />
      ))}
    </div>
  );
}

export default Filters;
