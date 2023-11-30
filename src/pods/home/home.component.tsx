import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";

import { GithubCard, RickMortyCard } from "./components";

export const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="title-container">
        <Typography variant="h4" component="div">
          Elegir opción
        </Typography>
      </div>

      <div className="main-container">
        <Box display="flex" gap={5} flexWrap="wrap">
          <GithubCard />
          <RickMortyCard />
        </Box>
      </div>
    </div>
  );
};
