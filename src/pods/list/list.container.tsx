import React from "react";
import { useList } from "./hooks";
import { List } from "./list.component";
import { ListContext } from "./providers";

export const ListContainer: React.FC = () => {
  const { listMembers, getMembersList, isLoading, totalPages } = useList();
  const { searchList } = React.useContext(ListContext);

  
  React.useEffect(() => {
    getMembersList(searchList,1);
  }, [searchList]);


  const onChangePage = (page: number) => {
    getMembersList(searchList, page)
  }


  return (
    <>
      <List
        members={listMembers}
        isLoading={isLoading}
        totalPages={totalPages}
        onChangePage={onChangePage}
      />
    </>
  );
};
