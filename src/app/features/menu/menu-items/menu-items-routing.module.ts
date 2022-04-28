import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuItemsComponent } from './menu-items.component';

const routes: Routes = [
  {
    path: '',
    component: MenuItemsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuItemsRoutingModule {}
