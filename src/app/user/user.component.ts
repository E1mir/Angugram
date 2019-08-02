import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DIALOG_WIDTH, MY_PROFILE_USERNAME } from '@app/core/variables/constants';
import { DialogData, User } from '@dt/interfaces/instagram';
import { InstagramService } from '@app/core/services/instagram.service';
import { MatDialog } from '@angular/material';
import { PhotoDialogComponent } from '@app/core/components/photo-dialog/photo-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  instaSubscription: Subscription;
  username: string;
  user: User;
  isDataLoaded = true;
  errorMessage: string;

  MY_PROFILE_USERNAME = MY_PROFILE_USERNAME;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private instaService: InstagramService,
    private dialog: MatDialog
  ) {
  }

  get setAvatar(): { [key: string]: string } {
    return {backgroundImage: `url('${this.user.profilePicUrl}')`};
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.username = params['username'];
        this.fetchUser();
      }
    );
  }

  onShowPhotoInDialog(photoUrl: string): void {
    this.dialog.open(PhotoDialogComponent, {
      maxWidth: DIALOG_WIDTH,
      data: {
        photoUrl: photoUrl,
      } as DialogData
    });
  }

  private fetchUser(): void {
    this.isDataLoaded = false;
    this.instaSubscription = this.instaService.getAccountByUsername(this.username).subscribe(
      user => {
        this.user = user;
        this.isDataLoaded = true;
      },
      error => {
        this.isDataLoaded = true;
        this.user = null;
        this.errorMessage = `User ${this.username} not found!`;
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.instaSubscription.unsubscribe();
  }
}
