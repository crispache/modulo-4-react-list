import React from "react";
import { Typography } from "@mui/material";
import RickMortyLogo from "@/common/assets/rick-morty-logo.png";

export const ListHeader: React.FC = React.memo(() => {
  return (
    <div className="characters-list-header">
      <img
        src={RickMortyLogo}
        alt="Logo de Rick & Morty"
        height={80}
        width="auto"
        style={{ objectFit: "contain" }}
      />
      <Typography variant="h4">Listado de personajes</Typography>
      <Typography variant="subtitle1">
        Busca los personajes que aparecen en la serie Rick & Morty.
      </Typography>
    </div>
  );
});
