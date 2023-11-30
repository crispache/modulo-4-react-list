import { Typography } from "@mui/material";
import React from "react";

export const ListHeader: React.FC = React.memo(() => {
  return (
    <>
      <Typography variant="h4">Listado de personajes</Typography>
      <Typography variant="subtitle1">
        Busca los personajes que aparecen en la serie Rick & Morty.
      </Typography>
    </>
  );
});
