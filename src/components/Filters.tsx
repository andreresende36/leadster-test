import FilterButton from './FilterButton';
import videoData from "../../public/leadster-yt-database";
import { useEffect, useState } from "react";
import { Filters } from "@/types/filterTypes";

function Filters() {

  const [categories, setCategories] = useState<Filters[]>([]);
  const [selection, setSelection] = useState<Filters>('');

  useEffect(() => {
    const set = new Set();
    videoData.forEach((video) => set.add(video.snippet.category));
    setCategories(Array.from(set).sort() as Filters[]);
  }, []);
  return (
    <div className='w-[70%] flex gap-5'>
      {categories.map((category) => (
        <FilterButton text={category} key={category} />
      ))}
    </div>
  );
}

export default Filters;
