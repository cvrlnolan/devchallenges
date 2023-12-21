'use client';

import { createContext, FC, ReactNode, useState } from 'react';

import { Navbar } from './navbar';

const SearchContext = createContext<string | null>(null);

const SearchContextWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
  const [searchText, setSearchText] = useState<string | null>(null);

  return (
    <SearchContext.Provider value={searchText}>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextWrapper };
