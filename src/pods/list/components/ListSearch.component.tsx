import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { ListContext } from "../providers";

interface Props {}

export const ListSearch: React.FC<Props> = () => {
  const { searchList, setSearchList } = React.useContext(ListContext);
  const [organizationName, setOrganizationName] =
    React.useState<string>(searchList);

  const handleSubmit = () => {
    setSearchList(organizationName);
  };

  const handleChangeOrgName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrganizationName(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Box display="flex" gap={2} sx={{ margin: "15px 0px" }}>
        <TextField
          label="Nombre de la organización"
          value={organizationName}
          placeholder="Ej: Lemoncode"
          variant="filled"
          fullWidth
          onChange={handleChangeOrgName}
        />

        <Button
          type="button"
          variant="contained"
          sx={{ width: "200px" }}
          onClick={handleSubmit}
        >
          Buscar
        </Button>
      </Box>
    </form>
  );
};
