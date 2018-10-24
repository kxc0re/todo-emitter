import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeComponentRoutingModule } from './home-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [CommonModule, HomeComponentRoutingModule, ComponentsModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
