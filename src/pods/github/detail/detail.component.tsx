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
import { ErrorNotification } from "@/common";

interface Props {
  member: MemberDetailEntity;
  isLoading: boolean;
  errorMessage?: string;
}

export const DetailComponent: React.FC<Props> = (props) => {
  const { member, isLoading, errorMessage } = props;
  const [showError, setShowError] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const backToList = () => {
    navigate('/github/' + routes.list);
  };

  React.useEffect(() => {
    if (errorMessage) {
      setShowError(true);
    }
  }, [errorMessage]);

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
      <ErrorNotification
        isOpen={showError}
        errorMessage={errorMessage}
        handleClose={() => setShowError(false)}
      />
    </div>
  );
};
