import React, { useEffect, useState } from "react";
import { List } from "./list.component";
import { getMembers } from "./list.repository";
import { MemberEntity } from "./list.vm";

export const ListContainer: React.FC = () => {

    const [members, setMembers] = useState<MemberEntity[]>([])

    useEffect(() => {
      getMembers().then(setMembers)
    }, [])
    
    return (
        <>
            <List members={members}/>
        </>
    )
}