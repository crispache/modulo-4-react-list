export interface MemberDetailEntityApi {
  name: string | null | undefined;
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  email: string | null | undefined;
  html_url: string;
  repos_url: string;
  bio: string | null | undefined;
  location: string | null | undefined;
}
