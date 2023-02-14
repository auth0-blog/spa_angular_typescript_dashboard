import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NavBarComponent } from "./nav-bar.component";
import { LogoModule } from "../logo";
import { ButtonModule } from "../button";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    LogoModule,
    ButtonModule,
  ],
  declarations: [NavBarComponent],
  exports: [NavBarComponent, FontAwesomeModule],
})
export class NavBarModule {}
