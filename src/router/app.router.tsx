import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { switchRoutes } from "./github/routes";
import { AppScene } from "@/scenes";
import { GithubListProvider } from "@/core/providers";

export const AppRouter = () => {
  return (
    <GithubListProvider>
      <BrowserRouter>

        {/* AÑADIR EL PROVIDER  */}

       

        {/* RUTA PRINCIPAL */}
        <Routes>
          <Route path="/" element={<AppScene />} />
        </Routes>



        {/* RUTAS GITHUB */}


         {/* RUTAS RICKY&MORTY */}

      </BrowserRouter>
    </GithubListProvider>
  );
};
