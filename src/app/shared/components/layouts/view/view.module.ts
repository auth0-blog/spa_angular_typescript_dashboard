import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { ContentModule } from '../content';

@NgModule({
  imports: [CommonModule, ContentModule],
  declarations: [ViewComponent],
  exports: [ViewComponent],
})
export class ViewModule {}
