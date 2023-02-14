import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddItemComponent } from "./add-item.component";
import { AddItemRoutingModule } from "./add-item-routing.module";
import { MenuItemFormModule, ContentModule, ViewModule } from "src/app/shared";

@NgModule({
  imports: [
    CommonModule,
    MenuItemFormModule,
    ContentModule,
    ViewModule,
    AddItemRoutingModule,
  ],
  declarations: [AddItemComponent],
})
export class AddItemModule {}
