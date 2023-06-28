import { useSortContext } from "@/context/SortContext";
import { SortTypes } from "@/types/sortTypes";
import { ChangeEventHandler } from "react";

function Sorter() {
  const { selectedSort, setSelectedSort } = useSortContext();
  const handleChange = (event: any) => {
    setSelectedSort(event.target.value);
  }

  return (
    <div className="w-[30%] flex justify-end items-center gap-4">
      <span className="font-bold">Ordenar por</span>
      <select
        name="sort"
        id="sort"
        className={`font-bold border-[0.1rem]
        border-[#21465e] p-2 rounded-lg`}
        onChange={ handleChange }
      >
        <option
          value="date"
          className={ selectedSort === "date" ? 'font-bold' : '' }
        >Data da publicação</option>
        <option
          value="title"
          className={ selectedSort === "title" ? 'font-bold' : '' }
          >Título</option>
      </select>
    </div>
  );
}

export default Sorter;
