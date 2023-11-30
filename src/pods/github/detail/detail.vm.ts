
export interface MemberDetailEntity {
    userName: string;
    avatarUrl: string;
    email: string | null;
    location: string | null;
    publicRepos: number;
    followers: number;
    following: number;
    bio: string | null;
    repoUrl: string;
}