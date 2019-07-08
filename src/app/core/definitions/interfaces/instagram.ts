export interface MainResponse {
  graphql: any;
}

export interface User {
  id: number;
  fullName: string;
  username: string;
  followers: number;
  followings: number;
  profilePicUrl: string;
  profilePicUrlHD: string;
  isPrivate: boolean;
  isVerified: boolean;
  mediaCount: number;
  biography?: string;
  externalUrl?: string;
}

export interface Media {
  id: number;
  likes: number;
  comment: string;
  comments_disabled: boolean;
  isVideo: boolean;
  location: string;
  timestamp: number;
  url: string;
  owner: Owner;
}

export interface Owner {
  id: number;
  username: string;
}

export interface SearchForm {
  isUserSearch: boolean;
  target: string;
}
