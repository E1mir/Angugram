import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MainResponse, User } from '@dt/interfaces/instagram';
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
          return user;
        }
      )
    );
  }
}
