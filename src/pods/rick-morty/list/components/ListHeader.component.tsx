import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import RickMortyLogo from "@/common/assets/rick-morty-logo.png";
import { ArrowBack } from "@mui/icons-material";
import { RickMorty } from "@/router";

export const ListHeader: React.FC = React.memo(() => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate(RickMorty.routes.root);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<ArrowBack />}
        sx={{ marginBottom: 5 }}
        onClick={backToHome}
      >
        Volver al inicio
      </Button>
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
    </>
  );
});
