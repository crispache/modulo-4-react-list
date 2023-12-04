import React, { useCallback } from "react";
import * as api from "../api";
import { CharacterApi } from "../api/api.model";
import { mapCharactersToVM } from "../list.mappers";
import { initialValues, useListProps } from "./useList.vm";

const DEFAULT_ERROR_MESSAGE = "Se ha producido un error al cargar el listado";


export const useList = () => {
  const [list, setList] = React.useState<useListProps>(initialValues);
  

  const handleErrors = useCallback((errorMessage = DEFAULT_ERROR_MESSAGE) => {
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
  }, []);

  const handleSuccessfulResult = useCallback((data: CharacterApi[], pages: number, currentPage: number) => {
    setList({
      ...list,
      data: mapCharactersToVM(data),
      isLoading: false,
      totalPages: pages === undefined ? list.totalPages : pages,
      currentPage: currentPage
    });

    /* setGithubListStore({
      ...githubListStore,
      totalPages: pages === undefined ? list.totalPages : pages,
      currentPage,
      members: mapMembersToVM(data),
    }); */
  }, []);

  const getCharacters = useCallback( async (currentPage: number) => {
    try {
      setList({ ...list, isLoading: true, errorMessage: "" });
      const { data, error, pages } =  await api.getCharacters(currentPage);

      if (error) {
        handleErrors(error);
      }

      if (!error) {
        handleSuccessfulResult(data, pages, currentPage);
      }
    } catch (error) {
      handleErrors();
    }
  }, [handleErrors, handleSuccessfulResult]);


  const onChangePage = useCallback((page: number ) => {
    getCharacters(page); 
  },[])

  React.useEffect(() => {
     /* if (context.members.length !== 0) {
      setList({
        data: context.members,
        currentPage: context.currentPage,
        totalPages: context.totalPages,
        isLoading: false,
        errorMessage: "",
      });
    } else {
      getList(context.organizationName, 1);
    }  */
      getCharacters(1);
  }, []);

  return {
    // Props
    ...list,
    listCharacters: list.data,

    // Methods
    getCharacters,
    onChangePage,
  };
};
