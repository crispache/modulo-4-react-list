import React from "react";
import { Box, Container, AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import RickMortyLogo from "@/common/assets/rick-morty-logo.png";


interface Props {
  children: React.ReactNode;
}

export const RickMortyLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <img
            src={RickMortyLogo}
            alt="Logo de Rick & Morty"
            height={30}
            width="auto"
            style={{ marginRight: 8 }}
          />
          <Typography variant="h6" component="div" noWrap>
            App Rick & Morty
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container>
          <Box sx={{ minHeight: "90vh" }}>{children}</Box>
        </Container>
      </main>
    </>
  );
};
