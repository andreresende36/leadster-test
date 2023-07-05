import SortTypes from '@/types/SortTypes';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState, useMemo } from 'react';

type ContextProps = {
  selectedSort: SortTypes;
  setSelectedSort: Dispatch<SetStateAction<SortTypes>>,
}

const SortContext = createContext<ContextProps>({ selectedSort: 'date', setSelectedSort: ():SortTypes => 'date'});

export const SortProvider = ({ children }: { children: ReactNode }) =>   {
  const [selectedSort, setSelectedSort] = useState('date' as SortTypes);
  const contextValue = useMemo(() => ({ selectedSort, setSelectedSort }), [selectedSort, setSelectedSort]);
  return(
    <SortContext.Provider value={contextValue}>
      {children}
    </SortContext.Provider>
  )
}

export const useSortContext = () => useContext(SortContext);