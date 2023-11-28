import React from "react";
import { GithubListContext } from "./list.context";
import { GithubList, createDefaultGithubList } from "./list.vm";

interface Props {
  children: React.ReactNode;
}

export const GithubListProvider: React.FC<Props> = ({ children }) => {
  const [githubListStore, setGithubListStore] = React.useState<GithubList>(
    createDefaultGithubList
  );

  return (
    <>
      <GithubListContext.Provider
        value={{
          githubListStore,
          setGithubListStore,
        }}
      >
        {children}
      </GithubListContext.Provider>
    </>
  );
};
