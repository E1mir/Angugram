import { Component, Input, OnInit } from '@angular/core';
import { DialogData, Tag } from '@dt/interfaces/instagram';
import { PhotoDialogComponent } from '@app/core/components/photo-dialog/photo-dialog.component';
import { DIALOG_WIDTH } from '@app/core/variables/constants';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tag-posts',
  templateUrl: './tag-posts.component.html',
  styleUrls: ['./tag-posts.component.scss']
})
export class TagPostsComponent implements OnInit {
  @Input() tag: Tag = null;

  constructor(
    private dialog: MatDialog
  ) {
  }

  onShowPhotoInDialog(postImageUrl: string, caption: string, likes: number, timestamp: number): void {
    this.dialog.open(PhotoDialogComponent, {
      maxWidth: DIALOG_WIDTH,
      data: {
        photoUrl: postImageUrl,
        caption: caption,
        likes: likes,
        timestamp: timestamp
      } as DialogData
    });
  }

  ngOnInit(): void {

  }

}
