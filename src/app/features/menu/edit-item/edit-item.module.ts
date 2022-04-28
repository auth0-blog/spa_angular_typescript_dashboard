import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditItemComponent } from './edit-item.component';
import { EditItemRoutingModule } from './edit-item-routing.module';
import { MenuItemFormModule, ContentModule, ViewModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    MenuItemFormModule,
    ContentModule,
    ViewModule,
    EditItemRoutingModule,
  ],
  declarations: [EditItemComponent],
})
export class EditItemModule {}
