import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { InstagramService } from '@app/core/services/instagram.service';
import { Tag } from '@dt/interfaces/instagram';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit, OnDestroy {
  public tagName: string;
  public isDataLoaded = true;
  public tag: Tag = null;
  public errorMessage = null;

  private paramsSubscription: Subscription;
  private instaSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private instaService: InstagramService
  ) {
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.tagName = params['tag'];
        this.fetchTag();
      }
    );
  }

  private fetchTag(): void {
    this.isDataLoaded = false;
    this.instaSubscription = this.instaService.searchByTag(this.tagName).subscribe(
      (tag: Tag) => {
        this.tag = tag;
        this.isDataLoaded = true;
        this.errorMessage = null;
      },
      error => {
        this.isDataLoaded = true;
        this.tag = null;
        this.errorMessage = `Tag '#${this.tagName}' does not have posts!`;
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.instaSubscription.unsubscribe();
  }
}
