import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { ListContext } from "@/core/providers/list";

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
      <Box display="flex" gap={2} flexWrap="wrap" sx={{ margin: "30px 0px" }}>
        <TextField
          label="Nombre de la organización"
          value={organizationName}
          placeholder="Ej: Lemoncode"
          variant="outlined"
          onChange={handleChangeOrgName}
          sx={{ width: '320px'}}
        />

        <Button
          type="button"
          variant="contained"
          sx={{ minWidth: "150px", height: '55px' }}
          onClick={handleSubmit}
        >
          Buscar
        </Button>
      </Box>
    </form>
  );
};
