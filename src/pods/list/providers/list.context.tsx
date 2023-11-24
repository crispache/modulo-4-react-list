import React from "react";

interface ListContextModel {
    searchList: string,
    setSearchList: (searchList: string) => void;
}

export const ListContext = React.createContext<ListContextModel>({
    searchList: "Lemoncode", 
    setSearchList: null,
});
