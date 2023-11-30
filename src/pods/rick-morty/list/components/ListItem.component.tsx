import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CharacterEntity } from "../list.vm";
import { routes } from "@/router";

interface Props {
  character: CharacterEntity;
}

export const ListItem: React.FC<Props> = (props) => {
  const { character } = props;
  const navigate = useNavigate();

  const showUserDetails = () => {
    navigate('/rick-morty/' + routes.detail(character.name));
  };

  return (
    <>
      <Card variant="outlined" sx={{ width: 250, height: 200 }}>
          <CardActionArea sx={{ padding: "15px" }} onClick={showUserDetails}>
            <CardMedia
              component="img"
              sx={{
                height: 90,
                width: "auto",
                objectFit: "contain",
                borderRadius: 1,
              }}
              image={character.image}
              alt="Foto del personaje"
            />
            <CardContent sx={{ padding: "20px 0px" }}>
              <Typography variant="body1">{character.name}</Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                textTransform="capitalize"
              >
                - 
              </Typography>
            </CardContent>
          </CardActionArea>
      </Card>
    </>
  );
};
