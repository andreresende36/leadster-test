// import PageContext from "@/context/PageContext";
import { useContext, useEffect, useState } from "react";
import { usePageContext } from "@/context/PageContext";

function PageButton({ pageNumber }: { pageNumber: number}) {
  const { selectedPage, setSelectedPage } = usePageContext();
  const [active, setActive] = useState(selectedPage === pageNumber);

  useEffect(() => { selectedPage === pageNumber ? setActive(true) : setActive(false) }, [selectedPage, pageNumber]);
  const handleClick = () => {
    setSelectedPage(pageNumber);
  }
  
  return (
    <button
      className={`btn bg-transparent font-semibold text-lg border-[1.5px] border-transparent w-9 min-h-0 h-9 hover:border-[#0875FF] rounded-md
      ${active 
        ? 'border-[3px] border-[#0875FF] text-[#0875FF] font-extrabold bg-[#e6f2ff]  hover:bg-[#e6f2ff]'
        : 'hover:border-[1.5px] hover:border-[#0875FF] hover:font-bold hover:bg-[#f9fcff]'}
      `}
      onClick={ handleClick }
    >{pageNumber}</button>
  );
}

export default PageButton;
