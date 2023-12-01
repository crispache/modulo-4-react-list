import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { switchRoutes } from "./routes";
import { RickMorty } from "@/scenes";
import { RickMortyTheme } from "@/core/themes";

export const RickMortyRouter = () => {
  return (
    <RickMortyTheme>
      <Routes>
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.list} />}
        />
        <Route path={switchRoutes.list} element={<RickMorty.ListScene />} />
        {/* <Route path={switchRoutes.detail} element={<DetailScene />} /> */}
      </Routes>
    </RickMortyTheme>
  );
};
