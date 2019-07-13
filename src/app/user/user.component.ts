import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DIALOG_WIDTH, MY_PROFILE_USERNAME } from '@app/core/variables/constants';
import { DialogData, SearchForm, User } from '@dt/interfaces/instagram';
import { InstagramService } from '@app/core/services/instagram.service';
import { MatDialog } from '@angular/material';
import { PhotoDialogComponent } from '@app/photo-dialog/photo-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  username: string;
  user: User;
  isDataLoaded = true;

  MY_PROFILE_USERNAME = MY_PROFILE_USERNAME;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private instaService: InstagramService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.username = params['username'];
        this.fetchUser();
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

  onShowPhotoInDialog(photoUrl: string) {
    this.dialog.open(PhotoDialogComponent, {
      maxWidth: DIALOG_WIDTH,
      data: {
        photoUrl: photoUrl,
      } as DialogData
    });
  }

  goToExplore(tag: string) {
    console.log('unsupported');
  }

  get setAvatar() {
    return {backgroundImage: `url('${this.user.profilePicUrl}')`};
  }

  private fetchUser() {
    this.isDataLoaded = false;
    this.instaService.getAccountByUsername(this.username).subscribe(
      user => {
        this.user = user;
        this.isDataLoaded = true;
      },
      error => {
        console.log('User Not Found');
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
