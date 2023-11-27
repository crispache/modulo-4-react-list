import React from "react";
import { useNavigate } from "react-router-dom";
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
import { ListContext } from "@/core/providers/list";

interface Props {
  member: MemberEntity;
}

export const ListItem: React.FC<Props> = (props) => {
  const { member } = props;
  const { searchList } = React.useContext(ListContext);
  const navigate = useNavigate();

  const showUserDetails = () => {
    navigate(routes.detail(member.userName));
  };

  return (
    <>
      <Card variant="outlined" sx={{ width: 250, height: 165 }}>
          <CardActionArea sx={{ padding: "20px" }} onClick={showUserDetails}>
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
              <Typography
                variant="caption"
                color="text.secondary"
                textTransform="capitalize"
              >
                Organización: <Chip label={searchList} size="small" />
              </Typography>
            </CardContent>
          </CardActionArea>
      </Card>
    </>
  );
};
