import { SortTypes } from '@/types/sortTypes';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type ContextProps = {
  selectedSort: SortTypes;
  setSelectedSort: Dispatch<SetStateAction<SortTypes>>,
}

const SortContext = createContext<ContextProps>({ selectedSort: 'date', setSelectedSort: ():SortTypes => 'date' || 'title'});

export const SortProvider = ({ children }: { children: ReactNode }) =>   {
  const [selectedSort, setSelectedSort] = useState('date' as SortTypes);
  return(
    <SortContext.Provider value={{ selectedSort, setSelectedSort }}>
      {children}
    </SortContext.Provider>
  )
}

export const useSortContext = () => useContext(SortContext);