import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatProgressBarModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressBarModule,
    MatInputModule,
    MatTooltipModule
  ]
})
export class MaterialDesignModule {
}
