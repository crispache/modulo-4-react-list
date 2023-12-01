import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  useTheme,
} from "@mui/material";
import { CharacterEntity } from "../list.vm";
import { routes } from "@/router";

interface Props {
  character: CharacterEntity;
}

export const ListItem: React.FC<Props> = (props) => {
  const { character } = props;
  const navigate = useNavigate();
  const { palette } = useTheme();

  const showUserDetails = () => {
    navigate("/rick-morty/" + routes.detail(character.name));
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          width: 250,
          height: 245,
          backgroundColor: palette.primary.dark,
          borderRadius: 2,
          "&:hover": { backgroundColor: palette.primary.light },
        }}
      >
        <CardActionArea sx={{ padding: "15px" }} onClick={showUserDetails}>
          <CardMedia
            component="img"
            sx={{
              height: 135,
              width: "200",
              objectFit: "contain",
            }}
            image={character.image}
            alt="Foto del personaje"
          />
          <CardContent sx={{ padding: "10px 0px 5px 0px" }}>
            <Box>
              <Typography
                variant="h6"
                color={palette.primary.contrastText}
                style={{
                  textShadow: `0px 0px 20px ${palette.secondary.light}`,
                }}
                noWrap
              >
                {character.name}
              </Typography>
            </Box>

            <Box display="flex" gap={1} marginTop={1}>
              <Typography noWrap>
                <Chip
                  label={character.gender}
                  size="small"
                  component="span"
                  variant="filled"
                  color="secondary"
                />
              </Typography>
              <Typography noWrap>
                <Chip
                  label={character.species}
                  size="small"
                  variant="filled"
                  component="span"
                  color="secondary"
                  sx={{ color: palette.primary.main }}
                />
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
