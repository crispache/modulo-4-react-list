import React from "react";
import { CircularProgress, Box, CircularProgressProps } from "@mui/material";


interface Props {
  color?: CircularProgressProps['color'];
}

export const Spinner: React.FC<Props> = ( props ) => {
  const { color } = props
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress color={color ? color : 'inherit'} />
    </Box>
  );
};