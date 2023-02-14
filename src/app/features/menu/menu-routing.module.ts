import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserRoleGuard, USER_ROLES } from "src/app/core";
import { MenuComponent } from "./menu.component";

const routes: Routes = [
  {
    path: "",
    component: MenuComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./menu-items/menu-items.module").then(
            (m) => m.MenuItemsModule
          ),
      },
      {
        path: "add",
        loadChildren: () =>
          import("./add-item/add-item.module").then((m) => m.AddItemModule),
        canActivate: [UserRoleGuard],
        data: { role: USER_ROLES.MENU_ADMIN },
      },
      {
        path: ":id",
        loadChildren: () =>
          import("./menu-item/menu-item.module").then((m) => m.MenuItemModule),
      },
      {
        path: ":id/edit",
        loadChildren: () =>
          import("./edit-item/edit-item.module").then((m) => m.EditItemModule),
        data: { role: USER_ROLES.MENU_ADMIN },
      },
      {
        path: ":id/delete",
        loadChildren: () =>
          import("./delete-item/delete-item.module").then(
            (m) => m.DeleteItemModule
          ),
        data: { role: USER_ROLES.MENU_ADMIN },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
