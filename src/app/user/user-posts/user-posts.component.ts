import { Component, Input, OnInit } from '@angular/core';
import { DialogData, User } from '@dt/interfaces/instagram';
import { MatDialog } from '@angular/material';
import { PhotoDialogComponent } from '@app/photo-dialog/photo-dialog.component';
import { DIALOG_WIDTH } from '@app/core/variables/constants';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  @Input() user: User;

  constructor(
    private dialog: MatDialog
  ) {
  }

  get isPrivate() {
    return this.user.isPrivate;
  }

  get noPosts() {
    return this.user.mediaCount === 0;
  }

  onShowPhotoInDialog(postImageUrl: string, caption: string, likes: number) {
    this.dialog.open(PhotoDialogComponent, {
      maxWidth: DIALOG_WIDTH,
      data: {
        photoUrl: postImageUrl,
        caption: caption,
        likes: likes
      } as DialogData
    });
  }

  ngOnInit() {
  }
}
