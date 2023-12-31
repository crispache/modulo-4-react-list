import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
  subtitle: string;
  imgUrl: string;
  imgAlt: string;
  route: string;
}

export const BaseCard: React.FC<Props> = (props) => {
  const { title, subtitle, imgUrl, imgAlt, route } = props;
  const navigate = useNavigate();


  const handleRoute = () => {
    navigate(route)
  };
  return (
    <>
      <Card sx={{ maxWidth: 330 }} variant="outlined">
        <CardActionArea sx={{ padding: "20px" }} onClick={handleRoute}>
          <CardMedia
            component="img"
            sx={{
              height: 70,
              width: "auto",
              objectFit: "contain",
              borderRadius: 1,
            }}
            image={imgUrl}
            alt={imgAlt}
          />
          <CardContent sx={{ padding: "10px" }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
