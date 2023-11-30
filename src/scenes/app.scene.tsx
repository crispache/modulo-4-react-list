import React from "react";
import { DefaultLayout } from "@/layout";
import { HomeContainer } from "@/pods";

export const AppScene: React.FC = () => {
  return (
    <DefaultLayout>
      <HomeContainer />
    </DefaultLayout>
  );
};
