import React, { useCallback } from "react";
import { useDebounce } from "use-debounce";
import * as api from "../api";
import { CharacterApi } from "../api/api.model";
import { mapCharactersToVM } from "../list.mappers";
import { initialValues, useListProps } from "./useList.vm";

const DEFAULT_ERROR_MESSAGE = "Se ha producido un error al cargar el listado";


export const useList = () => {
  const [filter, setFilter] = React.useState("");
  const [list, setList] = React.useState<useListProps>(initialValues);
  const [debouncedFilter] = useDebounce(filter, 500);
  

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
      const { data, error, pages } =  await api.getCharacters(currentPage, filter);

      if (error) {
        handleErrors(error);
      }

      if (!error) {
        handleSuccessfulResult(data, pages, currentPage);
      }
    } catch (error) {
      handleErrors();
    }
  }, [handleErrors, handleSuccessfulResult, filter]);


  const onChangePage = useCallback((page: number ) => {
    getCharacters(page); 
  },[])


  React.useEffect(() => {
      getCharacters(1);
  }, [debouncedFilter]);

  return {
    // Props
    filter,
    ...list,
    listCharacters: list.data,

    // Methods
    setFilter,
    getCharacters,
    onChangePage,
  };
};
