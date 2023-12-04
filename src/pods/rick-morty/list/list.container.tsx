import React from "react";
import { useList } from "./hooks";
import { List } from "./list.component";

export const ListContainer: React.FC = () => {
  const { listCharacters, isLoading, totalPages, errorMessage, currentPage, onChangePage } = useList();
 
  return (
    <>
       <List
        characters={listCharacters}
        isLoading={isLoading}
        totalPages={totalPages}
        errorMessage={errorMessage}
        onChangePage={onChangePage}
        currentPage={currentPage}
      />
    </>
  );
};
