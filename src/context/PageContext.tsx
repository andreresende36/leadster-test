import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type ContextProps = {
  selectedPage: number;
  setSelectedPage: Dispatch<SetStateAction<number>>,
}

const PageContext = createContext<ContextProps>({ selectedPage: 1, setSelectedPage: ():number => 0});

export const PageProvider = ({ children }: { children: ReactNode }) =>   {
  const [selectedPage, setSelectedPage] = useState(1);
  return(
    <PageContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </PageContext.Provider>
  )
}

export const usePageContext = () => useContext(PageContext);