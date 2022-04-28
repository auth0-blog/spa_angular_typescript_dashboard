import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ContentModule, ViewModule } from 'src/app/shared';

@NgModule({
  imports: [CommonModule, ContentModule, ViewModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
