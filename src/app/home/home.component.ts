import { Component, OnInit } from '@angular/core';
import { InstagramService } from '@app/core/services/instagram.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private instagramService: InstagramService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onExplore() {
    this.instagramService.searchByTag('apple').subscribe(
      (responseData) => {
        console.log(responseData);
      }
    );
  }
}
