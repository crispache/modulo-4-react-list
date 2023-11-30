import React from "react";
import { useList } from "./hooks";
import { List } from "./list.component";

export const ListContainer: React.FC = () => {
  const { listCharacters, getCharacters, isLoading, totalPages, errorMessage } = useList();
 
  const onChangePage = (page: number) => {
   /*  getMembersList(organizationName, page); */
  };

  React.useEffect(() => {
      getCharacters(1);
  }, []);

  return (
    <>
       <List
        characters={listCharacters}
        isLoading={isLoading}
        totalPages={totalPages}
        errorMessage={errorMessage}
        onChangePage={onChangePage}
      />
    </>
  );
};
