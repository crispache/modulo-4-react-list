import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { switchRoutes } from "./routes";
import { DetailScene, ListScene } from "@/scenes";
import { ListProvider } from "@/pods/list/providers";

export const AppRouter = () => {
  return (
    <ListProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={switchRoutes.root}
            element={<Navigate to={switchRoutes.list} />}
          />
          <Route path={switchRoutes.list} element={<ListScene />} />
          <Route path={switchRoutes.detail} element={<DetailScene />} />
        </Routes>
      </BrowserRouter>
    </ListProvider>
  );
};
