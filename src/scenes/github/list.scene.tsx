import React from "react";
import { GithubLayout } from "@/layout";
import { Github } from "@/pods";

export const ListScene: React.FC = () => {
  return (
    <GithubLayout>
        <Github.ListContainer />
    </GithubLayout>
  );
};
