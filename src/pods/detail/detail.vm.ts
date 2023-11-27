
export interface MemberDetailEntity {
    userName: string;
    avatarUrl: string;
    email?: string;
    location?: string;
    publicRepos: number;
    followers: number;
    following: number;
    bio?: string;
    repoUrl: string;
}