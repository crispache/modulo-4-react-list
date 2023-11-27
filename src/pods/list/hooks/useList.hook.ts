import React from "react";
import { ListContext } from "@/core/providers";
import { MemberEntityApi } from "../api/api.model";
import { mapMembersToVM } from "../list.mappers";
import { MemberEntity } from "../list.vm";
import * as api from "./../api";

interface Props {
  data: MemberEntity[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  errorMessage: string;
}

const createDefaultList = (): Props => {
  return {
    data: [],
    currentPage: 1,
    totalPages: 1,
    isLoading: false,
    errorMessage: "",
  };
};

const DEFAULT_ERROR_MESSAGE = 'Se ha producido un error al cargar el listado';



export const useList = () => {
  const context = React.useContext(ListContext);
  const [list, setList] = React.useState<Props>({
    data: context.list,
    currentPage: context.page,
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
    context.setPage(1)
    context.setTotalPages(0);
    context.setList([]);
  }

  const handleSuccessfulResult = (data: MemberEntityApi[], pages: number) => {
    setList({
      ...list,
      data: mapMembersToVM(data),
      isLoading: false,
      totalPages: pages === undefined ? list.totalPages : pages,
    });
    context.setTotalPages(pages === undefined ? list.totalPages : pages);
    context.setList(mapMembersToVM(data))
  }

  /* Get List */
  const getList = async (organizationName: string, currentPage: number) => {
    try {
      setList({ ...list, isLoading: true, errorMessage: "" });
      const { data, error, pages } = await api.getMembers(organizationName, currentPage);

      if (error) {
        handleErrors(error);
      } 
      
      if(!error){
        context.setPage(currentPage)
        handleSuccessfulResult(data, pages);
      }
    } catch (error) {
      handleErrors();
    }
  };

  React.useEffect(() => {
      if(context.list.length !== 0) {
        setList({
          data: context.list,
          currentPage: context.page,
          totalPages: context.totalPages,
          isLoading: false,
          errorMessage: "",
        });
      } else {
        getList(context.searchList, 1)
      }
  }, [])

  return {
    ...list,
    listMembers: list.data,
    getMembersList: getList
  };
};