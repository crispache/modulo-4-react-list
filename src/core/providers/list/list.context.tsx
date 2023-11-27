import { MemberEntity } from "@/pods/list/list.vm";
import React from "react";

interface ListContextModel {
    searchList: string,
    setSearchList: (searchList: string) => void;
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
    setTotalPages: (totalPages: number) => void;
    list: MemberEntity[],
    setList: (list: MemberEntity[]) => void;
}

export const ListContext = React.createContext<ListContextModel>(null);
