import { Typography } from "@mui/material";
import React from "react";

export const ListHeader: React.FC = () => {
  return (
    <>
      <Typography variant="h4">Listado de usuarios</Typography>
      <Typography variant="subtitle1" gutterBottom>
        Busca los miembros que pertenecen a una organización en Github.
      </Typography>
    </>
  );
};
