import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MemberEntity } from "../list.vm";


interface Props {
  member: MemberEntity;
}

export const ListItem: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <>
      <Card variant="outlined" sx={{ width: 250, height: 200 }}>
        <CardActionArea sx={{ padding: "20px" }}>
          <CardMedia
            component="img"
            sx={{
              height: 90,
              width: "auto",
              objectFit: "contain",
              borderRadius: 1,
            }}
            image={member.avatarUrl}
            alt="Foto del usuario"
          />
          <CardContent sx={{ padding: "10px 0px" }}>
            <Typography variant="h5" component="div">
              {member.userName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Organización: XXXXX
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
