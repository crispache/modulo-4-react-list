import React, { useContext } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { MemberEntity } from "../list.vm";
import { routes } from "@/router";
import { ListContext } from "../providers";

interface Props {
  member: MemberEntity;
}

export const ListItem: React.FC<Props> = (props) => {
  const { member } = props;
  const { searchList } = React.useContext(ListContext)

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
            <Typography variant="caption" color="text.secondary" textTransform="capitalize">
              Organización: <Chip label={searchList} size="small" />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
