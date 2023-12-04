import React from "react";
import { useParams } from "react-router-dom";
import { DetailComponent } from "./detail.component";
import { useDetail } from "./hooks";

export const DetailContainer: React.FC = () => {
  const { getCharacterDetails, data, isLoading, errorMessage } = useDetail();
  const { id } = useParams();
  
  React.useEffect(() => {
    getCharacterDetails(+id);
  }, []);

  return (
    <>
      <DetailComponent
        character={data}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </>
  );
};
