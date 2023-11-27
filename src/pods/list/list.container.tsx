import React from "react";
import { useList } from "./hooks";
import { List } from "./list.component";
import { ListContext } from "@/core/providers/list";

export const ListContainer: React.FC = () => {
  const { listMembers, getMembersList, isLoading, totalPages } = useList();
  const { searchList, list } = React.useContext(ListContext);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if(isMounted.current) {
      getMembersList(searchList,1);
    } 
    isMounted.current = true;
  }, [searchList]);


  const onChangePage = (page: number) => {
    getMembersList(searchList, page);
  };

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
