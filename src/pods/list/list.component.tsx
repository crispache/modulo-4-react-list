import React from "react";
import { MemberEntity } from "./list.vm";
import { ListEmpty, ListHeader, ListItem } from "./components";
import { Spinner } from "@/common";
import { Box } from "@mui/system";
import { ListLoading } from "./components/ListLoading.component";

interface Props {
  members: MemberEntity[];
}

export const List: React.FC<Props> = (props) => {
  const { members } = props;

  // TODO: COMPROBAR RENDERIZACIÓN
  const isListEmpty = React.useMemo<boolean>(() => {
    return members.length === 0 ? true : false;
  },[members]);

  return (
    <div className="user-list-container">
      <ListHeader />

      {/* <ListLoading /> */}

      <div className="user-list">
        {isListEmpty && <ListEmpty />}

        {!isListEmpty &&
          members.map((member) => <ListItem member={member} key={member.id} />)}
      </div>
    </div>
  );
};
