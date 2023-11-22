import React from "react";
import { MemberEntity } from "./list.vm";
import { ListEmpty, ListHeader, ListItem } from "./components";
import { ListLoading } from "./components/ListLoading.component";
import { Box, Pagination } from "@mui/material";

interface Props {
  members: MemberEntity[];
  isLoading: boolean;
  totalPages: number;
  changePage: (page: number) => void;
}

export const List: React.FC<Props> = (props) => {
  const { members, isLoading, totalPages, changePage } = props;
  const [page, setpage] = React.useState<number>(1);

  // TODO: COMPROBAR RENDERIZACIÓN
  const isListEmpty = React.useMemo<boolean>(() => {
    return members.length === 0 ? true : false;
  }, [members]);


  const handlePagination = (e: React.ChangeEvent<HTMLInputElement>, value: number) => {
    setpage(value);
    changePage(value);
  }

  return (
    <div className="user-list-container">
      <ListHeader />

      {isLoading && <ListLoading />}

      {!isLoading && (
        <>
          <div className="user-list">
            {isListEmpty && <ListEmpty />}

            {!isListEmpty &&
              members.map((member) => (
                <ListItem member={member} key={member.id} />
              ))}
          </div>
          <Box sx={{display:'flex', justifyContent:"center"}}>
              <Pagination page={page} count={totalPages} color="primary" onChange={handlePagination}/>
          </Box>
       
        </>
      )}
    </div>
  );
};
