import { Component, OnInit } from '@angular/core';
import { InstagramService } from '@app/core/services/instagram.service';
import { User } from '@dt/interfaces/instagram';
import { MY_PROFILE_USERNAME } from '@app/core/variables/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  me: User = null;

  constructor(
    private instagramService: InstagramService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.instagramService.getAccountByUsername(MY_PROFILE_USERNAME).subscribe(
      (user) => {
        this.me = user;
      }
    );
  }

  toDeveloperPage(): void {
    this.router.navigate(['user', this.me.username]);
  }
}
