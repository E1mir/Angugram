import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MainResponse, Media, Owner, User } from '@dt/interfaces/instagram';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class InstagramService {
  private MAIN_URL = 'https://instagram.com';

  constructor(private http: HttpClient) {
  }

  searchByTag(tag: string): Observable<any> {
    return this.http.get(`${this.MAIN_URL}/explore/tags/${tag}/`);
  }

  getAccountByUsername(username: string): Observable<User> {
    return this.http.get(
      `${this.MAIN_URL}/${username}/`
    ).pipe(
      map(
        (response: MainResponse) => {
          const userData = response.graphql.user;
          const user: User = {} as User;
          user.id = +userData.id;
          user.username = userData.username;
          user.biography = userData.biography;
          user.followers = +userData.edge_followed_by.count;
          user.followings = +userData.edge_follow.count;
          user.isVerified = userData.is_verified;
          user.isPrivate = userData.is_private;
          user.profilePicUrl = userData.profile_pic_url;
          user.profilePicUrlHD = userData.profile_pic_url_hd;
          user.fullName = userData.full_name;
          user.externalUrl = userData.external_url;
          user.mediaCount = userData.edge_owner_to_timeline_media.count;
          user.posts = this.fetchMedia(userData);
          return user;
        }
      )
    );
  }

  private fetchMedia(userData: any): Media[] {
    const mediaData = userData.edge_owner_to_timeline_media;
    const posts: Media[] = [];
    for (let post of mediaData.edges) {
      post = post.node;
      const media = {} as Media;
      const owner = {} as Owner;
      owner.id = +post.owner.id;
      owner.username = post.owner.username;
      media.id = post.id;
      media.caption = '';
      for (const caption of post.edge_media_to_caption.edges) {
        media.caption += caption.node.text;
      }
      media.isVideo = post.is_video;
      if (post.location) {
        media.location = post.location.name;
      }
      media.timestamp = post.taken_at_timestamp;
      media.likes = post.edge_liked_by.count;
      media.url = post.display_url;
      media.comments_disabled = post.comments_disabled;
      posts.push(media);
    }
    return posts;
  }
}
