import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class InstagramService {
  private MAIN_URL = 'https://instagram.com';

  constructor(private http: HttpClient) {
  }

  searchByTag(tag: string) {
    return this.http.get(`${this.MAIN_URL}/explore/tags/${tag}/`);
  }
}
