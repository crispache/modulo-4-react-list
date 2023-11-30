import React from "react";
import { Box, Container, AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import GithubLogo from "@/common/assets/github-logo.png";


interface Props {
  children: React.ReactNode;
}

export const GithubLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <img
            src={GithubLogo}
            alt="Logo de Github"
            height={30}
            width="auto"
            style={{ marginRight: 8 }}
          />
          <Typography variant="h6" component="div" noWrap>
            App Github
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
