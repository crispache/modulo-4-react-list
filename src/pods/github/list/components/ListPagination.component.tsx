import React from "react";
import { Pagination } from "@mui/material";
import { GithubListContext } from "@/core/providers";

interface Props {
    totalPages: number;
    onChangePage: (page: number) => void;
}

export const ListPagination: React.FC<Props> = (props) => {
    const { onChangePage, totalPages } = props;
    const { githubListStore } = React.useContext(GithubListContext);
    const [page, setPage] = React.useState<number>(githubListStore.currentPage);

    const handlePagination = (e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        onChangePage(value);
    }
  
    return (
    <div className="pagination-container">
      <Pagination
        page={page}
        count={totalPages}
        color="primary"
        onChange={handlePagination}
      />
    </div>
  );
};
