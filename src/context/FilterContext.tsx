import { Filters } from '@/types/filterTypes';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState, useMemo } from 'react';

type ContextProps = {
  selectedFilter: Filters;
  setSelectedFilter: Dispatch<SetStateAction<Filters>>,
}

const FilterContext = createContext<ContextProps>({ selectedFilter: 'Todos', setSelectedFilter: ():Filters => 'Todos'});

export const FilterProvider = ({ children }: { children: ReactNode }) =>   {
  const [selectedFilter, setSelectedFilter] = useState('Todos' as Filters);
  const contextValue = useMemo(() => ({ selectedFilter, setSelectedFilter }), [selectedFilter, setSelectedFilter]);

  return(
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext);