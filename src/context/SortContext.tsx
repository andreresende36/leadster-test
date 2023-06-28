import { SortTypes } from '@/types/sortTypes';
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import videoData from "../../public/leadster-yt-database";

type ContextProps = {
  selectedSort: SortTypes;
  setSelectedSort: Dispatch<SetStateAction<SortTypes>>,
}

const SortContext = createContext<ContextProps>({ selectedSort: 'date', setSelectedSort: ():SortTypes => 'date' || 'title'});

export const SortProvider = ({ children }: { children: any }) =>   {
  const [selectedSort, setSelectedSort] = useState('date' as SortTypes);
  return(
    <SortContext.Provider value={{ selectedSort, setSelectedSort }}>
      {children}
    </SortContext.Provider>
  )
}

export const useSortContext = () => useContext(SortContext);