import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { MaterialTestComponent } from './material-test/material-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialTestComponent
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
