import FilterTypes from '@/types/FilterTypes';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState, useMemo } from 'react';

type ContextProps = {
  selectedFilter: FilterTypes;
  setSelectedFilter: Dispatch<SetStateAction<FilterTypes>>,
}

const FilterContext = createContext<ContextProps>({ selectedFilter: 'Todos', setSelectedFilter: ():FilterTypes => 'Todos'});

export const FilterProvider = ({ children }: { children: ReactNode }) =>   {
  const [selectedFilter, setSelectedFilter] = useState('Todos' as FilterTypes);
  const contextValue = useMemo(() => ({ selectedFilter, setSelectedFilter }), [selectedFilter, setSelectedFilter]);

  return(
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext);