import React from "react";
import { routes } from "@/router";
import { Button } from "@mui/material";
import {
  DetailBiography,
  DetailImage,
  DetailInfo,
  DetailLoading,
} from "./components";
import { MemberDetailEntity } from "./detail.vm";
import { ArrowBack } from "@mui/icons-material";

interface Props {
  member: MemberDetailEntity;
  isLoading: boolean;
}

export const DetailComponent: React.FC<Props> = (props) => {
  const { member, isLoading } = props;

  return (
    <div className="member-details-container">
      <Button
        variant="outlined"
        startIcon={<ArrowBack />}
        href={routes.list}
        sx={{ marginBottom: 5 }}
      >
        Volver al listado
      </Button>

      {isLoading && <DetailLoading />}

      {!isLoading && (
        <>
          <div className="member-details">
            <DetailImage url={member?.avatarUrl} />
            <DetailInfo data={member} />
          </div>

          <DetailBiography biography={member?.bio} />
        </>
      )}
    </div>
  );
};
