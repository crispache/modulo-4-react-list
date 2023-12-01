import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";
import Empty from "@/common/assets/empty.png";

export const ListEmpty: React.FC = () => {
  const { palette } = useTheme();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
          textAlign: 'center'
        }}
      >
        <Box>
          <img
            src={Empty}
            alt="Sin datos"
            height={210}
            width={280}
          />
          <Typography variant="body2" display="block" color={palette.primary.contrastText}>
            No se han encontrado resultados.
          </Typography>
          <Typography variant="body2" display="block" color={palette.primary.contrastText}>
            Pruebe con otro nombre.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
