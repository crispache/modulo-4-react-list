import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { ListContext } from "../providers";


interface Props {}

export const ListSearch: React.FC<Props> = () => {
  const { searchList, setSearchList } = React.useContext(ListContext)
  const [organizationName, setOrganizationName] = React.useState<string>(searchList);
 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchList(organizationName)
  };


  const handleChangeOrgName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrganizationName(e.target.value)
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" gap={2} sx={{ margin: "15px 0px" }}>
        <TextField
          label="Nombre de la organización"
          value={organizationName}
          placeholder="Ej: Lemoncode"
          variant="filled"
          fullWidth
          onChange={handleChangeOrgName}
        />

        <Button type="submit" variant="contained" sx={{ width: "200px" }}>
          Buscar
        </Button>
      </Box>
    </form>
  );
};
