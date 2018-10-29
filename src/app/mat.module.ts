import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [MatListModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule],
  exports: [MatListModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule]
})
export class MatModule {}
