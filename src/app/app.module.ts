import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '@app/app.component';
import { MaterialDesignModule } from '@app/material-design/material-design.module';
import { MaterialTestComponent } from '@app/material-test/material-test.component';
import { HeaderComponent } from './header/header.component';
import { MaterialGridTestComponent } from './material-grid-test/material-grid-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialTestComponent,
    HeaderComponent,
    MaterialGridTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
