import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { GithubListContext } from "@/core/providers";

interface Props {}

export const ListSearch: React.FC<Props> = () => {
  const { githubListStore, setGithubListStore } = React.useContext(GithubListContext);
  const [organizationName, setOrganizationName] = React.useState<string>(githubListStore.organizationName);

  const handleSubmit = () => {
    setGithubListStore({...githubListStore, organizationName: organizationName })
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
