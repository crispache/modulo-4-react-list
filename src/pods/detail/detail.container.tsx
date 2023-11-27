import React from "react";
import { useParams } from "react-router-dom";
import { DetailComponent } from "./detail.component";
import { useDetail } from "./hooks";

export const DetailContainer: React.FC = () => {
  const { getUserDetail, data, isLoading, errorMessage } = useDetail();
  const { id } = useParams();

  React.useEffect(() => {
    getUserDetail(id);
  }, []);

  return (
    <>
      <DetailComponent member={data} isLoading={isLoading} />
    </>
  );
};
