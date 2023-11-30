import React from "react";
import { RickMortyLayout } from "@/layout";
import { RickMorty } from "@/pods";

export const ListScene: React.FC = () => {
  return (
    <RickMortyLayout>
        <RickMorty.ListContainer />
    </RickMortyLayout>
  );
};
