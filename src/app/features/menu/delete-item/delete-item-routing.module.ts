import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DeleteItemComponent } from "./delete-item.component";

const routes: Routes = [
  {
    path: "",
    component: DeleteItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteItemRoutingModule {}
