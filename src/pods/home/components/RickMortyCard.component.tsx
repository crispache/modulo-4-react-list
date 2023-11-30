import React from "react";
import RickMortyLogo from "@/common/assets/rick-morty-logo.png";
import { BaseCard } from "./BaseCard.component";

export const RickMortyCard: React.FC = () => {
  return (
    <>
      <BaseCard
        title="App Rick & Morty"
        subtitle="Ver el listado de personajes de la serie Rick & Morty."
        imgUrl={RickMortyLogo}
        imgAlt="Logo de Rick & Morty"
      />
    </>
  );
};
