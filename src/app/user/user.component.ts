import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MY_PROFILE_USERNAME } from '@app/core/variables/constants';
import { SearchForm } from '@dt/interfaces/instagram';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  username: string;

  MY_PROFILE_USERNAME = MY_PROFILE_USERNAME;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.username = params['username'];
      }
    );
  }

  acceptSearch(searchForm: SearchForm) {
    const isUserSearch = searchForm.isUserSearch;
    const target = searchForm.target;
    if (isUserSearch) {
      this.goToUser(target);
    } else {
      this.goToExplore(target);
    }
  }

  goToUser(username: string) {
    this.router.navigate(['user', username]);
  }

  goToExplore(tag: string) {
    console.log('unsupported');
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
