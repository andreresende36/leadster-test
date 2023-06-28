import { Filters } from '@/types/filterTypes';
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

type ContextProps = {
  selectedFilter: Filters;
  setSelectedFilter: Dispatch<SetStateAction<Filters>>,
}

const FilterContext = createContext<ContextProps>({ selectedFilter: 'Todos', setSelectedFilter: ():Filters => 'Todos'});

export const FilterProvider = ({ children }: { children: any }) =>   {
  const [selectedFilter, setSelectedFilter] = useState('Todos' as Filters);
  return(
    <FilterContext.Provider value={{ selectedFilter, setSelectedFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext);