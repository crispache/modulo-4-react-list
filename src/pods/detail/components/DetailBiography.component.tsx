import React from "react";
import { Box } from "@mui/material";

interface Props {
    biography?: string;
}

export const DetailBiography: React.FC<Props> = (props) => {
  const { biography } = props;

  return (
    <Box marginTop={4}>
        <div dangerouslySetInnerHTML={{__html: biography}} />
    </Box>
  );
};
