import React from "react";
import { MemberEntity } from "./list.vm";
import { ListEmpty, ListHeader, ListItem, ListLoading, ListSearch } from "./components";
import { Box, Pagination } from "@mui/material";
import { ListContext } from "@/core/providers";

interface Props {
  members: MemberEntity[];
  isLoading: boolean;
  totalPages: number;
  onChangePage: (page: number) => void;
}

export const List: React.FC<Props> = (props) => {
  
  const { members, isLoading, totalPages, onChangePage } = props;
  const context = React.useContext(ListContext)
  const [page, setpage] = React.useState<number>(context.page);
 

  // TODO: COMPROBAR RENDERIZACIÓN
  const isListEmpty = React.useMemo<boolean>(() => {
    return members.length === 0 ? true : false;
  }, [members]);


  const handlePagination = (e: React.ChangeEvent<HTMLInputElement>, value: number) => {
    setpage(value);
    context.setPage(value)
    onChangePage(value);
  }


  React.useEffect( () => {
      setpage(context.page);
  }, [context.page])

  return (
    <div className="user-list-container">
      <ListHeader />

      <ListSearch />

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
