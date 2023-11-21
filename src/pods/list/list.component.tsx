import { Button } from "@mui/base";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { ListHeader } from "./components/ListHeader.component";
import { USERS_MOCKS } from "./mocks/list.mock";

export const List: React.FC = () => {
  return (
    <div className="user-list-container">
      <ListHeader />

      <div className="user-list">
        {USERS_MOCKS.map((member) => (
          /* LIST ITEM */
          <React.Fragment key={member.id}>
            <Card key={member.id} sx={{ width: 250, height: 200 }}>
              <CardActionArea sx={{ padding: "20px" }}>
                <CardMedia
                  component="img"
                  sx={{ height: 90, width: "auto", objectFit: "contain" }}
                  image={member.avatar_url}
                  alt="Foto del usuario"
                />
                <CardContent sx={{ padding: "10px" }}>
                  <Typography variant="h5" component="div">
                    {member.login}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Organización: XXXXX
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
