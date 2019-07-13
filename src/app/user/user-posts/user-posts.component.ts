import { Component, Input, OnInit } from '@angular/core';
import { User } from '@dt/interfaces/instagram';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  @Input() user: User;

  constructor() {
  }

  get isPrivate() {
    return this.user.isPrivate;
  }

  ngOnInit() {
  }
}
