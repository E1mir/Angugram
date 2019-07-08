import { Component } from '@angular/core';
import { InstagramService } from '@app/core/services/instagram.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angugram';

  constructor(private instagramService: InstagramService) {
  }

  onExplore() {
    this.instagramService.searchByTag('apple').subscribe(
      (responseData) => {
        console.log(responseData);
      }
    );
  }
}
