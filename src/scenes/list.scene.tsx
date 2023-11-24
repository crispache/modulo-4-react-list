import React from "react";
import { AppLayout } from "@/layout";
import { ListContainer } from "@/pods";
import { ListProvider } from "@/pods/list/providers";

export const ListScene: React.FC = () => {
  return (
    <AppLayout>
      <ListProvider>
        <ListContainer />
      </ListProvider>
    </AppLayout>
  );
};
