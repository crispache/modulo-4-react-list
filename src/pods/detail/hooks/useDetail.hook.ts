import React from "react";
import { MemberDetailEntityApi } from "../api";
import { mapMemberDetailsToVM } from "../detail.mappers";
import { MemberDetailEntity } from "../detail.vm";
import * as api from "./../api";

interface Props {
  data: MemberDetailEntity;
  isLoading: boolean;
  errorMessage: string;
}

const initialValues = {
  userName: "",
  avatarUrl: "",
  email: null,
  location: null,
  publicRepos: 0,
  followers: 0,
  following: 0,
  bio: null,
  repoUrl: "",
};

const createDefaultMemberDetails = (): Props => {
  return {
    data: initialValues,
    isLoading: false,
    errorMessage: "",
  };
};

const DEFAULT_ERROR_MESSAGE = "Se ha producido un error al cargar los datos";

export const useDetail = () => {
  const [detail, setDetail] = React.useState<Props>(
    createDefaultMemberDetails()
  );

  const handleErrors = (errorMessage = DEFAULT_ERROR_MESSAGE) => {
    setDetail({
      ...detail,
      data: initialValues,
      isLoading: false,
      errorMessage,
    });
  };

  const handleSuccessfulResult = (data: MemberDetailEntityApi) => {
    setDetail({
      ...detail,
      data: mapMemberDetailsToVM(data),
      isLoading: false,
    });
  };

  /* Get Details User  */
  const getUserDetail = async (userName: string) => {
    try {
      setDetail({ ...detail, isLoading: true, errorMessage: "" });
      const { data, error } = await api.getUserDetail(userName);

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
    getUserDetail,
  };
};