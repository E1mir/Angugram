import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '@app/app.component';
import { MaterialDesignModule } from '@app/material-design/material-design.module';
import { MaterialTestComponent } from '@app/material-test/material-test.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialGridTestComponent } from './material-grid-test/material-grid-test.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InstagramInterceptorService } from '@app/core/interceptors/instagram-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MaterialTestComponent,
    NavbarComponent,
    MaterialGridTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule
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
