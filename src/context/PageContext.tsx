import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState, useMemo } from 'react';

type ContextProps = {
  selectedPage: number;
  setSelectedPage: Dispatch<SetStateAction<number>>,
}

const PageContext = createContext<ContextProps>({ selectedPage: 1, setSelectedPage: ():number => 0});

export const PageProvider = ({ children }: { children: ReactNode }) =>   {
  const [selectedPage, setSelectedPage] = useState(1);
  const contextValue = useMemo(() => ({ selectedPage, setSelectedPage }), [selectedPage, setSelectedPage]);
  return(
    <PageContext.Provider value={contextValue}>
      {children}
    </PageContext.Provider>
  )
}

export const usePageContext = () => useContext(PageContext);