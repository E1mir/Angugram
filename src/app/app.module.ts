import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '@app/app.component';
import { MaterialDesignModule } from '@app/material-design/material-design.module';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InstagramInterceptorService } from '@app/core/interceptors/instagram-interceptor.service';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { PreloaderComponent } from './core/components/preloader/preloader.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ShortenPipe } from './core/pipes/shorten.pipe';
import { UserPostsComponent } from './user/user-posts/user-posts.component';
import { NumberShortenPipe } from './core/pipes/number-shorten.pipe';
import { PhotoDialogComponent } from './photo-dialog/photo-dialog.component';
import { TimestampToDatePipe } from './core/pipes/timestamp-to-date.pipe';
import { TagComponent } from './tag/tag.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { TagPostsComponent } from './tag/tag-posts/tag-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    PreloaderComponent,
    HomeComponent,
    UserComponent,
    SearchComponent,
    ShortenPipe,
    UserPostsComponent,
    NumberShortenPipe,
    PhotoDialogComponent,
    TimestampToDatePipe,
    TagComponent,
    FooterComponent,
    TagPostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InstagramInterceptorService,
      multi: true
    }
  ],
  entryComponents: [
    PhotoDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
