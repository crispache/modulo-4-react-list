import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MemberEntity } from "../list.vm";
import { routes } from "@/router";

interface Props {
  member: MemberEntity;
}

export const ListItem: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <>
      <Card variant="outlined" sx={{ width: 250, height: 165 }}>
        <CardActionArea
          sx={{ padding: "20px" }}
          LinkComponent="a"
          href={routes.detail(member.userName)}
        >
          <CardMedia
            component="img"
            sx={{
              height: 70,
              width: "auto",
              objectFit: "contain",
              borderRadius: 1,
            }}
            image={member.avatarUrl}
            alt="Foto del usuario"
          />
          <CardContent sx={{ padding: "10px 0px" }}>
            <Typography variant="body1">{member.userName}</Typography>
            <Typography variant="caption" color="text.secondary">
              Organización: XXXX
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
