import React from "react";
import { ListContext } from "./list.context";

interface Props {
  children: React.ReactNode;
}

export const ListProvider: React.FC<Props> = ({ children }) => {
  const [searchList, setSearchList] = React.useState<string>("Lemoncode");

  return (
    <>
      <ListContext.Provider
        value={{
          searchList,
          setSearchList,
        }}
      >
        {children}
      </ListContext.Provider>
    </>
  );
};
