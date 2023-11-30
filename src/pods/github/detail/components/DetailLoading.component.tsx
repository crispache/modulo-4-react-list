import React from "react";
import { Spinner } from "@/common";
import { Box } from "@mui/system";


export const DetailLoading: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        textAlign: "center",
      }}
    >
      <Spinner />
    </Box>
  );
};
