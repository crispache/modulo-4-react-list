import { MemberEntity } from "@/pods/github/list/list.vm";

export interface GithubList {
  organizationName: string;
  currentPage: number;
  totalPages: number;
  members: MemberEntity[];
}

export const createDefaultGithubList = (): GithubList => ({
  organizationName: "Lemoncode",
  currentPage: 1,
  totalPages: 0,
  members: [],
});
