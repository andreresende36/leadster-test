import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

type ContextProps = {
  selectedFilter: string;
  setSelectedFilter: Dispatch<SetStateAction<string>>,
}

const FilterContext = createContext<ContextProps>({ selectedFilter: '', setSelectedFilter: ():string => ''});

export const FilterProvider = ({ children }: { children: any }) =>   {
  const [selectedFilter, setSelectedFilter] = useState('');
  return(
    <FilterContext.Provider value={{ selectedFilter, setSelectedFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext);