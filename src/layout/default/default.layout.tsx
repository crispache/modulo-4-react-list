import React from "react";
import { Box, Container, AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";


interface Props {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" noWrap>
            App 
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
