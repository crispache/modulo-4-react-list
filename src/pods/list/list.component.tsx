import React from "react";
import { MemberEntity } from "./list.vm";
import { ListHeader, ListItem } from "./components";

interface Props {
  members: MemberEntity[];
}

export const List: React.FC<Props> = (props) => {
  const { members } = props;

  return (
    <div className="user-list-container">
      <ListHeader />

      <div className="user-list">
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <ListItem member={member}/>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
