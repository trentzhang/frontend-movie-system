import { createContext } from "react";

// create context for  const [activePage, setActivePage] = useState(pathname); in Header.tsx
type activePageContextType = {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
};

export const activePageContext = createContext<activePageContextType>(
  {} as activePageContextType
);
