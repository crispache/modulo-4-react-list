import React from "react";
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
    totalPages: 0,
    isLoading: false,
    errorMessage: "",
  };
};

const DEFAULT_ERROR_MESSAGE = 'Se ha producido un error al cargar el listado';



export const useList = () => {
  const [list, setList] = React.useState<Props>(createDefaultList());

  const handleErrors = (errorMessage = DEFAULT_ERROR_MESSAGE) => {
    setList({
      ...list,
      data: [],
      isLoading: false,
      errorMessage,
      totalPages: 0,
    });
  }

  const handleSuccessfulResult = (data: MemberEntityApi[], pages: number) => {
    setList({
      ...list,
      data: mapMembersToVM(data),
      isLoading: false,
      totalPages: list.totalPages,
    });
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
        handleSuccessfulResult(data, pages);
      }
    } catch (error) {
      handleErrors();
    }
  };

  return {
    ...list,
    listMembers: list.data,
    getMembersList: getList
  };
};