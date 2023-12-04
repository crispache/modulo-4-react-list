import React from "react";
import { Box, TextField } from "@mui/material";

interface Props {
  filter: string;
  setFilter: (filter: string ) => void;
}

export const ListSearch: React.FC<Props> = ( props ) => {
  const { filter, setFilter } = props;

  const handleChangeCharacterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Box display="flex" gap={2} flexWrap="wrap" sx={{ margin: "30px 0px" }}>
        <TextField
          label="Buscar personaje"
          value={filter}
          placeholder="Ej: Morty Smith"
          variant="filled"
          color="primary"
          onChange={handleChangeCharacterName}
          sx={{ width: '400px', background: "white"}}
        />
      </Box>
    </form>
  );
};
