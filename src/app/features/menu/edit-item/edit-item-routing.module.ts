import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditItemComponent } from "./edit-item.component";

const routes: Routes = [
  {
    path: "",
    component: EditItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditItemRoutingModule {}
