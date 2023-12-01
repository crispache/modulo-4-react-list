import React from "react";
import { Pagination } from "@mui/material";

interface Props {
    totalPages: number;
    onChangePage: (page: number) => void;
}

export const ListPagination: React.FC<Props> = (props) => {
    const { onChangePage, totalPages } = props;   
    const [page, setPage] = React.useState<number>(1);

    const handlePagination = (e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        onChangePage(value);
    }
  
    return (
    <div className="pagination-container">
      <Pagination
        page={page}
        count={totalPages}
        color="secondary"
        onChange={handlePagination}
      />
    </div>
  );
};
