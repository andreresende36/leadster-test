import { useSortContext } from "@/context/SortContext";
import { SortTypes } from "@/types/sortTypes";

function Sorter() {
  const { selectedSort, setSelectedSort } = useSortContext();

  const handleChange = (event:  React.ChangeEvent<HTMLSelectElement>) => setSelectedSort(event.target.value as SortTypes);

  return (
    <div className={`
      w-[30%] flex justify-end items-center gap-4
      phone:w-full phone:mt-3 phone:flex-col phone:gap-0
      tablet-portrait:w-[30%]
      tablet-landscape:first-letter:w-[30%]
      desktop:w-[30%]
      big-desktop:w-[30%]
      `}>
      
      <span className="font-bold phone:text-sm">Ordenar por</span>
      <select
        name="sort"
        id="sort"
        className="font-bold border-[0.1rem] border-[#21465e] p-2 rounded-lg phone:scale-75 phone:w-56"
        onChange={handleChange}
      >
        <option value="date" className={`phone:text-sm phone:text-center ${selectedSort === "date" ? "font-bold" : ""}`}>
          Data da publicação
        </option>
        <option value="title" className={`phone:text-sm phone:text-center ${selectedSort === "title" ? "font-bold" : ""}`}>
          Título
        </option>
      </select>
    </div>
  );
}

export default Sorter;
