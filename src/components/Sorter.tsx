import { useSortContext } from "@/context/SortContext";
import SortTypes from "@/types/SortTypes";

function Sorter() {
  const { selectedSort, setSelectedSort } = useSortContext();

  const handleChange = (event:  React.ChangeEvent<HTMLSelectElement>) => setSelectedSort(event.target.value as SortTypes);

  return (
    <div className={`
      w-[30%] flex justify-end items-center gap-4
      phone:max-desktop:w-fit phone:max-tablet-portrait:mt-3 phone:max-big-desktop:flex-col phone:max-big-desktop:gap-0
      tablet-portrait:w-[30%] tablet-portrait:h-full 
      tablet-landscape:w-[30%]
      desktop:w-[15%]
      big-desktop:w-[30%]
      `}>
      
      <span className="font-bold phone:max-tablet-portrait:text-sm">Ordenar por</span>
      <select
        name="sort"
        id="sort"
        className="font-bold border-[0.1rem] border-[#21465e] p-2 rounded-lg phone:max-tablet-portrait:scale-75 phone:max-tablet-portrait:w-56"
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
