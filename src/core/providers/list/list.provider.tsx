import React from "react";
import { ListContext } from "./list.context";
import { MemberEntity } from "@/pods/list/list.vm";

interface Props {
  children: React.ReactNode;
}

export const ListProvider: React.FC<Props> = ({ children }) => {
  const [searchList, setSearchList] = React.useState<string>("Lemoncode");
  const [page, setPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(0);
  const [list, setList ] = React.useState<MemberEntity[]>([]);

  return (
    <>
      <ListContext.Provider
        value={{
          searchList,
          setSearchList,
          page,
          setPage,
          totalPages,
          setTotalPages,
          list,
          setList
        }}
      >
        {children}
      </ListContext.Provider>
    </>
  );
};
