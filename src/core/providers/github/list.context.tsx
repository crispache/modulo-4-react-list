import React from "react";
import { GithubList } from "./list.vm";

interface GithubListContextModel {
  githubListStore: GithubList;
  setGithubListStore: (githubList: GithubList) => void;
}

export const GithubListContext =
  React.createContext<GithubListContextModel>(null);
