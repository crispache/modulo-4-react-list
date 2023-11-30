import React from "react";
import GithubLogo from "@/common/assets/github-logo.png";
import { BaseCard } from "./BaseCard.component";

export const GithubCard: React.FC = () => {
  return (
    <>
      <BaseCard
        title="App Github"
        subtitle="Ver el listado de miembros de una organización en Github."
        imgUrl={GithubLogo}
        imgAlt="Logo de Github"
        route="/github"
      />
    </>
  );
};
