import React from "react";
import { ListPage } from "@/list";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { switchRoutes } from "./routes";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={switchRoutes.root} element={<Navigate to={switchRoutes.list} />} />
                <Route path={switchRoutes.list} element={<ListPage />} />
            </Routes>
        </BrowserRouter>
    );
};