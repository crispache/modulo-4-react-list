import React from "react";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

export const Spinner: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress color="inherit" />
    </Box>
  );
};