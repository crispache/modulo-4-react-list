import React from "react";
import * as api from "../api";
import { CharacterDetailsApi } from "../api";
import { mapCharacterDetailsToVM } from "../detail.mappers";
import { createDefaultCharacterDetails, initialValues, useDetailProps } from "./useDetail.vm";


const DEFAULT_ERROR_MESSAGE = "Se ha producido un error al cargar los datos";

export const useDetail = () => {
  const [detail, setDetail] = React.useState<useDetailProps>(
    createDefaultCharacterDetails()
  );

  const handleErrors = (errorMessage = DEFAULT_ERROR_MESSAGE) => {
    setDetail({
      ...detail,
      data: initialValues,
      isLoading: false,
      errorMessage,
    });
  };

  const handleSuccessfulResult = (data: CharacterDetailsApi) => {
    setDetail({
      ...detail,
      data: mapCharacterDetailsToVM(data),
      isLoading: false,
    });
  };


  const getCharacterDetails = async (id: number) => {
    try {
      setDetail({ ...detail, isLoading: true, errorMessage: "" });
      const { data, error } = await api.getCharacterDetails(id);

      if (error) {
        handleErrors(error);
      }

      if (!error) {
        handleSuccessfulResult(data);
      }

    
    } catch (error) {
      handleErrors();
    }
  };

  return {
    ...detail,
    getCharacterDetails,
  };
};