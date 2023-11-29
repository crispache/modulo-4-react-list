import { MemberDetailEntityApi } from "./api/";
import * as vm from "./detail.vm";



export const mapMemberDetailsToVM = (data: MemberDetailEntityApi): vm.MemberDetailEntity => ({
    userName: data.login,
    avatarUrl: data.avatar_url,
    email: data.email || null,
    location: data.location || null,
    publicRepos: data.public_repos,
    followers: data.followers,
    following: data.following,
    bio: data.bio || null,
    repoUrl: data.html_url,
})
