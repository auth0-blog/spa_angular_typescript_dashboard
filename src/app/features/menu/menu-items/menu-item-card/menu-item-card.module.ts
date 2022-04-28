import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemCardComponent } from './menu-item-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  declarations: [MenuItemCardComponent],
  exports: [MenuItemCardComponent],
})
export class MenuItemCardModule {}
