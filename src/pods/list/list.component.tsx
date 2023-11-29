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
    <div className="members-list-container">
      <ListHeader />

      <ListSearch />

      {isLoading && <ListLoading />}

      {!isLoading && (
        <>
          <div className="members-list">
            {isListEmpty && <ListEmpty />}

            {!isListEmpty &&
              members.map((member) => (
                <ListItem member={member} key={member.id} />
              ))}
          </div>

          {!isListEmpty && (
            <ListPagination
              totalPages={totalPages}
              onChangePage={onChangePage}
            />
          )}
        </>
      )}
    </div>
  );
};
