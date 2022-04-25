export interface IDataUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  repos_url: string;
  followers: number;
  following: number;
}

export interface IUserState {
  dataUser: IDataUser | null;
  status: 'start' | 'loading' | 'presence' | 'nothing';
}

export interface IRepos {
  id: number;
  name: string;
  description: string | null;
}
