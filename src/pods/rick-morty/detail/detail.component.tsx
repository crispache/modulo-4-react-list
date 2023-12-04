import React from "react";
import { useNavigate } from "react-router-dom";
import { RickMorty } from "@/router";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import {
  DetailImage,
  DetailInfo,
  DetailLoading,
} from "./components";
import { CharacterDetailsEntity } from "./detail.vm";
import { ErrorNotification } from "@/common";

interface Props {
  character: CharacterDetailsEntity;
  isLoading: boolean;
  errorMessage?: string;
}

export const DetailComponent: React.FC<Props> = (props) => {
  const { character, isLoading, errorMessage } = props;
  const [showError, setShowError] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const backToList = () => {
    navigate('/rick-morty/' + RickMorty.routes.list);
  };

  React.useEffect(() => {
    if (errorMessage) {
      setShowError(true);
    }
  }, [errorMessage]);

  return (
    <div className="character-details-container">
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<ArrowBack />}
        sx={{ marginBottom: 5 }}
        onClick={backToList}
      >
        Volver al listado
      </Button>

      {isLoading && <DetailLoading />}

      {!isLoading && (
        <>
          <div className="character-details">
            <DetailImage url={character.image} />
            <DetailInfo data={character} />
          </div>         
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
