import React from "react";
import { AppRouter } from "./router";
import { AppLayout } from "./layout";

export const App = () => {
  return (
    <AppLayout>
       <AppRouter />
    </AppLayout>
  );
};
