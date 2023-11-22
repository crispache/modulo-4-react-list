import React, { useEffect } from "react";
import { useList } from "./hooks";
import { List } from "./list.component";

export const ListContainer: React.FC = () => {
  const { listMembers, getMembersList, isLoading, totalPages } =
    useList();

  useEffect(() => {
    getMembersList(1);
  }, []);

  return (
    <>
      <List
        members={listMembers}
        isLoading={isLoading}
        totalPages={totalPages}
        changePage={getMembersList}
      />
    </>
  );
};
