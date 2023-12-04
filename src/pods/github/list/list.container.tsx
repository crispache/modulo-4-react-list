import React from "react";
import { useList } from "./hooks";
import { List } from "./list.component";
import { GithubListContext } from "@/core/providers/github";

export const ListContainer: React.FC = () => {
  const { listMembers, getMembersList, isLoading, totalPages, errorMessage, onChangePage } = useList();
  const { githubListStore } = React.useContext(GithubListContext);
  const { organizationName } = githubListStore;
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if(isMounted.current) {
      getMembersList(organizationName,1);
    } 
    isMounted.current = true;
  }, [organizationName]);


  return (
    <>
      <List
        members={listMembers}
        isLoading={isLoading}
        totalPages={totalPages}
        errorMessage={errorMessage}
        onChangePage={onChangePage}
      />
    </>
  );
};
