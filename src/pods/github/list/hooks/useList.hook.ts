import React from "react";
import { GithubListContext } from "@/core/providers";
import { MemberEntityApi } from "../api/api.model";
import { mapMembersToVM } from "../list.mappers";
import * as api from "../api";
import { useListProps } from "./useList.vm";

const DEFAULT_ERROR_MESSAGE = "Se ha producido un error al cargar el listado";

// TODO: REFACTORIZAR
export const useList = () => {
  const { githubListStore, setGithubListStore } = React.useContext(GithubListContext);
  const context = githubListStore;

  const [list, setList] = React.useState<useListProps>({
    data: context.members,
    currentPage: context.currentPage,
    totalPages: context.totalPages,
    isLoading: false,
    errorMessage: "",
  });

  const handleErrors = (errorMessage = DEFAULT_ERROR_MESSAGE) => {
    setList({
      ...list,
      data: [],
      isLoading: false,
      errorMessage,
      totalPages: 0,
    });

    setGithubListStore({
      ...githubListStore,
      currentPage: 1,
      totalPages: 0,
      members: [],
    });
  };

  const handleSuccessfulResult = (data: MemberEntityApi[], pages: number, currentPage: number) => {
    setList({
      ...list,
      data: mapMembersToVM(data),
      isLoading: false,
      totalPages: pages === undefined ? list.totalPages : pages,
    });

    setGithubListStore({
      ...githubListStore,
      totalPages: pages === undefined ? list.totalPages : pages,
      currentPage,
      members: mapMembersToVM(data),
    });
  };

  /* Get List */
  const getList = async (organizationName: string, currentPage: number) => {
    try {
      setList({ ...list, isLoading: true, errorMessage: "" });
      const { data, error, pages } = await api.getMembers(organizationName, currentPage);

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

  const onChangePage = React.useCallback((page: number) => {
    getList(context.organizationName, page);
  },[]);


  React.useEffect(() => {
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
  }, []);

  return {
    ...list,
    listMembers: list.data,

    // Methods
    getMembersList: getList,
    onChangePage,
  };
};
