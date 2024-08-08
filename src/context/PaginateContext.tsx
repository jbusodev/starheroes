import React, { createContext, useState, ReactNode } from 'react';

type PaginateContextType = {
  currentPage: number;
  setPage: (newPage: number) => void;
};

const initialPaginateContext: PaginateContextType = {
  currentPage: 1,
  setPage: () => {},
};

const PaginateContext = createContext<PaginateContextType>(initialPaginateContext);

type PaginateProviderProps = {
  children: ReactNode;
};

const PaginateProvider: React.FC<PaginateProviderProps> = ({ children }) => {
  const [currentPage, setPage] = useState<PaginateContextType['currentPage']>(1);

  return (
    <PaginateContext.Provider value={{ currentPage, setPage }}>
      {children}
    </PaginateContext.Provider>
  );
};

export { PaginateContext, PaginateProvider };