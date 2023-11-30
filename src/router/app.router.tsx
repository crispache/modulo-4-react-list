import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppScene } from "@/scenes";
import { GithubListProvider } from "@/core/providers";
import { GithubRouter } from "./github/github.router";
import { RickMortyRouter } from "./rick-morty/rickmorty.router";

export const AppRouter = () => {
  return (
    <GithubListProvider>
      <BrowserRouter>
        <Routes>
          {/* AÑADIR EL PROVIDER  */}

          {/* RUTA PRINCIPAL */}
          <Route path="/" element={<AppScene />} />

          {/* RUTAS GITHUB */}
          <Route path="/github/*" element={<GithubRouter />} />

          {/* RUTAS RICKY&MORTY */}
          <Route path="/rick-morty/*" element={<RickMortyRouter />} />
        </Routes>
      </BrowserRouter>
    </GithubListProvider>
  );
};
