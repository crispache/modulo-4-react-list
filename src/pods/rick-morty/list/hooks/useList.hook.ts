import React from "react";
import { CharacterApi } from "../api/api.model";
import { mapCharactersToVM } from "../list.mappers";
import { CharacterEntity } from "../list.vm";
import * as api from "../api";

interface Props {
  data: CharacterEntity[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  errorMessage: string;
}

const createDefaultList: Props = {
    data: [],
    currentPage: 1,
    totalPages: 1,
    isLoading: false,
    errorMessage: "",
}

const DEFAULT_ERROR_MESSAGE = "Se ha producido un error al cargar el listado";

export const useList = () => {
  const [list, setList] = React.useState<Props>(createDefaultList);

  const handleErrors = (errorMessage = DEFAULT_ERROR_MESSAGE) => {
    setList({
      ...list,
      data: [],
      isLoading: false,
      errorMessage,
      totalPages: 0,
    });

    /* setGithubListStore({
      ...githubListStore,
      currentPage: 1,
      totalPages: 0,
      members: [],
    }); */
  };

  const handleSuccessfulResult = (data: CharacterApi[], pages: number, currentPage: number) => {
    setList({
      ...list,
      data: mapCharactersToVM(data),
      isLoading: false,
      totalPages: pages === undefined ? list.totalPages : pages,
    });

    /* setGithubListStore({
      ...githubListStore,
      totalPages: pages === undefined ? list.totalPages : pages,
      currentPage,
      members: mapMembersToVM(data),
    }); */
  };

  /* Get List */
  const getCharacters = async (currentPage: number) => {
    try {
      setList({ ...list, isLoading: true, errorMessage: "" });
      const { data, error, pages } = await api.getCharacters(currentPage);

      if (error) {
        handleErrors(error);
      }

      if (!error) {
        handleSuccessfulResult(data, pages, currentPage);
      }
    } catch (error) {
      handleErrors();
    }
  };

  /* React.useEffect(() => {
    if (context.members.length !== 0) {
      setList({
        data: context.members,
        currentPage: context.currentPage,
        totalPages: context.totalPages,
        isLoading: false,
        errorMessage: "",
      });
    } else {
      getList(context.organizationName, 1);
    }
  }, []); */

  return {
    ...list,
    listCharacters: list.data,
    getCharacters
  };
};
