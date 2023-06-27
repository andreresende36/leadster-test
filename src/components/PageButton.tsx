// import PageContext from "@/context/PageContext";
import { useEffect, useState } from "react";
import { usePageContext } from "@/context/PageContext";

function PageButton({ pageNumber }: { pageNumber: number}) {
  const { selectedPage, setSelectedPage } = usePageContext();
  const [active, setActive] = useState(false);

  useEffect(() => { selectedPage === pageNumber ? setActive(true) : setActive(false) }, [selectedPage, pageNumber]);
  const handleClick = () => {
    setSelectedPage(pageNumber);
  }
  
  return (
    <button
      className={`btn text-lg w-9 min-h-0 h-9 rounded-md
      ${active
        ? 'border-[3px] border-[#0875FF] text-[#0875FF] font-bold bg-[#e6f2ff] hover:bg-[#e6f2ff]'
        : 'border-[1.5px] font-semibold bg-transparent hover:border-[1.5px] hover:border-[#0875FF] hover:text-[#0875FF] hover:font-bold hover:bg-[#f9fcff] border-transparent'}
      `}
      onClick={ handleClick }
    >{pageNumber}</button>
  );
}

export default PageButton;
