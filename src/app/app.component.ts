import { Component } from '@angular/core';
import { InstagramPostsService } from '@app/core/services/instagram.posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angugram';

  constructor(private instagramPostsService: InstagramPostsService) {
  }

  onExplore() {
    this.instagramPostsService.searchByTag('apple').subscribe(
      (responseData) => {
        console.log(responseData);
      }
    );
  }
}
