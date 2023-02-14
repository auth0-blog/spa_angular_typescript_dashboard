import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuItemsComponent } from "./menu-items.component";
import { MenuItemsRoutingModule } from "./menu-items-routing.module";
import { ContentModule, ViewModule, GridModule } from "src/app/shared";
import { MenuItemCardModule } from "./menu-item-card/menu-item-card.module";

@NgModule({
  imports: [
    CommonModule,
    ContentModule,
    ViewModule,
    GridModule,
    MenuItemCardModule,
    MenuItemsRoutingModule,
  ],
  declarations: [MenuItemsComponent],
})
export class MenuItemsModule {}
