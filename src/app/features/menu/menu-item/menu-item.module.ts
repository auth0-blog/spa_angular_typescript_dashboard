import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuItemComponent } from "./menu-item.component";
import { MenuItemRoutingModule } from "./menu-item-routing.module";
import { ViewModule, ContentModule, ButtonModule } from "src/app/shared";

@NgModule({
  imports: [
    CommonModule,
    ViewModule,
    ContentModule,
    ButtonModule,
    MenuItemRoutingModule,
  ],
  declarations: [MenuItemComponent],
})
export class MenuItemModule {}
