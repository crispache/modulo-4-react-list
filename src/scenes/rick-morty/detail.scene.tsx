import React from "react";
import { RickMortyLayout } from "@/layout";
import { RickMorty } from "@/pods";

export const DetailScene: React.FC = () => {
  return (
    <RickMortyLayout>
        <RickMorty.DetailContainer />
    </RickMortyLayout>
  );
};
