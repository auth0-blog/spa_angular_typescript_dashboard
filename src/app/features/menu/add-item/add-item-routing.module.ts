import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddItemComponent } from "./add-item.component";

const routes: Routes = [
  {
    path: "",
    component: AddItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemRoutingModule {}
