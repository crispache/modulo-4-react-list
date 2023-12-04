import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Github } from "@/router";

export const ListHeader: React.FC = React.memo(() => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate(Github.routes.root);
  };

  return (
    <>
       <Button
        variant="outlined"
        startIcon={<ArrowBack />}
        sx={{ marginBottom: 5 }}
        onClick={backToHome}
      >
        Volver al inicio
      </Button>
      <Typography variant="h4">Listado de usuarios</Typography>
      <Typography variant="subtitle1">
        Busca los miembros que pertenecen a una organización en Github.
      </Typography>
    </>
  );
});
