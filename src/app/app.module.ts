import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '@app/app.component';
import { MaterialDesignModule } from '@app/material-design/material-design.module';
import { NavbarComponent } from './navbar/navbar.component';
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
import { ValueFormatPipe } from './core/pipes/value-format.pipe';

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
    ValueFormatPipe
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
  bootstrap: [AppComponent]
})
export class AppModule {
}
