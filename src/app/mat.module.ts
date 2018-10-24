import { NgModule } from '@angular/core';
import { MatListModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [MatListModule, MatCheckboxModule, MatToolbarModule],
  exports: [MatListModule, MatCheckboxModule, MatToolbarModule]
})
export class MatModule {}
