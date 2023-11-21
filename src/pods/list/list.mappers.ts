import { MemberEntityApi } from "./api/api.model";
import * as vm from "./list.vm";


export const mapMembersToVM = ( data: MemberEntityApi[]): vm.MemberEntity[] => {
   return data.map(mapMemberToVM);
}


export const mapMemberToVM = (data: MemberEntityApi): vm.MemberEntity => ({
    id: data.id,
    userName: data.login,
    avatarUrl: data.avatar_url,
})
