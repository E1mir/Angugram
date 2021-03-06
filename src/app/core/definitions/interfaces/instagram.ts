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
  posts: Media[];
  biography?: string;
  externalUrl?: string;
}

export interface Tag {
  id: number;
  name: string;
  mediaCount: number;
  topMedia: Media[];
  recentMedia: Media[];
  profilePicUrl: string;
  isTopMediaOnly: boolean;
  allowFollowing: boolean;
  isFollowing: boolean;
}

export interface Media {
  id: number;
  likes: number;
  caption: string;
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

export interface DialogData {
  photoUrl: string;
  timestamp: number;
  caption?: string;
  likes?: number;
}
