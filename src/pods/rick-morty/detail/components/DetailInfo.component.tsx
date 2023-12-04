import React from "react";
import { Chip, Typography, useTheme } from "@mui/material";
import { CharacterDetailsEntity } from "../detail.vm";


interface Props {
  data: Omit<CharacterDetailsEntity, "image">;
}

export const DetailInfo: React.FC<Props> = (props) => {
  const { data } = props;
  const { palette } = useTheme();

  return (
    <div className="info">
      <div className="character-name">
        <Typography variant="h4" color={palette.primary.light}>{data.name}</Typography>
      </div>

      <div className="extra-info">
        <Typography variant="body2" color="secondary" marginTop={2}>
          Género:  <Chip component="span" label={data.gender} size="small" color="secondary"/>
        </Typography>

        <Typography variant="body2" color="secondary" marginTop={2}>
          Especie:  <Chip component="span" label={data.species} size="small" color="secondary" />
        </Typography>

        <Typography variant="body2" color={palette.secondary.light} marginTop={2}>
          Localización: {data.location} 
        </Typography>
      </div>
    </div>
  );
};
