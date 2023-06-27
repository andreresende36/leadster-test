import { PropsFilterButton } from "@/types/filterTypes";

function FilterButton(props: PropsFilterButton) {
  return <button 
    className={`
      border-[1.5px] border-[#21465e] hover:border-[#007EFF] rounded-full
      px-5 py-2 w-fit h-fit whitespace-nowrap
      font-semibold hover:text-[#007EFF] transition duration-200
    `}>
      {props.text}
    </button>;
}

export default FilterButton;
