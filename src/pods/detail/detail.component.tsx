import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import {
  DetailBiography,
  DetailImage,
  DetailInfo,
  DetailLoading,
} from "./components";
import { MemberDetailEntity } from "./detail.vm";

interface Props {
  member: MemberDetailEntity;
  isLoading: boolean;
}

export const DetailComponent: React.FC<Props> = (props) => {
  const { member, isLoading } = props;
  const navigate = useNavigate();

  const backToList = () => {
    navigate(routes.list);
  };

  return (
    <div className="member-details-container">
      <Button
        variant="outlined"
        startIcon={<ArrowBack />}
        sx={{ marginBottom: 5 }}
        onClick={backToList}
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
