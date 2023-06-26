import FilterButton from './FilterButton';
import videoData from "../../public/leadster-yt-database.json";
import { useEffect, useState } from "react";
import { filters } from "@/types/filterTypes";

function Filters() {

  const [categories, setCategories] = useState<filters[]>([]);
  const [selection, setSelection] = useState<filters>('');

  useEffect(() => {
    const set = new Set();
    videoData.forEach((video) => set.add(video.snippet.category));
    setCategories(Array.from(set).sort() as filters[]);
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
