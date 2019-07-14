import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { version } from '../../../package.json';
import { InstagramService } from '@app/core/services/instagram.service';
import { SearchForm } from '@dt/interfaces/instagram';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public version = version;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private instaService: InstagramService
  ) {
  }

  ngOnInit() {
    this.instaService.searchSubmitted.subscribe(
      (searchForm: SearchForm) => {
        this.acceptSearch(searchForm);
      }
    );
  }

  private acceptSearch(searchForm: SearchForm) {
    const isUserSearch = searchForm.isUserSearch;
    const target = searchForm.target;

    if (isUserSearch) {
      this.goToUser(target);
    } else {
      this.goToExplore(target);
    }
  }

  goToExplore(tag: string) {
    console.log('unsupported');
  }

  goToUser(username: string) {
    this.router.navigate(['user', username]);
  }

}
