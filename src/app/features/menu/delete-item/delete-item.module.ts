import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteItemComponent } from './delete-item.component';
import { DeleteItemRoutingModule } from './delete-item-routing.module';
import { ViewModule, ContentModule, ButtonModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    ViewModule,
    ContentModule,
    ButtonModule,
    DeleteItemRoutingModule,
  ],
  declarations: [DeleteItemComponent],
})
export class DeleteItemModule {}
