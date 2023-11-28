import React from "react";
import { MemberEntity } from "./list.vm";
import {
  ListEmpty,
  ListHeader,
  ListItem,
  ListLoading,
  ListPagination,
  ListSearch,
} from "./components";

interface Props {
  members: MemberEntity[];
  isLoading: boolean;
  totalPages: number;
  onChangePage: (page: number) => void;
}

export const List: React.FC<Props> = (props) => {
  const { members, isLoading, totalPages, onChangePage } = props;

  const isListEmpty = React.useMemo<boolean>(() => {
    return members.length === 0 ? true : false;
  }, [members]);

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

          <ListPagination totalPages={totalPages} onChangePage={onChangePage} />
        </>
      )}
    </div>
  );
};
